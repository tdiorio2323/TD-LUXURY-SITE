import { Metadata } from "next"
import { PageTitle } from "@/components/page-title"
import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import { FrostedButton } from "@/components/frosted-button"
import { JsonLd } from "@/components/json-ld"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing | TD Studios",
  description: "Transparent pricing for premium design and development services. Choose the package that fits your project needs.",
  openGraph: {
    title: "Pricing | TD Studios",
    description: "Transparent pricing for premium design and development services.",
    url: "https://tdstudiosny.com/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | TD Studios",
    description: "Transparent pricing for premium design and development services.",
  },
}

const pricingTiers = [
  {
    id: "starter",
    name: "Starter",
    price: "$15,000",
    description: "Perfect for small businesses and new brands",
    features: [
      "Brand identity design",
      "5-page marketing website",
      "Mobile-responsive design",
      "Basic SEO optimization",
      "2 rounds of revisions",
      "30-day support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$35,000",
    description: "Ideal for growing companies needing full solutions",
    features: [
      "Complete brand system",
      "Custom web application",
      "Advanced animations & interactions",
      "CMS integration",
      "Analytics & tracking setup",
      "Unlimited revisions",
      "90-day support",
      "Performance optimization",
    ],
    featured: true,
  },
  {
    id: "elite",
    name: "Elite",
    price: "Custom",
    description: "Enterprise solutions with dedicated team",
    features: [
      "Everything in Pro",
      "Dedicated project manager",
      "Full-stack development",
      "API & database architecture",
      "Multi-platform deployment",
      "Security audit & compliance",
      "12-month support & maintenance",
      "Priority response times",
    ],
  },
]

const faqItems = [
  {
    question: "What's included in the pricing?",
    answer: "All packages include strategy, design, development, testing, and deployment. You own all deliverables and source code.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Starter projects take 4-6 weeks, Pro projects 8-12 weeks, and Elite projects 12+ weeks depending on scope.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer milestone-based payment plans. Typically 50% upfront, 25% at midpoint, 25% at launch.",
  },
  {
    question: "What if I need changes after launch?",
    answer: "All packages include post-launch support. Additional changes and features can be handled on a retainer or project basis.",
  },
]

export default function PricingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tdstudiosny.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pricing",
        "item": "https://tdstudiosny.com/pricing",
      },
    ],
  }

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <PageTitle
            eyebrow="Investment"
            title="Transparent Pricing"
            subtitle="Choose the package that aligns with your business goals. All plans include premium support and full ownership of deliverables."
          />

          {/* Pricing Tiers */}
          <Section id="packages">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {pricingTiers.map((tier) => (
                <GlassCard
                  key={tier.id}
                  className={tier.featured ? "border-2 border-white/30 luxury-glass" : ""}
                >
                  {tier.featured && (
                    <div className="text-center mb-4">
                      <span className="inline-block px-4 py-1 bg-white text-black text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold mb-2">{tier.price}</div>
                    <p className="text-white/70 text-sm">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <FrostedButton href="/contact" className="w-full justify-center">
                    Get Started
                  </FrostedButton>
                </GlassCard>
              ))}
            </div>
          </Section>

          {/* FAQ */}
          <Section id="faq" title="Frequently Asked Questions">
            <div className="max-w-3xl mx-auto space-y-6">
              {faqItems.map((item, index) => (
                <GlassCard key={index}>
                  <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                  <p className="text-white/80">{item.answer}</p>
                </GlassCard>
              ))}
            </div>
          </Section>

          {/* CTA */}
          <div className="text-center mt-20">
            <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss your needs and get a custom quote.
            </p>
            <FrostedButton href="/book">Schedule a Call</FrostedButton>
          </div>
        </div>
      </div>
    </>
  )
}
