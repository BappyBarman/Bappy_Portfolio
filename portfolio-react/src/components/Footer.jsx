import { motion } from 'framer-motion'
import { FaLinkedinIn, FaGithub, FaHackerrank } from 'react-icons/fa'
import { FiArrowUp, FiHeart } from 'react-icons/fi'
import './Footer.css'

const socials = [
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/bappy-barman/', label: 'LinkedIn' },
  { icon: <FaGithub />, href: 'https://github.com/BappyBarman/', label: 'GitHub' },
  { icon: <FaHackerrank />, href: 'https://www.hackerrank.com/bappy_in', label: 'HackerRank' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-gradient-line" />

      <div className="container">
        <motion.button
          className="scroll-top-btn"
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
          id="scroll-top-btn"
        >
          <FiArrowUp size={20} />
        </motion.button>

        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo-icon">BB</span>
            <span className="footer-logo-text">Bappy Barman</span>
          </div>

          <div className="footer-socials">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={social.label}
                id={`footer-${social.label.toLowerCase()}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="footer-copy">
            Made with <FiHeart className="heart-icon" /> by Bappy Barman © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
