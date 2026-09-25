# Vesper Desk

Marketing site for **Vesper Desk**, a Windows desktop overlay for Twitch, Kick, and YouTube — streams and videos, side by side.

Live at [www.vesperdesk.app](https://www.vesperdesk.app).

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Download CTA

The download button and the JSON-LD `downloadUrl`/`softwareVersion` fields are locked to
"Coming soon" via `downloadReady` in `lib/site.ts`, even though `lib/github.ts`'s
`fetchLatestRelease()` already resolves a real installer through `vesper-desk-backend`'s
`/v1/download/latest/info`. Flip `downloadReady` to `true` only after Justin OKs a promo tag
for a public release — nothing else needs to change to go live.

Once `downloadReady` is `true`: the header, hero, and download section all call
`fetchLatestRelease()`, which reads `vesper-desk-backend`'s cached release info (backed by
`Justin-Developer01/vesper-desk`'s GitHub Releases, cached for 1 hour). If the backend is
unreachable or has no installer asset yet, `fetchLatestRelease()` returns `null` and the
button falls back to `#download`.

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
