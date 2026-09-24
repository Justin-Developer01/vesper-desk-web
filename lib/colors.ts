/**
 * Mirrors the --color-* tokens defined in app/globals.css.
 *
 * Kept as plain values (not read from CSS) because app/opengraph-image.tsx
 * renders through next/og's Satori engine, which cannot resolve CSS custom
 * properties. If the tokens in globals.css change, update this file too.
 */
export const colors = {
  ink: "#07090d",
  paper: "#eef3f8",
  muted: "#b7c4d2",
  faint: "#8ea0b3",
  glow: "#8ecfff",
} as const;
