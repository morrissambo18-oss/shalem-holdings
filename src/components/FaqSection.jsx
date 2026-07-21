import { ArrowRight } from './Icons'

const faqs = [
  [
    'Do I need a complete product brief?',
    'No. Bring us the business challenge or idea. We will help you clarify the users, priorities, scope, and best first version before development begins.',
  ],
  [
    'How long does a project take?',
    'A focused website can take a few weeks; larger applications take longer. After discovery, your proposal will include clear phases, milestones, and a realistic delivery schedule.',
  ],
  [
    'Do you only work with startups?',
    'No. We help founders validate and launch new products, and we help established businesses improve operations, customer experiences, and growth with purpose-built software.',
  ],
]

export default function FaqSection({ whatsappUrl }) {
  return (
    <section className="section faq-section" id="faq">
      <div className="section-container faq-layout">
        <div className="faq-heading">
          <p className="eyebrow">Good to know</p>
          <h2>Questions before we get started?</h2>
          <p>
            Here are the essentials. If your question is not covered, send us a WhatsApp message and weâ€™ll
            help.
          </p>
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            Ask us directly <ArrowRight />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
