"use client"

import { useState } from "react"
import { GlassCard } from "@/components/glass-card"
import { FrostedButton } from "@/components/frosted-button"
import { ExternalLink, X, Calendar, ArrowRight } from "lucide-react"

const clientProjects = [
  {
    id: 1,
    clientName: "CABANA",
    logo: "/placeholder.svg?text=CABANA",
    industry: "Tech Startup",
    year: "2024",
    services: ["Website Design", "Development", "Branding"],
    description: "Complete digital transformation for a luxury tech startup, including brand identity, website design, and full-stack development.",
    results: [
      "300% increase in conversion rate",
      "50% reduction in bounce rate",
      "Award-winning design recognition"
    ],
    images: [
      "/placeholder.jpg?query=cabana website homepage",
      "/placeholder.jpg?query=cabana mobile app interface",
      "/placeholder.jpg?query=cabana brand guidelines"
    ],
    liveUrl: "https://cabana.example.com",
    caseStudyUrl: "#"
  },
  {
    id: 2,
    clientName: "APSCO",
    logo: "/placeholder.svg?text=APSCO",
    industry: "Manufacturing",
    year: "2024",
    services: ["Website Redesign", "E-commerce"],
    description: "Modern e-commerce platform and website redesign for a leading manufacturing company.",
    results: [
      "200% increase in online sales",
      "Streamlined ordering process",
      "Mobile-first responsive design"
    ],
    images: [
      "/placeholder.jpg?query=apsco website",
      "/placeholder.jpg?query=apsco ecommerce",
      "/placeholder.jpg?query=apsco mobile"
    ],
    liveUrl: "https://apsco.example.com",
    caseStudyUrl: "#"
  },
  {
    id: 3,
    clientName: "TRUTH MATTERS",
    logo: "/placeholder.svg?text=TRUTH",
    industry: "Media",
    year: "2023",
    services: ["Social Media", "Content Strategy"],
    description: "Comprehensive social media strategy and content creation for a digital media platform.",
    results: [
      "500K+ social media reach",
      "150% engagement increase",
      "Viral content campaigns"
    ],
    images: [
      "/placeholder.jpg?query=truth matters social media",
      "/placeholder.jpg?query=truth matters content",
      "/placeholder.jpg?query=truth matters campaign"
    ],
    liveUrl: "https://truthmatters.example.com",
    caseStudyUrl: "#"
  },
  {
    id: 4,
    clientName: "STUDIO",
    logo: "/placeholder.svg?text=STUDIO",
    industry: "Creative Agency",
    year: "2023",
    services: ["Portfolio Website", "Development"],
    description: "Custom portfolio website with advanced animations and interactive elements.",
    results: [
      "Award-winning portfolio design",
      "60% increase in client inquiries",
      "Featured in design showcases"
    ],
    images: [
      "/placeholder.jpg?query=studio portfolio website",
      "/placeholder.jpg?query=studio interactive design",
      "/placeholder.jpg?query=studio awards"
    ],
    liveUrl: "https://studio.example.com",
    caseStudyUrl: "#"
  },
  {
    id: 5,
    clientName: "COLOMBIA",
    logo: "/placeholder.svg?text=COL",
    industry: "Tourism",
    year: "2023",
    services: ["Tourism Platform", "Full-Stack Development"],
    description: "Interactive tourism platform showcasing Colombia's destinations with booking integration.",
    results: [
      "40% increase in bookings",
      "Multilingual platform launch",
      "Government partnership secured"
    ],
    images: [
      "/placeholder.jpg?query=colombia tourism website",
      "/placeholder.jpg?query=colombia booking platform",
      "/placeholder.jpg?query=colombia destinations"
    ],
    liveUrl: "https://colombia.example.com",
    caseStudyUrl: "#"
  },
  {
    id: 6,
    clientName: "LUCAS WORLD",
    logo: "/placeholder.svg?text=LW",
    industry: "Entertainment",
    year: "2022",
    services: ["Brand Identity", "Website Design"],
    description: "Complete brand identity and digital presence for an entertainment platform.",
    results: [
      "Brand recognition increased 400%",
      "Successful platform launch",
      "Celebrity endorsements secured"
    ],
    images: [
      "/placeholder.jpg?query=lucas world brand",
      "/placeholder.jpg?query=lucas world platform",
      "/placeholder.jpg?query=lucas world entertainment"
    ],
    liveUrl: "https://lucasworld.example.com",
    caseStudyUrl: "#"
  }
]

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<typeof clientProjects[0] | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/portfolio-hero-image.jpg"
            alt="Portfolio Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 md:bg-black/40 hero-overlay-mobile"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white">Client Success Stories</h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Discover how we've transformed brands and businesses through strategic design and development.
          </p>
        </div>
      </section>

      {/* Client Logo Grid */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Clients</h2>
            <p className="text-white text-lg">Click any logo to explore the project details and results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientProjects.map((project) => (
              <GlassCard
                key={project.id}
                className="group cursor-pointer hover:bg-neutral-900/80 transition-all duration-300 p-8 text-center"
                onClick={() => setSelectedProject(project)}
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-neutral-900/80 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-neutral-900/90 transition-colors">
                  <img
                    src={project.logo}
                    alt={project.clientName}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{project.clientName}</h3>
                <p className="text-white text-sm mb-4">{project.industry} • {project.year}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.services.slice(0, 2).map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-neutral-900/80 border border-white/20 rounded-full text-xs text-white"
                    >
                      {service}
                    </span>
                  ))}
                  {project.services.length > 2 && (
                    <span className="px-3 py-1 bg-neutral-900/80 border border-white/20 rounded-full text-xs text-white">
                      +{project.services.length - 2} more
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  View Case Study <ArrowRight className="w-4 h-4 ml-2" />
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
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-white">25+</div>
              <div className="text-white text-sm">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-white">50+</div>
              <div className="text-white text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-white">300%</div>
              <div className="text-white text-sm">Avg. Conversion Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-white">100%</div>
              <div className="text-white text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <GlassCard className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Join Our Success Stories?</h2>
            <p className="text-white text-lg mb-8">
              Let's create something extraordinary together. Contact us to discuss your vision and bring it to life.
            </p>
            <FrostedButton href="/contact">Start Your Project</FrostedButton>
          </GlassCard>
        </div>
      </section>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-black/90 border border-white/20 rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <img
                    src={selectedProject.logo}
                    alt={selectedProject.clientName}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                  <div>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{selectedProject.clientName}</h2>
                    <p className="text-white text-sm sm:text-base">{selectedProject.industry} • {selectedProject.year}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-neutral-900/70 hover:bg-neutral-900/80 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Services */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-white">Services Provided</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.services.map((service) => (
                    <span
                      key={service}
                      className="px-4 py-2 bg-neutral-900/80 border border-white/20 rounded-full text-sm text-white"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-white">Project Overview</h3>
                <p className="text-white leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-white">Key Results</h3>
                <ul className="space-y-2">
                  {selectedProject.results.map((result, index) => (
                    <li key={index} className="flex items-center text-white">
                      <span className="text-green-400 mr-3">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Images */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-white">Project Gallery</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {selectedProject.images.map((image, index) => (
                    <div key={index} className="aspect-video bg-neutral-900/70 rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${selectedProject.clientName} project ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <FrostedButton href={selectedProject.liveUrl} className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Site
                </FrostedButton>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 bg-neutral-900/70 border border-white/20 rounded-lg text-white hover:bg-neutral-900/80 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
