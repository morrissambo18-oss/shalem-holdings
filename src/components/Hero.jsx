import { ArrowRight, MapPin } from './Icons'

export default function Hero() {
  return (
    <section className="hero section-container" id="home">
      <div className="hero-copy">
        <div className="hero-location">
          <MapPin />
          <span>Diepkloof, Soweto</span>
        </div>
        <p className="eyebrow">Soweto-built · Business-ready</p>
        <h1>
          Technology that works. <span>Experiences that stay with people.</span>
        </h1>
        <p className="hero-lead">
          Shalém builds practical digital systems, accessible entertainment technology, and memorable event
          experiences for South African businesses and communities.
        </p>
        <div className="button-row">
          <a className="button button-primary" href="#contact">
            Start a project <ArrowRight />
          </a>
          <a className="button button-secondary" href="#featured-work">
            See our work
          </a>
        </div>
        <div className="hero-proof" aria-label="Shalém business highlights">
          <div>
            <strong>01</strong>
            <span>Live operations platform</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Connected service divisions</span>
          </div>
          <div>
            <strong>ZA</strong>
            <span>Built with local context</span>
          </div>
        </div>
      </div>

      <div className="hero-showcase">
        <img
          className="hero-showcase-image"
          src="/images/digital-solutions-hero.jpg"
          alt="A digital professional reviewing a responsive business platform"
          width="1849"
          height="851"
          fetchPriority="high"
        />
        <div className="hero-project-label">
          <img src="/projects/route-monitoring-logo.png" alt="Route Monitoring" />
          <div>
            <span>Built for Route Monitoring</span>
            <strong>Production system</strong>
          </div>
        </div>
        <div className="hero-project-card">
          <p className="card-eyebrow">Featured build · Internal platform</p>
          <h2>Training Management System</h2>
          <p>Registration, QR attendance, role controls, reports, audit logs, and Excel exports.</p>
          <div className="hero-project-tech" aria-label="Project technologies">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Supabase</span>
          </div>
          <a href="#featured-work">
            Explore the case study <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
