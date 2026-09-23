# Vesper Desk

Marketing site for **Vesper Desk**, a free Windows app for watching several Twitch streams on one quiet desk.

Live: [vesper-desk-web.vercel.app](https://vesper-desk-web.vercel.app). Planned domain: vesperdesk.app.

The desktop app still ships as **Stream Watcher** (installer, window title, `appId`). The site calls it Vesper Desk, and the FAQ explains the difference.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

All page copy and switches live in `lib/site.ts`.

## Site URL

`siteUrl` is used for canonical URLs, Open Graph, `sitemap.xml`, and `robots.txt`. It resolves in this order:

1. `NEXT_PUBLIC_SITE_URL`, for example `https://vesperdesk.app`
2. `VERCEL_PROJECT_PRODUCTION_URL`, set automatically on Vercel
3. `https://vesper-desk-web.vercel.app`

Set `NEXT_PUBLIC_SITE_URL` in Vercel when the custom domain goes live.

## Download state

`windowsDownloadUrl` in `lib/site.ts` controls the whole download experience.

- **`null` (current):** the site is in its "coming soon" state. The header shows a Coming soon chip, the hero links to the features, and the download section explains that the app is in pre-release testing. There are no dead download buttons and no SmartScreen note.
- **A URL:** the header, hero, and download section all show **Download for Windows**, the SmartScreen note appears, and the URL is added to the JSON-LD.

The desktop app's electron-builder config publishes releases to `Justin-Developer01/stream-watcher`. When that repository is public, the simplest value is the latest-release page, which lists both the Setup and Portable EXEs:

```ts
export const windowsDownloadUrl: string | null =
  "https://github.com/Justin-Developer01/stream-watcher/releases/latest";
```

Checked 23 September 2026: neither `stream-watcher` nor `vesper-desk` is public on GitHub, and no release assets are available.

## GitHub links

`desktopRepoUrl` is `null`, so the header and footer show no GitHub link. Set it to the desktop app repository once it is public. The links deliberately do not point at this website repository.

## Hero screenshot

The hero shows a built-in illustration of the app (four streams, Focus, chat open) until a real capture exists.

Drop a 16:9 PNG at `public/desk.png`, then set:

```ts
export const heroScreenshotSrc: string | null = "/desk.png";
```

## Icons

`app/icon.svg` is the source mark. `app/favicon.ico` (16, 32, 48 px) and `app/apple-icon.png` (180 px) are rendered from the same design. Regenerate them if the mark changes.
