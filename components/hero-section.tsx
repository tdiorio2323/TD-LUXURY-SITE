"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { HeroVideo } from "@/components/hero-video"
import type { StaticImageData } from "next/image"

interface HeroSectionProps {
  heroImage: StaticImageData
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bg = bgRef.current
    if (!bg) return

    const onScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const fadeThreshold = viewportHeight * 0.3

      // Fade out background as user scrolls past 30% of viewport height
      const opacity = scrollY > fadeThreshold ? 0 : 1 - (scrollY / fadeThreshold) * 0.3
      bg.style.opacity = opacity.toString()
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video with Fade Effect */}
      <div
        ref={bgRef}
        className="absolute inset-0 transition-opacity duration-500"
        style={{ willChange: "opacity" }}
      >
        <HeroVideo
          videoSrc="/hero-video.mp4"
          posterSrc="/main-background.webp"
          fallbackImageSrc={heroImage}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <div className="animate-fade-in-up max-w-4xl mx-auto">
          {/* Dark overlay backdrop for text readability */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md rounded-2xl sm:rounded-3xl -z-10 transform scale-110" />

          <div className="py-8 sm:py-12 px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl leading-tight">
              Design Your Success
            </h1>
            <p className="mt-4 sm:mt-6 text-white text-base sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              High-end websites, branding, and marketing systems engineered for creators and ambitious brands.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/work"
                className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/90 hover:bg-white text-black text-sm font-semibold tracking-wide transition-all duration-300 shadow-xl flex items-center justify-center"
              >
                View Our Work
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-black/80 hover:bg-black border border-white/30 text-white text-sm font-semibold tracking-wide backdrop-blur-lg transition-all duration-300 shadow-xl flex items-center justify-center"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
