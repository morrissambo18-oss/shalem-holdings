import { useState } from 'react'

export default function ProgressiveImage({ src, webpSrc, className = '', alt, ...props }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <picture className="progressive-picture">
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img
        {...props}
        src={src}
        alt={alt}
        className={`${className} progressive-image${loaded ? ' is-loaded' : ''}`}
        onLoad={() => setLoaded(true)}
      />
    </picture>
  )
}
