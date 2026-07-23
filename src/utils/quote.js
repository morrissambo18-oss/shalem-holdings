export function buildQuoteMessage({ name, service, contact, budget, timeline, details }) {
  return [
    'Hi Shalem Holdings, I would like a quote.',
    '',
    `Name: ${name.trim()}`,
    `Service: ${service}`,
    `Contact: ${contact.trim()}`,
    `Budget: ${budget || 'Not sure yet'}`,
    `Timeline: ${timeline || 'Flexible'}`,
    '',
    `Project details: ${details.trim()}`,
  ].join('\n')
}

export function buildWhatsAppUrl(quote) {
  return `https://wa.me/27796207928?text=${encodeURIComponent(buildQuoteMessage(quote))}`
}
