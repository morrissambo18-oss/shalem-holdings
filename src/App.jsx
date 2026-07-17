import { useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import QuoteForm from './components/QuoteForm'
import AboutSection from './components/AboutSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import EngagementOptions from './components/EngagementOptions'
import LegalPage from './components/LegalPage'
import { getLegalType } from './utils/routing'
import {
  ArrowRight,
  Blocks,
  Camera,
  ChevronRight,
  Code2,
  MonitorPlay,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from './components/Icons'

const whatsappUrl = "https://wa.me/27796207928?text=Hi%2C%20I'm%20interested%20in%20Shalem%20services"

const divisions = [
  {
    id: 'digital',
    icon: Code2,
    eyebrow: 'Build your digital future',
    title: 'Digital Solutions',
    description: 'Professional digital products designed around the way your business works and grows.',
    items: [
      'Business websites',
      'E-commerce websites',
      'Web & mobile applications',
      'Custom systems & integrations',
    ],
    cta: 'Start a project',
  },
  {
    id: 'technology',
    icon: MonitorPlay,
    eyebrow: 'Entertainment made simple',
    title: 'Entertainment Technology',
    description: 'Flexible home entertainment technology made for everyday South African households.',
    items: ['Shalém ConnectBox', 'TV Box solutions', 'Smart TV Box Projector', 'Product demonstrations'],
    cta: 'Explore products',
  },
  {
    id: 'experiences',
    icon: Sparkles,
    eyebrow: 'Create memorable moments',
    title: 'Events & Experiences',
    description: 'Interactive experiences for celebrations, activations, families, and growing brands.',
    items: ['360 Photo Booth', 'Movie Night packages', 'Corporate activations', 'Branded experiences'],
    cta: 'View experiences',
  },
]

const digitalServices = [
  {
    icon: Blocks,
    title: 'Business Websites',
    text: 'Professional, responsive websites built to establish trust and generate enquiries.',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    text: 'Clear online shopping experiences that make products easier to discover and buy.',
  },
  {
    icon: Smartphone,
    title: 'Applications',
    text: 'Web and mobile applications designed around real customer and business needs.',
  },
  {
    icon: Code2,
    title: 'Custom Systems',
    text: 'Purpose-built tools and integrations that improve how your business operates.',
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
  const tabRefs = useRef([])
  const legalType = getLegalType(window.location.pathname, window.location.search)

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

  if (legalType === 'privacy' || legalType === 'terms') {
    return <LegalPage type={legalType} />
  }

  return (
    <div className="site-shell">
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
              <h2>Three divisions. One trusted partner.</h2>
            </div>
            <p>
              Every Shalém service has a clear customer journey while remaining part of one confident brand.
            </p>
          </div>

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
                aria-controls={`panel-${division.id}`}
                aria-selected={activeDivision === division.id}
                tabIndex={activeDivision === division.id ? 0 : -1}
                onClick={() => setActiveDivision(division.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                {division.title}
              </button>
            ))}
          </div>

          <div className="division-grid">
            {divisions.map((division) => {
              const Icon = division.icon
              const active = activeDivision === division.id
              return (
                <article
                  className={active ? 'division-card is-active' : 'division-card'}
                  id={`panel-${division.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${division.id}`}
                  key={division.id}
                >
                  <Icon className="division-icon" />
                  <p className="card-eyebrow">{division.eyebrow}</p>
                  <h3>{division.title}</h3>
                  <p>{division.description}</p>
                  <ul>
                    {division.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href={
                      division.id === 'digital'
                        ? '#digital-solutions'
                        : division.id === 'technology'
                          ? '#entertainment-technology'
                          : '#events-experiences'
                    }
                  >
                    {division.cta} <ChevronRight />
                  </a>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section digital-section" id="digital-solutions">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Digital solutions</p>
                <h2>Websites and applications built for real business growth.</h2>
              </div>
              <p>We focus on useful, professional products—not hosting packages or unnecessary extras.</p>
            </div>
            <div className="service-grid">
              {digitalServices.map(({ icon: Icon, title, text }) => (
                <article className="service-card" key={title}>
                  <Icon />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a
                    href="#contact"
                    onClick={() =>
                      chooseService(
                        title === 'E-commerce'
                          ? 'E-commerce website'
                          : title === 'Applications'
                            ? 'Web or mobile application'
                            : title === 'Custom Systems'
                              ? 'Custom system or integration'
                              : 'Business website',
                      )
                    }
                  >
                    Get a quote <ChevronRight />
                  </a>
                </article>
              ))}
            </div>
            <div className="division-summary">
              <div>
                <span>Built around your goal</span>
                <span>Responsive by default</span>
                <span>Clear handover</span>
              </div>
              <a
                className="button button-primary"
                href="#contact"
                onClick={() => chooseService('Business website')}
              >
                Discuss a digital project <ArrowRight />
              </a>
            </div>
          </div>
        </section>

        <EngagementOptions onChooseService={chooseService} />

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

            <div className="detail-steps">
              <div>
                <p className="eyebrow">How to order</p>
                <h3>From a quick conversation to the right setup.</h3>
              </div>
              <ol>
                <li>
                  <span>01</span>
                  <p>
                    <strong>Share your setup</strong>Tell us about your TV, space, and what you want to watch
                    or do.
                  </p>
                </li>
                <li>
                  <span>02</span>
                  <p>
                    <strong>Review the option</strong>We clarify the product, availability, pricing, and what
                    is included.
                  </p>
                </li>
                <li>
                  <span>03</span>
                  <p>
                    <strong>Confirm the next step</strong>Arrange collection, delivery, demonstration, or
                    setup where available.
                  </p>
                </li>
              </ol>
            </div>
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

            <div className="detail-steps">
              <div>
                <p className="eyebrow">How to book</p>
                <h3>A clear plan for a smooth event day.</h3>
              </div>
              <ol>
                <li>
                  <span>01</span>
                  <p>
                    <strong>Share the occasion</strong>Tell us the date, location, guest count, and experience
                    you have in mind.
                  </p>
                </li>
                <li>
                  <span>02</span>
                  <p>
                    <strong>Shape the package</strong>We confirm requirements, availability, inclusions,
                    timing, and pricing.
                  </p>
                </li>
                <li>
                  <span>03</span>
                  <p>
                    <strong>Confirm your booking</strong>Approve the plan and complete the required booking
                    arrangements.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section section-container" id="process">
          <div className="section-heading">
            <div>
              <p className="eyebrow">How we work</p>
              <h2>From your idea to the final experience.</h2>
            </div>
          </div>
          <div className="process-grid">
            {[
              ['01', 'Tell us what you need', 'Choose a service and share your goal.'],
              ['02', 'Get a clear proposal', 'We confirm scope, pricing, and timing.'],
              ['03', 'We make it happen', 'We build, prepare, or arrange your service.'],
              ['04', 'Review and enjoy', 'Approve the result and receive your solution.'],
            ].map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
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
              <div className="quote-promises" aria-label="What to expect">
                <span>Clear next steps</span>
                <span>Pricing based on your needs</span>
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
    </div>
  )
}

export default App
