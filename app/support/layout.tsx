import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support | TD Studios",
  description: "Get technical support, creative guidance, and project assistance from the TD Studios team. Live chat support for web design, development, and branding questions.",
  alternates: {
    canonical: "https://tdstudiosny.com/support",
  },
  openGraph: {
    title: "Support | TD Studios",
    description: "Get technical support, creative guidance, and project assistance from the TD Studios team. Live chat support for web design, development, and branding questions.",
    url: "https://tdstudiosny.com/support",
  },
  twitter: {
    card: "summary_large_image",
    title: "Support | TD Studios",
    description: "Get technical support, creative guidance, and project assistance from the TD Studios team. Live chat support for web design, development, and branding questions.",
  },
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
