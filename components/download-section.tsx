import { DownloadLink } from "@/components/download-link";
import { isExternalDownload } from "@/lib/site";

export function DownloadSection() {
  const ready = isExternalDownload();

  return (
    <section id="download" aria-labelledby="download-title" className="shell py-20">
      <div className="glass rounded-[28px] px-6 py-10 sm:px-10 sm:py-14">
        <p className="m-0 text-xs font-medium tracking-[0.18em] text-lamp uppercase">Windows</p>
        <h2 id="download-title" className="mt-3 mb-4 text-3xl font-medium tracking-tight sm:text-4xl">
          Download for Windows
        </h2>
        {ready ? (
          <div className="flex flex-col items-start gap-6">
            <p className="m-0 max-w-2xl text-lg leading-relaxed text-muted">
              The current Windows installer. The desktop build may still use the Stream Watcher name
              in its window chrome. This site calls it Vesper Desk.
            </p>
            <DownloadLink className="btn btn-primary" />
          </div>
        ) : (
          <p className="m-0 max-w-2xl text-lg leading-relaxed text-muted">
            The Windows installer is not on GitHub yet. Download for Windows stays on this page
            until Justin-Developer01/vesper-desk publishes a release. That link will use the latest
            Setup EXE — a Vesper Desk build, or a Stream Watcher Setup EXE if that is the file
            name that ships first.
          </p>
        )}
      </div>
    </section>
  );
}
