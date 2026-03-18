"use client"

import { useState } from "react"
import { type ImageProps } from "next/image"

interface Props {
  className?: string
  src?: string
  loading: ImageProps["loading"]
  decoding: ImageProps["decoding"]
}

export const LinkCardImage: React.FC<Props> = (props) => {
  const [hasError, setHasError] = useState(false)

  if (hasError || !props.src) {
    return (
      <div className="aspect-video bg-[hsl(0_2%_89%)] text-gray-900 text-5xl flex items-center justify-center">&#x2639;</div>
    )
  }

  return (
    <picture className="block overflow-hidden" >
      <img
        {...props}
        width={358}
        height={183}
        alt=""
        onError={() => setHasError(true)}
      />
    </picture>
  )
}
