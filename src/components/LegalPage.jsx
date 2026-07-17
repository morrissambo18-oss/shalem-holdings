import { useEffect } from 'react'
import { ArrowRight } from './Icons'

const privacySections = [
  [
    'Information you provide',
    'The quote form asks for your name, preferred contact detail, service interest, approximate budget, timeline, and project description. You choose what information to include.',
  ],
  [
    'Drafts saved on your device',
    'To protect unfinished work from an accidental refresh, the quote form saves a draft in your browser’s local storage. The draft remains on that device and is removed after the WhatsApp handoff succeeds. You can also remove it by clearing this site’s browser data.',
  ],
  [
    'WhatsApp handoff',
    'When you continue, the website creates a WhatsApp message from your form details. Your information is not submitted to a Shalém Holdings website server first. WhatsApp processes the message according to its own privacy terms after you open and send it.',
  ],
  [
    'How enquiries are used',
    'Information you send is used to understand your request, communicate with you, prepare a proposal, arrange a service, and maintain appropriate business records.',
  ],
  [
    'Sharing and retention',
    'We do not sell enquiry information. Information may be shared with service providers only where needed to deliver an agreed service or comply with legal obligations. Enquiry records are retained only for legitimate business, contractual, or legal needs.',
  ],
  [
    'Your choices',
    'You may ask us to correct or delete enquiry information we hold, subject to records we are legally or contractually required to keep. Contact us using the details below.',
  ],
]

const termsSections = [
  [
    'Website information',
    'The website provides general information about Shalém Holdings and its divisions. Service descriptions are starting points and do not form a final quotation, guarantee, or binding offer.',
  ],
  [
    'Quotations and scope',
    'Pricing, deliverables, responsibilities, timing, and exclusions are confirmed in a written quotation or proposal. A project or booking begins only after the required approval and payment arrangements are complete.',
  ],
  [
    'Availability',
    'Products, demonstrations, event dates, delivery areas, and project start dates remain subject to availability and final confirmation.',
  ],
  [
    'Customer responsibilities',
    'Customers must provide accurate requirements, content, approvals, access, locations, and other agreed inputs on time. Delays in these inputs may affect delivery dates and cost.',
  ],
  [
    'Payments and cancellations',
    'Deposits, payment milestones, cancellation terms, and refund conditions may vary by service. The terms included in the accepted quotation or booking confirmation take precedence.',
  ],
  [
    'Intellectual property',
    'Ownership and usage rights for designs, software, content, branding, photographs, and third-party materials are defined in the applicable proposal or agreement. Third-party products and services may have separate licence terms.',
  ],
  [
    'Responsible use',
    'You may not misuse the website, interfere with its operation, attempt unauthorised access, or use its content in a way that infringes another person’s rights.',
  ],
  [
    'Changes',
    'Services and these website terms may be updated as the business develops. Material project-specific terms will not be changed after acceptance unless agreed by the relevant parties.',
  ],
]

export default function LegalPage({ type }) {
  const isPrivacy = type === 'privacy'
  const title = isPrivacy ? 'Privacy Policy' : 'Website Terms'
  const sections = isPrivacy ? privacySections : termsSections

  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} | Shalém Holdings`
    return () => {
      document.title = previousTitle
    }
  }, [title])

  return (
    <div className="legal-shell">
      <header className="legal-header section-container">
        <a className="brand" href="/" aria-label="Return to Shalém Holdings home">
          <img src="/shalem-logo.png" alt="Shalém" />
          <span>Holdings</span>
        </a>
        <a className="text-link" href="/">
          Back to website <ArrowRight />
        </a>
      </header>
      <main className="legal-main section-container">
        <div className="legal-title">
          <p className="eyebrow">Shalém Holdings</p>
          <h1>{title}</h1>
          <p>Effective 17 July 2026</p>
        </div>
        <div className="legal-content">
          <p className="legal-intro">
            {isPrivacy
              ? 'This policy explains how information is handled when you use this website or contact Shalém Holdings about a service.'
              : 'These terms explain the basis on which this website is provided and how general website information relates to quotations and service agreements.'}
          </p>
          {sections.map(([heading, text]) => (
            <section key={heading}>
              <h2>{heading}</h2>
              <p>{text}</p>
            </section>
          ))}
          <section className="legal-contact">
            <h2>Contact Shalém Holdings</h2>
            <p>
              5235 Nongoma Road
              <br />
              Diepkloof, Soweto
              <br />
              Gauteng, 1864
            </p>
            <a href="mailto:hello@shalemholdings.co.za">hello@shalemholdings.co.za</a>
            <a href="https://wa.me/27796207928" target="_blank" rel="noreferrer">
              +27 79 620 7928
            </a>
          </section>
        </div>
      </main>
    </div>
  )
}
