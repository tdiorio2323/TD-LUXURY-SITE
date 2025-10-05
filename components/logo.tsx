import Image from "next/image"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`select-none ${className || ""}`}>
      <Image
        src="/images/td-studios-logo.png"
        alt="TD Studios Logo"
        width={256}
        height={64}
        className="h-16 w-auto"
      />
    </div>
  )
}
