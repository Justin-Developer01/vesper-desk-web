import type { LatestRelease, ReleaseAsset } from "@vesper-desk/shared";

const RELEASES_API = "https://api.github.com/repos/Justin-Developer01/vesper-desk/releases";

type GitHubReleaseAsset = {
  name: string;
  browser_download_url: string;
  size: number;
};

type GitHubRelease = {
  tag_name: string;
  html_url: string;
  published_at: string;
  draft: boolean;
  assets: GitHubReleaseAsset[];
};

/**
 * The newest published release on Justin-Developer01/vesper-desk that
 * actually has a Setup asset attached, or null if the API is unreachable or
 * no such release exists. Every release so far is a prerelease, so GitHub's
 * /releases/latest endpoint (stable-only) can't be used — this reads the
 * plain releases list instead, which is already sorted newest-first and
 * includes prereleases.
 *
 * electron-builder publishes the release entry before it finishes uploading
 * assets, so the newest release can briefly have zero assets while its
 * build is still running. Falling through to the next-newest release avoids
 * showing "not on GitHub yet" during that window when an older, complete
 * release is still available.
 */
export async function fetchLatestRelease(): Promise<LatestRelease | null> {
  try {
    const res = await fetch(RELEASES_API, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;

    const releases: GitHubRelease[] = await res.json();

    for (const release of releases) {
      if (release.draft) continue;

      const setupAsset = release.assets.find((a) => /Setup.*\.exe$/i.test(a.name));
      if (!setupAsset) continue;

      const assets: ReleaseAsset[] = [
        {
          platform: "windows",
          kind: "installer",
          url: setupAsset.browser_download_url,
          sizeBytes: setupAsset.size,
        },
      ];

      return {
        version: release.tag_name,
        publishedAt: release.published_at,
        notesUrl: release.html_url,
        assets,
      };
    }

    return null;
  } catch {
    return null;
  }
}
