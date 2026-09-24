import { Button } from "@/components/ui/button";
import { DownloadLink } from "@/components/download-link";
import { tagline } from "@/lib/site";

export function Hero() {
  return (
    <section className="shell flex flex-col items-center px-2 pt-20 pb-10 text-center sm:pt-28 sm:pb-14">
      <h1 className="m-0 text-[clamp(3.2rem,8vw,5.6rem)] leading-[0.94] font-medium tracking-[-0.045em] text-paper">
        Vesper Desk
      </h1>
      <p className="mt-5 mb-0 max-w-xl text-2xl leading-snug text-paper sm:text-[1.85rem]">
        {tagline}
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <DownloadLink />
        <Button variant="ghost" href="#docs">
          Docs
        </Button>
      </div>
    </section>
  );
}
