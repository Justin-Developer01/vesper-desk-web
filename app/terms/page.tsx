import type { Metadata } from "next";
import Link from "next/link";
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
        <div className="shell max-w-3xl space-y-6">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
              Terms of Service
            </h1>
            <p className="mt-2 text-xs text-muted">
              Vesper Desk &middot; Effective Date: September 26, 2026 &middot; Last Updated: September 26, 2026
            </p>
          </div>

          <div className="frost-card rounded-2xl p-6 sm:p-8 space-y-8 text-sm text-muted leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-base font-medium text-paper">1. What Vesper Is</h2>
              <p>
                Vesper Desk is a Windows <strong className="font-medium text-paper">multi-stream desk</strong> application that lets you view live streams from multiple platforms (Twitch, Kick, YouTube, and others) in a single window. You can optionally create a Vesper account at vesperdesk.app to sign in and link platforms.
              </p>
              <p>
                Vesper is a viewer and management tool. We do not host, create, or store live stream content. We do not stream on your behalf. We provide an interface to watch streams and manage linked platform connections you choose to connect.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-base font-medium text-paper">2. Accounts &amp; Linked Platforms</h2>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Creating an Account</h3>
                <p>
                  Web account features use <strong className="font-medium text-paper">email magic-link</strong> sign-in (passwordless). You are responsible for keeping access to your email account secure.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Linking Platforms</h3>
                <p>
                  When you link a Twitch, Kick, YouTube, or other platform account to Vesper:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>You authorize Vesper to access specific information from that platform via their official API</li>
                  <li>You remain responsible for your accounts on those platforms</li>
                  <li>You remain bound by each platform&apos;s terms of service</li>
                  <li>Vesper acts as a viewer application; we do not control the platforms</li>
                  <li>To revoke Vesper&apos;s access, disconnect it from your Vesper Account page and/or the platform&apos;s app settings</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">How We Handle Auth Tokens</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>OAuth tokens from platforms are encrypted server-side and stored securely on our servers</li>
                  <li>Tokens are <strong className="font-medium text-paper">never</strong> sent to your browser or stored in browser storage</li>
                  <li>Only our secure backend can decrypt and use tokens to fetch data from platforms</li>
                  <li>When you revoke access, tokens are permanently deleted</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Account Deletion</h3>
                <p>
                  To delete your Vesper account, email <a href="mailto:support@vesperdesk.app" className="text-accent underline underline-offset-2 hover:text-paper">support@vesperdesk.app</a> from the address on the account (self-serve delete UI may be added later). Deletion:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Removes your profile, linked accounts, and related account data from our servers within 30 days</li>
                  <li>Does NOT automatically disconnect you from linked platforms; you should also revoke access in each platform&apos;s settings</li>
                  <li>Does NOT delete data stored on linked platforms (Twitch, Kick, YouTube, etc. keep their own records)</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-base font-medium text-paper">3. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Violate any laws or regulations</li>
                <li>Infringe on anyone&apos;s intellectual property, privacy, or other rights</li>
                <li>Impersonate anyone or misrepresent your identity</li>
                <li>Violate the terms of service of any linked platform</li>
                <li>Spam, harass, bully, or defame anyone</li>
                <li>Attempt unauthorized access to Vesper or linked platforms</li>
                <li>Use bots or automated tools to bypass platform restrictions</li>
                <li>Use Vesper for illegal activity</li>
              </ul>
              <p>
                We reserve the right to investigate violations and suspend or terminate your account without notice.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-base font-medium text-paper">4. Third-Party Platforms &amp; Reward Programs</h2>
              <p>
                Vesper integrates with third-party platforms (Twitch, Kick, YouTube, etc.). We are not affiliated with, endorsed by, or sponsored by those platforms. We are not responsible for their availability, accuracy, or conduct. Your use of linked accounts is governed by their respective terms of service.
              </p>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Platform Rewards Disclaimer</h3>
                <p className="font-medium text-paper">
                  Vesper does not guarantee eligibility for platform reward programs, including Twitch Drops. Channel points, presence credit, and similar benefits are controlled by each platform and may be limited or unavailable when you watch through Vesper.
                </p>
                <p>
                  We make no warranties about whether watching through Vesper counts toward drops, points, loyalty rewards, or other platform-specific benefits. Each platform sets its own policies, and those policies may change or exclude third-party viewing applications.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-base font-medium text-paper">5. Disclaimer of Warranties &amp; Limitation of Liability</h2>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Disclaimer</h3>
                <p>
                  Vesper is provided &quot;as-is&quot; and &quot;as-available.&quot; We make no warranties, express or implied. We do not warrant that:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>The app will be uninterrupted, secure, or error-free</li>
                  <li>Defects will be fixed</li>
                  <li>The app will meet your expectations</li>
                  <li>Linked platforms will remain available or unchanged</li>
                  <li>Reward programs will credit your account for watching through Vesper</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Limitation of Liability</h3>
                <p>
                  To the fullest extent the law allows, Vesper is not liable for any indirect, consequential, incidental, or punitive damages, including lost profits, data loss, business interruption, or lost goodwill.
                </p>
                <p>
                  Our total liability for any claim is limited to the amount you paid us in the past 12 months (or $0 if you haven&apos;t paid).
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Third-Party Content</h3>
                <p>
                  We are not responsible for content, accuracy, or conduct on Twitch, Kick, YouTube, or any linked platform. Disputes with those services are between you and the platform.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-base font-medium text-paper">6. Suspension &amp; Termination</h2>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Suspension</h3>
                <p>We may suspend your access immediately and without notice if:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>You violate these Terms</li>
                  <li>You engage in fraudulent or illegal activity</li>
                  <li>Continued access poses a security risk</li>
                  <li>A linked platform requests removal</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Termination</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    You can request account deletion anytime via{" "}
                    <a href="mailto:support@vesperdesk.app" className="text-accent underline underline-offset-2 hover:text-paper">
                      support@vesperdesk.app
                    </a>
                  </li>
                  <li>We may terminate your account or the service itself anytime, with or without cause, with 30 days&apos; notice (except for abuse or legal compliance)</li>
                  <li>After termination, your right to use Vesper ends immediately</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-base font-medium text-paper">7. Changes to These Terms</h2>
              <p>
                We may update these Terms anytime. Changes take effect upon posting at{" "}
                <Link href="/terms" className="text-accent underline underline-offset-2 hover:text-paper">
                  https://www.vesperdesk.app/terms
                </Link>{" "}
                or email notice. Continued use means you accept the changes.
              </p>
              <p>
                We&apos;ll email you about material changes when practical.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-base font-medium text-paper">8. Contact</h2>
              <p>For questions, concerns, or legal notices:</p>
              <ul className="list-none pl-0 space-y-1">
                <li><strong className="font-medium text-paper">Operator:</strong> Justin Farmer, operating as Vesper Desk (sole proprietor; Kansas)</li>
                <li>
                  <strong className="font-medium text-paper">Email:</strong>{" "}
                  <a href="mailto:support@vesperdesk.app" className="text-accent underline underline-offset-2 hover:text-paper">
                    support@vesperdesk.app
                  </a>
                </li>
                <li><strong className="font-medium text-paper">Response Time:</strong> We aim to reply within 30 business days.</li>
              </ul>
            </section>

            {/* Additional Provisions */}
            <section className="space-y-4">
              <h2 className="text-base font-medium text-paper">Additional Provisions</h2>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Governing Law</h3>
                <p>
                  These Terms are governed by the laws of the State of Kansas, without regard to conflicts of law. Any legal action must be brought in state or federal courts located in Kansas.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Severability</h3>
                <p>
                  If any part of these Terms is unenforceable, we&apos;ll modify it to the minimum extent needed, or remove it. The rest remains in full force.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Entire Agreement</h3>
                <p>
                  These Terms are the complete agreement between you and Vesper about the service.
                </p>
              </div>
            </section>

            <div className="border-t border-line pt-4 text-xs text-muted">
              Last Updated: September 26, 2026
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
