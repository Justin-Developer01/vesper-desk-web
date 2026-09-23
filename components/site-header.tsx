import { DownloadLink } from "@/components/download-link";
import { productName, siteRepoUrl } from "@/lib/site";

const links = [
  { href: "#features", label: "Features" },
  { href: "#modes", label: "Modes" },
  { href: "#notes", label: "Notes" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink/75 backdrop-blur-xl">
      <div className="shell flex flex-wrap items-center gap-x-6 gap-y-3 py-3">
        <a href="#top" className="inline-flex items-center gap-2 text-paper no-underline">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-lamp shadow-[0_0_0_4px_rgba(228,196,154,0.14)]"
          />
          <span className="text-[0.95rem] font-medium tracking-tight">{productName}</span>
        </a>
        <nav aria-label="Page" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-muted no-underline hover:text-paper">
              {link.label}
            </a>
          ))}
          <a
            href={siteRepoUrl}
            className="text-muted no-underline hover:text-paper"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
        <DownloadLink className="btn btn-primary ml-auto px-4 text-sm" />
      </div>
    </header>
  );
}
