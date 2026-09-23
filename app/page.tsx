import { DownloadSection } from "@/components/download-section";
import { FeatureGrid } from "@/components/feature-grid";
import { FocusShot } from "@/components/focus-shot";
import { Hero } from "@/components/hero";
import { QuickStart } from "@/components/quick-start";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main id="content">
        <Hero />
        <FocusShot />
        <FeatureGrid />
        <QuickStart />
        <DownloadSection />
      </main>
      <SiteFooter />
    </div>
  );
}
