import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { clients, type Client } from "@/lib/clients-data"
import { GlassCard } from "@/components/glass-card"
import { FrostedButton } from "@/components/frosted-button"
import { Globe, Instagram, Facebook, Twitter, Linkedin, ArrowLeft } from "lucide-react"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all client projects
export async function generateStaticParams() {
  return clients.map((client) => ({
    slug: client.slug,
  }))
}

// Generate metadata for each project page
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const client = clients.find((c) => c.slug === slug)

  if (!client) {
    return {
      title: "Project Not Found | TD Studios",
    }
  }

  return {
    title: `${client.name} — TD Studios`,
    description: client.description,
    alternates: {
      canonical: `https://tdstudiosny.com/work/${slug}`,
    },
    openGraph: {
      title: `${client.name} — TD Studios`,
      description: client.description,
      images: [client.logo],
      url: `https://tdstudiosny.com/work/${slug}`,
      siteName: "TD Studios",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${client.name} — TD Studios`,
      description: client.description,
      images: [client.logo],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const client = clients.find((c) => c.slug === slug)

  if (!client) {
    notFound()
  }

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: client.name,
    description: client.description,
    creator: {
      "@type": "Organization",
      name: "TD Studios",
      url: "https://tdstudiosny.com",
    },
    datePublished: client.year,
    serviceType: client.services,
    ...(client.testimonial && {
      review: {
        "@type": "Review",
        reviewBody: client.testimonial.quote,
        author: {
          "@type": "Person",
          name: client.testimonial.author,
          jobTitle: client.testimonial.position,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    }),
    ...(client.websiteUrl && {
      url: client.websiteUrl,
    }),
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen">
        {/* Hero Section with Client Branding */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://i.imgur.com/a1bXC5y.png"
              alt={`${client.name} project hero`}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black"></div>
          </div>

          <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
            {/* Back Button */}
            <Link
              href="/work"
              className="inline-flex items-center gap-2 mb-8 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            {/* Client Logo */}
            <div className="flex justify-center mb-8">
              <div
                className={`relative w-32 h-32 overflow-hidden ${client.logoBgColor || "bg-neutral-900/80"} border border-white/20 rounded-2xl p-4`}
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className={`object-contain ${client.logoInvert ? "invert" : ""}`}
                  sizes="128px"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">{client.name}</h1>
            <p className="text-xl text-white/90 mb-4">
              {client.industry} • {client.year}
            </p>

            {/* Client Links */}
            {(client.websiteUrl || client.socialLinks) && (
              <div className="flex flex-wrap gap-3 justify-center mt-8">
                {client.websiteUrl && (
                  <a
                    href={client.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white backdrop-blur-lg transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    Visit Website
                  </a>
                )}
                {client.socialLinks?.instagram && (
                  <a
                    href={client.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white backdrop-blur-lg transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                )}
                {client.socialLinks?.facebook && (
                  <a
                    href={client.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white backdrop-blur-lg transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                )}
                {client.socialLinks?.twitter && (
                  <a
                    href={client.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white backdrop-blur-lg transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </a>
                )}
                {client.socialLinks?.linkedin && (
                  <a
                    href={client.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white backdrop-blur-lg transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Services Section */}
        {client.services.length > 0 && (
          <section className="relative py-16 px-6 bg-black/40">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Services Provided</h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {client.services.map((service) => (
                  <span
                    key={service}
                    className="px-6 py-3 bg-neutral-900/80 border border-white/20 rounded-full text-sm text-white backdrop-blur-lg"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Project Overview */}
        {client.description && (
          <section className="relative py-16 px-6">
            <div className="max-w-4xl mx-auto">
              <GlassCard className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Project Overview</h2>
                <p className="text-white/90 text-lg leading-relaxed">{client.description}</p>
              </GlassCard>
            </div>
          </section>
        )}

        {/* Key Results */}
        {client.results.length > 0 && (
          <section className="relative py-16 px-6 bg-black/40">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Key Results</h2>
              <GlassCard className="p-8">
                <ul className="space-y-4">
                  {client.results.map((result, index) => (
                    <li key={index} className="flex items-start text-white">
                      <span className="text-green-400 text-2xl mr-4 flex-shrink-0">✓</span>
                      <span className="text-lg">{result}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </section>
        )}

        {/* Project Gallery */}
        {client.gallery.length > 0 && (
          <section className="relative py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Project Gallery</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {client.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video overflow-hidden rounded-xl border border-white/10"
                  >
                    <Image
                      src={image}
                      alt={`${client.name} gallery image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Client Testimonial */}
        {client.testimonial && (
          <section className="relative py-16 px-6 bg-black/40">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Client Testimonial</h2>
              <GlassCard className="p-8 md:p-12">
                <blockquote className="text-white/90 text-xl italic mb-6 leading-relaxed">
                  "{client.testimonial.quote}"
                </blockquote>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white font-semibold text-lg">{client.testimonial.author}</p>
                  <p className="text-white/70">{client.testimonial.position}</p>
                </div>
              </GlassCard>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <GlassCard className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Let's discuss how we can transform your brand with strategic design and development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FrostedButton href="/contact" className="text-lg">
                  Start Your Project
                </FrostedButton>
                <FrostedButton href="/work" className="text-lg bg-white/5">
                  View More Work
                </FrostedButton>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
    </>
  )
}
