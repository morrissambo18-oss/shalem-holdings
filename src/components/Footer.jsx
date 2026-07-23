export default function Footer({ whatsappUrl }) {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <footer className="site-footer section-container">
      <div className="footer-brand">
        <img src={`${baseUrl}shalem-logo.png`} alt="Shalem" />
        <p>Software built for growth.</p>
      </div>
      <div>
        <h3>Services</h3>
        <a href="#services">Websites</a>
        <a href="#startup-partners">Applications</a>
        <a href="#growth-partners">Custom Software</a>
      </div>
      <div>
        <h3>Contact</h3>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp us
        </a>
        <a href="mailto:info@shalemholdings.tech">info@shalemholdings.tech</a>
        <p>
          5235 Nongoma Road
          <br />
          Diepkloof, Soweto
          <br />
          Gauteng, 1864
        </p>
      </div>
      <div className="footer-legal">
        <h3>Information</h3>
        <a href="#featured-work">Featured Work</a>
        <a href={`${baseUrl}?legal=privacy`}>Privacy Policy</a>
        <a href={`${baseUrl}?legal=terms`}>Website Terms</a>
      </div>
      <p className="copyright">© 2026 Shalem Holdings. All rights reserved.</p>
      <p className="footer-registration">Shalem Holdings (Pty) Ltd · 2025/518721/07</p>
    </footer>
  )
}
