"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface Props extends ImageProps { }

export const LinkCardImage: React.FC<Props> = (props) => {
  const [hasError, setHasError] = useState(false)

  if (hasError || !props.src) {
    return (
      <div className="aspect-video bg-[hsl(0_2%_89%)] text-gray-900 text-5xl flex items-center justify-center">&#x2639;</div>
    )
  }

  return (
    <picture className="block overflow-hidden" >
      <Image
        {...props}
        onError={() => setHasError(true)}
        unoptimized
      />
    </picture>
  )
}
