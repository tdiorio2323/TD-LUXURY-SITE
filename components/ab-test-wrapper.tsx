"use client"

import { useEffect, useState } from 'react'
import { useABTest } from '@/lib/ab-testing'

interface ABTestWrapperProps {
  testId: string
  controlComponent: React.ReactNode
  variantComponent: React.ReactNode
  fallback?: React.ReactNode
}

export function ABTestWrapper({
  testId,
  controlComponent,
  variantComponent,
  fallback
}: ABTestWrapperProps) {
  const [mounted, setMounted] = useState(false)
  const { variant, isControl, isVariant, isInTest } = useABTest(testId)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by showing fallback until mounted
  if (!mounted) {
    return <>{fallback || controlComponent}</>
  }

  // If user is not in test, show fallback or control
  if (!isInTest) {
    return <>{fallback || controlComponent}</>
  }

  // Show appropriate variant
  if (isControl) {
    return <>{controlComponent}</>
  }

  if (isVariant) {
    return <>{variantComponent}</>
  }

  // Fallback
  return <>{fallback || controlComponent}</>
}

// Hook for conditional rendering based on A/B test
export function useABTestVariant(testId: string) {
  const [mounted, setMounted] = useState(false)
  const { variant, isControl, isVariant, isInTest, trackConversion } = useABTest(testId)

  useEffect(() => {
    setMounted(true)
  }, [])

  return {
    variant: mounted ? variant : null,
    isControl: mounted ? isControl : true, // Default to control during SSR
    isVariant: mounted ? isVariant : false,
    isInTest: mounted ? isInTest : false,
    trackConversion,
    mounted
  }
}