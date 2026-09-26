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

`downloadReady` in `lib/site.ts` is `true` and the download CTA is live (after Justin OK'd promo tag v1.1.0-pre.2). Flipping `downloadReady` back to `false` re-locks the button and JSON-LD to "Coming soon".

With `downloadReady` set to `true`: the header, hero, and download section all call
`fetchLatestRelease()`, which reads `vesper-desk-backend`'s cached release info (backed by
`Justin-Developer01/vesper-desk`'s GitHub Releases, cached for 1 hour). If the backend is
unreachable, times out, or has no installer asset yet, `fetchLatestRelease()` returns `null`
and the button falls back to the backend's stable download redirect endpoint
(`https://api.vesperdesk.app/v1/download/latest`), ensuring users are never left with a dead link.

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

## Accounts & Connected Platforms (Supabase & Kick Setup)

Phase 1 adds the web account shell (`/account`) with frost sign-in/sign-up and server-side connected platform links (Kick first).

### Security Architecture

- **Supabase Auth**: Users authenticate via email magic link or password. Sessions are managed via Supabase JWT cookies handled through `@supabase/ssr`.
- **Platform Token Isolation**: Linked third-party tokens (access & refresh tokens) are encrypted at rest with AES-256-GCM (`TOKEN_ENCRYPTION_KEY`) in `public.linked_platforms`. Column-level permissions revoke `SELECT`, `INSERT`, and `UPDATE` on token ciphertexts from `anon` and `authenticated` roles. Writes and reads of token ciphertexts are restricted to the service role.
- **Fail-Closed Token Management**: All token writes and disconnect mutations require a valid server-side service role client (`SUPABASE_SERVICE_ROLE_KEY`). The system fails closed and never attempts to write ciphertext columns using the user JWT client.
- **Server-Only OAuth**: Kick OAuth uses PKCE and exchanges tokens strictly in server route handlers. Tokens never reach the browser or client-side JavaScript.
- **Session Refresh**: Standard Supabase SSR middleware (`middleware.ts`) automatically keeps auth cookies fresh across server components and routes.
- **Graceful Degradation**: If Supabase or Kick environment variables are missing, the UI gracefully indicates setup requirements without breaking or crashing.

### Setup Instructions

1. **Supabase Database Migration (Project: `mhowgvkyfnzpciwcbivr`)**:
   - In your Supabase Dashboard SQL Editor (or using the Supabase CLI linked to `mhowgvkyfnzpciwcbivr`):
     ```bash
     # To link and push via Supabase CLI:
     npx supabase link --project-ref mhowgvkyfnzpciwcbivr
     npx supabase db push
     ```
     Or execute `supabase/migrations/20260926000000_vesper_accounts.sql` and `supabase/migrations/20260926010000_linked_platforms_ciphertext_revoke_write.sql` directly into the Supabase Dashboard SQL editor.
   - This creates `profiles` and `linked_platforms` tables, RLS policies, `on_auth_user_created` trigger, revoked column permissions (`SELECT`, `INSERT`, `UPDATE` on ciphertext), and the `user_linked_platforms` security-invoker view.

2. **Environment Variables**:
   Copy `.env.example` to `.env.local` (or configure in Vercel project settings):
   - `NEXT_PUBLIC_SUPABASE_URL`: `https://mhowgvkyfnzpciwcbivr.supabase.co` (pre-configured)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Set your anon/publishable key from the Supabase Dashboard (Project Settings → API).
   - `SUPABASE_SERVICE_ROLE_KEY`: Set your service role key (server-only, Project Settings → API).
   - `TOKEN_ENCRYPTION_KEY`: A 32-byte secret for token encryption (generate 64 hex characters with `openssl rand -hex 32` or string >= 32 chars).
   - `KICK_CLIENT_ID`: Kick developer application client ID.
   - `KICK_CLIENT_SECRET`: Kick developer application client secret.
   - `KICK_REDIRECT_URI`: OAuth callback URL (e.g. `https://www.vesperdesk.app/auth/kick/callback` or `http://localhost:3000/auth/kick/callback` for local development).

