import { siteRepoUrl } from "@/lib/site";

const notes = [
  "Place more than one Twitch stream in a layout or a saved template.",
  "Dock chat beside a pane, or pop a stream out into its own window.",
  "Choose Focus, Performance, or Standard for how much chrome you want.",
  "Use See through windows when the desktop should show between panes. Lock the desk when it should stay put.",
];

export function Notes() {
  return (
    <section id="notes" aria-labelledby="notes-title" className="shell pb-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="flex flex-col gap-3">
          <h2 id="notes-title" className="m-0 text-3xl font-medium tracking-tight sm:text-4xl">
            Notes
          </h2>
          <p className="m-0 text-lg leading-relaxed text-muted">
            A short orientation. This page is the introduction, not a settings manual.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <ol className="m-0 flex list-decimal flex-col gap-3 pl-5 text-paper marker:text-lamp">
            {notes.map((note) => (
              <li key={note} className="pl-1 leading-relaxed">
                {note}
              </li>
            ))}
          </ol>
          <p className="m-0 leading-relaxed text-muted">
            The installed window may still say Stream Watcher. The name on this site is Vesper Desk.
            Desktop source is intended for Justin-Developer01/vesper-desk. This website lives on{" "}
            <a href={siteRepoUrl} className="text-paper underline decoration-line underline-offset-4" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
