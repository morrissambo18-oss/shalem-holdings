import { useEffect } from 'react'
import { ArrowRight } from './Icons'

export default function NotFoundPage() {
  const baseUrl = import.meta.env.BASE_URL

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Page not found | Shalem Holdings'
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className="legal-shell">
      <header className="legal-header section-container">
        <a className="brand" href={baseUrl} aria-label="Return to Shalem Holdings home">
          <img src={`${baseUrl}shalem-logo.png`} alt="Shalem" />
          <span>Holdings</span>
        </a>
      </header>
      <main className="legal-main section-container">
        <div className="legal-title">
          <p className="eyebrow">Shalem Holdings</p>
          <h1>Page not found</h1>
          <p>The page you requested does not exist or has moved.</p>
          <a className="text-link" href={baseUrl}>
            Return to website <ArrowRight />
          </a>
        </div>
      </main>
    </div>
  )
}
