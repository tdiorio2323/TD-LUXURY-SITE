import { Globe, Share2, Palette, Award } from "lucide-react"
import { GlassCard } from "@/components/glass-card"
import { FrostedButton } from "@/components/frosted-button"

const services = [
  {
    icon: Globe,
    title: "Web Experience",
    description: "Marketing sites, landers, and product stories engineered for clarity and conversion.",
    link: "Explore Web →",
  },
  {
    icon: Award,
    title: "Product & Platform",
    description: "Application architecture, dashboards, and feature delivery for scale.",
    link: "Visit Dev →",
  },
  {
    icon: Share2,
    title: "Social Programs",
    description: "Editorial programming, campaign kits, and community ops that sustain growth.",
    link: "See Social →",
  },
  {
    icon: Palette,
    title: "Brand & Identity",
    description: "Design systems, visual identity, and asset libraries crafted to travel everywhere.",
    link: "Custom Design →",
  },
  {
    icon: Award,
    title: "Digital Assets",
    description: "Ready-to-use content packs, templates, and downloads to accelerate launches.",
    link: "Browse Assets →",
  },
  {
    icon: Share2,
    title: "Partnerships",
    description: "Referral alliances and white-label collaborations for agencies and boutiques.",
    link: "Partnerships →",
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
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 global-hero" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance text-white leading-tight">LUXURY STRATEGY CREATIVITY</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8">All in one place.</p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      href="#"
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

      {/* Featured Capabilities */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Capabilities</h2>
            <p className="text-white text-lg">A quick peek at what we build</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <GlassCard className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
            <p className="text-white text-lg mb-8">
              Let's create something extraordinary together. Contact us to discuss your premium design needs.
            </p>
            <FrostedButton href="/contact">Contact Us</FrostedButton>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}
