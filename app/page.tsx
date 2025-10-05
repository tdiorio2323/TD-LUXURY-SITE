"use client"

import { Globe, Share2, Palette, Award, Download, Calendar, Rocket, Mail } from "lucide-react"
import Image from "next/image"
import { GlassCard } from "@/components/glass-card"
import { FrostedButton } from "@/components/frosted-button"
import { ABTestWrapper } from "@/components/ab-test-wrapper"

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
    href: "/design",
  },
  {
    icon: Award,
    title: "Digital Assets",
    description: "Ready-to-use content packs, templates, and downloads to accelerate launches.",
    link: "Browse Assets →",
    href: "/design",
  },
  {
    icon: Award,
    title: "Portfolio",
    description: "Explore our case studies and see how we've helped brands like yours achieve their goals.",
    link: "View Portfolio →",
    href: "/portfolio",
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
    image: "/design-showcase-2.jpg",
  },
]

export default function HomePage() {

  return (
    <div className="min-h-screen">
      {/* SIMPLE MOBILE HERO SECTION */}
      <section
        className="relative min-h-[100dvh] flex items-center justify-center"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            LUXURY STRATEGY CREATIVITY
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6 sm:mb-8">
            All in one place.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-6 mobile-section-padding">
        <div className="absolute inset-0 bg-black/40 hero-overlay-mobile"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-white text-lg">Premium design solutions tailored for high-growth brands</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mobile-grid">
            {services.map((service, index) => (
              <GlassCard key={index} className="glass-mobile hover:bg-neutral-900/80 transition-all duration-300 mobile-content-spacing">
                <div className="flex items-start space-x-4">
                  <div className="mobile-touch-target p-3 bg-neutral-900/80 border border-white/20 rounded-lg">
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
      <section className="relative py-16 px-6 mobile-section-padding">
        <div className="absolute inset-0 bg-black/40 hero-overlay-mobile"></div>
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
              <div className="flex flex-wrap justify-center items-center gap-6">
                <a
                  href="https://www.awwwards.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-light px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                  data-verify="pending"
                >
                  <span className="text-xs text-white font-medium">AWWWARDS WINNER</span>
                  <span className="sr-only">View Awwwards profile (verification pending)</span>
                </a>
                <a
                  href="https://www.cssdesignawards.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-light px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                  data-verify="pending"
                >
                  <span className="text-xs text-white font-medium">CSS DESIGN AWARDS</span>
                  <span className="sr-only">View CSS Design Awards profile (verification pending)</span>
                </a>
                <a
                  href="https://www.webbyawards.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-light px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                  data-verify="pending"
                >
                  <span className="text-xs text-white font-medium">WEBBY HONOREE</span>
                  <span className="sr-only">View Webby Awards profile (verification pending)</span>
                </a>
                <a
                  href="https://www.thefwa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-light px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                  data-verify="pending"
                >
                  <span className="text-xs text-white font-medium">FWA SITE OF THE DAY</span>
                  <span className="sr-only">View FWA profile (verification pending)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="relative py-20 px-6 mobile-section-padding">
        <div className="absolute inset-0 bg-black/40 hero-overlay-mobile"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-white text-lg">Real results from luxury brands we've transformed</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 mobile-grid">
            <GlassCard className="luxury-glass glass-mobile mobile-content-spacing">
              <div className="flex items-start space-x-4 mb-4">
                <div className="mobile-touch-target w-12 h-12 bg-white rounded-full flex items-center justify-center">
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

            <GlassCard className="luxury-glass glass-mobile mobile-content-spacing">
              <div className="flex items-start space-x-4 mb-4">
                <div className="mobile-touch-target w-12 h-12 bg-white rounded-full flex items-center justify-center">
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

            <GlassCard className="luxury-glass glass-mobile mobile-content-spacing">
              <div className="flex items-start space-x-4 mb-4">
                <div className="mobile-touch-target w-12 h-12 bg-white rounded-full flex items-center justify-center">
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
      <section className="relative py-20 px-6 mobile-section-padding">
        <div className="absolute inset-0 bg-black/40 hero-overlay-mobile"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Capabilities</h2>
            <p className="text-white text-lg">A quick peek at what we build</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mobile-grid">
            {capabilities.map((capability, index) => (
              <GlassCard key={index} className="glass-mobile overflow-hidden hover:bg-neutral-900/80 transition-all duration-300 mobile-content-spacing">
                <div className="aspect-[4/3] bg-gray-800 rounded-lg mb-4 overflow-hidden relative">
                  <Image
                    src={capability.image || "/placeholder.svg"}
                    alt={capability.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    className="object-cover"
                    priority={capability.title === "Brand Kits"}
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
      <section className="relative py-20 px-6 mobile-section-padding">
        <div className="absolute inset-0 bg-black/40 hero-overlay-mobile"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Journey</h2>
            <p className="text-white text-lg">Choose your perfect entry point to luxury design</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Free Resource */}
            <GlassCard className="luxury-glass glass-mobile mobile-content-spacing flex flex-col justify-between group">
              <div className="relative w-full h-48 mb-4">
                <Image src="https://i.imgur.com/pt5ALhM.png" alt="BRAND BIBLE" layout="fill" objectFit="cover" className="rounded-t-lg transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                <Image src="https://i.imgur.com/0Hjs9Sg.png" alt="BRAND BIBLE Hover" layout="fill" objectFit="cover" className="rounded-t-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">BRAND BIBLE</h3>
                <p className="text-white text-sm mb-4">
                  Free 25-page luxury brand bible with premium principles and examples
                </p>
                <div className="text-luxury-gold font-semibold mb-4">FREE DOWNLOAD</div>
              </div>
              <div className="p-4 mt-auto">
                <FrostedButton
                  href="/contact?type=guide"
                  className="w-full btn-secondary"
                  analyticsLabel="Get Brand Bible"
                  analyticsPosition="Lead Magnet CTA"
                >
                  Get Brand Bible
                </FrostedButton>
              </div>
            </GlassCard>

            {/* Quick Consultation */}
            <GlassCard className="luxury-glass glass-mobile border-luxury-gold mobile-content-spacing flex flex-col justify-between">
              <div className="relative w-full h-48 mb-4">
                <Image src="https://i.imgur.com/M5PRLMg.png" alt="Quick Consultation" layout="fill" objectFit="cover" className="rounded-t-lg" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Quick Consultation</h3>
                <p className="text-white text-sm mb-4">
                  15-minute strategy call to discuss your brand goals and get expert insights
                </p>
                <div className="text-luxury-gold font-semibold mb-4">15 MINUTES</div>
              </div>
              <div className="p-4 mt-auto">
                <FrostedButton
                  href="/contact?type=consultation"
                  className="w-full btn-secondary"
                  analyticsLabel="Book Free Call"
                  analyticsPosition="Lead Magnet CTA"
                >
                  Book Free Call
                </FrostedButton>
              </div>
            </GlassCard>

            {/* Full Project */}
            <GlassCard className="luxury-glass glass-mobile mobile-content-spacing flex flex-col justify-between">
              <div className="relative w-full h-48 mb-4">
                <Image src="https://i.imgur.com/rdJTB14.png" alt="Custom Project" layout="fill" objectFit="cover" className="rounded-t-lg" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Custom Project</h3>
                <p className="text-white text-sm mb-4">
                  Full luxury design solution tailored to your brand and business goals
                </p>
                <div className="text-luxury-gold font-semibold mb-4">PREMIUM SERVICE</div>
              </div>
              <div className="p-4 mt-auto">
                <FrostedButton
                  href="/contact?type=project"
                  className="w-full btn-secondary"
                  analyticsLabel="Start Project"
                  analyticsPosition="Lead Magnet CTA"
                >
                  Start Project
                </FrostedButton>
              </div>
            </GlassCard>
          </div>

          {/* Soft Commitment CTA */}
          <div className="text-center">
            <GlassCard className="glass-premium glass-mobile p-8 max-w-2xl mx-auto mobile-content-spacing">
              <h3 className="text-2xl font-bold mb-4">Not Sure Where to Start?</h3>
              <p className="text-white mb-6">
                Join our luxury design newsletter for weekly insights, case studies, and premium design tips.
              </p>
              <div className="flex flex-col gap-4 items-center">
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
  )
}
