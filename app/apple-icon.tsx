// iOS home-screen icon: orbital atom + IB badge.
import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${SUBJECT.themeColorLight} 0%, #4338ca 100%)`,
        }}
      >
        <svg width={96} height={96} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 4 }}>
          <g fill="none" stroke="#ffffff" strokeWidth={6}>
            <ellipse cx="50" cy="50" rx="40" ry="16" transform="rotate(30 50 50)" />
            <ellipse cx="50" cy="50" rx="40" ry="16" transform="rotate(90 50 50)" />
            <ellipse cx="50" cy="50" rx="40" ry="16" transform="rotate(150 50 50)" />
          </g>
          <circle cx="50" cy="50" r="8" fill="#ffffff" />
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 4,
            padding: "2px 14px",
            borderRadius: 999,
            background: "#ffffff",
            color: SUBJECT.themeColorLight,
            fontSize: 19,
            fontWeight: 800,
            letterSpacing: 1,
          }}
        >
          {SUBJECT.shortName}
        </div>
      </div>
    ),
    { ...size },
  );
}
