import { GlassCard } from "@/components/glass-card"
import { FrostedButton } from "@/components/frosted-button"

const conversationReadyLanders = [
  "Story-driven sections, SEO-focused architecture, and instrumented funnels built for measurable wins.",
]

const scalableMarketingSites = [
  "Modular content models, CMS-ready components, and asset optimization that keeps teams shipping fast.",
]

const productEcosystems = [
  "Unified brand, docs, and support surfaces powered by design systems and enterprise-grade hosting.",
]

const everythingTiedToOutcomes = [
  "We lead discovery, prototype reviews, and performance calibration alongside your marketing and product leads. Expect dependable handoff, documentation, and a roadmap for optimization.",
]

const stackOperations = [
  "React, Next.js, Vite, Sanity, Contentful, Supabase, and bespoke integrations paired with analytics, QA, and experiment support.",
]

const discoveryCheckpoints = [
  "Kickoff audit + technical mapping",
  "Message architecture + content inventory",
  "Wireframes with rapid prototype review",
  "Analytics + measurement plan setup",
]

const launchPlaybook = [
  "Component library + design tokens",
  "CMS schema and publishing workflows",
  "Performance + accessibility tuning",
  "Launch runbooks with rollback paths",
]

const postLaunchSupport = [
  "Growth experiments + reporting cadence",
  "Knowledge transfer sessions",
  "Backlog grooming + roadmap templates",
  "Optional retained iteration support",
]

const suggestedContent = [
  "Client / industry snapshot",
  "Problem vs. solution summary",
  "Quantitative outcomes",
  "Services + deliverables list",
]

export default function WebPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/web-hero.jpg"
            alt="Luxury website design showcasing premium digital experiences and conversion-focused solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 md:bg-black/40 hero-overlay-mobile"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Website Design That Converts</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Premium website design with luxury aesthetics, conversion-focused UX, and stunning visual storytelling.
          </p>
          <FrostedButton href="/contact">Start your project</FrostedButton>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Conversion-Ready Landers</h3>
              <p className="text-white text-sm">
                Story-driven sections, SEO-focused architecture, and instrumented funnels built for measurable wins.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Scalable Marketing Sites</h3>
              <p className="text-white text-sm">
                Modular content models, CMS-ready components, and asset optimization that keeps teams shipping fast.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Product Ecosystems</h3>
              <p className="text-white text-sm">
                Unified brand, docs, and support surfaces powered by design systems and enterprise-grade hosting.
              </p>
            </GlassCard>
          </div>

          {/* Stats Section */}
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by teams launching high-impact digital products
            </h2>
          </div>

          {/* Everything tied to outcomes */}
          <GlassCard className="mb-20 luxury-glass">
            <h3 className="text-xl font-semibold mb-8">Everything tied to outcomes</h3>
            <p className="text-white mb-8">
              We lead discovery, prototype reviews, and performance calibration alongside your marketing and product
              leads. Expect dependable handoff, documentation, and a roadmap for optimization.
            </p>
          </GlassCard>

          {/* Stack & operations */}
          <GlassCard className="mb-20 luxury-glass">
            <h3 className="text-xl font-semibold mb-8">Stack & operations</h3>
            <p className="text-white mb-8">
              React, Next.js, Vite, Sanity, Contentful, Supabase, and bespoke integrations paired with analytics, QA,
              and experiment support.
            </p>
          </GlassCard>

          {/* Three Column Breakdown */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <GlassCard className="luxury-glass">
              <h3 className="text-xl font-semibold mb-6">Discovery checkpoints</h3>
              <ul className="space-y-3">
                {discoveryCheckpoints.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span className="text-white text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="luxury-glass">
              <h3 className="text-xl font-semibold mb-6">Launch playbook</h3>
              <ul className="space-y-3">
                {launchPlaybook.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span className="text-white text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="luxury-glass">
              <h3 className="text-xl font-semibold mb-6">Post-launch support</h3>
              <ul className="space-y-3">
                {postLaunchSupport.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span className="text-white text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          {/* Case Study Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <GlassCard className="luxury-glass">
              <h3 className="text-xl font-semibold mb-6">Quick Printz conversion lift</h3>
              <p className="text-white mb-6">
                We rebuilt the Quick Printz storefront with modular landing pages, a Sanity CMS model, and split-tested
                hero funnels. Within six weeks the brand saw a 38% increase in average order value and checkout speed
                improvements that doubled mobile conversion.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• 38% lift in average order value post-launch</li>
                <li>• Mobile checkout completion up 102%</li>
                <li>• Team can now launch seasonal offers in under an hour</li>
              </ul>
            </GlassCard>

            <GlassCard className="luxury-glass">
              <h3 className="text-xl font-semibold mb-6">Suggested content</h3>
              <ul className="space-y-3">
                {suggestedContent.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span className="text-white text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          {/* CTA */}
          <div className="text-center">
            <FrostedButton href="/contact">Start your project</FrostedButton>
          </div>
        </div>
      </section>
    </div>
  )
}
