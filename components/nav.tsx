"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"
import { Instagram, Send, Menu, X } from "lucide-react"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "WEB", href: "/web" },
  { name: "DEV", href: "/dev" },
  { name: "SOCIAL", href: "/social" },
  { name: "RESOURCES", href: "/resources" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "CONTACT", href: "/contact" },
]

export function Nav() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="TD Studios - Home">
            <Logo className="h-16" aria-hidden="true" />
            <span className="sr-only">TD Studios</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium tracking-wider transition-colors hover:text-white ${
                  pathname === item.href ? "text-white border-b border-white" : "text-white/70"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Icons and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/tdstudiosco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow TD Studios on Instagram"
              className="p-4 bg-neutral-900/70 backdrop-blur-sm rounded-lg hover:bg-neutral-900/80 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="https://t.me/tdstudioscorp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with TD Studios on Telegram"
              className="p-4 bg-neutral-900/70 backdrop-blur-sm rounded-lg hover:bg-neutral-900/80 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <Send className="w-6 h-6 text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden p-4 bg-neutral-900/70 backdrop-blur-sm rounded-lg hover:bg-neutral-900/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 mobile-touch-target"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-white" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-32 bg-black z-40">
          <div className="flex flex-col items-center justify-start pt-16 min-h-[60vh] space-y-2 px-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full text-center text-2xl font-medium tracking-wider transition-colors hover:text-white mobile-nav-item mobile-touch-target flex items-center justify-center ${
                  pathname === item.href ? "text-white border-b-2 border-white pb-2" : "text-white/70"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
