import { ImageResponse } from "next/og";
import { colors } from "@/lib/colors";

export const alt = "Vesper Desk — Several streams. One quiet desk.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: colors.ink,
          color: colors.paper,
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            color: colors.glow,
          }}
        >
          WINDOWS DESKTOP
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, letterSpacing: -2 }}>
            Vesper Desk
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 16,
              fontSize: 36,
              color: colors.muted,
            }}
          >
            Several streams. One quiet desk.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: colors.faint }}>
          Focus mode. A thin bar. One quiet desk.
        </div>
      </div>
    ),
    { ...size },
  );
}
