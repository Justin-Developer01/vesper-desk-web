import { modes } from "@/lib/site";

export function Modes() {
  return (
    <section id="modes" aria-labelledby="modes-title" className="border-y border-line bg-ink-raised/40">
      <div className="shell py-20">
        <div className="mb-10 flex max-w-2xl flex-col gap-3">
          <h2 id="modes-title" className="m-0 text-3xl font-medium tracking-tight sm:text-4xl">
            Three ways to keep it quiet
          </h2>
          <p className="m-0 text-lg leading-relaxed text-muted">
            The same overlay, with a different weight. Pick the mode that matches the hour.
          </p>
        </div>
        <ol className="m-0 grid list-none gap-4 p-0 lg:grid-cols-3">
          {modes.map((mode) => (
            <li key={mode.name} className="rounded-2xl border border-line p-6">
              <h3 className="m-0 text-xl font-medium text-paper">{mode.name}</h3>
              <p className="mt-3 mb-0 leading-relaxed text-muted">{mode.body}</p>
            </li>
          ))}
        </ol>
        <div className="glass mt-4 rounded-2xl px-6 py-7 sm:px-8">
          <h3 className="m-0 text-xl font-medium text-paper">A frameless overlay desk</h3>
          <p className="mt-3 mb-0 max-w-3xl text-lg leading-relaxed text-muted">
            Vesper Desk sits on the Windows desktop, not inside a browser tab. The frame stays thin
            enough to leave up beside everything else.
          </p>
        </div>
      </div>
    </section>
  );
}
