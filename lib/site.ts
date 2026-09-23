import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  Focus,
  Gauge,
  Keyboard,
  LayoutGrid,
  LayoutTemplate,
  MessageSquareText,
  PictureInPicture2,
} from "lucide-react";

/**
 * Public origin used for canonical URLs, Open Graph, the sitemap, and robots.
 * Set NEXT_PUBLIC_SITE_URL when the site moves to its own domain. On Vercel,
 * the production URL is picked up automatically.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://vesper-desk-web.vercel.app");

export const productName = "Vesper Desk";

export const publisherName = "nxtqore";

export const tagline = "Several streams. One quiet desk.";

export const description =
  "Vesper Desk is a free Windows app for watching several Twitch streams at once. Chat makes room instead of covering the picture, streams pop out to a second monitor, and Focus mode leaves nothing but a thin bar.";

/**
 * Windows installer URL.
 *
 * While this is null the site shows its "coming soon" state: no download
 * buttons, no SmartScreen note. When a release is published, set it to the
 * Setup EXE asset or the releases page, for example
 * "https://github.com/Justin-Developer01/stream-watcher/releases/latest".
 * See the README.
 */
export const windowsDownloadUrl: string | null = null;

/**
 * Public source repository for the desktop app. The GitHub links in the header
 * and footer only appear once this is set.
 */
export const desktopRepoUrl: string | null = null;

/**
 * Real app screenshot for the hero. Drop a 16:9 PNG in `public/` and set this
 * to its path, for example "/desk.png". null keeps the built-in illustration.
 */
export const heroScreenshotSrc: string | null = null;

export const details = [
  "Windows 10 or 11, 64-bit",
  "Installer or portable EXE",
  "Built-in update check",
  "Twitch account optional",
] as const;

export type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const features: Feature[] = [
  {
    icon: LayoutGrid,
    title: "Layouts that fill the screen",
    body: "One, two, four, or one large with three alongside. The grid always fits the window, with no scrolling.",
  },
  {
    icon: Focus,
    title: "Focus mode",
    body: "Bring one stream forward. The controls shrink to a thin bar that stays out of the picture.",
  },
  {
    icon: MessageSquareText,
    title: "Chat that makes room",
    body: "Chat opens beside the stream and moves the layout over, so it never covers the video.",
  },
  {
    icon: PictureInPicture2,
    title: "Built for two monitors",
    body: "Pop a stream or its chat into its own window, keep it on top, and dock it back when you are done.",
  },
  {
    icon: AppWindow,
    title: "See-through desk",
    body: "Let your desktop show through the empty space and click straight past it. Lock the window to stop click-through.",
  },
  {
    icon: Gauge,
    title: "Performance mode",
    body: "The stream you are watching stays at full quality with sound. The rest pause or drop to low quality.",
  },
  {
    icon: LayoutTemplate,
    title: "Saved templates",
    body: "Save a set of channels and a layout, then open it again in one click.",
  },
  {
    icon: Keyboard,
    title: "Make it yours",
    body: "Dark, Dim, or Light themes, your own accent colors, and remappable hotkeys for the controls you use most.",
  },
];

export const steps = [
  {
    title: "Install",
    body: "Run the installer, or use the portable EXE with nothing to install.",
  },
  {
    title: "Add channels",
    body: "Click the title bar, add the Twitch channels you want, and pick a layout.",
  },
  {
    title: "Sign in (optional)",
    body: "Log in to Twitch to send chat messages and use your Prime benefits.",
  },
] as const;

export const faqs = [
  {
    question: "Is Vesper Desk free?",
    answer: "Yes. There is no subscription and no account to create.",
  },
  {
    question: "Do I need a Twitch account?",
    answer:
      "No. You can watch without signing in. Sign in only if you want to send chat messages or use Twitch Prime benefits. You sign in on Twitch's own page, and Vesper Desk only asks for permission to read and send chat.",
  },
  {
    question: "Why does Windows show a SmartScreen warning?",
    answer:
      "The installer is not code-signed yet, so Windows does not recognize the publisher. Choose More info, then Run anyway. Updates show the same prompt until signing is in place.",
  },
  {
    question: "The installer says Stream Watcher. Is that the right app?",
    answer:
      "Yes. Stream Watcher is the app's working name, and the installer and window may still use it. It is the same app.",
  },
  {
    question: "Is Vesper Desk made by Twitch?",
    answer:
      "No. Vesper Desk is an independent app and is not affiliated with or endorsed by Twitch Interactive, Inc.",
  },
] as const;
