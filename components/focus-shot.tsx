import Image from "next/image";
import { focusScreenshotSrc } from "@/lib/site";

export function FocusShot() {
  return (
    <section aria-label="Focus mode" className="shell pb-8">
      <figure className="m-0">
        {focusScreenshotSrc ? (
          <Image
            src={focusScreenshotSrc}
            alt="Vesper Desk in Focus mode, with a thin bar across the top"
            width={1600}
            height={900}
            priority
            className="shot-photo rounded-[20px]"
          />
        ) : (
          <div className="shot-frame">
            <div className="shot-bar">
              <span className="shot-dot" aria-hidden="true" />
              <strong>Vesper Desk</strong>
              <span>north room</span>
              <span className="shot-chip">Focus</span>
            </div>
            <div className="shot-stage" aria-hidden="true">
              <span>Focus</span>
            </div>
          </div>
        )}
        <figcaption className="mt-4 text-center text-sm text-muted">
          Focus mode, with the thin bar.
        </figcaption>
      </figure>
    </section>
  );
}
