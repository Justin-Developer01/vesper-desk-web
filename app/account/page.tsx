import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FrostAuthCard } from "@/components/account/frost-auth-card";
import { IdentityRow } from "@/components/account/identity-row";
import { ConnectedPlatforms } from "@/components/account/connected-platforms";
import { createClient } from "@/lib/supabase/server";
import {
  isKickOAuthConfigured,
  isSupabaseConfigured,
} from "@/lib/supabase/config";
import type { UserLinkedPlatform } from "@/types/account";

export const metadata: Metadata = {
  title: "Account",
  description: "Manage your Vesper Desk account and connected streaming platforms.",
};

interface AccountPageProps {
  searchParams: Promise<{
    error?: string;
    connected?: string;
    disconnected?: string;
  }>;
}

export default async function AccountPage(props: AccountPageProps) {
  const searchParams = await props.searchParams;
  const isConfigured = isSupabaseConfigured();
  const isKickConfigured = isKickOAuthConfigured();

  let user = null;
  let profile = null;
  let linkedPlatforms: UserLinkedPlatform[] = [];

  if (isConfigured) {
    const supabase = await createClient();
    if (supabase) {
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser();

      user = authUser;

      if (user) {
        // Fetch profile
        const { data: profileData } = await supabase
          .from("profiles")
          .select("id, email, display_name, created_at, updated_at")
          .eq("id", user.id)
          .maybeSingle();

        profile = profileData;

        // Fetch linked platforms via safe security-invoker view or table
        // Note: token ciphertext is revoked / omitted
        const { data: platformsData } = await supabase
          .from("user_linked_platforms")
          .select("id, user_id, platform, platform_user_id, platform_username, status, scopes, token_expires_at, last_error, created_at, updated_at")
          .eq("user_id", user.id);

        if (platformsData) {
          linkedPlatforms = platformsData as UserLinkedPlatform[];
        }
      }
    }
  }

  // Format error or notification banner if present
  let notification: { type: "info" | "error"; text: string } | null = null;
  if (searchParams.connected) {
    notification = {
      type: "info",
      text: `${searchParams.connected.toUpperCase()} account connected successfully.`,
    };
  } else if (searchParams.disconnected) {
    notification = {
      type: "info",
      text: `${searchParams.disconnected.toUpperCase()} account disconnected.`,
    };
  } else if (searchParams.error) {
    const errorMap: Record<string, string> = {
      service_role_required:
        "Supabase service role key is required for platform token security.",
      kick_user_id_missing:
        "Kick account details could not be verified. Please try again.",
      invalid_platform:
        "Invalid platform requested.",
      kick_not_configured:
        "Kick OAuth is not yet configured on this deployment.",
      encryption_not_configured:
        "Token encryption is not configured on this server.",
      supabase_not_configured: "Supabase project is not configured.",
      unauthorized: "Please sign in to manage connected platforms.",
      token_exchange_failed: "Kick authentication code exchange failed. Please try again.",
      invalid_oauth_state: "OAuth state mismatch. Please restart connection.",
    };
    notification = {
      type: "error",
      text: errorMap[searchParams.error] || `Authentication notice: ${searchParams.error}`,
    };
  }

  return (
    <div id="top" className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="content" className="flex-1 py-12 sm:py-16">
        <div className="shell max-w-xl">
          {notification && (
            <div
              className={`mb-6 rounded-xl px-4 py-3 text-xs leading-relaxed ${
                notification.type === "info"
                  ? "border border-[#7ec8d8]/40 bg-[#7ec8d8]/10 text-paper"
                  : "border border-[#e8a598]/40 bg-[#e8a598]/10 text-[#e8a598]"
              }`}
            >
              {notification.text}
            </div>
          )}

          {!user ? (
            // Signed-out: frost sign-in / sign-up card
            <div className="space-y-6">
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                  Account
                </h1>
                <p className="mt-2 text-sm text-muted">
                  Sign in to your Vesper account to link streaming platforms and manage your desk preferences.
                </p>
              </div>
              <FrostAuthCard isConfigured={isConfigured} />
            </div>
          ) : (
            // Signed-in: identity row + Connected platforms section below
            <div className="frost-card rounded-2xl p-6 sm:p-8 space-y-6">
              <IdentityRow
                email={user.email ?? null}
                displayName={
                  profile?.display_name ??
                  user.user_metadata?.display_name ??
                  null
                }
              />
              <ConnectedPlatforms
                linkedPlatforms={linkedPlatforms}
                isKickConfigured={isKickConfigured}
              />
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
