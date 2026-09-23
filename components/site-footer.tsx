import { contactUrl, productName, publisherName, siteRepoUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex max-w-xl flex-col gap-2">
          <p className="m-0 font-medium text-paper">{productName}</p>
          <p className="m-0 text-sm leading-relaxed text-muted">
            {publisherName}. A Windows desktop overlay for several Twitch streams. Twitch is a
            trademark of its owner. Vesper Desk is not affiliated with or endorsed by Twitch.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a href={siteRepoUrl} className="text-muted no-underline hover:text-paper" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={contactUrl} className="text-muted no-underline hover:text-paper" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
          <a href="#download" className="text-muted no-underline hover:text-paper">
            Download
          </a>
        </nav>
      </div>
    </footer>
  );
}
