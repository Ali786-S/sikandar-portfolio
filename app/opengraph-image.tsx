import { ImageResponse } from "next/og";
export const alt = "Sikandar Ali — Software developer, London";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0d1524",
        color: "#f6f5f1",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 80,
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: 24, display: "flex", color: "#a7b3ff" }}>
        SIKANDAR ALI / SOFTWARE DEVELOPER
      </div>
      <div
        style={{
          fontSize: 78,
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: -4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        Building software.
        <br />
        Creating possibility.
      </div>
      <div
        style={{
          fontSize: 24,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>AI & digital innovation</span>
        <span>London, UK ↗</span>
      </div>
    </div>,
    { ...size },
  );
}
