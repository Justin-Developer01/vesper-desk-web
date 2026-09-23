import { ImageResponse } from "next/og";
import { productName, tagline } from "@/lib/site";

export const alt = `${productName} — ${tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const border = "1px solid rgba(150, 206, 245, 0.22)";

const tiles = [
  "linear-gradient(160deg, #0f3a4d, #0a1a2a)",
  "linear-gradient(180deg, #24463f, #0d1c19)",
  "linear-gradient(180deg, #3a2a24, #140f0e)",
];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 72px",
          backgroundColor: "#07090d",
          backgroundImage:
            "radial-gradient(circle at 50% -20%, rgba(110, 186, 255, 0.28), transparent 60%)",
          color: "#eef3f8",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 500 }}>
          <div style={{ display: "flex", fontSize: 20, letterSpacing: 5, color: "#8ecfff" }}>
            FOR WINDOWS
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 80, letterSpacing: -3 }}>
            {productName}
          </div>
          <div style={{ display: "flex", marginTop: 16, fontSize: 30, lineHeight: 1.3, color: "#b7c4d2" }}>
            {tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            height: 340,
            borderRadius: 18,
            border: "1px solid rgba(150, 206, 245, 0.4)",
            backgroundColor: "#0a0e14",
            boxShadow: "0 0 80px rgba(80, 160, 240, 0.25)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: 36,
              padding: "0 16px",
              gap: 10,
              fontSize: 14,
              color: "#b7c4d2",
              borderBottom: border,
              backgroundColor: "#121922",
            }}
          >
            <div style={{ display: "flex", color: "#eef3f8" }}>north room</div>
            <div style={{ display: "flex" }}>Late-night synth set</div>
          </div>
          <div style={{ display: "flex", flex: 1, gap: 8, padding: 8 }}>
            <div
              style={{
                display: "flex",
                flex: 3,
                borderRadius: 10,
                border: "1px solid rgba(142, 207, 255, 0.7)",
                backgroundImage:
                  "radial-gradient(circle at 68% 36%, rgba(255, 196, 150, 0.6), transparent 40%), linear-gradient(180deg, #1c2c48 0%, #3c3354 55%, #141a26 100%)",
              }}
            />
            <div style={{ display: "flex", flex: 1, flexDirection: "column", gap: 8 }}>
              {tiles.map((background) => (
                <div
                  key={background}
                  style={{ display: "flex", flex: 1, borderRadius: 8, border, backgroundImage: background }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
