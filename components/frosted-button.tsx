"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { trackButtonClick, trackCTAPerformance } from "@/lib/analytics"

interface FrostedButtonProps {
  href?: string
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  analyticsLabel?: string // Optional label for analytics tracking
  analyticsPosition?: string // Optional position for analytics
}

export function FrostedButton({ href, children, className = "", onClick, type = "button", analyticsLabel, analyticsPosition }: FrostedButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 bg-neutral-900/70 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium hover:bg-neutral-900/80 transition-all duration-300 mobile-touch-target mobile-btn-primary md:mobile-btn-primary"

  const handleClick = () => {
    const buttonText = typeof children === 'string' ? children : 'Button'
    const label = analyticsLabel || buttonText
    const position = analyticsPosition || 'unknown'

    trackButtonClick(label, position)
    trackCTAPerformance(label, position)

    if (onClick) {
      onClick()
    }
  }

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${className}`}
        onClick={handleClick}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={handleClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  )
}
