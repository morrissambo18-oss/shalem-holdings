import { ArrowRight, MapPin } from './Icons'

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="section-container about-layout">
        <div className="about-story">
          <p className="eyebrow">About Shalém Holdings</p>
          <h2>Local understanding. Practical ideas. One connected company.</h2>
          <p>
            Shalém Holdings is a Soweto-based company bringing digital development, entertainment technology,
            and event experiences together under one trusted brand.
          </p>
          <p>
            We begin with the outcome you need, explain the options clearly, and shape the solution around
            real people, real budgets, and real everyday use.
          </p>
          <a className="text-link" href="#contact">
            Start a conversation <ArrowRight />
          </a>
        </div>
        <div className="about-details">
          <div className="about-principles">
            <article>
              <span>01</span>
              <h3>Practical solutions</h3>
              <p>Useful products and experiences built around a clear purpose.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Clear communication</h3>
              <p>Simple explanations, agreed next steps, and fewer surprises.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Connected service</h3>
              <p>One team across technology, digital work, and experiences.</p>
            </article>
          </div>
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
    </section>
  )
}
