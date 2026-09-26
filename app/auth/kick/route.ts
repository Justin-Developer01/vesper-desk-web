import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "node:crypto";
import { createClient } from "@/lib/supabase/server";
import {
  KICK_CLIENT_ID,
  KICK_REDIRECT_URI,
  isKickOAuthConfigured,
  isTokenEncryptionConfigured,
} from "@/lib/supabase/config";

const KICK_AUTH_URL = "https://id.kick.com/oauth/authorize";
// Kick OAuth standard scopes for reading user info
const DEFAULT_SCOPES = "user:read channel:read";

function base64UrlEncode(buffer: Buffer): string {
  return buffer
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function sha256(str: string): Buffer {
  return crypto.createHash("sha256").update(str).digest();
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const accountUrl = new URL("/account", request.url);

  // 1. Verify user is signed in to Vesper Supabase account
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

  // 2. Check if Kick OAuth is configured
  if (!isKickOAuthConfigured()) {
    accountUrl.searchParams.set("error", "kick_not_configured");
    return NextResponse.redirect(accountUrl);
  }

  // 3. Check token encryption key
  if (!isTokenEncryptionConfigured()) {
    accountUrl.searchParams.set("error", "encryption_not_configured");
    return NextResponse.redirect(accountUrl);
  }

  // 4. Generate PKCE code verifier and code challenge
  const codeVerifier = base64UrlEncode(crypto.randomBytes(32));
  const codeChallenge = base64UrlEncode(sha256(codeVerifier));
  const state = base64UrlEncode(crypto.randomBytes(24));

  // Determine redirect URI: use configured or fall back to /auth/kick/callback on current origin
  const redirectUri =
    KICK_REDIRECT_URI || `${requestUrl.origin}/auth/kick/callback`;

  // Store codeVerifier and state in secure HTTP-only cookies
  const cookieStore = await cookies();
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 10, // 10 minutes
  };

  cookieStore.set("kick_oauth_state", state, cookieOptions);
  cookieStore.set("kick_code_verifier", codeVerifier, cookieOptions);

  // 5. Construct authorization URL
  const authParams = new URLSearchParams({
    client_id: KICK_CLIENT_ID,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: DEFAULT_SCOPES,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
    state,
  });

  const targetUrl = `${KICK_AUTH_URL}?${authParams.toString()}`;
  return NextResponse.redirect(targetUrl);
}
