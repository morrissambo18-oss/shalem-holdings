import { ArrowRight } from './Icons'

export default function Hero() {
  return (
    <section className="hero hero-minimal section-container" id="home">
      <div className="hero-copy">
        <div className="hero-kicker">
          <span>Shalém Holdings</span>
          <span>Diepkloof · Soweto</span>
        </div>
        <h1>
          Practical technology. <span>Memorable experiences.</span>
        </h1>
        <p className="hero-lead">
          We help South African businesses and communities build, connect, and create through three focused
          service divisions.
        </p>
        <div className="button-row">
          <a className="button button-primary" href="#contact">
            Start a project <ArrowRight />
          </a>
          <a className="button button-secondary" href="#featured-work">
            See our work
          </a>
        </div>
        <nav className="hero-service-strip" aria-label="Our three service divisions">
          <a href="#services">
            <span>01</span>
            <strong>Digital Solutions</strong>
          </a>
          <a href="#entertainment-technology">
            <span>02</span>
            <strong>Entertainment Technology</strong>
          </a>
          <a href="#events-experiences">
            <span>03</span>
            <strong>Events & Experiences</strong>
          </a>
        </nav>
      </div>
    </section>
  )
}
