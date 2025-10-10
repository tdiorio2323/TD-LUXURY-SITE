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

    // Check if video can play
    const handleCanPlay = () => {
      setIsVideoLoaded(true)
    }

    const handleError = () => {
      console.warn("Video failed to load, using fallback image")
      setVideoError(true)
    }

    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("error", handleError)

    // Attempt to play video (required for iOS autoplay)
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay was prevented, which is fine for background videos
        console.log("Autoplay prevented, video will play when user interacts")
      })
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full">
      {!videoError ? (
        <>
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={posterSrc}
            className="absolute inset-0 w-full h-full object-cover opacity-70 transition-opacity duration-500"
            style={{ opacity: isVideoLoaded ? 0.7 : 0 }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Loading Poster (shows until video loads) */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={fallbackImageSrc}
                alt="Loading TD Studios"
                fill
                priority
                placeholder="blur"
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className="opacity-70"
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
          className="opacity-70"
        />
      )}
    </div>
  )
}
