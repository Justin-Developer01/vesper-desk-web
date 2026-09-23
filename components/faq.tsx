import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="shell py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions, answered" />
        <div className="border-t border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item border-b border-line">
              <summary>
                {faq.question}
                <ChevronDown aria-hidden="true" className="size-5" />
              </summary>
              <p className="mt-0 mb-5 max-w-2xl leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
