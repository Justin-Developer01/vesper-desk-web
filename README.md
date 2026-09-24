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

**Download for Windows** is dynamic — `lib/github.ts`'s `fetchLatestRelease()` reads the
newest release from the `Justin-Developer01/vesper-desk` GitHub Releases API at request
time (cached for 1 hour) and picks the `*Setup*.exe` asset. The header, hero, and download
section all call it, so there's nothing to hand-update here when a new build ships.

Every release so far is a prerelease, so this deliberately does not use GitHub's
`/releases/latest` endpoint (stable-only, would 404) — it reads the plain releases list,
which is already sorted newest-first and includes prereleases.

If the API is unreachable or no installer asset is attached to the newest release,
`fetchLatestRelease()` returns `null` and the button falls back to `#download`, where that
status is explained.

The download section also notes that the installer is unsigned for now. Windows SmartScreen
may ask for More info, then Run anyway.

The GitHub links on the page (`siteRepoUrl` in `lib/site.ts`) still point at this website
repository rather than [Justin-Developer01/vesper-desk](https://github.com/Justin-Developer01/vesper-desk).
That repo is public now with real prereleases (as of 24 September 2026), so this is worth
revisiting — left as-is here since redirecting site traffic to the app's repo is a product
decision, not a technical constraint anymore.

## Focus screenshot

The slot under the hero is an illustration of Focus mode (one stream, thin bar) until a real capture exists.

Drop a PNG at `public/focus-mode.png`, then set this in `lib/site.ts`:

```ts
export const focusScreenshotSrc: string | null = "/focus-mode.png";
```

`null` keeps the illustration.
