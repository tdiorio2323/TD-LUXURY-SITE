"use client"

import { InlineWidget } from "react-calendly"
import { useState, useEffect } from "react"

interface CalendlyWidgetProps {
  url: string
  className?: string
}

export function CalendlyWidget({ url, className = "" }: CalendlyWidgetProps) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Set a timeout to detect if widget fails to load
    const timer = setTimeout(() => {
      if (!loaded) {
        setFailed(true)
      }
    }, 10000) // 10 second timeout

    return () => clearTimeout(timer)
  }, [loaded])

  if (failed) {
    return (
      <div className={`${className} p-8 bg-neutral-900/70 border border-white/20 rounded-lg text-center`}>
        <p className="text-white mb-4">Calendar failed to load.</p>
        <p className="text-white/80 text-sm">
          Please email us directly at{" "}
          <a className="underline text-white hover:text-white/80" href="mailto:tyler@tdstudiosny.com">
            tyler@tdstudiosny.com
          </a>{" "}
          or call{" "}
          <a className="underline text-white hover:text-white/80" href="tel:347-485-9935">
            347-485-9935
          </a>
        </p>
      </div>
    )
  }

  return (
    <div className={className}>
      <InlineWidget
        url={url}
        styles={{
          height: "700px",
          width: "100%",
        }}
        pageSettings={{
          backgroundColor: "0F0F10",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "ffffff",
          textColor: "ffffff",
        }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
