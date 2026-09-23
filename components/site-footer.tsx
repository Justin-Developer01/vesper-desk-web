import { LogoMark } from "@/components/logo-mark";
import { desktopRepoUrl, productName, publisherName, tagline } from "@/lib/site";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#download", label: "Download" },
  { href: "#faq", label: "FAQ" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <a href="#top" className="inline-flex items-center gap-2.5 text-paper no-underline">
            <LogoMark className="size-7" />
            <span className="font-semibold tracking-tight">{productName}</span>
          </a>
          <p className="mt-3 mb-0 text-sm text-faint">{tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
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
      </div>
      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-6 text-xs leading-relaxed text-faint sm:flex-row sm:justify-between">
          <p className="m-0">
            © {new Date().getFullYear()} {publisherName}. All rights reserved.
          </p>
          <p className="m-0">
            Twitch is a trademark of Twitch Interactive, Inc. {productName} is not affiliated with
            Twitch.
          </p>
        </div>
      </div>
    </footer>
  );
}
