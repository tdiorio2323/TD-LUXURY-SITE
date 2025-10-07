import { ReactNode } from "react"

interface SectionProps {
  id?: string
  title?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-20 ${className}`}>
      {title && (
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">{title}</h2>
      )}
      {children}
    </section>
  )
}
