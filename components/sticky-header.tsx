"use client"

import { useParallax } from "@/lib/use-parallax"
import { Nav } from "@/components/nav"

export function StickyHeader() {
  const { isHeroVisible, headerOpacity, headerTransform } = useParallax()

  return (
    <div
      className="sticky-header"
      style={{
        opacity: headerOpacity,
        transform: headerTransform,
      }}
    >
      <div className="bg-black/95 backdrop-blur-md border-b border-white/10">
        <Nav />
      </div>
    </div>
  )
}