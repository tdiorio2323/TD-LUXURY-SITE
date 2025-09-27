"use client"

import { useParallax } from "@/lib/use-parallax"
import { Nav } from "@/components/nav"

export function StickyHeader() {
  const { isHeroVisible, headerOpacity, headerTransform } = useParallax()

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 sticky-header"
      style={{
        opacity: isHeroVisible ? 1 : headerOpacity,
        transform: isHeroVisible ? 'translateY(0)' : headerTransform,
      }}
    >
      <div className="bg-black/95 backdrop-blur-md border-b border-white/10">
        <Nav />
      </div>
    </div>
  )
}