import { GlassCard } from "@/components/glass-card"
import { FrostedButton } from "@/components/frosted-button"

const campaignKits = [
  "Launch-ready content systems built around seasonal pushes and product drops—calendars, assets, and rollout guides.",
]

const alwaysOnPresence = [
  "Editorial storytelling, community engagement, and reporting delivered monthly with brand voice alignment.",
]

const creatorCollaborations = [
  "Talent sourcing, briefs, legal, and asset handoff handled end-to-end for influencer and partner campaigns.",
]

const programBlueprint = [
  "Audience + tone workshops",
  "Editorial calendar templates",
  "Asset production workflow",
  "Community management SOPs",
]

const contentEngines = [
  "Short-form video scripts",
  "Carousel + story frameworks",
  "Long-form + newsletter mix",
  "Channel-specific repurposing",
]

const reportingCadence = [
  "Weekly performance snapshots",
  "Monthly KPI deep dives",
  "Experiment backlog + insights",
  "Attribution + funnel monitoring",
]

const channelExpertise = [
  "Short-form video, carousel storytelling, email handoffs, and executive thought leadership optimized per platform.",
]

const signalReporting = [
  "Creative performance dashboards, KPI tracking, and next-step roadmaps to keep learning cycles fast.",
]

const suggestedContent = [
  "Channels activated",
  "Campaign objective",
  "Key creative examples",
  "Outcome metrics + testimonial",
]

export default function SocialPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/social-hero-image.jpg"
            alt="Social Media Marketing Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 md:bg-black/40 hero-overlay-mobile"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Social Media Marketing</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Story-driven content, community programming, and campaigns that keep your brand in the feed.
          </p>
          <FrostedButton href="/contact">Schedule a content sprint</FrostedButton>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Campaign Kits</h3>
              <p className="text-white text-sm">{campaignKits[0]}</p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Always-on Presence</h3>
              <p className="text-white text-sm">{alwaysOnPresence[0]}</p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Creator Collaborations</h3>
              <p className="text-white text-sm">{creatorCollaborations[0]}</p>
            </GlassCard>
          </div>

          {/* Stats Section */}
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Content engines shipping 120+ assets per quarter across seven platforms
            </h2>
          </div>

          {/* Detailed Services */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-xl font-semibold mb-6">Channel expertise</h3>
              <p className="text-white mb-8">{channelExpertise[0]}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Signal reporting</h3>
              <p className="text-white mb-8">{signalReporting[0]}</p>
            </div>
          </div>

          {/* Three Column Breakdown */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div>
              <h3 className="text-xl font-semibold mb-6">Program blueprint</h3>
              <ul className="space-y-3">
                {programBlueprint.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span className="text-white text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Content engines</h3>
              <ul className="space-y-3">
                {contentEngines.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span className="text-white text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Reporting cadence</h3>
              <ul className="space-y-3">
                {reportingCadence.map((item, index) => (
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
              <h3 className="text-xl font-semibold mb-6">Campaign highlight placeholder</h3>
              <p className="text-white mb-8">
                Use this block for a social case study—include reach, engagement lift, follower growth, or sales impact
                once results are ready.
              </p>
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
            <FrostedButton href="/contact">Build your social engine</FrostedButton>
          </div>
        </div>
      </section>
    </div>
  )
}
