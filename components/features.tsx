import { SectionHeading } from "@/components/section-heading";
import { features } from "@/lib/site";

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="shell py-20 sm:py-24">
      <SectionHeading id="features-title" eyebrow="Features" title="Made for watching more than one stream">
        Everything sits on one desk, and the controls stay out of the way.
      </SectionHeading>
      <ul className="mt-12 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, body }) => (
          <li key={title} className="glass flex gap-4 rounded-2xl p-5 sm:block sm:p-6">
            <span className="icon-tile" aria-hidden="true">
              <Icon className="size-5" strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="m-0 text-[1.05rem] font-semibold tracking-tight text-paper sm:mt-5">
                {title}
              </h3>
              <p className="mt-1.5 mb-0 text-[0.95rem] leading-relaxed text-muted sm:mt-2">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
