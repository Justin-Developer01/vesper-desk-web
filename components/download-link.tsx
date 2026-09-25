import { Button } from "@/components/ui/button";
import { BACKEND_DOWNLOAD_URL, fetchLatestRelease } from "@/lib/github";
import { downloadReady } from "@/lib/site";

type DownloadLinkProps = {
  variant?: "primary" | "ghost";
  className?: string;
  children?: React.ReactNode;
};

export async function DownloadLink({ variant = "primary", className, children }: DownloadLinkProps) {
  if (!downloadReady) {
    return (
      <span className={["btn", "btn-ghost", className].filter(Boolean).join(" ")} aria-disabled="true">
        {children ?? "Coming soon"}
      </span>
    );
  }

  const release = await fetchLatestRelease();
  const asset = release?.assets[0];
  const href = asset?.url ?? BACKEND_DOWNLOAD_URL;

  return (
    <Button
      variant={variant}
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children ?? "Download for Windows"}
    </Button>
  );
}
