import { ImageResponse } from "next/og";

export const alt =
  "Black Hat Iconic — secure software, networking, and electronics solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "72px 88px",
        color: "white",
        background:
          "radial-gradient(circle at 80% 25%, #7f1d1d 0%, #170606 32%, #000000 70%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          color: "#ef4444",
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: 6,
          textTransform: "uppercase",
        }}
      >
        <span
          style={{
            width: 16,
            height: 16,
            display: "flex",
            borderRadius: 999,
            background: "#ef4444",
            boxShadow: "0 0 28px #ef4444",
          }}
        />
        Black Hat Iconic
      </div>
      <div
        style={{
          display: "flex",
          maxWidth: 960,
          marginTop: 38,
          fontSize: 70,
          fontWeight: 800,
          lineHeight: 1.08,
        }}
      >
        Secure software. Resilient networks. Intelligent infrastructure.
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 42,
          color: "#d1d5db",
          fontSize: 28,
        }}
      >
        Enterprise technology solutions built in India
      </div>
    </div>,
    size,
  );
}
