export const siteUrl = "https://vesper-desk-web.vercel.app";

export const productName = "Vesper Desk";

export const tagline = "Several streams. One quiet desk.";

export const description =
  "Vesper Desk is a Windows desktop overlay for several Twitch streams. Focus leaves a thin bar, chat pushes the layout, and a stream can pop out and dock back.";

/**
 * Windows installer URL.
 *
 * Set this to a direct Setup EXE (or the GitHub latest-release URL) when
 * Justin-Developer01/vesper-desk publishes a Vesper-named asset or a
 * Stream Watcher Setup EXE. While this is null, Download for Windows
 * stays on #download. See the README.
 */
export const windowsDownloadUrl: string | null = null;

/**
 * Real Focus-mode screenshot.
 * Drop a PNG in `public/` (for example `public/focus-mode.png`) and set
 * this to "/focus-mode.png". null keeps the built-in illustration.
 */
export const focusScreenshotSrc: string | null = null;

export const desktopRepoUrl = "https://github.com/Justin-Developer01/vesper-desk";

export const siteRepoUrl = "https://github.com/Justin-Developer01/vesper-desk-web";

export const publisherName = "nxtqore";

export function downloadHref(): string {
  return windowsDownloadUrl ?? "#download";
}

export function isExternalDownload(): boolean {
  return windowsDownloadUrl !== null;
}

export const features = [
  {
    title: "Focus / strip",
    body: "One stream forward. A thin bar is the only chrome that stays.",
  },
  {
    title: "Chat that pushes",
    body: "Chat opens beside the picture and moves the layout over.",
  },
  {
    title: "Pop-outs + Dock back",
    body: "Pull a stream into its own window. Dock it back when you are done.",
  },
  {
    title: "See through + Lock",
    body: "Let the desktop show between panes, then lock the desk in place.",
  },
  {
    title: "Templates",
    body: "Save a layout and open it again, without rebuilding the grid.",
  },
  {
    title: "Mode",
    body: "Standard, Focus, or Performance. Same desk, different weight.",
  },
] as const;

export const quickStart = [
  {
    title: "Add channel",
    body: "Place a Twitch channel on the desk.",
  },
  {
    title: "Login",
    body: "Sign in so the stream and chat can open.",
  },
  {
    title: "Focus",
    body: "Switch to Focus. The thin bar stays up.",
  },
] as const;
