import { useEffect, useRef, useState } from 'react'
import { Menu, X } from './Icons'

export default function Header({ whatsappUrl }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const menuButtonRef = useRef(null)

  const closeMenu = () => setMenuOpen(false)

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
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Shalém Holdings home" onClick={closeMenu}>
        <img src="/shalem-logo.png" alt="Shalém" />
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
          Services
        </a>
        <a href="#digital-solutions" aria-current={current('digital-solutions')} onClick={closeMenu}>
          Digital Solutions
        </a>
        <a href="#process" aria-current={current('process')} onClick={closeMenu}>
          How It Works
        </a>
        <a href="#about" aria-current={current('about')} onClick={closeMenu}>
          About
        </a>
        <a href="#faq" aria-current={current('faq')} onClick={closeMenu}>
          FAQ
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
