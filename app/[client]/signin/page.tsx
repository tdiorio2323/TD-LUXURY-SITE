"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { clientAccessProfiles } from "@/lib/client-access"

const keypadLayout = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["clear", "0", "back"],
]

export default function ClientSignInPage({ params }: { params: Promise<{ client: string }> }) {
  const router = useRouter()
  const [clientSlug, setClientSlug] = useState<string>("")
  const [profile, setProfile] = useState<any>(null)
  const [code, setCode] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [remainingAttempts, setRemainingAttempts] = useState<number | null>(null)

  // Handle async params
  useEffect(() => {
    params.then(({ client }) => {
      const slug = client.toLowerCase()
      setClientSlug(slug)
      setProfile(clientAccessProfiles[slug])
    })
  }, [params])

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-center text-sm tracking-wide uppercase">Client access not configured</p>
      </div>
    )
  }

  const handleKeyPress = (key: string) => {
    setError(null)

    if (key === "clear") {
      setCode("")
      return
    }

    if (key === "back") {
      setCode((prev) => prev.slice(0, -1))
      return
    }

    if (code.length >= 4) return

    setCode((prev) => `${prev}${key}`)
  }

  const handleSubmit = async () => {
    if (code.length !== 4) {
      setError("Please enter a 4-digit passcode")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientSlug: clientSlug,
          passcode: code,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 429) {
          setError("Too many attempts. Please try again in 15 minutes.")
          setRemainingAttempts(0)
        } else {
          setError(data.error || "Authentication failed")
          if (data.remainingAttempts !== undefined) {
            setRemainingAttempts(data.remainingAttempts)
          }
        }
        setCode("")
        return
      }

      // Success - redirect to portal
      router.push(data.redirectUrl)
    } catch (error) {
      console.error("Signin error:", error)
      setError("Connection error. Please try again.")
      setCode("")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-16"
      style={{ backgroundImage: `url(${profile.backgroundPath})` }}
    >
      <div className="relative max-w-lg w-full rounded-[32px] bg-black/68 backdrop-blur-lg border border-white/20 shadow-[0_28px_90px_rgba(0,0,0,0.55)] px-10 py-14">
        <div className="flex flex-col items-center mb-8">
          <div className="relative h-36 w-36">
            <Image
              src={profile.logoPath}
              alt={`${profile.displayName} logo`}
              fill
              sizes="144px"
              priority
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {keypadLayout.flat().map((key) => {
            const label = key === "clear" ? "C" : key === "back" ? "⌫" : key

            const controlStyles =
              key === "back"
                ? "bg-red-500/85 hover:bg-red-500"
                : key === "clear"
                  ? "bg-neutral-800/85 hover:bg-neutral-800"
                  : "bg-neutral-900/70 hover:bg-neutral-900"

            return (
              <button
                key={key}
                onClick={() => handleKeyPress(key)}
                className={`aspect-square rounded-[28px] border border-white/20 text-white text-2xl font-semibold transition-transform duration-150 ease-out flex items-center justify-center active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30 ${controlStyles}`}
              >
                {label}
              </button>
            )
          })}
        </div>

        <div className="mb-6">
          <div className="mb-2 text-xs uppercase text-white/65 tracking-[0.4em] text-center">Passcode</div>
          <div className="flex justify-center gap-4">
            {[0, 1, 2, 3].map((index) => (
              <span
                key={index}
                className="h-3 w-3 rounded-full border border-white/45 bg-white/35"
                style={{ opacity: code.length > index ? 1 : 0.2 }}
              />
            ))}
          </div>
        </div>

        {error && (
          <div className="mb-4 text-center">
            <p className="text-sm text-red-200">{error}</p>
            {remainingAttempts !== null && remainingAttempts > 0 && (
              <p className="text-xs text-white/60 mt-1">
                {remainingAttempts} {remainingAttempts === 1 ? "attempt" : "attempts"} remaining
              </p>
            )}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={isSubmitting || code.length !== 4}
          className="w-full rounded-full border border-yellow-300/60 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black font-semibold tracking-[0.4em] uppercase py-3 shadow-[0_16px_40px_rgba(255,200,60,0.55)] hover:from-yellow-400 hover:to-yellow-400 transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Verifying..." : "Enter"}
        </button>
      </div>
    </div>
  )
}
