import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { createServiceClient } from "@/lib/supabase/service";
import {
  KICK_CLIENT_ID,
  KICK_CLIENT_SECRET,
  KICK_REDIRECT_URI,
  isKickOAuthConfigured,
  isTokenEncryptionConfigured,
} from "@/lib/supabase/config";
import { encryptToken } from "@/lib/crypto";

const KICK_TOKEN_URL = "https://id.kick.com/oauth/token";
const KICK_USER_API_URL = "https://api.kick.com/public/v1/users";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const accountUrl = new URL("/account", request.url);

  const code = requestUrl.searchParams.get("code");
  const state = requestUrl.searchParams.get("state");
  const oauthError = requestUrl.searchParams.get("error");
  const oauthErrorDesc = requestUrl.searchParams.get("error_description");

  if (oauthError) {
    accountUrl.searchParams.set(
      "error",
      oauthErrorDesc || oauthError || "kick_oauth_declined"
    );
    return NextResponse.redirect(accountUrl);
  }

  if (!code || !state) {
    accountUrl.searchParams.set("error", "missing_code_or_state");
    return NextResponse.redirect(accountUrl);
  }

  // 1. Verify user session
  const supabase = await createClient();
  if (!supabase) {
    accountUrl.searchParams.set("error", "supabase_not_configured");
    return NextResponse.redirect(accountUrl);
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    accountUrl.searchParams.set("error", "unauthorized");
    return NextResponse.redirect(accountUrl);
  }

  // 2. Validate state & retrieve code_verifier from cookies
  const cookieStore = await cookies();
  const storedState = cookieStore.get("kick_oauth_state")?.value;
  const codeVerifier = cookieStore.get("kick_code_verifier")?.value;

  // Clear PKCE cookies immediately
  cookieStore.delete("kick_oauth_state");
  cookieStore.delete("kick_code_verifier");

  if (!storedState || storedState !== state || !codeVerifier) {
    accountUrl.searchParams.set("error", "invalid_oauth_state");
    return NextResponse.redirect(accountUrl);
  }

  if (!isKickOAuthConfigured() || !isTokenEncryptionConfigured()) {
    accountUrl.searchParams.set("error", "server_misconfigured");
    return NextResponse.redirect(accountUrl);
  }

  const redirectUri =
    KICK_REDIRECT_URI || `${requestUrl.origin}/auth/kick/callback`;

  try {
    // 3. Exchange authorization code for tokens
    const tokenRes = await fetch(KICK_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: KICK_CLIENT_ID,
        client_secret: KICK_CLIENT_SECRET,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
        code,
      }),
    });

    if (!tokenRes.ok) {
      const errBody = await tokenRes.text().catch(() => "");
      console.error("Kick token exchange error:", tokenRes.status, errBody);
      accountUrl.searchParams.set("error", "token_exchange_failed");
      return NextResponse.redirect(accountUrl);
    }

    const tokenData = (await tokenRes.json()) as {
      access_token: string;
      token_type?: string;
      expires_in?: number;
      refresh_token?: string;
      scope?: string;
    };

    if (!tokenData.access_token) {
      accountUrl.searchParams.set("error", "missing_access_token");
      return NextResponse.redirect(accountUrl);
    }

    // 4. Fetch Kick user profile to get platform_user_id & platform_username
    let platformUserId = "";
    let platformUsername: string | null = null;

    try {
      const userRes = await fetch(KICK_USER_API_URL, {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
          Accept: "application/json",
        },
      });

      if (userRes.ok) {
        const kickUserData = await userRes.json();
        // Kick API response format commonly has data[0] or user object
        const u = kickUserData.data?.[0] || kickUserData.data || kickUserData;
        platformUserId = String(u.user_id || u.id || "");
        platformUsername = u.username || u.name || null;
      }
    } catch (e) {
      console.warn("Could not fetch Kick user details:", e);
    }

    // If platformUserId was not returned by API, fall back to hash or unknown
    if (!platformUserId) {
      platformUserId = `kick_${Date.now()}`;
    }

    // 5. Encrypt tokens at rest (tokens never reach browser)
    const accessTokenCiphertext = encryptToken(tokenData.access_token);
    const refreshTokenCiphertext = tokenData.refresh_token
      ? encryptToken(tokenData.refresh_token)
      : null;

    const expiresAt = tokenData.expires_in
      ? new Date(Date.now() + tokenData.expires_in * 1000).toISOString()
      : null;

    const scopes = tokenData.scope ? tokenData.scope.split(" ") : [];

    // 6. Store in linked_platforms using service client (or fallback server client)
    const serviceClient = createServiceClient();
    const dbClient = serviceClient || supabase;

    const { error: upsertError } = await dbClient
      .from("linked_platforms")
      .upsert(
        {
          user_id: user.id,
          platform: "kick",
          platform_user_id: platformUserId,
          platform_username: platformUsername,
          status: "connected",
          scopes,
          access_token_ciphertext: accessTokenCiphertext,
          refresh_token_ciphertext: refreshTokenCiphertext,
          token_expires_at: expiresAt,
          last_error: null,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id,platform" }
      );

    if (upsertError) {
      console.error("Error storing linked platform:", upsertError);
      accountUrl.searchParams.set("error", "db_save_failed");
      return NextResponse.redirect(accountUrl);
    }

    accountUrl.searchParams.set("connected", "kick");
    return NextResponse.redirect(accountUrl);
  } catch (err) {
    console.error("Kick callback exception:", err);
    accountUrl.searchParams.set("error", "callback_exception");
    return NextResponse.redirect(accountUrl);
  }
}
