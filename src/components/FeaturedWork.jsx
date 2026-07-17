import { ArrowRight, Code2 } from './Icons'

const capabilities = [
  'Role-based access and secure authentication',
  'Training sessions and module management',
  'QR registration and attendance check-in',
  'Trainee records and attendance limits',
  'Reports, audit logs, and Excel exports',
  'Registration confirmation emails',
]

const technologies = ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Playwright']

export default function FeaturedWork({ onChooseService }) {
  return (
    <section className="section featured-work" id="featured-work">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured work</p>
            <h2>A working system built around real operations.</h2>
          </div>
          <p>
            A secure internal platform created for Route Monitoring to bring training administration,
            attendance, and reporting into one connected workflow.
          </p>
        </div>

        <article className="project-showcase">
          <div className="project-preview" aria-label="Route Monitoring Training Management System preview">
            <div className="project-browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <p>Internal operations platform</p>
            </div>
            <div className="project-screen">
              <aside>
                <img src="/projects/route-monitoring-logo.png" alt="Route Monitoring" />
                <span className="project-nav-line is-active" />
                <span className="project-nav-line" />
                <span className="project-nav-line" />
                <span className="project-nav-line" />
              </aside>
              <div className="project-dashboard">
                <div className="project-dashboard-heading">
                  <span>Training management</span>
                  <i />
                </div>
                <div className="project-stat-grid" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="project-table" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>

          <div className="project-copy">
            <div className="project-brand-row">
              <span className="project-icon">
                <Code2 />
              </span>
              <div>
                <p className="card-eyebrow">Route Monitoring</p>
                <h3>Training Management System</h3>
              </div>
            </div>
            <p className="project-description">
              Designed and developed as a production-ready internal application for managing the full training
              journey—from public registration and QR check-in to controlled access, operational reporting,
              and auditable records.
            </p>
            <ul className="project-capabilities">
              {capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
            <div className="project-technologies" aria-label="Technologies used">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            <div className="project-actions">
              <a
                className="button button-primary"
                href="#contact"
                onClick={() => onChooseService('Custom system or integration')}
              >
                Build a similar system <ArrowRight />
              </a>
              <a
                className="text-link"
                href="https://rm-training-system.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                View secure login <ArrowRight />
              </a>
            </div>
            <p className="project-privacy-note">Private internal platform. Operational data is not public.</p>
          </div>
        </article>
      </div>
    </section>
  )
}
