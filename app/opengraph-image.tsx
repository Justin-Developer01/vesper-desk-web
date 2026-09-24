import { ImageResponse } from "next/og";
import { webTokens } from "@vesper-desk/shared";

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
          backgroundColor: webTokens.colorInk,
          color: webTokens.colorPaper,
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            color: webTokens.colorGlow,
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
              color: webTokens.colorMuted,
            }}
          >
            Several streams. One quiet desk.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: webTokens.colorFaint }}>
          Focus mode. A thin bar. One quiet desk.
        </div>
      </div>
    ),
    { ...size },
  );
}
