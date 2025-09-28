import { GlassCard } from "@/components/glass-card"
import { FrostedButton } from "@/components/frosted-button"
import { DesignCarousel } from "@/components/design-carousel"

const designServices = [
  "Brand identity systems, logo design, and visual language that communicates premium positioning and builds trust.",
]

const luxuryBranding = [
  "Color palettes, typography, iconography, and brand guidelines crafted for sophisticated market positioning.",
]

const digitalAssets = [
  "Marketing materials, social media templates, and digital brand assets optimized for consistent brand experiences.",
]

const designProcess = [
  "Brand discovery and competitive analysis",
  "Concept development and mood boarding",
  "Visual identity design and refinement",
  "Brand guidelines and asset delivery",
]

const brandDeliverables = [
  "Logo suite with variations and usage guidelines",
  "Color palette with accessibility considerations",
  "Typography system and hierarchy",
  "Brand guidelines document and asset library",
]

const ongoingSupport = [
  "Brand extension and evolution guidance",
  "Marketing collateral design support",
  "Brand consistency audits and optimization",
  "Team training and brand adoption workshops",
]

const caseStudyContent = [
  "Brand transformation case study",
  "Before and after brand evolution",
  "Market positioning strategy",
  "Implementation and rollout process",
]

export default function DesignPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/design-hero.jpg"
            alt="Luxury brand design showcasing premium visual identity and sophisticated design systems"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 md:bg-black/40 hero-overlay-mobile"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Luxury Brand Design</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Premium brand identity and visual design that elevates your market position and builds lasting customer connections.
          </p>
          <FrostedButton href="/contact">Start your brand transformation</FrostedButton>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Brand Identity Systems</h3>
              <p className="text-white text-sm">
                Brand identity systems, logo design, and visual language that communicates premium positioning and builds trust.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Luxury Branding</h3>
              <p className="text-white text-sm">
                Color palettes, typography, iconography, and brand guidelines crafted for sophisticated market positioning.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Digital Assets</h3>
              <p className="text-white text-sm">
                Marketing materials, social media templates, and digital brand assets optimized for consistent brand experiences.
              </p>
            </GlassCard>
          </div>

          {/* Portfolio Carousel */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Design Portfolio</h2>
              <p className="text-white text-lg">Showcasing our latest luxury brand transformations</p>
            </div>
            <DesignCarousel />
          </div>

          {/* Stats Section */}
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by luxury brands for sophisticated design solutions
            </h2>
          </div>

          {/* Design philosophy */}
          <GlassCard className="mb-20 luxury-glass">
            <h3 className="text-xl font-semibold mb-8">Design that drives business outcomes</h3>
            <p className="text-white mb-8">
              We create visual identities that don't just look beautiful—they strategically position your brand in the luxury market,
              build customer trust, and drive measurable business results through sophisticated design psychology.
            </p>
          </GlassCard>

          {/* Showcase Image Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-800 relative">
                <img
                  src="/design-showcase-1.jpg"
                  alt="Premium brand identity design showcase"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white px-6">
                    <h4 className="text-xl font-semibold mb-2">Brand Identity</h4>
                    <p className="text-sm text-white/80">Sophisticated visual systems that command attention</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-800 relative">
                <img
                  src="/design-showcase-2.jpg"
                  alt="Luxury packaging and product design"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white px-6">
                    <h4 className="text-xl font-semibold mb-2">Product Design</h4>
                    <p className="text-sm text-white/80">Premium packaging and product experiences</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-800 relative">
                <img
                  src="/design-showcase-3.jpg"
                  alt="Digital marketing and campaign design"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white px-6">
                    <h4 className="text-xl font-semibold mb-2">Digital Marketing</h4>
                    <p className="text-sm text-white/80">Campaign assets that convert and engage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Creative process */}
          <GlassCard className="mb-20 luxury-glass">
            <h3 className="text-xl font-semibold mb-8">Collaborative creative process</h3>
            <p className="text-white mb-8">
              From initial brand discovery to final asset delivery, we work closely with your team to ensure every design decision
              aligns with your business goals and resonates with your target audience.
            </p>
          </GlassCard>

          {/* Three Column Breakdown */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <GlassCard className="luxury-glass">
              <h3 className="text-xl font-semibold mb-6">Design Process</h3>
              <ul className="space-y-3">
                {designProcess.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span className="text-white text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="luxury-glass">
              <h3 className="text-xl font-semibold mb-6">Brand Deliverables</h3>
              <ul className="space-y-3">
                {brandDeliverables.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span className="text-white text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="luxury-glass">
              <h3 className="text-xl font-semibold mb-6">Ongoing Support</h3>
              <ul className="space-y-3">
                {ongoingSupport.map((item, index) => (
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
              <h3 className="text-xl font-semibold mb-6">Featured brand transformation</h3>
              <p className="text-white mb-8">
                Showcase your most successful brand design project here. Include metrics on brand recognition improvement,
                customer engagement increases, and business impact from the new visual identity.
              </p>
            </GlassCard>

            <GlassCard className="luxury-glass">
              <h3 className="text-xl font-semibold mb-6">Case study highlights</h3>
              <ul className="space-y-3">
                {caseStudyContent.map((item, index) => (
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
            <FrostedButton href="/contact">Start your brand transformation</FrostedButton>
          </div>
        </div>
      </section>
    </div>
  )
}