import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Let's build the next flagship experience.</h2>
          <p className="text-white max-w-2xl mx-auto mb-8">
            Strategy, design, development, and social programs for ambitious brands headquartered in New York City,
            serving teams worldwide.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-neutral-900/70 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium hover:bg-neutral-900/80 transition-colors"
          >
            Start your project
          </Link>
        </div>

        <div className="text-center text-white text-sm">© 2025 TD Studios. All rights reserved.</div>
      </div>
    </footer>
  )
}
