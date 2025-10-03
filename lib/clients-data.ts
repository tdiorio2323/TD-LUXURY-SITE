export interface Client {
  id: string
  name: string
  slug: string
  logo: string
  industry: string
  year: string
  services: string[]
  description: string
  results: string[]
  gallery: string[]
  websiteUrl?: string
  socialLinks?: {
    instagram?: string
    facebook?: string
    twitter?: string
    linkedin?: string
  }
  testimonial?: {
    quote: string
    author: string
    position: string
  }
}

const sharedGallery = [
  "/design-portfolio-1.jpg",
  "/design-portfolio-2.jpg",
  "/design-portfolio-3.jpg"
]

export const clients: Client[] = [
  {
    id: "quick-printz",
    name: "Quick Printz",
    slug: "quick-printz",
    logo: "/clients/quick-printz/logo.png",
    industry: "Printing Services",
    year: "2024",
    services: [
      "Shopify storefront redesign",
      "Sanity CMS integration",
      "Automated proofing workflow"
    ],
    description:
      "Local print leaders needed a modern storefront with real-time pricing. We rebuilt the funnel, layered in Sanity for rapid promo launches, and automated proof approvals for the production team.",
    results: [
      "38% lift in average order value",
      "2x faster checkout completion",
      "Weekly promo launches now take under 30 minutes"
    ],
    gallery: sharedGallery,
    websiteUrl: "https://quickprintz.com"
  },
  {
    id: "apsco-sports",
    name: "Apsco Sports Enterprises",
    slug: "apsco-sports-enterprises",
    logo: "",
    industry: "Sports & Entertainment",
    year: "2024",
    services: [
      "Brand identity modernization",
      "Merchandising microsites",
      "Event registration platform"
    ],
    description:
      "Regional sports agency looking to scale fan activations. We refreshed the brand kit, launched drop-specific landing pages, and instrumented registration flows with real-time analytics.",
    results: [
      "12k sign-ups across three launch events",
      "80% merch sell-through within 48 hours",
      "Unified CRM view for partner reporting"
    ],
    gallery: ["/design-portfolio-4.jpg", "/design-portfolio-2.jpg"]
  },
  {
    id: "body-boutique",
    name: "The Body Boutique",
    slug: "the-body-boutique",
    logo: "/clients/body-boutique/logo.png",
    industry: "Health & Wellness",
    year: "2024",
    services: [
      "Luxury brand identity",
      "Membership landing experience",
      "Email welcome journeys"
    ],
    description:
      "Boutique wellness studio seeking a premium feel. Delivered a gold-accented identity, tiered membership site, and automated welcome sequences synced to their CRM.",
    results: [
      "Monthly memberships up 62%",
      "Average session bookings increased by 40%",
      "Email open rates climbed to 54%"
    ],
    gallery: sharedGallery
  },
  {
    id: "chef-izzy",
    name: "Chef Izzy",
    slug: "chef-izzy",
    logo: "/clients/chef-izzy/logo.png",
    industry: "Culinary Services",
    year: "2024",
    services: [
      "Personal brand kit",
      "Menu ordering app",
      "Content production"
    ],
    description:
      "Celebrity chef expanding private dining. We built a fast quotation flow, produced social templates, and refined the typography to feel Michelin-level without losing warmth.",
    results: [
      "Private booking inquiries up 2.4x",
      "Avg. proposal turnaround reduced to 6 hours",
      "Instagram saves on menu drops up 78%"
    ],
    gallery: ["/design-portfolio-3.jpg", "/design-portfolio-1.jpg"]
  },
  {
    id: "mama-rosaria",
    name: "Mama Rosaria",
    slug: "mama-rosaria",
    logo: "",
    industry: "Restaurant",
    year: "2024",
    services: [
      "Hospitality brand refresh",
      "Reservations website",
      "Seasonal campaign toolkit"
    ],
    description:
      "Family-owned restaurant sought a refined, modern presence. We redesigned the brand, built a CMS-backed menu experience, and rolled out social kits for weekly specials.",
    results: [
      "Friday reservations booked two weeks out",
      "Catering inquiries doubled",
      "Average table spend up 18%"
    ],
    gallery: ["/design-portfolio-2.jpg", "/design-portfolio-4.jpg"]
  },
  {
    id: "yummy-time-deli",
    name: "Yummy Time Deli",
    slug: "yummy-time-deli",
    logo: "",
    industry: "Restaurant",
    year: "2024",
    services: [
      "Visual identity",
      "Online ordering kiosk",
      "Loyalty program setup"
    ],
    description:
      "Neighborhood deli transitioning to digital. Created a bold identity, launched an order-ahead kiosk, and implemented loyalty mechanics that reward repeat morning traffic.",
    results: [
      "Mobile orders now represent 55% of sales",
      "Loyalty opt-in rate at 71%",
      "Prep time per order reduced by 30%"
    ],
    gallery: ["/design-portfolio-1.jpg"]
  },
  {
    id: "money-shot-filmz",
    name: "Money Shot Filmz",
    slug: "money-shot-filmz",
    logo: "",
    industry: "Film Production",
    year: "2024",
    services: [
      "Production portfolio site",
      "Treatment templates",
      "Pitch deck design"
    ],
    description:
      "Indie studio needed a premium showcase for music videos and documentaries. We designed a motion-forward reel hub and delivered treatment templates that impress clients.",
    results: [
      "Booked three national campaigns post-launch",
      "Average proposal approval up 46%",
      "Site watch time averages 3.8 minutes"
    ],
    gallery: ["/design-portfolio-4.jpg"]
  },
  {
    id: "cabana",
    name: "Cabana",
    slug: "cabana",
    logo: "/clients/cabana/logo.png",
    industry: "Hospitality",
    year: "2024",
    services: [
      "Booking engine build",
      "Marketing automations",
      "Brand photography direction"
    ],
    description:
      "Luxury stay brand expanding to new markets. We paired a Supabase-backed booking engine with automated nurture flows and directed photo guidelines for consistency.",
    results: [
      "Occupancy up 28% across flagship properties",
      "Cart abandonment dropped by 35%",
      "Regional landing pages launch in under a day"
    ],
    gallery: sharedGallery
  },
  {
    id: "legacy-capital",
    name: "Legacy Capital Group",
    slug: "legacy-capital-group",
    logo: "",
    industry: "Finance",
    year: "2024",
    services: [
      "Investor portal redesign",
      "Pitch collateral system",
      "Compliance-ready CMS"
    ],
    description:
      "Private wealth firm requesting a trust-building digital presence. Delivered a content governance-friendly CMS, investor dashboards, and modular decks.",
    results: [
      "New investor pipeline grew 32%",
      "Quarterly updates now published in 2 hours",
      "Bounce rate trimmed by 41%"
    ],
    gallery: ["/design-portfolio-2.jpg"]
  },
  {
    id: "sneaker-zoo",
    name: "Sneaker Zoo",
    slug: "sneaker-zoo",
    logo: "/clients/sneaker-zoo/logo.png",
    industry: "Retail",
    year: "2024",
    services: [
      "Community launch campaign",
      "Shopify theme customization",
      "Creator partnership playbooks"
    ],
    description:
      "Collector shop scaling nationwide. We produced a multi-channel drop campaign, customized Shopify for hype releases, and packaged repeatable creator briefs.",
    results: [
      "4.2x paid media return",
      "Email list grew by 8k subscribers",
      "Discord engagement up 3.5x"
    ],
    gallery: ["/design-portfolio-3.jpg", "/design-portfolio-1.jpg"]
  },
  {
    id: "calco-roofing",
    name: "Calco Roofing & Seamless Gutters",
    slug: "calco-roofing-seamless-gutters",
    logo: "/clients/calco-roofing/logo.png",
    industry: "Construction",
    year: "2024",
    services: [
      "Lead-gen website",
      "Estimate request workflow",
      "CRM reporting setup"
    ],
    description:
      "Local roofing crew needing consistent leads. Built a weather-triggered landing funnel, automated estimates, and synced calls to their CRM for next-day follow-ups.",
    results: [
      "Qualified leads up 52%",
      "Average response time trimmed to 90 minutes",
      "Quote-to-close improved by 17%"
    ],
    gallery: ["/design-portfolio-4.jpg"]
  },
  {
    id: "punkiez",
    name: "Punkiez",
    slug: "punkiez",
    logo: "/clients/punkiez/logo.png",
    industry: "Retail",
    year: "2024",
    services: [
      "Brand refresh",
      "Packaging design",
      "Shopify merchandising"
    ],
    description:
      "Streetwear candy brand launching nationwide. We brightened the identity, built packaging with accessible guidelines, and optimized Shopify bundles for impulse buys.",
    results: [
      "Subscription candy club doubled",
      "Average order value up 24%",
      "Customer reviews increased by 3x"
    ],
    gallery: ["/design-portfolio-1.jpg"]
  },
  {
    id: "serious-inquiries-only",
    name: "Serious Inquiries Only",
    slug: "serious-inquiries-only",
    logo: "",
    industry: "Media",
    year: "2024",
    services: [
      "Podcast network site",
      "Sponsorship kit",
      "Content repurposing workflows"
    ],
    description:
      "Growing media collective with multiple shows. We delivered a dynamic podcast network hub, automated episode clipping workflows, and polished sponsor-facing materials.",
    results: [
      "Sponsorship revenue up 48%",
      "Newsletter readership grew to 19k",
      "Clip production time reduced by 60%"
    ],
    gallery: ["/design-portfolio-2.jpg"]
  },
  {
    id: "eam-construction",
    name: "EAM Construction",
    slug: "eam-construction",
    logo: "",
    industry: "Construction",
    year: "2024",
    services: [
      "Project portfolio portal",
      "Bid management tools",
      "Drone footage edits"
    ],
    description:
      "Commercial construction firm wanting to showcase large builds. We built a polished project gallery, centralized bids to Airtable, and edited drone footage for prospects.",
    results: [
      "Bid turnaround decreased by 35%",
      "Shortlist rate up 22%",
      "Site sessions per visit doubled"
    ],
    gallery: ["/design-portfolio-3.jpg"]
  },
  {
    id: "truth",
    name: "Truth",
    slug: "truth",
    logo: "/clients/truth/logo.png",
    industry: "Media",
    year: "2024",
    services: [
      "Brand system expansion",
      "Social video templates",
      "Community hub"
    ],
    description:
      "Cultural media brand scaling to multi-platform. Expanded the visual system, produced editable short-form templates, and launched a member hub for premium drops.",
    results: [
      "Social engagement up 65%",
      "Community retention at 92%",
      "Average watch time improved 44%"
    ],
    gallery: sharedGallery
  },
  {
    id: "leonardos-auto",
    name: "Leonardo's Auto Body",
    slug: "leonardos-auto-body",
    logo: "",
    industry: "Automotive",
    year: "2024",
    services: [
      "Collision repair brand refresh",
      "Before/after gallery",
      "Customer survey automation"
    ],
    description:
      "Family-owned shop modernizing marketing. Produced a clean brand, image-rich gallery, and automated survey drip that feeds glowing reviews to Google.",
    results: [
      "Five-star reviews up 180%",
      "Average estimate approval up 22%",
      "Repeat customer rate at 61%"
    ],
    gallery: ["/design-portfolio-1.jpg"]
  },
  {
    id: "custom-creations-auto",
    name: "Custom Creations Auto Body",
    slug: "custom-creations-auto-body",
    logo: "/clients/custom-creations-auto/logo.png",
    industry: "Automotive",
    year: "2024",
    services: [
      "Performance landing pages",
      "Shop management dashboards",
      "Instagram content kits"
    ],
    description:
      "Performance auto shop showcasing bespoke builds. Built immersive landing pages, tied in shop dashboards for status updates, and delivered short-form content kits.",
    results: [
      "Lead form submissions up 58%",
      "Average repair cycle shortened by 2 days",
      "Instagram reach up 210%"
    ],
    gallery: ["/design-portfolio-4.jpg", "/design-portfolio-2.jpg"]
  },
  {
    id: "fort-maner",
    name: "Fort Maner",
    slug: "fort-maner",
    logo: "/clients/fort-maner/logo.jpg",
    industry: "Real Estate",
    year: "2024",
    services: [
      "Property showcase site",
      "Investor pitch deck",
      "3D tour coordination"
    ],
    description:
      "Upscale property management group. We created an interactive property site, produced investor-ready decks, and coordinated 3D tours for prospective tenants.",
    results: [
      "Lease-up timeline reduced by 25%",
      "Investor pipeline grew 3x",
      "Site dwell time averages 4 minutes"
    ],
    gallery: sharedGallery
  },
  {
    id: "supreme-burger",
    name: "Supreme Burger Co",
    slug: "supreme-burger-co",
    logo: "",
    industry: "Restaurant",
    year: "2024",
    services: [
      "Drive-thru branding",
      "Menu engineering",
      "Franchise sales kit"
    ],
    description:
      "Fast casual concept franchising nationwide. We overhauled the drive-thru identity, optimized menu boards, and built a franchise deck with unit economics slides.",
    results: [
      "Average order speed improved by 42 seconds",
      "Franchise inquiries up 3.2x",
      "Combo conversion increased 33%"
    ],
    gallery: ["/design-portfolio-2.jpg"]
  },
  {
    id: "c1mah",
    name: "C1MAH",
    slug: "c1mah",
    logo: "",
    industry: "Entertainment",
    year: "2024",
    services: [
      "Artist branding",
      "Tour merch strategy",
      "Fan community ops"
    ],
    description:
      "Independent artist collective building direct fan relationships. We refreshed the visual identity, mapped tour merch drops, and deployed a Discord-powered fan club.",
    results: [
      "Merch sell-outs in under 12 minutes",
      "Fan club retention at 88%",
      "Streaming saves up 47%"
    ],
    gallery: ["/design-portfolio-3.jpg"]
  },
  {
    id: "elev8-fitness",
    name: "Elev8 Fitness",
    slug: "elev8-fitness",
    logo: "",
    industry: "Health & Fitness",
    year: "2024",
    services: [
      "Hybrid training app",
      "Lead nurture automation",
      "In-studio signage"
    ],
    description:
      "High-energy training studio expanding to digital classes. We shipped a hybrid training hub, automated nurture campaigns, and designed signage for consistent experience.",
    results: [
      "Digital memberships up 76%",
      "Churn reduced to 4.5%",
      "Average class fill rate at 92%"
    ],
    gallery: sharedGallery
  },
  {
    id: "iq-format",
    name: "IQ FORMAT",
    slug: "iq-format",
    logo: "",
    industry: "Technology",
    year: "2024",
    services: [
      "SaaS product marketing",
      "Interactive ROI calculator",
      "Thought leadership engine"
    ],
    description:
      "AI-enabled ops platform preparing for Series A. We established product storytelling, built an interactive ROI calculator, and delivered a content engine for the exec team.",
    results: [
      "Sales-qualified pipeline up 64%",
      "Demo-to-close rate improved by 19%",
      "Content cadence increased to weekly"
    ],
    gallery: ["/design-portfolio-4.jpg", "/design-portfolio-1.jpg"]
  }
]
