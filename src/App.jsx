import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import QuoteForm from './components/QuoteForm'
import AboutSection from './components/AboutSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import LegalPage from './components/LegalPage'
import FeaturedWork from './components/FeaturedWork'
import { getLegalType } from './utils/routing'
import { ArrowRight, Code2, MonitorPlay, Smartphone } from './components/Icons'

const whatsappUrl =
  "https://wa.me/27796207928?text=Hi%2C%20I'm%20interested%20in%20building%20software%20with%20Shal%C3%A9m"

const services = [
  {
    icon: MonitorPlay,
    label: 'Launch your presence',
    title: 'Websites',
    text: 'Fast, accessible websites and online stores designed to earn trust, generate leads, and support growth.',
    items: ['Business & marketing websites', 'E-commerce experiences', 'Content management & analytics'],
    service: 'Business website',
  },
  {
    icon: Smartphone,
    label: 'Turn an idea into a product',
    title: 'Applications',
    text: 'Focused web and mobile applications built around real users, clear priorities, and a practical path to market.',
    items: ['Startup MVPs', 'Customer & team portals', 'Web and mobile products'],
    service: 'Web or mobile application',
  },
  {
    icon: Code2,
    label: 'Improve how work gets done',
    title: 'Custom Software',
    text: 'Secure systems, integrations, and automation that replace manual work and help established businesses scale.',
    items: ['Workflow automation', 'Internal business systems', 'Integrations & modernisation'],
    service: 'Custom system or integration',
  },
]

const audiences = [
  {
    id: 'startup-partners',
    eyebrow: 'For startups',
    title: 'From promising idea to a product people can use.',
    text: 'We help founders identify the strongest opportunity, define a focused first version, and launch software that can be tested with real customers.',
    points: ['Product discovery and scope', 'MVP design and development', 'Launch, feedback, and iteration'],
    service: 'Startup MVP',
  },
  {
    id: 'growth-partners',
    eyebrow: 'For established businesses',
    title: 'Software that removes friction and unlocks growth.',
    text: 'We work with teams that have outgrown spreadsheets, disconnected tools, or old systems—then build a better way to operate and serve customers.',
    points: [
      'Process and systems discovery',
      'Custom platforms and automation',
      'Integrations, support, and improvement',
    ],
    service: 'Business process automation',
  },
]

function App() {
  const [selectedService, setSelectedService] = useState('')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const progressRef = useRef(null)
  const legalType = getLegalType(window.location.pathname, window.location.search)

  useEffect(() => {
    const updateScrollUI = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight
      progressRef.current?.style.setProperty(
        '--scroll-progress',
        Math.min(height > 0 ? window.scrollY / height : 0, 1),
      )
      setShowBackToTop(window.scrollY > 900)
    }
    updateScrollUI()
    window.addEventListener('scroll', updateScrollUI, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollUI)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const elements = [
      ...document.querySelectorAll(
        'main > section:not(.hero), .offering-card, .project-showcase, .founder-feature, .faq-list details',
      ),
    ]
    elements.forEach((element, index) => {
      element.classList.add('reveal-ready')
      element.style.setProperty('--reveal-delay', `${(index % 4) * 55}ms`)
    })
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const chooseService = (service) => {
    setSelectedService(service)
    window.setTimeout(() => document.querySelector('#quote-service')?.focus(), 350)
  }

  if (legalType === 'privacy' || legalType === 'terms') return <LegalPage type={legalType} />

  return (
    <div className="site-shell">
      <div className="scroll-progress" ref={progressRef} aria-hidden="true">
        <span />
      </div>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header whatsappUrl={whatsappUrl} />
      <main id="main-content">
        <Hero />
        <section className="section section-container" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What we build</p>
              <h2>Technology shaped around your next stage of growth.</h2>
            </div>
            <p>
              We start with the business outcome, then combine strategy, design, and engineering to build the
              right solution.
            </p>
          </div>
          <div className="offering-grid tech-service-grid">
            {services.map(({ icon: Icon, label, title, text, items, service }) => (
              <article className="offering-card" key={title}>
                <div className="offering-icon">
                  <Icon />
                </div>
                <p className="offering-tag">{label}</p>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul className="project-capabilities">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#contact" onClick={() => chooseService(service)}>
                  Discuss your project <ArrowRight />
                </a>
              </article>
            ))}
          </div>
        </section>
        <FeaturedWork onChooseService={chooseService} />
        {audiences.map(({ id, eyebrow, title, text, points, service }, index) => (
          <section className={`section division-detail ${index ? 'experience-detail' : ''}`} id={id} key={id}>
            <div className="section-container">
              <div className="detail-intro">
                <div>
                  <p className="eyebrow">{eyebrow}</p>
                  <h2>{title}</h2>
                </div>
                <div>
                  <p>{text}</p>
                  <a className="text-link" href="#contact" onClick={() => chooseService(service)}>
                    Start the conversation <ArrowRight />
                  </a>
                </div>
              </div>
              <div className="growth-path" aria-label={`${eyebrow} engagement approach`}>
                {points.map((point, pointIndex) => (
                  <article key={point}>
                    <span>0{pointIndex + 1}</span>
                    <h3>{point}</h3>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
        <AboutSection />
        <FaqSection whatsappUrl={whatsappUrl} />
        <section className="quote-section" id="contact">
          <div className="section-container quote-layout">
            <div className="quote-copy">
              <p className="eyebrow">Start a conversation</p>
              <h2>What could better software make possible?</h2>
              <p>
                Tell us about your idea, challenge, or opportunity. We will help you identify a practical next
                step—no complete brief required.
              </p>
              <div className="confidence-cues" aria-label="Why contact Shalém">
                <span>Startup and business focused</span>
                <span>Strategy through delivery</span>
                <span>Production software delivered</span>
                <span>Based in Soweto, serving South Africa</span>
              </div>
            </div>
            <QuoteForm selectedService={selectedService} onServiceChange={setSelectedService} />
          </div>
        </section>
      </main>
      <div className="mobile-actions" aria-label="Quick contact options">
        <a href="#contact">Get a quote</a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
      <Footer whatsappUrl={whatsappUrl} />
      <button
        className={showBackToTop ? 'back-to-top is-visible' : 'back-to-top'}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowRight />
      </button>
    </div>
  )
}

export default App
