
"use client"
import MobileCta from "@/components/MobileCta";

import type React from "react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { GlassCard } from "@/components/glass-card"
import { FrostedButton } from "@/components/frosted-button"
import { CalendlyWidget } from "@/components/calendly-widget"
import { JsonLd } from "@/components/json-ld"
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
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TD Studios NY",
    "image": "https://tdstudiosny.com/logo.png",
    "@id": "https://tdstudiosny.com/contact",
    "url": "https://tdstudiosny.com/contact",
    "telephone": "+1-212-555-0199",
  }
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
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

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
    
    // Validate all fields before submission
    const newErrors: Record<string, string> = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData])
      if (error) newErrors[key] = error
    })

    setFieldErrors(newErrors)
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}))

    // Don't submit if there are validation errors
    if (Object.values(newErrors).some(error => error)) {
      setStatus('error')
      setStatusMessage('Please fix the errors above before submitting.')
      return
    }

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

  // Real-time validation function
  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required'
        if (value.length < 2) return 'Full name must be at least 2 characters'
        if (value.length > 100) return 'Full name must be less than 100 characters'
        break
      case 'email':
        if (!value.trim()) return 'Email is required'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address'
        break
      case 'service':
        if (!value.trim()) return 'Please select a service'
        break
      case 'details':
        if (!contactType || contactType === 'project') {
          if (!value.trim()) return 'Project details are required'
          if (value.length < 10) return 'Please provide at least 10 characters of detail'
        }
        if (value.length > 5000) return 'Details must be less than 5000 characters'
        break
    }
    return ''
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    setFormData({
      ...formData,
      [name]: value,
    })

    // Real-time validation for touched fields
    if (touched[name]) {
      const error = validateField(name, value)
      setFieldErrors(prev => ({
        ...prev,
        [name]: error
      }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    const error = validateField(name, value)
    setFieldErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  return (
    <main className="min-h-dvh bg-background">
      <JsonLd data={localBusinessSchema} />
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/contact-hero-image.jpg"
            alt="Contact Hero"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
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
      {/* ...rest of the contact page content (all sections, forms, etc.) ... */}
      {/* Services, Contact Form, Schedule Consultation, FAQ Section go here, inside <main> */}
      <MobileCta />
    </main>
  )
}
