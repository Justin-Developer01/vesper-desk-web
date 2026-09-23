import { features } from "@/lib/site";

export function FeatureGrid() {
  return (
    <section id="features" aria-labelledby="features-title" className="shell py-20">
      <h2 id="features-title" className="m-0 mb-8 text-3xl font-medium tracking-tight sm:text-4xl">
        Features
      </h2>
      <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <li key={feature.title} className="glass rounded-2xl px-5 py-5">
            <h3 className="m-0 text-lg font-medium tracking-tight text-paper">{feature.title}</h3>
            <p className="mt-2 mb-0 leading-relaxed text-muted">{feature.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
