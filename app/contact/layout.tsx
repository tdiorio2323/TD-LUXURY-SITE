import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | TD Studios",
  description: "Start your luxury design project with TD Studios. Get quotes for web design, product development, branding, and social media marketing.",
  alternates: {
    canonical: "https://tdstudiosny.com/contact",
  },
  openGraph: {
    title: "Contact | TD Studios",
    description: "Start your luxury design project with TD Studios. Get quotes for web design, product development, branding, and social media marketing.",
    url: "https://tdstudiosny.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | TD Studios",
    description: "Start your luxury design project with TD Studios. Get quotes for web design, product development, branding, and social media marketing.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
