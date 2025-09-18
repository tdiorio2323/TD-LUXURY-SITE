"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"
import { Instagram, Send } from "lucide-react"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "WEB", href: "/web" },
  { name: "DEV", href: "/dev" },
  { name: "SOCIAL", href: "/social" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "CONTACT", href: "/contact" },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo className="h-8" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium tracking-wider transition-colors hover:text-white ${
                  pathname === item.href ? "text-white border-b border-white" : "text-gray-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://instagram.com/tdstudiosco"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
            >
              <Instagram className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://t.me/tdstudioscorp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
            >
              <Send className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
