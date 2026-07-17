export default function Footer({ whatsappUrl }) {
  return (
    <footer className="site-footer section-container">
      <div className="footer-brand">
        <img src="/shalem-logo.png" alt="Shalém" />
        <p>Your ideas, connected.</p>
      </div>
      <div>
        <h3>Divisions</h3>
        <a href="#digital-solutions">Digital Solutions</a>
        <a href="#entertainment-technology">Entertainment Technology</a>
        <a href="#events-experiences">Events & Experiences</a>
      </div>
      <div>
        <h3>Contact</h3>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp us
        </a>
        <a href="mailto:hello@shalemholdings.co.za">hello@shalemholdings.co.za</a>
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
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Website Terms</a>
      </div>
      <p className="copyright">© 2026 Shalém Holdings. All rights reserved.</p>
      <p className="footer-registration">Shalém Holdings (Pty) Ltd · 2025/518721/07</p>
    </footer>
  )
}
