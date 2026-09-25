import { DownloadLink } from "@/components/download-link";
import { downloadReady, productName } from "@/lib/site";

export function DownloadSection() {
  return (
    <section id="download" aria-labelledby="download-title" className="shell py-20">
      <div className="glass rounded-[28px] px-6 py-10 sm:px-10 sm:py-12">
        <h2 id="download-title" className="m-0 text-3xl font-medium tracking-tight sm:text-4xl">
          Download for Windows
        </h2>
        {downloadReady ? (
          <p className="mt-4 mb-0 max-w-2xl text-lg leading-relaxed text-muted">
            Grab the current Windows installer below.
          </p>
        ) : (
          <p className="mt-4 mb-0 max-w-2xl text-lg leading-relaxed text-muted">
            {productName} is not public yet. The download button will go live here once a
            release is ready to share.
          </p>
        )}
        <div className="mt-7">
          <DownloadLink />
        </div>
        <div className="mt-8 border-t border-line pt-6">
          <h3 className="m-0 text-base font-medium text-paper">SmartScreen</h3>
          <p className="mt-2 mb-0 max-w-2xl leading-relaxed text-muted">
            The installer is unsigned for now. If Windows shows a warning, choose More info, then
            Run anyway.
          </p>
        </div>
      </div>
    </section>
  );
}
