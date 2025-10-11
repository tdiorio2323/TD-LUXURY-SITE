import type { Metadata } from "next"
import JsonLd from "@/components/JsonLd"
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "@/components/footer"
import { StickyHeader } from "@/components/sticky-header"
import { AnalyticsProvider } from "@/components/analytics-provider"
import "./globals.css"
import type React from "react"
import { Suspense } from "react"

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL("https://tdstudiosny.com"),
  title: {
    default: "TD Studios | Design Your Success",
    template: "%s | TD Studios",
  },
  description:
    "TD Studios builds high-end websites, platforms, and marketing systems for ambitious brands. Web design, development, and digital strategy that drives real results.",
  alternates: {
    canonical: "https://tdstudiosny.com",
  },
  openGraph: {
    title: "TD Studios",
    description:
      "High-end design, web, and marketing systems built for performance and control.",
    url: "https://tdstudiosny.com",
    siteName: "TD Studios",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tdstudiosny.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "TD Studios OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TD Studios | Design Your Success",
    description:
      "Design. Develop. Scale. TD Studios builds digital experiences for ambitious brands.",
    images: ["https://tdstudiosny.com/og-image.webp"],
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
      <head>
        <link
          rel="preload"
          as="image"
          href="/main-background.webp"
        />
      </head>
  <body className={`${inter.className} bg-black text-white antialiased`}>
        <a
          href="#main"
          className="skip-link absolute left-4 top-4 z-[9999] px-4 py-2 bg-white text-black rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:shadow-lg sr-only focus-visible:not-sr-only min-h-[44px]"
        >
          Skip to content
        </a>
        {/** Sitewide Organization JSON-LD Schema */}
        <JsonLd data={{
          "@context":"https://schema.org",
          "@type":"Organization",
          "name":"TD Studios",
          "url":"https://tdstudiosny.com",
          "logo":"https://tdstudiosny.com/og/td-logo.png",
          "sameAs":[
            "https://instagram.com/tdstudiosco"
          ]
        }} />
        {/* Skip Navigation Link for Accessibility */}
        <a 
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-md z-[60] font-medium min-h-[44px]"
        >
          Skip to content
        </a>
        <Script src='https://cdn.platform.openai.com/deployments/chatkit/chatkit.js' strategy='afterInteractive' />
        <AnalyticsProvider>
          <StickyHeader />
          <main id="main" role="main">
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
