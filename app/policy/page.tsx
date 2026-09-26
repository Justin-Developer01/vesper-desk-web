import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Vesper Desk.",
};

export default function PolicyPage() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="content" className="flex-1 py-12 sm:py-16">
        <div className="shell max-w-3xl space-y-6">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-xs text-muted">
              Vesper Desk &middot; Effective Date: September 26, 2026 &middot; Last Updated: September 26, 2026
            </p>
          </div>

          <div className="frost-card rounded-2xl p-6 sm:p-8 space-y-8 text-sm text-muted leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-base font-medium text-paper">1. What We Collect</h2>
              <p>When you use Vesper, we may collect:</p>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">If You Create an Account</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Email address (for magic-link login and account recovery)</li>
                  <li>Account creation and last-login dates</li>
                  <li>Optional profile fields you choose to set later (for example display name), when that feature exists</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">When You Link Platforms</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Your user ID from each linked platform (Twitch, Kick, YouTube, etc.)</li>
                  <li>Your username on each platform</li>
                  <li>Connection status (linked or disconnected)</li>
                  <li>Platform OAuth tokens (encrypted and stored server-side only; never in your browser or sent in plaintext)</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">From Your Usage</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Login events and IP addresses (for security), as provided by our auth and hosting providers</li>
                  <li>Basic server logs needed to operate and diagnose the website</li>
                </ul>
              </div>

              <p>
                We do <strong className="font-medium text-paper">not</strong> currently run a separate product analytics or crash-reporting program in the desktop app. If we add optional analytics or crash reports later, we will update this Policy and ask for consent or provide an in-app opt-out before collecting that data.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-base font-medium text-paper">2. What We Do NOT Collect</h2>
              <p>
                We explicitly <strong className="font-medium text-paper">do not</strong> collect or store:
              </p>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Live Stream Content</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>We do not download, cache, or record any video, audio, or chat from streams</li>
                  <li>We do not store stream transcripts or VOD data</li>
                  <li>We do not monitor what you watch as a content archive; we provide a viewing interface</li>
                  <li>Streams are served directly from Twitch, Kick, YouTube &mdash; not through our servers as a CDN for stream media</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Tokens in Your Browser</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>OAuth tokens are <strong className="font-medium text-paper">never</strong> stored in browser localStorage, sessionStorage, or cookies for platform linking</li>
                  <li>Tokens are encrypted and stored only on our secure backend</li>
                  <li>Your browser never sees the platform token; only our server can decrypt and use it</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Personal Files</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>We do not access, scan, or store files from your computer</li>
                  <li>We do not monitor your system processes or file system</li>
                  <li>We do not capture your screen without your explicit consent (screen sharing, if added later, will require an explicit picker)</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Sensitive Data</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>We do not intentionally collect special-category data such as racial or ethnic origin, political beliefs, religious affiliation, health info, biometric data, or sexual orientation</li>
                  <li>We do not track your activity on other websites or apps outside Vesper</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Children&apos;s Data</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>We do not intentionally collect data from children under 13</li>
                  <li>See Section 6</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-base font-medium text-paper">3. How We Use Your Information</h2>
              <p>We use what we collect for:</p>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Operating the Service</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Authenticate your login (magic link)</li>
                  <li>Keep account and linked-platform state available</li>
                  <li>Connect to platforms and fetch data you request</li>
                  <li>Remember preferences stored with your account when those features exist</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Communication</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Send login magic links</li>
                  <li>
                    Respond to your support questions at{" "}
                    <a href="mailto:support@vesperdesk.app" className="text-accent underline underline-offset-2 hover:text-paper">
                      support@vesperdesk.app
                    </a>
                  </li>
                  <li>Alert you to material changes to this Policy or the Terms when practical</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Improvement &amp; Fixes</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Fix bugs and service issues</li>
                  <li>Improve performance and stability of the website and APIs</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Security</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Detect and prevent fraud or abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-base font-medium text-paper">4. Data Processors &amp; Third Parties</h2>
              <p>We use trusted service providers to run Vesper:</p>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Vercel</h3>
                <p>Hosts the Vesper web application (vesperdesk.app) and backend API.</p>
                <p>
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2 hover:text-paper"
                  >
                    https://vercel.com/legal/privacy-policy
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Supabase</h3>
                <p>Stores your account data, encrypted tokens, and related database records; provides authentication infrastructure.</p>
                <p>
                  <a
                    href="https://supabase.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2 hover:text-paper"
                  >
                    https://supabase.com/privacy
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Linked Platforms</h3>
                <p>When you link Twitch, Kick, YouTube, or another platform:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>That platform&apos;s privacy policy applies to their data</li>
                  <li>We exchange authentication through their official OAuth flow</li>
                  <li>They control what data they share with us and what they collect on their side</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Email Delivery</h3>
                <p>
                  Magic-link and transactional email may be sent through Supabase Auth and/or a transactional email provider we configure (for example Resend) for production delivery.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-base font-medium text-paper">5. Data Retention &amp; Deletion</h2>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">How Long We Keep Data</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-line">
                    <thead>
                      <tr className="border-b border-line bg-ink-raised/50">
                        <th className="p-2.5 font-medium text-paper">Data Type</th>
                        <th className="p-2.5 font-medium text-paper">Retention</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      <tr>
                        <td className="p-2.5 text-paper">Account credentials / email</td>
                        <td className="p-2.5">Until you delete your account</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 text-paper">Linked platform info</td>
                        <td className="p-2.5">Until you disconnect or delete account</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 text-paper">Encrypted tokens</td>
                        <td className="p-2.5">Until you revoke access or disconnect</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 text-paper">Login / server logs</td>
                        <td className="p-2.5">Per provider defaults (typically up to ~90 days)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 text-paper">Support emails</td>
                        <td className="p-2.5">About 1 year after the issue is resolved</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Deleting Your Account</h3>
                <p>
                  Email <a href="mailto:support@vesperdesk.app" className="text-accent underline underline-offset-2 hover:text-paper">support@vesperdesk.app</a> from your account email and ask us to delete the account. We will remove your data from our servers within 30 days.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">What Happens When You Delete</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Your account profile is permanently removed</li>
                  <li>Linked platform info is deleted</li>
                  <li>Encrypted tokens are securely destroyed</li>
                  <li>Linked platforms keep their own records (contact them to request deletion there)</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Data Portability</h3>
                <p>
                  You may request a copy of your Vesper account data (account email, linked platforms list, and related profile fields we store) by emailing <a href="mailto:support@vesperdesk.app" className="text-accent underline underline-offset-2 hover:text-paper">support@vesperdesk.app</a>.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-base font-medium text-paper">6. Children&apos;s Privacy</h2>
              <p>
                Vesper is not intended for children under 13. If we learn that a child under 13 created an account, we will delete it and associated data.
              </p>
              <p>
                <strong className="font-medium text-paper">Parents/Guardians:</strong> If you believe a child has created a Vesper account, contact us at{" "}
                <a href="mailto:support@vesperdesk.app" className="text-accent underline underline-offset-2 hover:text-paper">
                  support@vesperdesk.app
                </a>.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-base font-medium text-paper">7. Your Rights &amp; How to Contact Us</h2>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Your Privacy Rights</h3>
                <p>Depending on where you live, you may have the right to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="font-medium text-paper">Access:</strong> Request a copy of your data</li>
                  <li><strong className="font-medium text-paper">Correct:</strong> Fix inaccurate information</li>
                  <li><strong className="font-medium text-paper">Delete:</strong> Request deletion of your account and data</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">How to Exercise Your Rights</h3>
                <p>Email <a href="mailto:support@vesperdesk.app" className="text-accent underline underline-offset-2 hover:text-paper">support@vesperdesk.app</a> with:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Your name and account email</li>
                  <li>What you&apos;re requesting (access, deletion, correction, etc.)</li>
                  <li>Any supporting details</li>
                </ul>
                <p>
                  <strong className="font-medium text-paper">Response Time:</strong> We aim to reply within 30 days.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Operator</h3>
                <p>Justin Farmer, operating as Vesper Desk (sole proprietor; Kansas)</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Marketing Communications</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>We do not send promotional emails unless you opt in</li>
                  <li>Unsubscribe anytime from any promotional email we send (transactional auth mail is required for login)</li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-base font-medium text-paper">8. Additional Info</h2>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Security</h3>
                <p>
                  We use encryption and industry-standard security measures to protect your data. No internet service is 100% secure. We can&apos;t guarantee absolute protection but are committed to keeping your data safe.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">International Users</h3>
                <p>
                  Vesper operates with infrastructure that may process data in the United States and other countries. By using Vesper, you understand your information may be transferred and processed in those locations. We take reasonable steps to protect your information in transit and at rest.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-paper">Updates to This Policy</h3>
                <p>
                  We may update this Privacy Policy to reflect changes in our practices, technology, or the law. We&apos;ll notify you of material changes via email or a notice on the service when practical. Continued use means you accept the changes.
                </p>
              </div>
            </section>

            <div className="space-y-2 border-t border-line pt-4">
              <h3 className="text-sm font-medium text-paper">Questions?</h3>
              <ul className="list-none pl-0 space-y-1">
                <li>
                  <strong className="font-medium text-paper">Email:</strong>{" "}
                  <a href="mailto:support@vesperdesk.app" className="text-accent underline underline-offset-2 hover:text-paper">
                    support@vesperdesk.app
                  </a>
                </li>
                <li>
                  <strong className="font-medium text-paper">Policy URL:</strong>{" "}
                  <Link href="/policy" className="text-accent underline underline-offset-2 hover:text-paper">
                    https://www.vesperdesk.app/policy
                  </Link>
                </li>
                <li><strong className="font-medium text-paper">Response Time:</strong> We aim to reply within 30 days.</li>
              </ul>
              <div className="pt-2 text-xs text-muted">
                Last Updated: September 26, 2026
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
