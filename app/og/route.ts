import { ImageResponse } from "next/og";
import React from "react";
export const runtime = "edge";
export const alt: string = "TD Studios";
export const contentType = "image/png";
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const t = (searchParams.get("title") ?? "TD Studios").slice(0, 80);
  return new ImageResponse(
    React.createElement(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0B0C",
          color: "#fff",
          fontSize: 64,
          padding: "40px",
        },
      },
      React.createElement(
        "div",
        { style: { textAlign: "center", lineHeight: 1.1 } },
        t
      )
    ),
    { width: 1200, height: 630 }
  );
}
