import { Check, Download, Info } from "lucide-react";
import { details, windowsDownloadUrl } from "@/lib/site";

export function DownloadSection() {
  return (
    <section id="download" aria-labelledby="download-title" className="shell py-20 sm:py-24">
      <div className="glass grid gap-10 rounded-[28px] px-6 py-10 sm:px-12 sm:py-14 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">{windowsDownloadUrl ? "Download" : "Coming soon"}</p>
          <h2
            id="download-title"
            className="mt-3 mb-0 text-3xl leading-tight font-semibold tracking-[-0.025em] text-paper sm:text-4xl"
          >
            {windowsDownloadUrl ? "Get Vesper Desk for Windows" : "Vesper Desk is almost ready"}
          </h2>
          <p className="mt-4 mb-0 max-w-xl text-lg leading-relaxed text-pretty text-muted">
            {windowsDownloadUrl
              ? "Free for Windows 10 and 11. Install it, or run the portable version with nothing to install."
              : "The app is in pre-release testing. The Windows download will be available on this page when the first public release is out."}
          </p>
          {windowsDownloadUrl && (
            <>
              <a href={windowsDownloadUrl} className="btn btn-primary mt-8">
                <Download aria-hidden="true" className="size-[1.1rem]" />
                Download for Windows
              </a>
              <p className="mt-6 mb-0 flex max-w-xl gap-3 text-sm leading-relaxed text-faint">
                <Info aria-hidden="true" className="mt-0.5 size-4 flex-none" />
                <span>
                  The installer is not code-signed yet. If Windows SmartScreen shows a warning,
                  choose More info, then Run anyway.
                </span>
              </p>
            </>
          )}
        </div>
        <ul className="m-0 grid list-none gap-3 p-0">
          {details.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-line bg-ink/40 px-4 py-3 text-paper"
            >
              <Check aria-hidden="true" className="size-4 flex-none text-glow" strokeWidth={2.25} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
