/**
 * A/B Testing utilities for conversion optimization
 */

// A/B Test configuration type
export interface ABTest {
  id: string
  name: string
  variants: {
    control: string
    variant: string
  }
  traffic: number // Percentage of traffic to include in test (0-100)
  startDate?: Date
  endDate?: Date
  active: boolean
}

// Active A/B tests configuration
export const ACTIVE_TESTS: ABTest[] = [
  {
    id: 'hero_cta_text',
    name: 'Hero CTA Button Text',
    variants: {
      control: 'Contact Us',
      variant: 'Start Your Project'
    },
    traffic: 50,
    active: true
  },
  {
    id: 'pricing_display',
    name: 'Pricing Information Display',
    variants: {
      control: 'hidden',
      variant: 'visible'
    },
    traffic: 30,
    active: true
  },
  {
    id: 'testimonial_layout',
    name: 'Testimonial Section Layout',
    variants: {
      control: 'grid',
      variant: 'carousel'
    },
    traffic: 40,
    active: true
  },
  {
    id: 'contact_form_fields',
    name: 'Contact Form Field Count',
    variants: {
      control: 'full_form',
      variant: 'minimal_form'
    },
    traffic: 50,
    active: true
  }
]

// Get user's variant for a specific test
export const getVariant = (testId: string): 'control' | 'variant' | null => {
  if (typeof window === 'undefined') return null

  const test = ACTIVE_TESTS.find(t => t.id === testId)
  if (!test || !test.active) return null

  // Check if user is already assigned to this test
  const stored = localStorage.getItem(`ab_test_${testId}`)
  if (stored) {
    return stored as 'control' | 'variant'
  }

  // Determine if user should be in test based on traffic percentage
  const random = Math.random() * 100
  if (random > test.traffic) {
    return null // User not in test
  }

  // Assign variant (50/50 split within the test group)
  const variant = Math.random() < 0.5 ? 'control' : 'variant'
  localStorage.setItem(`ab_test_${testId}`, variant)

  // Track test assignment
  trackTestAssignment(testId, variant)

  return variant
}

// Track when user is assigned to a test variant
export const trackTestAssignment = (testId: string, variant: 'control' | 'variant') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ab_test_assignment', {
      event_category: 'experimentation',
      event_label: `${testId}_${variant}`,
      custom_parameter_1: testId,
      custom_parameter_2: variant,
    })
  }
}

// Track conversion events for A/B tests
export const trackTestConversion = (testId: string, conversionType: string, value?: number) => {
  if (typeof window === 'undefined') return

  const variant = localStorage.getItem(`ab_test_${testId}`)
  if (!variant) return // User not in this test

  if (window.gtag) {
    window.gtag('event', 'ab_test_conversion', {
      event_category: 'experimentation',
      event_label: `${testId}_${variant}_${conversionType}`,
      value: value || 1,
      custom_parameter_1: testId,
      custom_parameter_2: variant,
      custom_parameter_3: conversionType,
    })
  }
}

// Hook for React components to use A/B testing
export const useABTest = (testId: string) => {
  const variant = getVariant(testId)

  const trackConversion = (conversionType: string, value?: number) => {
    trackTestConversion(testId, conversionType, value)
  }

  return {
    variant,
    isControl: variant === 'control',
    isVariant: variant === 'variant',
    isInTest: variant !== null,
    trackConversion
  }
}

// Get test configuration by ID
export const getTestConfig = (testId: string): ABTest | undefined => {
  return ACTIVE_TESTS.find(test => test.id === testId)
}

// Analytics dashboard data structure
export interface TestResults {
  testId: string
  testName: string
  variants: {
    control: {
      users: number
      conversions: number
      conversionRate: number
    }
    variant: {
      users: number
      conversions: number
      conversionRate: number
    }
  }
  significance: number
  winner?: 'control' | 'variant' | 'inconclusive'
  startDate: Date
  lastUpdated: Date
}

// Function to calculate statistical significance (simplified)
export const calculateSignificance = (
  controlConversions: number,
  controlUsers: number,
  variantConversions: number,
  variantUsers: number
): number => {
  // Simplified z-test for proportions
  const p1 = controlConversions / controlUsers
  const p2 = variantConversions / variantUsers

  if (controlUsers === 0 || variantUsers === 0) return 0

  const pooledP = (controlConversions + variantConversions) / (controlUsers + variantUsers)
  const standardError = Math.sqrt(pooledP * (1 - pooledP) * (1/controlUsers + 1/variantUsers))

  if (standardError === 0) return 0

  const zScore = Math.abs(p1 - p2) / standardError

  // Convert z-score to confidence level (simplified)
  // 1.96 = 95% confidence, 2.576 = 99% confidence
  return Math.min(99, Math.max(0, (1 - 2 * (1 - normalCDF(Math.abs(zScore)))) * 100))
}

// Normal cumulative distribution function (approximation)
function normalCDF(x: number): number {
  return 0.5 * (1 + erf(x / Math.sqrt(2)))
}

// Error function approximation
function erf(x: number): number {
  const a1 =  0.254829592
  const a2 = -0.284496736
  const a3 =  1.421413741
  const a4 = -1.453152027
  const a5 =  1.061405429
  const p  =  0.3275911

  const sign = x >= 0 ? 1 : -1
  x = Math.abs(x)

  const t = 1.0 / (1.0 + p * x)
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x)

  return sign * y
}