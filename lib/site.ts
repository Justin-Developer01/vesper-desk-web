export const siteUrl = "https://www.vesperdesk.app";

export const productName = "Vesper Desk";

/**
 * The landing page's download CTA and JSON-LD stay "Coming soon" while this
 * is false, even though vesper-desk-backend's /v1/download/latest already
 * resolves a real installer — flip to true only after Justin OKs a promo
 * tag for a public release. Nothing else needs to change to go live.
 */
export const downloadReady = false;

export const tagline = "Several streams. One quiet desk.";

export const description =
  "Vesper Desk is a Windows desktop overlay for Twitch, Kick, and YouTube — streams and videos, side by side. Focus leaves a thin bar, chat pushes the layout, and a stream can pop out and dock back.";

/**
 * Real Focus-mode screenshot.
 * Drop a PNG in `public/` (for example `public/focus-mode.png`) and set
 * this to "/focus-mode.png". null keeps the built-in illustration.
 */
export const focusScreenshotSrc: string | null = null;

export const desktopRepoUrl = "https://github.com/Justin-Developer01/vesper-desk";

export const siteRepoUrl = "https://github.com/Justin-Developer01/vesper-desk-web";

export const publisherName = "nxtqore";

export const features = [
  {
    title: "Twitch, Kick & YouTube",
    body: "Mix live channels and regular videos on the same desk.",
  },
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
    body: "Paste a Twitch or Kick channel, or a YouTube video link.",
  },
  {
    title: "Login",
    body: "Sign in with Twitch if you want chat. Kick and YouTube need no login.",
  },
  {
    title: "Focus",
    body: "Switch to Focus. The thin bar stays up.",
  },
] as const;
