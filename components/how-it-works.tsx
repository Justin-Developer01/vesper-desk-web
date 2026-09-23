import { SectionHeading } from "@/components/section-heading";
import { steps } from "@/lib/site";

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="shell py-20 sm:py-24">
      <SectionHeading id="how-title" eyebrow="How it works" title="Set up in three steps">
        No setup wizard and no account to create. Vesper Desk opens straight to your desk.
      </SectionHeading>
      <ol className="mt-12 grid list-none gap-4 p-0 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-2xl border border-line bg-ink-raised/60 p-6">
            <span
              aria-hidden="true"
              className="grid size-9 place-items-center rounded-full border border-glow/40 text-sm font-semibold text-glow"
            >
              {index + 1}
            </span>
            <h3 className="mt-5 mb-2 text-[1.05rem] font-semibold tracking-tight text-paper">
              {step.title}
            </h3>
            <p className="m-0 text-[0.95rem] leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
