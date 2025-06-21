'use client'
import Image from 'next/image'
import { useState } from 'react'

type Props = {
  src: string | undefined
  alt: string
  width?: number
  height?: number
  className?: string
}

export default function SafeImage({
  src,
  alt,
  width = 35,
  height = 35,
  className = '',
}: Props) {
  const [error, setError] = useState(false)

  const isValidSrc =
    typeof src === 'string' &&
    (src.startsWith('http://') || src.startsWith('https://'))

  if (!isValidSrc || error) {
    return (
      <div
        className="bg-gray-200 flex items-center justify-center text-xs text-gray-500 rounded"
        style={{ width, height }}
      >
        N/A
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={() => setError(true)}
      className={className}
      loading="lazy"
    />
  )
}
