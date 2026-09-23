export const siteUrl = "https://vesper-desk-web.vercel.app";

export const productName = "Vesper Desk";

export const tagline = "Several streams. One quiet desk.";

export const description =
  "Vesper Desk is a Windows desktop overlay for watching several Twitch streams at once — thin frosted chrome, saved layouts, docked chat, and pop-outs on a frameless desk.";

/**
 * Windows installer URL.
 *
 * Set this to a direct Setup EXE (or the GitHub latest-release URL) when
 * Justin-Developer01/vesper-desk publishes a Vesper-named asset or a
 * Stream Watcher Setup EXE. While this is null, Download for Windows
 * stays on #download. See the README.
 */
export const windowsDownloadUrl: string | null = null;

export const desktopRepoUrl = "https://github.com/Justin-Developer01/vesper-desk";

export const siteRepoUrl = "https://github.com/Justin-Developer01/vesper-desk-web";

export const contactUrl = "https://github.com/Justin-Developer01/vesper-desk-web/issues";

export const publisherName = "nxtqore";

export function downloadHref(): string {
  return windowsDownloadUrl ?? "#download";
}

export function isExternalDownload(): boolean {
  return windowsDownloadUrl !== null;
}

export const features = [
  {
    title: "Thin frosted chrome",
    body: "A hairline frame, soft blur, and type that stays out of the picture. The desk does not wear a loud player shell.",
  },
  {
    title: "Layouts and templates",
    body: "Arrange several streams into a desk you can keep. Switch templates when the night changes, without rebuilding the grid.",
  },
  {
    title: "Docked chat",
    body: "Chat sits with the stream it belongs to, so you can read along without opening another browser tab.",
  },
  {
    title: "Pop-outs",
    body: "Pull one stream or its chat into a separate window — beside a game, a document, or another monitor.",
  },
  {
    title: "Focus, Performance, Standard",
    body: "Focus clears the desk down. Performance spends less. Standard keeps the full chrome, chat, and layout tools.",
  },
  {
    title: "See through and Lock",
    body: "See through windows lets the desktop show between panes. Lock holds the overlay still so a click does not drag it away.",
  },
] as const;

export const modes = [
  {
    name: "Focus",
    body: "The desk steps back. One stream stays forward while extra chrome recedes.",
  },
  {
    name: "Performance",
    body: "Several streams, with a lighter desk. For when the machine should spend its attention elsewhere.",
  },
  {
    name: "Standard",
    body: "The everyday desk. Layouts, docked chat, and the usual thin chrome, all in reach.",
  },
] as const;
