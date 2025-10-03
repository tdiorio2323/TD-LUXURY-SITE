import { GlassCard } from "@/components/glass-card"
import { FrostedButton } from "@/components/frosted-button"
import { Code, Database, Globe, Layers, Shield, Zap, Settings, BarChart3 } from "lucide-react"

const techStack = [
  { name: "REACT", icon: Code },
  { name: "NEXT.JS", icon: Globe },
  { name: "VITE", icon: Zap },
  { name: "EXPO", icon: Layers },
  { name: "SUPABASE", icon: Database },
  { name: "POSTGRES", icon: Database },
  { name: "EDGE", icon: Settings },
  { name: "PERF", icon: BarChart3 },
  { name: "RELIABILITY", icon: Shield },
]

const deliveryRhythm = [
  "Sprint planning + backlog grooming",
  "Design + engineering pairing sessions",
  "Weekly stakeholder reviews",
  "Retro + measurement cadence",
]

const qualitySecurity = [
  "Automated QA suites + manual test plans",
  "Accessibility + performance budgets",
  "Security reviews + dependency scans",
  "Launch runbooks with rollback paths",
]

const documentationBundle = [
  "Architecture diagrams",
  "API + schema references",
  "Component usage guides",
  "Onboarding + support contact tree",
]

const teamEnablement = [
  "Documentation & onboarding playbooks",
  "Internal tooling and automation support",
  "Knowledge transfer workshops",
  "Retained engineering advisory",
  "QA and release playbooks",
  "Design-to-dev bridges",
  "Analytics & observability rollouts",
  "Experiment & growth ops support",
  "Change management coaching",
]

const suggestedContent = [
  "Baseline vs. post-launch metrics",
  "Tech stack overview",
  "Team composition & timeline",
  "Key lessons learned",
]

export default function DevPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/dev-hero-image.jpg"
            alt="Advanced full-stack development platform showcasing modern architecture and scalable solutions"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 md:bg-black/40 hero-overlay-mobile"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Full-Stack Development</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Custom web applications, APIs, databases, and scalable solutions built with modern tech stacks.
          </p>
          <FrostedButton href="/contact">Book a build sprint</FrostedButton>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Product Discovery</h3>
              <p className="text-white text-sm">
                Rapid architecture mapping, user flows, and proof-of-concept builds to de-risk your roadmap and align
                teams quickly.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Full-stack Delivery</h3>
              <p className="text-white text-sm">
                TypeScript-first stacks, API design, data modeling, automated QA, and CI/CD across web and mobile
                surfaces.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Growth & Iteration</h3>
              <p className="text-white text-sm">
                Analytics instrumentation, experiment support, and performance tuning to sustain shipping velocity
                post-launch.
              </p>
            </GlassCard>
          </div>

          {/* Stats Section */}
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Preferred engineering partner for premium consumer and B2B launches
            </h2>
          </div>

          {/* Tech Stack */}
          <div className="mb-20">
            <h3 className="text-xl font-semibold mb-8">Modern stack expertise</h3>
            <p className="text-white mb-8">
              React 18, Vite, Expo, Supabase, PostgreSQL, serverless edge, plus observability and error budgets by
              default.
            </p>

            <div className="grid grid-cols-3 md:grid-cols-9 gap-6">
              {techStack.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-neutral-900/70 border border-white/20 rounded-lg flex items-center justify-center mb-2">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs text-white text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Enablement */}
          <div className="mb-20">
            <h3 className="text-xl font-semibold mb-8">Team enablement</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {teamEnablement.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span className="text-white text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Three Column Breakdown */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div>
              <h3 className="text-xl font-semibold mb-6">Delivery rhythm</h3>
              <ul className="space-y-3">
                {deliveryRhythm.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span className="text-white text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Quality & security</h3>
              <ul className="space-y-3">
                {qualitySecurity.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span className="text-white text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Documentation bundle</h3>
              <ul className="space-y-3">
                {documentationBundle.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span className="text-white text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Case Study Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-xl font-semibold mb-6">Cabana booking platform</h3>
              <p className="text-white mb-6">
                Cabana needed a fast booking engine that played nicely with legacy property systems. We migrated them to
                a Next.js app backed by Supabase, added rate-limiting middleware, and instrumented analytics for every
                key interaction.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• API response times dropped from 480ms to 120ms</li>
                <li>• Automated regression suite catches issues before deploy</li>
                <li>• Revenue dashboard now updates in real-time for operators</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Suggested content</h3>
              <ul className="space-y-3">
                {suggestedContent.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span className="text-white text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <FrostedButton href="/contact">Plan your release</FrostedButton>
          </div>
        </div>
      </section>
    </div>
  )
}
