import { Button } from "@/components/ui/button";
import { fetchLatestRelease } from "@/lib/github";

type DownloadLinkProps = {
  variant?: "primary" | "ghost";
  className?: string;
  children?: React.ReactNode;
};

export async function DownloadLink({ variant = "primary", className, children }: DownloadLinkProps) {
  const release = await fetchLatestRelease();
  const asset = release?.assets[0];

  return (
    <Button
      variant={variant}
      className={className}
      href={asset?.url ?? "#download"}
      {...(asset ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children ?? "Download for Windows"}
    </Button>
  );
}
