"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { clientAccessProfiles } from "@/lib/client-access"
import { FrostedButton } from "@/components/frosted-button"

const keypadLayout = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["clear", "0", "back"],
]

export default function ClientSignInPage({ params }: { params: { client: string } }) {
  const router = useRouter()
  const profile = useMemo(() => clientAccessProfiles[params.client.toLowerCase()], [params.client])
  const [code, setCode] = useState("")
  const [brandInput, setBrandInput] = useState("")
  const [error, setError] = useState<string | null>(null)

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-center text-sm tracking-wide uppercase">Client access not configured</p>
      </div>
    )
  }

  const backgroundStyle = {
    backgroundImage: `url(${profile.backgroundPath})`,
  } as const

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

  const handleSubmit = () => {
    if (code !== profile.passcode) {
      setError("Passcode incorrect")
      return
    }

    const normalized = brandInput.trim().toLowerCase()
    const matchesBrand = profile.brandNames.some((name) => name === normalized)

    if (!matchesBrand) {
      setError("Brand name does not match")
      return
    }

    router.push(`/clients/${profile.slug}`)
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-16"
      style={backgroundStyle}
    >
      <div className="relative max-w-md w-full rounded-3xl bg-black/75 backdrop-blur-lg border border-white/15 shadow-[0_20px_80px_rgba(0,0,0,0.45)] px-8 py-12">
        <div className="flex flex-col items-center mb-8">
          <div className="relative h-24 w-24">
            <Image
              src={profile.logoPath}
              alt={`${profile.displayName} logo`}
              fill
              sizes="96px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {keypadLayout.flat().map((key) => {
            const label = key === "clear" ? "C" : key === "back" ? "⌫" : key

            const controlStyles =
              key === "back"
                ? "bg-red-500/80 hover:bg-red-500"
                : key === "clear"
                  ? "bg-neutral-800/80 hover:bg-neutral-800"
                  : "bg-neutral-900/80 hover:bg-neutral-900"

            return (
              <button
                key={key}
                onClick={() => handleKeyPress(key)}
                className={`aspect-square rounded-2xl border border-white/15 text-white text-xl font-semibold transition-all duration-200 flex items-center justify-center ${controlStyles}`}
              >
                {label}
              </button>
            )
          })}
        </div>

        <div className="mb-4">
          <div className="mb-1 text-xs uppercase text-white/50 tracking-[0.3em] text-center">Passcode</div>
          <div className="flex justify-center gap-3">
            {[0, 1, 2, 3].map((index) => (
              <span
                key={index}
                className="h-3 w-3 rounded-full border border-white/20 bg-white/10"
                style={{ opacity: code.length > index ? 1 : 0.3 }}
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="brand" className="sr-only">
            Brand name
          </label>
          <input
            id="brand"
            value={brandInput}
            onChange={(event) => {
              setError(null)
              setBrandInput(event.target.value)
            }}
            placeholder="Brand name"
            className="w-full rounded-2xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
        </div>

        {error && <p className="mb-4 text-center text-sm text-red-300">{error}</p>}

        <FrostedButton className="w-full bg-white text-black hover:bg-white/90" onClick={handleSubmit}>
          ENTER
        </FrostedButton>
      </div>
    </div>
  )
}
