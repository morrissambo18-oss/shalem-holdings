import { ArrowRight } from './Icons'

export default function Hero() {
  return (
    <section className="hero hero-minimal section-container" id="home">
      <div className="hero-copy">
        <div className="hero-kicker">
          <span>Shalem Holdings</span>
          <span>Software studio · South Africa</span>
        </div>
        <h1>
          We build software. <span>Businesses grow.</span>
        </h1>
        <p className="hero-lead">
          We partner with ambitious startups and established businesses to turn ideas, bottlenecks, and
          opportunities into websites, applications, and custom software that move the business forward.
        </p>
        <div className="button-row">
          <a className="button button-primary" href="#contact">
            Start a project <ArrowRight />
          </a>
          <a className="button button-secondary" href="#featured-work">
            See our work
          </a>
        </div>
        <nav className="hero-service-strip" aria-label="Our technology services">
          <a href="#services">
            <span>01</span>
            <strong>Websites that convert</strong>
          </a>
          <a href="#startup-partners">
            <span>02</span>
            <strong>Web & mobile applications</strong>
          </a>
          <a href="#growth-partners">
            <span>03</span>
            <strong>Custom business software</strong>
          </a>
        </nav>
      </div>
    </section>
  )
}
