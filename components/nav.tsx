"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"
import { Instagram, MessageCircle, Send, Menu, X } from "lucide-react"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "WEB", href: "/web" },
  { name: "DEV", href: "/dev" },
  { name: "DESIGN", href: "/design" },
  { name: "SOCIAL", href: "/social" },
  { name: "RESOURCES", href: "/resources" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "CONTACT", href: "/contact" },
]

export function Nav() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = useMemo(() => {
    if (typeof window !== "undefined" && window.location.host === "shopquickprintz.tdstudiosny.com") {
      return [...navItems.slice(0, 2), { name: "PREMADE", href: "/premade-designs" }, ...navItems.slice(2)]
    }
    return navItems
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-black/80 backdrop-blur-sm border-b border-white/10">
      {/* Desktop: Centered Logo at Top */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 pt-6 pb-2">
          <div className="flex justify-center">
            <Link href="/" className="flex items-center" aria-label="TD Studios - Home">
              <Logo className="h-16" aria-hidden="true" />
              <span className="sr-only">TD Studios</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation and Mobile Logo Section */}
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-4">
        <div className="flex items-center justify-between">
          {/* Mobile: Centered Logo */}
          <div className="md:hidden flex-1 flex justify-center">
            <Link href="/" className="flex items-center" aria-label="TD Studios - Home">
              <Logo className="h-12" aria-hidden="true" />
              <span className="sr-only">TD Studios</span>
            </Link>
          </div>

          {/* Desktop Navigation - Now Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-12">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium tracking-wider transition-colors hover:text-white ${pathname === item.href ? "text-white border-b border-white" : "text-white/70"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Social Icons - Now on the Right */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:347-485-9935"
              aria-label="Call TD Studios at 347-485-9935"
              className="p-4 bg-neutral-900/70 backdrop-blur-sm rounded-lg hover:bg-blue-500/20 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <Send className="w-6 h-6 text-white group-hover:text-blue-500 transition-colors" aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/13474859935"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message TD Studios on WhatsApp"
              className="p-4 bg-neutral-900/70 backdrop-blur-sm rounded-lg hover:bg-green-500/20 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500/50"
            >
              <MessageCircle className="w-6 h-6 text-white group-hover:text-green-500 transition-colors" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com/tdstudiosco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow TD Studios on Instagram"
              className="p-4 bg-neutral-900/70 backdrop-blur-sm rounded-lg hover:bg-neutral-900/80 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
            </a>

          </div>

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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-md z-40">
          <div className="flex flex-col justify-between h-full">
            {/* Navigation Items */}
            <div className="flex flex-col items-center justify-start pt-16 space-y-6 px-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full text-center text-2xl font-medium tracking-wider transition-all duration-300 mobile-nav-item mobile-touch-target flex items-center justify-center py-4 border-b border-white/10 ${pathname === item.href ? "text-white bg-white/5" : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center space-x-8 pb-16 px-6">
              <a
                href="tel:347-485-9935"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Call TD Studios at 347-485-9935"
                className="p-4 bg-neutral-900/70 backdrop-blur-sm rounded-lg hover:bg-blue-500/20 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <Send className="w-6 h-6 text-white group-hover:text-blue-500 transition-colors" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/13474859935"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Message TD Studios on WhatsApp"
                className="p-4 bg-neutral-900/70 backdrop-blur-sm rounded-lg hover:bg-green-500/20 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500/50"
              >
                <MessageCircle className="w-6 h-6 text-white group-hover:text-green-500 transition-colors" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/tdstudiosco"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Follow TD Studios on Instagram"
                className="p-4 bg-neutral-900/70 backdrop-blur-sm rounded-lg hover:bg-neutral-900/80 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
