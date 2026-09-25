import { description, downloadReady, productName, publisherName, siteUrl } from "@/lib/site";
import { fetchLatestRelease } from "@/lib/github";

export async function JsonLd() {
  const release = downloadReady ? await fetchLatestRelease() : null;
  const asset = release?.assets[0];

  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: productName,
    applicationCategory: "DesktopApplication",
    operatingSystem: "Windows",
    description,
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      name: publisherName,
    },
    ...(asset ? { downloadUrl: asset.url, softwareVersion: release.version } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
