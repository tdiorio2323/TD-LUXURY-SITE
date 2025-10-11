"use client"

import { useState } from "react"
import { Share2, Twitter, Facebook, Linkedin, Copy, Check } from "lucide-react"

interface SocialShareProps {
  url: string
  title: string
  description?: string
  className?: string
}

export function SocialShare({ url, title, description, className = "" }: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description || "")

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-blue-500/20 hover:text-blue-400"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-blue-600/20 hover:text-blue-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:bg-blue-700/20 hover:text-blue-400"
    }
  ]

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy link:", err)
    }
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        })
      } catch (err) {
        console.error("Failed to share:", err)
      }
    } else {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={handleNativeShare}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white backdrop-blur-lg transition-colors min-h-[44px] px-4 py-3"
        aria-label="Share this page"
      >
        <Share2 className="w-4 h-4" />
        <span className="text-sm">Share</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 p-3 bg-black/90 border border-white/20 rounded-lg backdrop-blur-lg z-10 min-w-[200px]">
          <div className="space-y-2">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-white/80 transition-colors ${link.color}`}
                onClick={() => setIsOpen(false)}
              >
                <link.icon className="w-4 h-4" />
                <span className="text-sm">{link.name}</span>
              </a>
            ))}
            
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-3 px-3 py-2 w-full text-left rounded-lg text-white/80 hover:bg-white/10 transition-colors min-h-[44px] px-4 py-3"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              <span className="text-sm">{copied ? "Copied!" : "Copy Link"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}