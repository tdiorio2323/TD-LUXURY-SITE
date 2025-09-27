import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/footer-background.jpg"
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">Let's build the next flagship experience.</h2>
          <p className="text-white max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
            Strategy, design, development, and social programs for ambitious brands headquartered in New York City,
            serving teams worldwide.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 bg-neutral-900/70 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium hover:bg-neutral-900/80 transition-colors text-sm sm:text-base"
          >
            Start your project
          </Link>
        </div>

        <div className="text-center text-white text-sm">© 2025 TD Studios. All rights reserved.</div>
      </div>
    </footer>
  )
}
