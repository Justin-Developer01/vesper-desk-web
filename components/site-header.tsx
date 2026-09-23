import { Download } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { desktopRepoUrl, productName, windowsDownloadUrl } from "@/lib/site";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink/80 backdrop-blur-xl">
      <div className="shell flex h-16 items-center gap-8">
        <a href="#top" className="inline-flex items-center gap-2.5 text-paper no-underline">
          <LogoMark className="size-7" />
          <span className="text-[0.98rem] font-semibold tracking-tight">{productName}</span>
        </a>
        <nav aria-label="Page" className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-muted no-underline hover:text-paper">
              {link.label}
            </a>
          ))}
          {desktopRepoUrl && (
            <a href={desktopRepoUrl} className="text-muted no-underline hover:text-paper">
              GitHub
            </a>
          )}
        </nav>
        <div className="ml-auto">
          {windowsDownloadUrl ? (
            <a href={windowsDownloadUrl} className="btn btn-primary btn-sm">
              <Download aria-hidden="true" className="size-4" />
              Download
            </a>
          ) : (
            <span className="status-chip">Coming soon</span>
          )}
        </div>
      </div>
    </header>
  );
}
