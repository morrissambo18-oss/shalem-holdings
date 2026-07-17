import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import QuoteForm from './components/QuoteForm'
import AboutSection from './components/AboutSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import LegalPage from './components/LegalPage'
import FeaturedWork from './components/FeaturedWork'
import ProgressiveImage from './components/ProgressiveImage'
import { getLegalType } from './utils/routing'
import {
  ArrowRight,
  Camera,
  ChevronRight,
  Code2,
  MonitorPlay,
  Smartphone,
  Sparkles,
} from './components/Icons'

const baseUrl = import.meta.env.BASE_URL

const whatsappUrl = "https://wa.me/27796207928?text=Hi%2C%20I'm%20interested%20in%20Shalem%20services"

const divisions = [
  {
    id: 'digital',
    icon: Code2,
    eyebrow: 'Build your digital future',
    title: 'Digital Solutions',
    description: 'Professional digital products designed around the way your business works and grows.',
    items: ['Websites & online stores', 'Applications & platforms', 'Custom systems & integrations'],
    cta: 'Start a project',
    href: '#featured-work',
    image: `${baseUrl}images/digital-solutions-hero.jpg`,
    webp: `${baseUrl}images/digital-solutions-hero.webp`,
    imageAlt: 'A professional reviewing a responsive digital product on a laptop and phone',
  },
  {
    id: 'technology',
    icon: MonitorPlay,
    eyebrow: 'Entertainment made simple',
    title: 'Entertainment Technology',
    description: 'Flexible home entertainment technology made for everyday South African households.',
    items: ['Shalém ConnectBox', 'TV Box solutions', 'Projectors & demonstrations'],
    cta: 'Explore products',
    href: '#entertainment-technology',
    image: `${baseUrl}images/entertainment-technology-hero.jpg`,
    webp: `${baseUrl}images/entertainment-technology-hero.webp`,
    imageAlt: 'A couple enjoying a modern home entertainment and projector setup',
  },
  {
    id: 'experiences',
    icon: Sparkles,
    eyebrow: 'Create memorable moments',
    title: 'Events & Experiences',
    description: 'Interactive experiences for celebrations, activations, families, and growing brands.',
    items: ['360 Photo Booth', 'Movie Night packages', 'Corporate & branded experiences'],
    cta: 'View experiences',
    href: '#events-experiences',
    image: `${baseUrl}images/events-experiences-hero.jpg`,
    webp: `${baseUrl}images/events-experiences-hero.webp`,
    imageAlt: 'Guests enjoying an elegant 360 photo booth experience',
  },
]

const entertainmentOfferings = [
  {
    icon: MonitorPlay,
    title: 'Shalém ConnectBox',
    text: 'A simple entertainment option for households looking to bring more content and convenience to their television setup.',
    tag: 'Home entertainment',
  },
  {
    icon: Smartphone,
    title: 'TV Box Solutions',
    text: 'Guidance and product options based on your television, connection, household needs, and preferred setup.',
    tag: 'Flexible options',
  },
  {
    icon: Camera,
    title: 'Smart TV Box Projector',
    text: 'A compact entertainment setup for movie nights, shared viewing, presentations, and flexible spaces.',
    tag: 'Big-screen moments',
  },
]

const experienceOfferings = [
  {
    icon: Camera,
    title: '360 Photo Booth',
    text: 'An interactive video experience that gives guests a memorable moment and shareable event content.',
    tag: 'Celebrations & activations',
  },
  {
    icon: MonitorPlay,
    title: 'Movie Night Packages',
    text: 'A coordinated viewing experience for families, communities, celebrations, and relaxed social occasions.',
    tag: 'Indoor or outdoor',
  },
  {
    icon: Sparkles,
    title: 'Branded Experiences',
    text: 'Customer-facing experiences shaped around launches, promotions, corporate events, and brand activations.',
    tag: 'Built around your brand',
  },
]

