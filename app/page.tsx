import Link from "next/link"
import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import { JsonLd } from "@/components/json-ld"
import { HeroSection } from "@/components/hero-section"
import heroImage from "@/public/main-background.webp"

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TD Studios",
    "alternateName": "TD Studios NY",
    "url": "https://tdstudiosny.com",
    "logo": "https://tdstudiosny.com/logo.png",
    "description": "High-end websites, branding, and marketing systems engineered for creators and ambitious brands.",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "NY"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "url": "https://tdstudiosny.com/contact",
      "email": "hello@tdstudiosny.com"
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Design & Development",
          "description": "Custom websites and web applications"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Identity Design",
          "description": "Complete brand identity and visual design systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Marketing",
          "description": "Social media strategy and content creation"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "ratingCount": "15"
    }
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
      {/* Hero Section with Fade-on-Scroll Effect */}
      <HeroSection heroImage={heroImage} />

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
