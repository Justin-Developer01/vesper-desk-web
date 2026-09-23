import { ImageResponse } from "next/og";

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
          backgroundColor: "#0b0c0f",
          color: "#f4f0e8",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            color: "#e4c49a",
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
              color: "#c4bdb0",
            }}
          >
            Several streams. One quiet desk.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#9c9588" }}>
          A frosted multi-stream Twitch overlay
        </div>
      </div>
    ),
    { ...size },
  );
}
