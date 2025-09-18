export function Logo({ className }: { className?: string }) {
  return (
    <div className={`select-none ${className || ""}`}>
      <img src="/images/td-studios-logo.png" alt="TD Studios" className="h-8 w-auto shimmer-effect" />
    </div>
  )
}
