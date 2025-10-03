"use client"

import { InlineWidget } from "react-calendly"

interface CalendlyWidgetProps {
  url: string
  className?: string
}

export function CalendlyWidget({ url, className = "" }: CalendlyWidgetProps) {
  return (
    <div className={className}>
      <InlineWidget
        url={url}
        styles={{
          height: "700px",
          width: "100%",
        }}
      />
    </div>
  )
}
