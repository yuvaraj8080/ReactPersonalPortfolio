import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/constants/site";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

const STATS = ["80+ Apps Built", "25+ Live in Production", "Android · iOS · Web"];

/** Shared 1200x630 social-preview card, reused by app/opengraph-image.tsx and app/twitter-image.tsx. */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
          padding: "80px 96px",
          backgroundColor: "#000",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(59,130,246,0.35), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 24,
            backgroundColor: "rgba(59,130,246,0.15)",
            border: "2px solid rgba(59,130,246,0.4)",
            color: "#3b82f6",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          YD
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#fff", lineHeight: 1.15 }}>
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", fontSize: 32, fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>
          Full-Stack Developer &amp; Flutter Specialist
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
          {STATS.map((stat) => (
            <div
              key={stat}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.85)",
                fontSize: 22,
              }}
            >
              {stat}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
