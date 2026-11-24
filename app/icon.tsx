// Browser-tab icon: cobalt/indigo square with crisp orbital atom glyph.
import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${SUBJECT.themeColorLight} 0%, #4338ca 100%)`,
          borderRadius: 8,
        }}
      >
        <svg width={24} height={24} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#ffffff" strokeWidth={7}>
            <ellipse cx="50" cy="50" rx="40" ry="16" transform="rotate(30 50 50)" />
            <ellipse cx="50" cy="50" rx="40" ry="16" transform="rotate(90 50 50)" />
            <ellipse cx="50" cy="50" rx="40" ry="16" transform="rotate(150 50 50)" />
          </g>
          <circle cx="50" cy="50" r="8" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
