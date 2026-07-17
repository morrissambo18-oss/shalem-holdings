import { ArrowRight } from './Icons'

const faqs = [
  [
    'How do I get a quote?',
    'Choose the service you need, share a short description, and continue to WhatsApp. We’ll review the details with you before confirming scope, pricing, and timing.',
  ],
  [
    'Do I need a complete project brief?',
    'No. An idea, business goal, or event date is enough to start. We’ll ask the right questions and help turn it into a clear plan.',
  ],
  [
    'How long does a project take?',
    'Timing depends on the service and scope. Once we understand what you need, your proposal will include a realistic delivery schedule before work begins.',
  ],
  [
    'Can you help me choose the right solution?',
    'Yes. Tell us the outcome you want and your approximate budget. We’ll recommend the most practical option rather than adding features you do not need.',
  ],
  [
    'Where is Shalém Holdings based?',
    'We are based at 5235 Nongoma Road, Diepkloof, Soweto, Gauteng, 1864. Availability and service areas vary by division.',
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
            Here are the essentials. If your question is not covered, send us a WhatsApp message and we’ll
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
