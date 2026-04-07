import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Active section detection
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" id="navbar-logo">
          <span className="logo-icon">BB</span>
          <span className="logo-text">Bappy</span>
        </a>

        <div className="navbar-links" id="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`navbar-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
              id={`nav-${link.name.toLowerCase()}`}
            >
              {link.name}
              {activeSection === link.href.replace('#', '') && (
                <motion.div className="nav-indicator" layoutId="nav-indicator" />
              )}
            </a>
          ))}
        </div>

        <a
          href="https://drive.google.com/file/d/1x2E0-F5jBOzQbNOf-gs8ru1sXczXqFxZ/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary navbar-cta"
          id="navbar-cv-btn"
        >
          <span>Download CV</span>
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="navbar-toggle"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.name}
              </motion.a>
            ))}
            <a
              href="https://drive.google.com/file/d/1x2E0-F5jBOzQbNOf-gs8ru1sXczXqFxZ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              <span>Download CV</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
