import { downloadHref, isExternalDownload } from "@/lib/site";

type DownloadLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

export function DownloadLink({ className, children }: DownloadLinkProps) {
  const external = isExternalDownload();

  return (
    <a
      className={className}
      href={downloadHref()}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children ?? "Download for Windows"}
    </a>
  );
}
