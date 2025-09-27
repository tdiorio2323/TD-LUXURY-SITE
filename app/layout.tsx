import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { AnalyticsProvider } from "@/components/analytics-provider"
import "./globals.css"
import type React from "react"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "TD Studios - Luxury Strategy Creativity",
  description: "Premium design solutions tailored for high-growth brands",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  console.log("[v0] Layout rendering with children:", !!children)
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} bg-black text-white antialiased`}>
        <AnalyticsProvider>
          <Nav />
          <main className="pt-32">
            <Suspense fallback={<div className="text-white p-8">Loading...</div>}>{children}</Suspense>
          </main>
          <Footer />
        </AnalyticsProvider>
        <Analytics />
      </body>
    </html>
  )
}
