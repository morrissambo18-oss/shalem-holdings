import assert from 'node:assert/strict'
import test from 'node:test'
import { buildQuoteMessage, buildWhatsAppUrl } from './quote.js'

const completeQuote = {
  name: '  Nomsa Dlamini  ',
  service: 'Business website',
  contact: '  079 000 0000 ',
  budget: 'R5,000 – R15,000',
  timeline: 'Within 2–4 weeks',
  details: '  I need a website for my company.  ',
}

test('builds a structured quote message and trims free text', () => {
  const message = buildQuoteMessage(completeQuote)
  assert.match(message, /Name: Nomsa Dlamini/)
  assert.match(message, /Contact: 079 000 0000/)
  assert.match(message, /Service: Business website/)
  assert.match(message, /Project details: I need a website for my company\.$/)
})

test('uses clear fallbacks for optional budget and timeline', () => {
  const message = buildQuoteMessage({ ...completeQuote, budget: '', timeline: '' })
  assert.match(message, /Budget: Not sure yet/)
  assert.match(message, /Timeline: Flexible/)
})

test('creates an encoded WhatsApp URL for the company number', () => {
  const url = buildWhatsAppUrl(completeQuote)
  assert.ok(url.startsWith('https://wa.me/27796207928?text='))
  assert.equal(decodeURIComponent(url.split('?text=')[1]), buildQuoteMessage(completeQuote))
})
