import { DownloadLink } from "@/components/download-link";
import { isExternalDownload } from "@/lib/site";

export function DownloadSection() {
  const ready = isExternalDownload();

  return (
    <section id="download" aria-labelledby="download-title" className="shell py-20">
      <div className="glass rounded-[28px] px-6 py-10 sm:px-10 sm:py-12">
        <h2 id="download-title" className="m-0 text-3xl font-medium tracking-tight sm:text-4xl">
          Download for Windows
        </h2>
        {ready ? (
          <p className="mt-4 mb-0 max-w-2xl text-lg leading-relaxed text-muted">
            The current Windows installer. The desktop window may still say Stream Watcher. This
            site calls it Vesper Desk.
          </p>
        ) : (
          <p className="mt-4 mb-0 max-w-2xl text-lg leading-relaxed text-muted">
            The Windows installer is not on GitHub yet. This button stays on the page until
            Justin-Developer01/vesper-desk publishes a release — a Vesper Desk Setup EXE, or a
            Stream Watcher Setup EXE if that is the file that ships first.
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
