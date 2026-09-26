import { DownloadLink } from "@/components/download-link";
import { productName, siteRepoUrl } from "@/lib/site";

const links = [
  { href: "#features", label: "Features" },
  { href: "#docs", label: "Docs" },
];

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-30 border-b border-line bg-ink/85">
      <div className="shell flex flex-wrap items-center gap-x-6 gap-y-3 py-3">
        <a href="#top" className="inline-flex items-center gap-2 text-paper no-underline">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-glow shadow-[0_0_10px_rgba(142,207,255,0.85)]"
          />
          <span className="text-[0.95rem] font-medium tracking-tight">{productName}</span>
        </a>
        <nav aria-label="Page" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
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
        <DownloadLink className="ml-auto px-4 text-sm" />
      </div>
    </header>
  );
}
