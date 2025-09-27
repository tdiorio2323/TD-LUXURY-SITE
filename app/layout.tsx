import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "@/components/footer"
import { StickyHeader } from "@/components/sticky-header"
import { AnalyticsProvider } from "@/components/analytics-provider"
import "./globals.css"
import type React from "react"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "TD Studios - Luxury Strategy Creativity",
  description: "Premium design solutions tailored for high-growth brands",
  generator: "v0.app",
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  userScalable: false,
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
          <StickyHeader />
          <main>
            <Suspense fallback={<div className="text-white p-8">Loading...</div>}>{children}</Suspense>
          </main>
          <Footer />
        </AnalyticsProvider>
        <Analytics />

        {/* Mobile Viewport Height Fix Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Fix mobile viewport height issues
              function setVH() {
                let vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', vh + 'px');
              }

              // Set initial value
              setVH();

              // Re-calculate on resize and orientation change
              window.addEventListener('resize', setVH);
              window.addEventListener('orientationchange', () => {
                setTimeout(setVH, 100);
              });

              // Stagger animation delays for mobile content
              document.addEventListener('DOMContentLoaded', () => {
                const mobileContentElements = document.querySelectorAll('.mobile-content-spacing');
                mobileContentElements.forEach((el, index) => {
                  el.style.setProperty('--stagger-delay', index);
                });
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
