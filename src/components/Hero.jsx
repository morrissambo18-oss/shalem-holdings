import { ArrowRight, Code2, MapPin, MonitorPlay, Sparkles } from './Icons'

const heroDivisions = [
  {
    href: '#digital-solutions',
    icon: Code2,
    label: 'Digital Solutions',
    detail: 'Websites, apps & systems',
    className: 'hero-division-digital',
  },
  {
    href: '#entertainment-technology',
    icon: MonitorPlay,
    label: 'Entertainment Technology',
    detail: 'Products for everyday enjoyment',
    className: 'hero-division-technology',
  },
  {
    href: '#events-experiences',
    icon: Sparkles,
    label: 'Events & Experiences',
    detail: 'Moments people remember',
    className: 'hero-division-experiences',
  },
]

export default function Hero() {
  return (
    <section className="hero section-container" id="home">
      <div className="hero-copy">
        <div className="hero-location">
          <MapPin />
          <span>Diepkloof, Soweto</span>
        </div>
        <p className="eyebrow">Technology · Entertainment · Experiences</p>
        <h1>
          Turn your idea into something <span>people can use, enjoy, and remember.</span>
        </h1>
        <p className="hero-lead">
          Shalém Holdings brings digital development, entertainment technology, and event experiences together
          through one practical, Soweto-based team.
        </p>
        <div className="button-row">
          <a className="button button-primary" href="#services">
            Choose a service <ArrowRight />
          </a>
          <a className="button button-secondary" href="#contact">
            Request a quote
          </a>
        </div>
        <div className="hero-notes" aria-label="Business highlights">
          <span>Solutions shaped around you</span>
          <span>Clear next steps</span>
          <span>Local, connected service</span>
        </div>
      </div>

      <div className="hero-showcase" aria-label="Explore our divisions">
        <div className="showcase-brand">
          <div className="showcase-logo">
            <img src="/shalem-logo.png" alt="" />
          </div>
          <div>
            <span>One company</span>
            <strong>Three connected divisions</strong>
          </div>
        </div>
        <div className="showcase-divisions">
          {heroDivisions.map(({ href, icon: DivisionIcon, label, detail, className }, index) => (
            <a className={`hero-division ${className}`} href={href} key={label}>
              <span className="hero-division-number">0{index + 1}</span>
              <span className="hero-division-icon">
                <DivisionIcon />
              </span>
              <span className="hero-division-copy">
                <strong>{label}</strong>
                <small>{detail}</small>
              </span>
              <ArrowRight />
            </a>
          ))}
        </div>
        <p className="showcase-caption">
          Start with the outcome you need. We’ll help you find the right path.
        </p>
      </div>
    </section>
  )
}
