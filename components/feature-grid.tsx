import { features } from "@/lib/site";

export function FeatureGrid() {
  return (
    <section id="features" aria-labelledby="features-title" className="shell py-8 pb-20">
      <div className="mb-10 flex max-w-2xl flex-col gap-3">
        <h2 id="features-title" className="m-0 text-3xl font-medium tracking-tight text-paper sm:text-4xl">
          What sits on the desk
        </h2>
        <p className="m-0 text-lg leading-relaxed text-muted">
          A multi-stream Twitch viewer with the chrome turned down.
        </p>
      </div>
      <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <li key={feature.title} className="glass rounded-2xl p-6">
            <p className="m-0 text-xs tracking-[0.16em] text-lamp">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 mb-2 text-xl font-medium tracking-tight text-paper">{feature.title}</h3>
            <p className="m-0 leading-relaxed text-muted">{feature.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
