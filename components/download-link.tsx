import { Button } from "@/components/ui/button";
import { downloadHref, isExternalDownload } from "@/lib/site";

type DownloadLinkProps = {
  variant?: "primary" | "ghost";
  className?: string;
  children?: React.ReactNode;
};

export function DownloadLink({ variant = "primary", className, children }: DownloadLinkProps) {
  const external = isExternalDownload();

  return (
    <Button
      variant={variant}
      className={className}
      href={downloadHref()}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children ?? "Download for Windows"}
    </Button>
  );
}
