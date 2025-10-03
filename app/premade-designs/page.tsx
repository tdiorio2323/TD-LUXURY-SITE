import { GlassCard } from "@/components/glass-card"
import { FrostedButton } from "@/components/frosted-button"

export default function PremadeDesignsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/design-hero.jpg"
            alt="Premade designs showcase"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 hero-overlay-mobile" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Premade Designs</h1>
          <p className="text-white/90 text-lg">Curated, ready-to-deploy assets for Quick Printz campaigns.</p>
        </div>
      </section>

      {/* Catalog placeholder */}
      <section className="relative py-16 px-6">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <GlassCard key={i} className="glass-mobile mobile-content-spacing">
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-neutral-900/70 border border-white/10 flex items-center justify-center text-white/60">
                  Preview {i}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Design Pack {i}</h3>
                <p className="text-white text-sm mb-4">Includes social posts, story frames, and print-ready files.</p>
                <FrostedButton href="/contact?type=premade" className="w-full">Request Access</FrostedButton>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

