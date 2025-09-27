"use client"

import { Globe, Share2, Palette, Award, Download, Calendar, Rocket, Mail } from "lucide-react"
import { GlassCard } from "@/components/glass-card"
import { FrostedButton } from "@/components/frosted-button"
import { ABTestWrapper, useABTestVariant } from "@/components/ab-test-wrapper"
import { StickyHeader } from "@/components/sticky-header"
import { useParallax } from "@/lib/use-parallax"

const services = [
  {
    icon: Globe,
    title: "Web Experience",
    description: "Marketing sites, landers, and product stories engineered for clarity and conversion.",
    link: "Explore Web →",
    href: "/web",
  },
  {
    icon: Award,
    title: "Product & Platform",
    description: "Application architecture, dashboards, and feature delivery for scale.",
    link: "Visit Dev →",
    href: "/dev",
  },
  {
    icon: Share2,
    title: "Social Programs",
    description: "Editorial programming, campaign kits, and community ops that sustain growth.",
    link: "See Social →",
    href: "/social",
  },
  {
    icon: Palette,
    title: "Brand & Identity",
    description: "Design systems, visual identity, and asset libraries crafted to travel everywhere.",
    link: "Custom Design →",
    href: "/portfolio",
  },
  {
    icon: Award,
    title: "Digital Assets",
    description: "Ready-to-use content packs, templates, and downloads to accelerate launches.",
    link: "Browse Assets →",
    href: "/portfolio",
  },
  {
    icon: Share2,
    title: "Partnerships",
    description: "Referral alliances and white-label collaborations for agencies and boutiques.",
    link: "Partnerships →",
    href: "/contact",
  },
]

const capabilities = [
  {
    title: "Design Systems",
    subtitle: "Components, scalable UX",
    image: "/modern-design-system-interface.png",
  },
  {
    title: "E-commerce",
    subtitle: "Convert with speed",
    image: "/sleek-ecommerce-interface.jpg",
  },
  {
    title: "Brand Kits",
    subtitle: "Visual identity everywhere",
    image: "/brand-identity-kit-design.jpg",
  },
]

