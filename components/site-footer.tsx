import Link from "next/link";
import { productName, publisherName, siteRepoUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0 text-sm text-muted">
          © 2026 {publisherName}. {productName} is not affiliated with Twitch, Kick, or YouTube.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-5 text-sm">
          <a
            href={siteRepoUrl}
            className="text-muted no-underline hover:text-paper"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link href="/#docs" className="text-muted no-underline hover:text-paper">
            Docs
          </Link>
          <Link href="/legal/terms" className="text-muted no-underline hover:text-paper">
            Terms
          </Link>
          <Link href="/legal/privacy" className="text-muted no-underline hover:text-paper">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
