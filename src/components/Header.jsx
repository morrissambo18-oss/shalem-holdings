import { useEffect, useRef, useState } from 'react'
import { Menu, X } from './Icons'

export default function Header({ whatsappUrl }) {
  const baseUrl = import.meta.env.BASE_URL
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef(null)
  const headerRef = useRef(null)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 36)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const handleOutsidePress = (event) => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('pointerdown', handleOutsidePress)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('pointerdown', handleOutsidePress)
    }
  }, [menuOpen])

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.25, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const current = (section) => (activeSection === section ? 'location' : undefined)

  return (
    <header ref={headerRef} className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <a className="brand" href="#home" aria-label="Shalém Holdings home" onClick={closeMenu}>
        <img src={`${baseUrl}shalem-logo.png`} alt="Shalém" />
        <span>Holdings</span>
      </a>
      <button
        ref={menuButtonRef}
        className="menu-button"
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav
        id="main-navigation"
        className={menuOpen ? 'main-nav is-open' : 'main-nav'}
        aria-label="Main navigation"
      >
        <a href="#services" aria-current={current('services')} onClick={closeMenu}>
          What We Do
        </a>
        <a href="#featured-work" aria-current={current('featured-work')} onClick={closeMenu}>
          Our Work
        </a>
        <a href="#about" aria-current={current('about')} onClick={closeMenu}>
          About
        </a>
        <a href="#contact" aria-current={current('contact')} onClick={closeMenu}>
          Contact
        </a>
      </nav>
      <a className="button button-whatsapp header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </header>
  )
}
