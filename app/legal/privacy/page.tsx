import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Vesper Desk.",
};

export default function PrivacyPage() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="content" className="flex-1 py-12 sm:py-16">
        <div className="shell max-w-2xl space-y-6">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-xs text-muted">Last updated: September 2026</p>
          </div>

          <div className="frost-card rounded-2xl p-6 sm:p-8 space-y-5 text-sm text-muted leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-medium text-paper">1. Data We Collect</h2>
              <p>
                When you create a Vesper web account, we store your email address and basic profile identifier. When you choose to connect streaming platforms (such as Kick), server-side authorization tokens are encrypted at rest using AES-256-GCM and stored securely.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-paper">2. Token Security</h2>
              <p>
                Platform tokens (access and refresh tokens) never reach your browser. All token exchanges, refreshes, and API calls occur strictly through protected server-side endpoints.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-paper">3. Third-Party Platforms</h2>
              <p>
                Connecting a platform authorizes Vesper to interact with that platform on your behalf in accordance with the requested scopes. You may disconnect any linked platform at any time from your Account page, which immediately revokes and removes stored tokens.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-paper">4. Contact & Inquiries</h2>
              <p>
                For questions regarding data privacy or account deletion, please open an issue or inquiry via our GitHub project repository.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
