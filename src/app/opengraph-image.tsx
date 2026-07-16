import { ImageResponse } from "next/og";

export const alt = "RENCO LLC — Bathroom & Home Remodeling in Gig Harbor & Seattle";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
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
          background: "#0E0E0E",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "#C9A96A",
            display: "flex",
          }}
        >
          RENCO LLC
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 40,
            color: "#F2EDE4",
            textAlign: "center",
            display: "flex",
          }}
        >
          Bathroom &amp; Home Remodeling — Gig Harbor &amp; Seattle
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 30,
            color: "#9A9388",
            textAlign: "center",
            display: "flex",
          }}
        >
          5.0★ · Licensed &amp; Insured · 200+ Projects
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
