import type { LatestRelease } from "@vesper-desk/shared";

export const BACKEND_INFO_URL = "https://api.vesperdesk.app/v1/download/latest/info";
export const BACKEND_DOWNLOAD_URL = "https://api.vesperdesk.app/v1/download/latest";

/**
 * Release metadata from the vesper-desk-backend download proxy, which does
 * the actual GitHub release-walking/asset-matching (and, once
 * Justin-Developer01/vesper-desk goes private, the authenticated resolve).
 * The asset URL it returns is the backend's own stable redirect endpoint,
 * not GitHub's short-lived signed URL — that one expires in about an hour,
 * so resolving and baking it into this statically-generated page directly
 * would risk serving expired links between ISR revalidations.
 */
export async function fetchLatestRelease(): Promise<LatestRelease | null> {
  try {
    const res = await fetch(BACKEND_INFO_URL, {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;

    const json = (await res.json()) as Partial<LatestRelease>;
    if (typeof json.version !== "string" || !Array.isArray(json.assets)) return null;

    return json as LatestRelease;
  } catch {
    return null;
  }
}
