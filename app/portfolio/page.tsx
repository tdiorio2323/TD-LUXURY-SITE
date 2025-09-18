import { GlassCard } from "@/components/glass-card"
import { FrostedButton } from "@/components/frosted-button"
import { ExternalLink } from "lucide-react"

const portfolioItems = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with custom CMS and payment integration",
    image: "/sleek-ecommerce-interface.jpg",
    tags: ["Next.js", "Stripe", "Supabase"],
  },
  {
    title: "Brand Identity System",
    category: "Brand Design",
    description: "Complete brand identity with logo, guidelines, and digital assets",
    image: "/brand-identity-kit-design.jpg",
    tags: ["Branding", "Logo Design", "Guidelines"],
  },
  {
    title: "Design System",
    category: "UI/UX Design",
    description: "Comprehensive design system with components and documentation",
    image: "/modern-design-system-interface.png",
    tags: ["Design System", "Components", "Documentation"],
  },
  {
    title: "SaaS Dashboard",
    category: "Product Design",
    description: "Analytics dashboard with real-time data visualization",
    image: "/modern-analytics-dashboard-interface.jpg",
    tags: ["React", "Analytics", "Dashboard"],
  },
  {
    title: "Mobile App Design",
    category: "Mobile Design",
    description: "iOS and Android app design with seamless user experience",
    image: "/mobile-app-interface.png",
    tags: ["Mobile", "iOS", "Android"],
  },
  {
    title: "Marketing Website",
    category: "Web Design",
    description: "High-converting marketing site with optimized performance",
    image: "/marketing-website-landing-page.jpg",
    tags: ["Marketing", "SEO", "Performance"],
  },
]

const categories = [
  "All",
  "Web Development",
  "Brand Design",
  "UI/UX Design",
  "Product Design",
  "Mobile Design",
  "Web Design",
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of our recent work across web development, brand design, and digital experiences.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <GlassCard key={index} className="group cursor-pointer overflow-hidden">
              <div className="aspect-video bg-white/5 rounded-lg mb-4 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">{item.category}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Stats Section */}
        <section className="py-16 border-t border-white/10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary. Get in touch to discuss your vision and bring it to
            life.
          </p>
          <FrostedButton href="/contact">Start Your Project</FrostedButton>
        </section>
      </div>
    </div>
  )
}
