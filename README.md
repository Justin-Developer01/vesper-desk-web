# Vesper Desk

Marketing site for **Vesper Desk**, a Windows desktop overlay for watching several Twitch streams on one quiet desk.

Live direction: [vesper-desk-web.vercel.app](https://vesper-desk-web.vercel.app). Product domain direction: vesperdesk.app.

The desktop app window may still say Stream Watcher. This website uses the name Vesper Desk.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Download CTA

**Download for Windows** reads `windowsDownloadUrl` in `lib/site.ts`.

Checked 23 September 2026:

- `https://github.com/Justin-Developer01/vesper-desk` is not a public repository.
- No Vesper-named release assets were available.
- No Stream Watcher Setup EXE was published under Justin-Developer01. The only public repository on that account is `nxtqore`.

Until an installer exists, `windowsDownloadUrl` is `null` and the button links to `#download` on this page, where that status is explained.

When a release is published, set `windowsDownloadUrl` to the Setup EXE asset URL (Vesper-named if present, otherwise the newest Stream Watcher Setup EXE):

```ts
export const windowsDownloadUrl: string | null =
  "https://github.com/Justin-Developer01/vesper-desk/releases/download/<tag>/<Setup.exe>";
```

The header, hero, and download section all use that constant. An absolute URL opens in a new tab. `null` keeps the CTA on `#download`.

The download section also notes that the installer is unsigned for now. Windows SmartScreen may ask for More info, then Run anyway.

The GitHub links on the page point at this website repository, [Justin-Developer01/vesper-desk-web](https://github.com/Justin-Developer01/vesper-desk-web), because the desktop repository is not public yet.

## Focus screenshot

The slot under the hero is an illustration of Focus mode (one stream, thin bar) until a real capture exists.

Drop a PNG at `public/focus-mode.png`, then set this in `lib/site.ts`:

```ts
export const focusScreenshotSrc: string | null = "/focus-mode.png";
```

`null` keeps the illustration.
