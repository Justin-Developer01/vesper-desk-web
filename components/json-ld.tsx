import {
  description,
  productName,
  publisherName,
  siteUrl,
  windowsDownloadUrl,
} from "@/lib/site";

export function JsonLd() {
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
    ...(windowsDownloadUrl ? { downloadUrl: windowsDownloadUrl } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
