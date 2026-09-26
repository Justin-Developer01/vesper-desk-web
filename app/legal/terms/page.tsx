import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Vesper Desk.",
};

export default function TermsPage() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="content" className="flex-1 py-12 sm:py-16">
        <div className="shell max-w-2xl space-y-6">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
              Terms of Service
            </h1>
            <p className="mt-2 text-xs text-muted">Last updated: September 2026</p>
          </div>

          <div className="frost-card rounded-2xl p-6 sm:p-8 space-y-5 text-sm text-muted leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-medium text-paper">1. Overview</h2>
              <p>
                Vesper Desk is a desktop overlay application for personal multi-stream viewing across Twitch, Kick, and YouTube. By using the Vesper Desk website and software, you agree to these Terms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-paper">2. Accounts and Authentication</h2>
              <p>
                Vesper web accounts allow you to link third-party platform accounts (such as Kick) for enhanced viewing features and chat interaction. You are responsible for maintaining the confidentiality of your account credentials.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-paper">3. Third-Party Services</h2>
              <p>
                Vesper Desk is an independent application and is not affiliated with, endorsed by, or sponsored by Twitch, Kick, YouTube, or Google. Your use of third-party platforms remains subject to their respective terms and community guidelines.
              </p>
              <p>
                Vesper does not guarantee eligibility for platform reward programs, including Twitch Drops. Channel points, presence credit, and similar benefits are controlled by each platform and may be limited or unavailable when you watch through Vesper.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-paper">4. Disclaimer & Limitations</h2>
              <p>
                The software is provided &quot;as is&quot;, without warranty of any kind. Under no circumstances shall Vesper Desk or its contributors be liable for any claim, damages, or other liability arising from the use of the software.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
