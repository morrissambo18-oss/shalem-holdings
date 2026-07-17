import { ArrowRight, Blocks, Code2, ShoppingBag } from './Icons'

const options = [
  {
    icon: Blocks,
    label: 'Launch your presence',
    title: 'Business Website',
    description:
      'For businesses that need a professional online home that builds trust and turns interest into enquiries.',
    idealFor: 'New businesses, service providers, and growing brands',
    includes: [
      'Responsive page design',
      'WhatsApp or enquiry actions',
      'Essential search setup',
      'Launch and handover',
    ],
    service: 'Business website',
  },
  {
    icon: ShoppingBag,
    label: 'Sell online',
    title: 'Online Store',
    description:
      'For businesses ready to present products clearly and give customers a straightforward path to purchase.',
    idealFor: 'Retailers, product brands, and catalogue businesses',
    includes: [
      'Product catalogue structure',
      'Cart and checkout journey',
      'Payment setup support',
      'Order-flow handover',
    ],
    service: 'E-commerce website',
  },
  {
    icon: Code2,
    label: 'Build around your workflow',
    title: 'Custom Product',
    description:
      'For ideas that need application logic, user accounts, integrations, or a purpose-built internal system.',
    idealFor: 'Operational tools, platforms, portals, and applications',
    includes: [
      'Discovery and scope',
      'Tailored user experience',
      'Staged development',
      'Testing and documentation',
    ],
    service: 'Custom system or integration',
  },
]

export default function EngagementOptions({ onChooseService }) {
  return (
    <section className="section engagement-section" id="digital-options">
      <div className="section-container">
        <div className="section-heading engagement-heading">
          <div>
            <p className="eyebrow">Ways to work with us</p>
            <h2>Choose the starting point that fits your goal.</h2>
          </div>
          <p>
            Every project is quoted around its real scope. These options make it easier to identify the right
            conversation before we confirm features, timing, and cost.
          </p>
        </div>

        <div className="engagement-grid">
          {options.map(({ icon: OptionIcon, label, title, description, idealFor, includes, service }) => (
            <article className="engagement-card" key={title}>
              <div className="engagement-card-top">
                <span className="engagement-icon">
                  <OptionIcon />
                </span>
                <span className="scope-label">Quoted to scope</span>
              </div>
              <p className="card-eyebrow">{label}</p>
              <h3>{title}</h3>
              <p className="engagement-description">{description}</p>
              <div className="ideal-for">
                <span>Ideal for</span>
                <p>{idealFor}</p>
              </div>
              <ul>
                {includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="button button-secondary" href="#contact" onClick={() => onChooseService(service)}>
                Discuss this option <ArrowRight />
              </a>
            </article>
          ))}
        </div>

        <p className="scope-note">
          Not sure which option fits? Select “Something else” in the quote form and describe the outcome you
          need—we’ll guide you from there.
        </p>
      </div>
    </section>
  )
}
