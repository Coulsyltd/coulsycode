import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background:
            "radial-gradient(1200px 600px at 20% 10%, rgba(29,78,216,0.40), transparent 60%), radial-gradient(900px 520px at 80% 20%, rgba(67,56,202,0.35), transparent 55%), linear-gradient(135deg, #0b1220 0%, #0b1730 50%, #0b1220 100%)",
          color: "white",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        <div style={{ fontSize: 26, opacity: 0.95, letterSpacing: "-0.02em" }}>
          Coulsy Code
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 72,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            fontWeight: 800,
            maxWidth: 980,
          }}
        >
          Web builds that drive enquiries.
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 28,
            lineHeight: 1.3,
            color: "rgba(255,255,255,0.85)",
            maxWidth: 980,
          }}
        >
          Based in York. Built to rank. Built to convert.
        </div>
      </div>
    ),
    size
  );
}


