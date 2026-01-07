import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background:
            "radial-gradient(1200px 630px at 20% 10%, rgba(29,78,216,0.40), transparent 60%), radial-gradient(900px 540px at 80% 20%, rgba(67,56,202,0.35), transparent 55%), linear-gradient(135deg, #0b1220 0%, #0b1730 50%, #0b1220 100%)",
          color: "white",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 22,
            opacity: 0.95,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "linear-gradient(90deg, #1d4ed8, #4338ca)",
            }}
          />
          <div style={{ fontSize: 26, letterSpacing: "-0.02em" }}>
            Coulsy Code
          </div>
        </div>

        <div
          style={{
            fontSize: 74,
            lineHeight: 1.04,
            letterSpacing: "-0.04em",
            fontWeight: 800,
            maxWidth: 980,
          }}
        >
          Web builds that drive enquiries.
        </div>

        <div
          style={{
            marginTop: 22,
            fontSize: 30,
            lineHeight: 1.3,
            color: "rgba(255,255,255,0.85)",
            maxWidth: 980,
          }}
        >
          Small, senior-led team — based in York, serving Yorkshire and beyond.
        </div>

        <div
          style={{
            marginTop: 44,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {["Next.js", "React", "TypeScript", "Local SEO"].map((tag) => (
            <div
              key={tag}
              style={{
                fontSize: 22,
                padding: "10px 14px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}


