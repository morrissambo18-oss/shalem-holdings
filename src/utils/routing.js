export function getLegalType(pathname, search = '') {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  if (normalizedPath === '/privacy') return 'privacy'
  if (normalizedPath === '/terms') return 'terms'

  const legacyType = new URLSearchParams(search).get('legal')
  return legacyType === 'privacy' || legacyType === 'terms' ? legacyType : null
}

export function isHomePath(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  return normalizedPath === '/'
}