function App() {
  const [activeDivision, setActiveDivision] = useState('digital')
  const [selectedService, setSelectedService] = useState('')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const tabRefs = useRef([])
  const divisionTouchStart = useRef(null)
  const progressRef = useRef(null)
  const legalType = getLegalType(window.location.pathname, window.location.search)

  useEffect(() => {
    const updateScrollUI = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
      progressRef.current?.style.setProperty('--scroll-progress', Math.min(progress, 1))
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
        'main > section:not(.hero), .division-card, .offering-card, .project-showcase, .founder-feature, .faq-list details',
      ),
    ]

    elements.forEach((element, index) => {
      element.classList.add('reveal-ready')
      element.style.setProperty('--reveal-delay', `${(index % 4) * 55}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const chooseService = (service) => {
    setSelectedService(service)
    window.setTimeout(() => document.querySelector('#quote-service')?.focus(), 350)
  }

  const handleTabKeyDown = (event, index) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return

    event.preventDefault()
    const lastIndex = divisions.length - 1
    let nextIndex = index
    if (event.key === 'ArrowRight') nextIndex = index === lastIndex ? 0 : index + 1
    if (event.key === 'ArrowLeft') nextIndex = index === 0 ? lastIndex : index - 1
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = lastIndex
    setActiveDivision(divisions[nextIndex].id)
    tabRefs.current[nextIndex]?.focus()
  }

  const handleDivisionTouchStart = (event) => {
    divisionTouchStart.current = event.touches[0]?.clientX ?? null
  }

  const handleDivisionTouchEnd = (event) => {
    if (divisionTouchStart.current === null) return
    const endX = event.changedTouches[0]?.clientX ?? divisionTouchStart.current
    const distance = divisionTouchStart.current - endX
    divisionTouchStart.current = null
    if (Math.abs(distance) < 55) return

    const currentIndex = divisions.findIndex((division) => division.id === activeDivision)
    const direction = distance > 0 ? 1 : -1
    const nextIndex = (currentIndex + direction + divisions.length) % divisions.length
    setActiveDivision(divisions[nextIndex].id)
  }

  const selectedDivision = divisions.find((division) => division.id === activeDivision) ?? divisions[0]
  const SelectedDivisionIcon = selectedDivision.icon
  const selectedDivisionIndex = divisions.findIndex((division) => division.id === selectedDivision.id)

  if (legalType === 'privacy' || legalType === 'terms') {
    return <LegalPage type={legalType} />
  }

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
              <p className="eyebrow">What we do</p>
              <h2>Different capabilities. One standard of delivery.</h2>
            </div>
            <p>
              Start with the outcome you need. We bring together the right mix of technology, practical
              thinking, and hands-on delivery.
            </p>
          </div>

          <div
            className={`division-explorer division-explorer-${selectedDivision.id}`}
            onTouchStart={handleDivisionTouchStart}
            onTouchEnd={handleDivisionTouchEnd}
          >
            <div className="division-tabs" role="tablist" aria-label="Service divisions">
              {divisions.map((division, index) => (
                <button
                  key={division.id}
                  ref={(element) => {
                    tabRefs.current[index] = element
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${division.id}`}
                  aria-controls="division-panel"
                  aria-selected={activeDivision === division.id}
                  tabIndex={activeDivision === division.id ? 0 : -1}
                  onClick={() => setActiveDivision(division.id)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  <span>0{index + 1}</span>
                  {division.title}
                </button>
              ))}
            </div>

            <article
              className="division-explorer-panel"
              id="division-panel"
              role="tabpanel"
              aria-labelledby={`tab-${selectedDivision.id}`}
              aria-live="polite"
              key={selectedDivision.id}
            >
              <div className="division-explorer-visual">
                <ProgressiveImage
                  src={selectedDivision.image}
                  webpSrc={selectedDivision.webp}
                  alt={selectedDivision.imageAlt}
                  width="1849"
                  height="902"
                  loading="lazy"
                  decoding="async"
                />
                <span className="division-explorer-count">0{selectedDivisionIndex + 1} / 03</span>
                <span className="division-swipe-hint">Swipe to explore</span>
              </div>
              <div className="division-explorer-copy">
                <span className="division-explorer-icon">
                  <SelectedDivisionIcon />
                </span>
                <p className="card-eyebrow">{selectedDivision.eyebrow}</p>
                <h3>{selectedDivision.title}</h3>
                <p>{selectedDivision.description}</p>
                <ul>
                  {selectedDivision.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="button button-primary" href={selectedDivision.href}>
                  {selectedDivision.cta} <ArrowRight />
                </a>
              </div>
            </article>
          </div>
        </section>

        <FeaturedWork onChooseService={chooseService} />

        <section className="section division-detail" id="entertainment-technology">
          <div className="section-container">
            <div className="detail-intro">
              <div>
                <p className="eyebrow">Entertainment technology</p>
                <h2>Simple technology for better everyday entertainment.</h2>
              </div>
              <div>
                <p>
                  Start with what you already have and what you want to enjoy. We’ll help identify a practical
                  entertainment option and explain the next steps clearly.
                </p>
                <a
                  className="text-link"
                  href="#contact"
                  onClick={() => chooseService('Entertainment technology')}
                >
                  Ask about a product <ArrowRight />
                </a>
              </div>
            </div>

            <figure className="division-media division-media-entertainment">
              <ProgressiveImage
                src={`${baseUrl}images/entertainment-technology-hero.jpg`}
                webpSrc={`${baseUrl}images/entertainment-technology-hero.webp`}
                alt="A couple enjoying a home projector and entertainment setup"
                width="1823"
                height="863"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="offering-grid">
              {entertainmentOfferings.map(({ icon: OfferingIcon, title, text, tag }) => (
                <article className="offering-card" key={title}>
                  <div className="offering-icon">
                    <OfferingIcon />
                  </div>
                  <p className="offering-tag">{tag}</p>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a
                    href="#contact"
                    onClick={() =>
                      chooseService(title === 'Shalém ConnectBox' ? 'Entertainment technology' : title)
                    }
                  >
                    Enquire now <ChevronRight />
                  </a>
                </article>
              ))}
            </div>

            <p className="division-guidance">
              Tell us about your setup, review the recommended option, and confirm delivery or installation.
            </p>
          </div>
        </section>

        <section className="section division-detail experience-detail" id="events-experiences">
          <div className="section-container">
            <div className="detail-intro">
              <div>
                <p className="eyebrow">Events & experiences</p>
                <h2>Give people a moment worth remembering.</h2>
              </div>
              <div>
                <p>
                  From celebrations to brand activations, we shape the experience around your audience, venue,
                  timing, and the atmosphere you want to create.
                </p>
                <a
                  className="text-link"
                  href="#contact"
                  onClick={() => chooseService('Corporate or branded experience')}
                >
                  Plan an experience <ArrowRight />
                </a>
              </div>
            </div>

            <figure className="division-media division-media-experiences">
              <ProgressiveImage
                src={`${baseUrl}images/events-experiences-hero.jpg`}
                webpSrc={`${baseUrl}images/events-experiences-hero.webp`}
                alt="Guests enjoying an elegant 360 photo booth experience"
                width="1744"
                height="902"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="offering-grid">
              {experienceOfferings.map(({ icon: OfferingIcon, title, text, tag }) => (
                <article className="offering-card" key={title}>
                  <div className="offering-icon">
                    <OfferingIcon />
                  </div>
                  <p className="offering-tag">{tag}</p>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a
                    href="#contact"
                    onClick={() =>
                      chooseService(
                        title === '360 Photo Booth'
                          ? '360 Photo Booth'
                          : title === 'Movie Night Packages'
                            ? 'Movie Night package'
                            : 'Corporate or branded experience',
                      )
                    }
                  >
                    Check availability <ChevronRight />
                  </a>
                </article>
              ))}
            </div>

            <p className="division-guidance">
              Share your date, location, and guest count; we’ll confirm the package, availability, and booking
              requirements.
            </p>
          </div>
        </section>

        <AboutSection />
        <FaqSection whatsappUrl={whatsappUrl} />

        <section className="quote-section" id="contact">
          <div className="section-container quote-layout">
            <div className="quote-copy">
              <p className="eyebrow">Start a conversation</p>
              <h2>Tell us what you want to make happen.</h2>
              <p>
                Share a few details and we’ll prepare the conversation before you reach WhatsApp. No
                commitment and no complicated brief required.
              </p>
              <div className="confidence-cues" aria-label="Why contact Shalém">
                <span>Registered South African company</span>
                <span>Based in Soweto</span>
                <span>Private internal system delivered</span>
                <span>Human response on WhatsApp</span>
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
