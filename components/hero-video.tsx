"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface HeroVideoProps {
  videoSrc: string
  posterSrc: string
  fallbackImageSrc: any
}

export function HeroVideo({ videoSrc, posterSrc, fallbackImageSrc }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Force load the video immediately
    video.load()

    // Check if video can play
    const handleCanPlay = () => {
      setIsVideoLoaded(true)
      // Try to play immediately when ready
      video.play().catch(() => {
        // Autoplay prevented by browser - fallback to poster
      })
    }

    const handleLoadedData = () => {
      setIsVideoLoaded(true)
    }

    const handleError = (e: Event) => {
      console.warn("Video failed to load, using fallback image", e)
      setVideoError(true)
    }

    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("error", handleError)

    // Attempt immediate playback
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Initial autoplay prevented - video will try again when canplay fires
      })
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full bg-black">
      {!videoError ? (
        <>
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: isVideoLoaded ? 1 : 0 }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Loading Poster (shows until video loads) */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={fallbackImageSrc}
                alt="TD Studios"
                fill
                priority
                placeholder="blur"
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </>
      ) : (
        /* Fallback Image if video fails */
        <Image
          src={fallbackImageSrc}
          alt="TD Studios Hero Background"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      )}
    </div>
  )
}
