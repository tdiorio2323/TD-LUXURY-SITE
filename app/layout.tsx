import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "@/components/footer"
import { StickyHeader } from "@/components/sticky-header"
import { AnalyticsProvider } from "@/components/analytics-provider"
import "./globals.css"
import type React from "react"
import { Suspense } from "react"

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: "TD Studios | Luxury Creative & Digital Agency",
  description: "A luxury creative agency building flagship digital experiences. We engineer for clarity, conversion, and authority to elevate ambitious brands.",
  openGraph: {
    title: "TD Studios | Luxury Creative & Digital Agency",
    description: "A luxury creative agency building flagship digital experiences. We engineer for clarity, conversion, and authority to elevate ambitious brands.",
    images: [{
      url: "https://tdstudiosny.com/og-image-short.jpg",
      width: 1200,
      height: 630,
      alt: "TD Studios - Luxury Creative & Digital Agency",
    }],
    url: "https://tdstudiosny.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TD Studios | Luxury Creative & Digital Agency",
    description: "A luxury creative agency building flagship digital experiences. We engineer for clarity, conversion, and authority to elevate ambitious brands.",
    images: ["https://tdstudiosny.com/twitter-image-short.jpg"],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased`}>
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
              // Simple mobile viewport height fix
              function setVH() {
                let vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', vh + 'px');
              }

              // Set initial values
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
