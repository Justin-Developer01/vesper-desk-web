import { DownloadSection } from "@/components/download-section";
import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";
import { Modes } from "@/components/modes";
import { Notes } from "@/components/notes";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main id="content">
        <Hero />
        <FeatureGrid />
        <Modes />
        <DownloadSection />
        <Notes />
      </main>
      <SiteFooter />
    </div>
  );
}
