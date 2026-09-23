import { quickStart } from "@/lib/site";

export function QuickStart() {
  return (
    <section id="docs" aria-labelledby="docs-title" className="shell pb-8">
      <h2 id="docs-title" className="m-0 mb-8 text-3xl font-medium tracking-tight sm:text-4xl">
        Quick start
      </h2>
      <ol className="m-0 grid list-none gap-3 p-0 md:grid-cols-3">
        {quickStart.map((step, index) => (
          <li key={step.title} className="rounded-2xl border border-line px-5 py-5">
            <p className="m-0 text-xs tracking-[0.16em] text-glow">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 mb-2 text-lg font-medium text-paper">{step.title}</h3>
            <p className="m-0 leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 mb-0 max-w-2xl text-lg leading-relaxed text-muted">
        On another monitor, pop a stream out. Dock it back when you are finished.
      </p>
    </section>
  );
}
