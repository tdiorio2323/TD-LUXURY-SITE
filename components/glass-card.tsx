import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`bg-neutral-900/70 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 text-white ${className}`}
      suppressHydrationWarning
    >
      {children}
    </div>
  )
}
