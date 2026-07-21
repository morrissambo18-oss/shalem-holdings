import { ArrowRight, MapPin } from './Icons'
import ProgressiveImage from './ProgressiveImage'

export default function AboutSection() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <section className="about-section" id="about">
      <div className="section-container about-layout">
        <div className="about-story">
          <p className="eyebrow">About Shalém Holdings</p>
          <h2>A technology partner built close to the businesses we serve.</h2>
          <p>
            From our base in Soweto, we combine business understanding, product thinking, design, and
            engineering to build software that solves real problems and creates measurable value.
          </p>
          <div className="company-credentials" aria-label="Company registration details">
            <div>
              <span>Registered company</span>
              <strong>Shalém Holdings (Pty) Ltd</strong>
            </div>
            <div>
              <span>Registration number</span>
              <strong>2025/518721/07</strong>
            </div>
            <div>
              <span>Registered</span>
              <strong>1 July 2025 · In Business</strong>
            </div>
          </div>
          <a className="text-link" href="#contact">
            Start a conversation <ArrowRight />
          </a>
        </div>
        <div className="about-details">
          <address className="location-card">
            <div className="location-icon">
              <MapPin />
            </div>
            <div>
              <p className="card-eyebrow">Visit or locate us</p>
              <h3>Shalém Holdings</h3>
              <p>
                5235 Nongoma Road
                <br />
                Diepkloof, Soweto
                <br />
                Gauteng, 1864
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=5235%20Nongoma%20Road%2C%20Diepkloof%2C%20Soweto%2C%20Gauteng%2C%201864"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps <ArrowRight />
              </a>
            </div>
          </address>
        </div>
      </div>

      <div className="section-container founder-feature">
        <figure className="founder-portrait">
          <ProgressiveImage
            src={`${baseUrl}people/themba-founder-portrait.jpg`}
            webpSrc={`${baseUrl}people/themba-founder-portrait.webp`}
            alt="Marc Themba Mbanyele, founder and CEO of Shalém Holdings"
            width="1024"
            height="1824"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Soweto entrepreneur · Company founder</figcaption>
        </figure>
        <div className="founder-copy">
          <p className="eyebrow">Founder story</p>
          <p className="founder-name">Marc Themba Mbanyele</p>
          <h2>Building technology that creates opportunity.</h2>
          <p className="founder-intro">
            Marc Themba Mbanyele is the founder and CEO of Shalem Holdings, a technology company focused on
            helping ambitious businesses turn ideas and operational challenges into useful software.
          </p>
          <p>
            The company is grounded in a simple belief: the right technology should make a business easier to
            run, easier to understand, and ready to grow. Every project starts with the people who will use it
            and the commercial outcome it needs to support.
          </p>
          <div className="founder-principle">
            <span>Guiding idea</span>
            <p>Understand the business. Build what matters. Improve as it grows.</p>
          </div>
          <div className="founder-roles" aria-label="Themba's roles">
            <span>Founder & CEO · Shalém Holdings</span>
            <span>Technology entrepreneur</span>
            <span>Based in Soweto</span>
          </div>
          <a className="text-link" href="#contact">
            Start a conversation <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
