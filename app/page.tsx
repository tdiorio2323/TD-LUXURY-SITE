import Image from "next/image"
import Link from "next/link"
import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import { JsonLd } from "@/components/json-ld"
import heroImage from "@/public/main-background.webp"

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TD Studios",
    "url": "https://tdstudiosny.com",
    "logo": "https://tdstudiosny.com/logo.png",
    "description": "High-end websites, branding, and marketing systems engineered for creators and ambitious brands.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "url": "https://tdstudiosny.com/contact"
    },
    "sameAs": [
      "https://tdstudiosny.com"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TD Studios",
    "url": "https://tdstudiosny.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tdstudiosny.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <main id="main-content" className="flex flex-col">
      {/* Hero Section with CSS Animations */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Background Image with Priority Loading */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={heroImage}
            alt="TD Studios Hero Background"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            className="opacity-70"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 heroGradient backdrop-blur-3xl" />

        {/* Hero Content with CSS Animation */}
        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-white to-gray-400">
            Design Your Success
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            High-end websites, branding, and marketing systems engineered for creators and ambitious brands.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/work"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm tracking-wide backdrop-blur-lg transition-all duration-300"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 border border-white/30 text-white text-sm tracking-wide backdrop-blur-lg transition-all duration-300"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <Section>
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center text-white">What We Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
          {[
            { name: "Web", href: "/web", desc: "Website design and marketing experiences." },
            { name: "Dev", href: "/dev", desc: "Platform and system development." },
            { name: "Social", href: "/social", desc: "Content and social media growth systems." },
            { name: "Design", href: "/design", desc: "Branding and visual identity design." },
          ].map((s) => (
            <GlassCard key={s.name} className="luxury-glass hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-white">{s.name}</h3>
              <p className="text-white/70 text-sm mt-2">{s.desc}</p>
              <Link
                href={s.href}
                className="inline-block mt-4 text-sm text-white/90 hover:text-white hover:underline"
              >
                Learn More →
              </Link>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Why TD Studios */}
      <Section className="bg-black/20 py-20">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center text-white">Why TD Studios</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
          {[
            {
              title: "Luxury Execution",
              text: "Every detail is refined for precision and impact. Presentation matters.",
            },
            {
              title: "System-Driven Design",
              text: "Our framework scales your business across platforms and automations.",
            },
            {
              title: "Proven Results",
              text: "Projects that convert, perform, and grow your brand's authority.",
            },
          ].map((x) => (
            <GlassCard key={x.title} className="luxury-glass">
              <h3 className="text-xl font-bold text-white">{x.title}</h3>
              <p className="text-white/70 mt-2">{x.text}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center py-24">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Bring Your Vision to Life</h2>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 border border-white/30 text-white text-sm tracking-wide backdrop-blur-lg transition"
        >
          Start a Project
        </Link>
      </Section>
    </main>
    </>
  )
}
