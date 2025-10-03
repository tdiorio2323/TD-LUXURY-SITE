"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { GlassCard } from "@/components/glass-card"
import { FrostedButton } from "@/components/frosted-button"
import { CalendlyWidget } from "@/components/calendly-widget"
import { Mail, Clock, MapPin } from "lucide-react"

const services = [
  "Web Experience",
  "Product & Platform Development",
  "Social & Content Systems",
  "Brand & Identity",
  "Digital Assets",
  "Partnerships",
]

const budgetRanges = ["$10K - $25K", "$25K - $50K", "$50K - $100K", "$100K+"]

const timelines = ["2-4 weeks", "1-2 months", "3-4 months", "6+ months"]

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope. Logo designs typically take 1-2 weeks, while complete brand identities can take 3-4 weeks. We always provide detailed timelines during consultation.",
  },
  {
    question: "Do you work with different industries?",
    answer:
      "Absolutely. We collaborate with consumer brands, product companies, and service teams seeking premium, luxury solutions.",
  },
  {
    question: "What file formats do you provide?",
    answer:
      "We provide all source files including AI, PSD, PNG, JPG, PDF, and vector formats. You'll receive everything needed for print and digital use.",
  },
  {
    question: "Do you offer rush delivery?",
    answer:
      "Yes, we can accommodate rush projects with additional fees. Contact us to discuss your timeline and we'll find a solution.",
  },
]

export default function ContactPage() {
  const [contactType, setContactType] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    details: "",
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const type = urlParams.get('type')
    if (type) {
      setContactType(type)
    }
  }, [])

  useEffect(() => {
    setStatus('idle')
    setStatusMessage(null)
  }, [contactType])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setStatusMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          contactType
        })
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setStatus('success')
      setStatusMessage('Thanks for reaching out. We\'ll get back to you within one business day.')
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        timeline: "",
        details: "",
      })
    } catch (error) {
      console.error('Error submitting contact form:', error)
      setStatus('error')
      setStatusMessage('We couldn\'t send your message. Email tyler@tdstudiosny.com and we\'ll help right away.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/contact-hero-image.jpg"
            alt="Contact Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 md:bg-black/40 hero-overlay-mobile"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white">Let's Create Something Extraordinary</h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Ready to elevate your brand with premium design solutions? Let's discuss your project and bring your vision to life.
          </p>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-neutral-900/70 border border-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-white text-sm mb-2">tyler@tdstudiosny.com</p>
                <p className="text-white text-sm">347-485-9935</p>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-neutral-900/70 border border-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Response Time</h3>
                <p className="text-white text-sm mb-2">Within 24 hours</p>
                <p className="text-white text-sm">Monday - Friday, 9AM - 6PM PST</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-neutral-900/70 border border-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-white text-sm mb-2">New York City, NY</p>
                <p className="text-white text-sm">Serving clients worldwide</p>
              </div>
            </div>

            {/* Services */}
            <div className="mt-12">
              <h3 className="font-semibold mb-6">Web Experience</h3>
              <p className="text-white text-sm mb-6">
                Strategy, UX architecture, and high-converting marketing sites. Landing pages, CMS builds, and
                measurement setup.
              </p>

              <h3 className="font-semibold mb-6">Product & Platform Development</h3>
              <p className="text-white text-sm mb-6">
                Full-stack engineering, integrations, analytics, and ongoing iteration for apps, SaaS dashboards, and
                commerce experiences.
              </p>

              <h3 className="font-semibold mb-6">Social & Content Systems</h3>
              <p className="text-white text-sm">
                Editorial programming, asset engines, and campaign management that keep community and growth teams
                shipping.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <GlassCard className="p-6 sm:p-8 mb-8" id="full-form">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Project Details</h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-900/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/60"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-900/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/60"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-900/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/60"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-900/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/60"
                      placeholder="Preferred for urgent projects"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-900/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-black">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-900/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-black">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-900/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline} className="bg-black">
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Conditional details field based on contact type */}
                {!contactType || contactType === 'project' ? (
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-neutral-900/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/60 resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>
                ) : (
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium mb-2">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-neutral-900/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/60 resize-none"
                      placeholder={
                        contactType === 'guide' ? 'What specific design challenges are you facing?' :
                        contactType === 'consultation' ? 'What would you like to discuss in our call?' :
                        contactType === 'newsletter' ? 'What type of design content interests you most?' :
                        'Any additional information...'
                      }
                    />
                  </div>
                )}

                <div className="pt-4">
                  <FrostedButton type="submit" className="w-full btn-primary" disabled={status === 'submitting'}>
                    {status === 'submitting' && 'Sending...'}
                    {status !== 'submitting' && contactType === 'guide' && 'Download Free Guide'}
                    {status !== 'submitting' && contactType === 'consultation' && 'Book Free Consultation'}
                    {status !== 'submitting' && contactType === 'newsletter' && 'Subscribe Now'}
                    {status !== 'submitting' && !contactType && 'Send Message'}
                  </FrostedButton>
                  {statusMessage && (
                    <p
                      className={`text-xs mt-3 text-center ${
                        status === 'error' ? 'text-red-300' : 'text-white/80'
                      }`}
                    >
                      {statusMessage}
                    </p>
                  )}
                  {contactType && (
                    <p className="text-white/60 text-xs mt-3 text-center">
                      {contactType === 'newsletter' && 'No spam, unsubscribe anytime'}
                      {contactType === 'guide' && 'We\'ll email the guide within a few minutes'}
                      {contactType === 'consultation' && 'We\'ll send calendar link via email'}
                    </p>
                  )}
                </div>
              </form>
            </GlassCard>

            {/* Schedule Consultation */}
            <GlassCard className="p-6 sm:p-8 mt-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Or Schedule a Consultation</h2>
              <p className="text-white text-sm mb-6">
                Book a 15-minute discovery call to discuss your project and explore how we can help bring your vision to life.
              </p>
              <CalendlyWidget
                url="https://calendly.com/tyler-tdstudiosny/new-meeting"
                className="rounded-lg overflow-hidden"
              />
            </GlassCard>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="relative mt-20">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <p className="text-center text-white mb-12">Quick answers to common questions about our services</p>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <GlassCard key={index}>
                <h3 className="font-semibold mb-3">{faq.question}</h3>
                <p className="text-white text-sm">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>
          </div>
        </section>
        </div>
      </section>
    </div>
  )
}
