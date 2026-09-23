import { ArrowRight, Download } from "lucide-react";
import { HeroDesk } from "@/components/hero-desk";
import { details, tagline, windowsDownloadUrl } from "@/lib/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="shell pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="flex flex-col items-center text-center">
        <span className="status-chip">
          {windowsDownloadUrl ? "Free for Windows 10 and 11" : "Coming soon to Windows"}
        </span>
        <h1
          id="hero-title"
          className="mt-7 mb-0 max-w-4xl text-[clamp(2.6rem,7vw,5rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-balance text-paper"
        >
          {tagline}
        </h1>
        <p className="mt-6 mb-0 max-w-2xl text-lg leading-relaxed text-pretty text-muted sm:text-xl">
          Vesper Desk is a Windows app for watching several Twitch streams at once. Chat makes
          room instead of covering the picture, and Focus mode leaves nothing but a thin bar.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {windowsDownloadUrl ? (
            <a href={windowsDownloadUrl} className="btn btn-primary">
              <Download aria-hidden="true" className="size-[1.1rem]" />
              Download for Windows
            </a>
          ) : (
            <a href="#features" className="btn btn-primary">
              See the features
              <ArrowRight aria-hidden="true" className="size-[1.1rem]" />
            </a>
          )}
          <a href="#how-it-works" className="btn btn-ghost">
            How it works
          </a>
        </div>
        <ul className="mt-8 flex list-none flex-wrap justify-center gap-x-6 gap-y-2 p-0 text-sm text-faint">
          {["Free", ...details.slice(0, 2)].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-14 sm:mt-16">
        <HeroDesk />
      </div>
    </section>
  );
}
