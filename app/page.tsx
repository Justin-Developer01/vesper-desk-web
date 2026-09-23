import { DownloadSection } from "@/components/download-section";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <SiteHeader />
      <main id="content" className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <DownloadSection />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
