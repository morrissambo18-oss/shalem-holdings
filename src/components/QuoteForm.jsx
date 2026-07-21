import { useEffect, useState } from 'react'
import { ArrowRight } from './Icons'
import { buildWhatsAppUrl } from '../utils/quote'

const STORAGE_KEY = 'shalem-quote-draft'
const emptyDraft = { name: '', contact: '', service: '', budget: '', timeline: '', details: '' }

function readDraft() {
  try {
    return { ...emptyDraft, ...JSON.parse(localStorage.getItem(STORAGE_KEY)) }
  } catch {
    return emptyDraft
  }
}

export default function QuoteForm({ selectedService, onServiceChange }) {
  const [draft, setDraft] = useState(readDraft)
  const [status, setStatus] = useState('')
  const currentService = selectedService || draft.service

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft))
  }, [draft])

  const updateField = (event) => {
    const { name, value } = event.target
    setDraft((current) => ({ ...current, [name]: value }))
    if (name === 'service') onServiceChange(value)
    if (status) setStatus('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const whatsappWindow = window.open('', '_blank')
    if (!whatsappWindow) {
      setStatus(
        'WhatsApp could not open. Please allow pop-ups for this site and try again, or use the WhatsApp button below.',
      )
      return
    }

    whatsappWindow.opener = null
    whatsappWindow.location.href = buildWhatsAppUrl({ ...draft, service: currentService })
    localStorage.removeItem(STORAGE_KEY)
    setStatus('Your WhatsApp message is ready in a new tab. Review it, then tap send.')
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="quote-name">Your name</label>
        <input
          id="quote-name"
          name="name"
          type="text"
          autoComplete="name"
          minLength="2"
          value={draft.name}
          onChange={updateField}
          placeholder="How should we address you?"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="quote-contact">Phone or email</label>
        <input
          id="quote-contact"
          name="contact"
          type="text"
          autoComplete="tel"
          minLength="7"
          value={draft.contact}
          onChange={updateField}
          placeholder="Your preferred contact detail"
          required
        />
      </div>
      <div className="form-field form-field-wide">
        <label htmlFor="quote-service">What can we help with?</label>
        <select id="quote-service" name="service" value={currentService} onChange={updateField} required>
          <option value="" disabled>
            Select a service
          </option>
          <option>Business website</option>
          <option>E-commerce website</option>
          <option>Web or mobile application</option>
          <option>Custom system or integration</option>
          <option>Startup MVP</option>
          <option>Business process automation</option>
          <option>Software modernisation</option>
          <option>Product strategy and discovery</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="quote-budget">Approximate budget (ZAR)</label>
        <select id="quote-budget" name="budget" value={draft.budget} onChange={updateField}>
          <option value="">Not sure yet</option>
          <option>Under R 5,000</option>
          <option>R 5,000 – R 15,000</option>
          <option>R 15,000 – R 30,000</option>
          <option>R 30,000+</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="quote-timeline">When do you need it?</label>
        <select id="quote-timeline" name="timeline" value={draft.timeline} onChange={updateField}>
          <option value="">Flexible</option>
          <option>As soon as possible</option>
          <option>Within 2–4 weeks</option>
          <option>Within 1–3 months</option>
          <option>I have a specific date</option>
        </select>
      </div>
      <div className="form-field form-field-wide">
        <label htmlFor="quote-details">Tell us about your idea</label>
        <textarea
          id="quote-details"
          name="details"
          rows="5"
          minLength="10"
          value={draft.details}
          onChange={updateField}
          placeholder="Tell us about your business, the problem, and what success looks like."
          required
        />
      </div>
      <div className="form-submit form-field-wide">
        <button className="button button-whatsapp" type="submit">
          Continue on WhatsApp <ArrowRight />
        </button>
        <p>Your draft is saved on this device until you continue to WhatsApp.</p>
      </div>
      {status && (
        <p className="form-status form-field-wide" role="status">
          {status}
        </p>
      )}
    </form>
  )
}
