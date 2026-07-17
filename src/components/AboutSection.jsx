import { ArrowRight, MapPin } from './Icons'
import ProgressiveImage from './ProgressiveImage'

export default function AboutSection() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <section className="about-section" id="about">
      <div className="section-container about-layout">
        <div className="about-story">
          <p className="eyebrow">About Shalém Holdings</p>
          <h2>Local understanding. Practical ideas. One connected company.</h2>
          <p>
            From our base in Diepkloof, we build practical services around the needs, budgets, and everyday
            realities of the people and businesses we serve.
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
          <h2>Entrepreneurship rooted in Soweto and built around possibility.</h2>
          <p className="founder-intro">
            Marc Themba Mbanyele is the founder and CEO of Shalém Holdings, bringing together practical
            technology, entertainment, and experiences under one connected company.
          </p>
          <p>
            His entrepreneurial journey also includes founding Imbewu Yokuphila, a hiking company that brings
            people together through outdoor experiences. Across both ventures, the focus is simple: create
            useful opportunities, make memorable experiences possible, and build from the community outward.
          </p>
          <div className="founder-principle">
            <span>Guiding idea</span>
            <p>People first. Practical solutions. Opportunity created close to home.</p>
          </div>
          <div className="founder-roles" aria-label="Themba's roles">
            <span>Founder & CEO · Shalém Holdings</span>
            <span>Founder · Imbewu Yokuphila</span>
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
