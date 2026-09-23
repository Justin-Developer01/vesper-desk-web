import { DeskPreview } from "@/components/desk-preview";
import { DownloadLink } from "@/components/download-link";
import { description, tagline } from "@/lib/site";

export function Hero() {
  return (
    <section className="shell grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 lg:py-28">
      <div className="flex flex-col items-start gap-6">
        <p className="m-0 text-xs font-medium tracking-[0.18em] text-lamp uppercase">
          Windows desktop overlay
        </p>
        <div className="flex flex-col gap-3">
          <h1 className="m-0 text-[clamp(3.1rem,7vw,5.4rem)] leading-[0.95] font-medium tracking-[-0.045em] text-paper">
            Vesper Desk
          </h1>
          <p className="m-0 max-w-xl text-2xl leading-snug font-normal text-paper sm:text-[1.85rem]">
            {tagline}
          </p>
        </div>
        <p className="m-0 max-w-xl text-lg leading-relaxed text-muted">{description}</p>
        <div className="flex flex-wrap items-center gap-3">
          <DownloadLink className="btn btn-primary" />
          <a className="btn btn-ghost" href="#notes">
            Notes
          </a>
        </div>
      </div>
      <DeskPreview />
    </section>
  );
}
