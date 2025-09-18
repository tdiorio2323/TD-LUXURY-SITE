"use client"

import Link from "next/link"
import type { ReactNode } from "react"

interface FrostedButtonProps {
  href?: string
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset" // Added missing type prop
}

export function FrostedButton({ href, children, className = "", onClick, type = "button" }: FrostedButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium hover:bg-white/20 transition-colors"

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  )
}