export default function HomePage() {
  console.log("[v0] HomePage rendering")
  const { heroTransform } = useParallax()

  return (
    <div className="parallax-container">
      {/* Navigation - Always visible */}
      <StickyHeader />

      {/* Fixed Hero Background */}
      <section className="hero-fixed">
        <div
          className="parallax-hero h-full w-full"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </section>

      {/* Scrollable Content Overlay */}
      <div className="content-overlay">
        {/* Hero Content - Full Viewport Height */}
        <section className="relative h-screen h-[100dvh] flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 z-10 flex flex-col items-center justify-center h-full w-full">
            <div className="flex flex-col items-center justify-center text-center w-full">
              <h1 className="mobile-title md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance text-white leading-tight text-center">
                LUXURY STRATEGY CREATIVITY
              </h1>
              <p className="mobile-subtitle md:text-2xl text-white mb-6 sm:mb-8 text-center">
                All in one place.
              </p>
            </div>
          </div>
        </section>

      {/* Services Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-white text-lg">Premium design solutions tailored for high-growth brands</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mobile-grid">
            {services.map((service, index) => (
              <GlassCard key={index} className="hover:bg-neutral-900/80 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-neutral-900/80 border border-white/20 rounded-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
                    <p className="text-white text-sm mb-4">{service.description}</p>
                    <a
                      href={service.href}
                      className="text-white text-sm underline-offset-4 hover:underline transition-opacity hover:opacity-80"
                    >
                      {service.link}
                    </a>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-6">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Trusted by teams launching high-impact digital products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 mobile-grid">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white text-sm">Premium Brands Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">300%</div>
                <div className="text-white text-sm">Avg. Conversion Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">$2M+</div>
                <div className="text-white text-sm">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white text-sm">Client Satisfaction</div>
              </div>
            </div>

            {/* Luxury Brand Recognition */}
            <div className="mt-16">
              <p className="text-sm text-white/60 mb-8 uppercase tracking-wider">Industry Recognition</p>
              <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
                <div className="glass-light px-6 py-3 rounded-lg">
                  <span className="text-xs text-white/80 font-medium">AWWWARDS WINNER</span>
                </div>
                <div className="glass-light px-6 py-3 rounded-lg">
                  <span className="text-xs text-white/80 font-medium">CSS DESIGN AWARDS</span>
                </div>
                <div className="glass-light px-6 py-3 rounded-lg">
                  <span className="text-xs text-white/80 font-medium">WEBBY HONOREE</span>
                </div>
                <div className="glass-light px-6 py-3 rounded-lg">
                  <span className="text-xs text-white/80 font-medium">FWA SITE OF THE DAY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-white text-lg">Real results from luxury brands we've transformed</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 mobile-grid">
            <GlassCard className="luxury-glass">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">M</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Marcus Chen</div>
                  <div className="text-white text-sm">CEO, TechVenture Labs</div>
                </div>
              </div>
              <p className="text-white text-sm italic mb-4">
                "TD Studios transformed our brand identity completely. The luxury aesthetic they created
                elevated our market positioning and increased our client acquisition by 400%."
              </p>
              <div className="flex text-yellow-400 text-sm">★★★★★</div>
            </GlassCard>

            <GlassCard className="luxury-glass">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">S</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Sarah Williams</div>
                  <div className="text-white text-sm">CMO, Luxury Brands Inc</div>
                </div>
              </div>
              <p className="text-white text-sm italic mb-4">
                "The attention to detail and understanding of luxury market psychology is unmatched.
                Our conversion rates doubled within the first month of launch."
              </p>
              <div className="flex text-yellow-400 text-sm">★★★★★</div>
            </GlassCard>

            <GlassCard className="luxury-glass">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">R</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Robert Zhang</div>
                  <div className="text-white text-sm">Founder, Elite Commerce</div>
                </div>
              </div>
              <p className="text-white text-sm italic mb-4">
                "Working with TD Studios was like having a luxury brand consultant and top-tier
                development team in one. The ROI has been extraordinary."
              </p>
              <div className="flex text-yellow-400 text-sm">★★★★★</div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Featured Capabilities */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Capabilities</h2>
            <p className="text-white text-lg">A quick peek at what we build</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mobile-grid">
            {capabilities.map((capability, index) => (
              <GlassCard key={index} className="overflow-hidden hover:bg-neutral-900/80 transition-all duration-300">
                <div className="aspect-[4/3] bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={capability.image || "/placeholder.svg"}
                    alt={capability.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-lg font-semibold mb-1 text-white">{capability.title}</h3>
                  <p className="text-white text-sm">{capability.subtitle}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnets Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Journey</h2>
            <p className="text-white text-lg">Choose your perfect entry point to luxury design</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Free Resource */}
            <GlassCard className="luxury-glass text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Design Guide</h3>
                <p className="text-white text-sm mb-4">
                  Free 25-page luxury brand design guide with premium principles and examples
                </p>
                <div className="text-luxury-gold font-semibold mb-4">FREE DOWNLOAD</div>
              </div>
              <ABTestWrapper
                testId="hero_cta_text"
                controlComponent={
                  <FrostedButton
                    href="/contact?type=guide"
                    className="w-full"
                    analyticsLabel="Get Free Guide (Control)"
                    analyticsPosition="Lead Magnet CTA"
                  >
                    Get Free Guide
                  </FrostedButton>
                }
                variantComponent={
                  <FrostedButton
                    href="/contact?type=guide"
                    className="w-full btn-primary"
                    analyticsLabel="Download Now (Variant)"
                    analyticsPosition="Lead Magnet CTA"
                  >
                    Download Now →
                  </FrostedButton>
                }
              />
            </GlassCard>

            {/* Quick Consultation */}
            <GlassCard className="luxury-glass text-center border-luxury-gold">
              <div className="mb-6">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Consultation</h3>
                <p className="text-white text-sm mb-4">
                  15-minute strategy call to discuss your brand goals and get expert insights
                </p>
                <div className="text-luxury-gold font-semibold mb-4">15 MINUTES</div>
              </div>
              <ABTestWrapper
                testId="contact_form_fields"
                controlComponent={
                  <FrostedButton
                    href="/contact?type=consultation"
                    className="w-full"
                    analyticsLabel="Book Free Call (Control)"
                    analyticsPosition="Lead Magnet CTA"
                  >
                    Book Free Call
                  </FrostedButton>
                }
                variantComponent={
                  <FrostedButton
                    href="/contact?type=consultation"
                    className="w-full btn-primary"
                    analyticsLabel="Schedule Now (Variant)"
                    analyticsPosition="Lead Magnet CTA"
                  >
                    Schedule Now ⚡
                  </FrostedButton>
                }
              />
            </GlassCard>

            {/* Full Project */}
            <GlassCard className="luxury-glass text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Project</h3>
                <p className="text-white text-sm mb-4">
                  Full luxury design solution tailored to your brand and business goals
                </p>
                <div className="text-luxury-gold font-semibold mb-4">PREMIUM SERVICE</div>
              </div>
              <ABTestWrapper
                testId="pricing_display"
                controlComponent={
                  <FrostedButton
                    href="/contact?type=project"
                    className="w-full"
                    analyticsLabel="Start Project (Control)"
                    analyticsPosition="Lead Magnet CTA"
                  >
                    Start Project
                  </FrostedButton>
                }
                variantComponent={
                  <div className="space-y-3">
                    <div className="text-luxury-gold text-sm font-medium">FROM $25K</div>
                    <FrostedButton
                      href="/contact?type=project"
                      className="w-full btn-primary"
                      analyticsLabel="Get Quote (Variant)"
                      analyticsPosition="Lead Magnet CTA"
                    >
                      Get Custom Quote
                    </FrostedButton>
                  </div>
                }
              />
            </GlassCard>
          </div>

          {/* Soft Commitment CTA */}
          <div className="text-center">
            <GlassCard className="glass-premium p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Not Sure Where to Start?</h3>
              <p className="text-white mb-6">
                Join our luxury design newsletter for weekly insights, case studies, and premium design tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <FrostedButton href="/contact?type=newsletter" className="btn-secondary">
                  Subscribe to Newsletter
                </FrostedButton>
                <span className="text-white/60 text-sm">No spam, unsubscribe anytime</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}
