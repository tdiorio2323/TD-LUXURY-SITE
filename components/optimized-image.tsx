import React from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
  width?: number
  height?: number
  loading?: 'lazy' | 'eager'
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

// Memoized image component for better performance
export const OptimizedImage = React.memo(function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '100vw',
  fill = false,
  width,
  height,
  loading = 'lazy',
  placeholder = 'empty',
  blurDataURL
}: OptimizedImageProps) {
  const Image = React.lazy(() => import('next/image'))
  
  return (
    <React.Suspense fallback={<div className={`bg-neutral-800 animate-pulse ${className}`} />}>
      <Image
        src={src}
        alt={alt}
        className={className}
        priority={priority}
        sizes={sizes}
        fill={fill}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
      />
    </React.Suspense>
  )
})