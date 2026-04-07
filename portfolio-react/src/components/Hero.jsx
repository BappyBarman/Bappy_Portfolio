import { motion } from 'framer-motion'
import { FaLinkedinIn, FaGithub, FaHackerrank } from 'react-icons/fa'
import { FiArrowDown } from 'react-icons/fi'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background decorative elements */}
      <div className="hero-bg-decor">
        <div className="bg-glow bg-glow-purple hero-glow-1" />
        <div className="bg-glow bg-glow-pink hero-glow-2" />
        <div className="bg-glow bg-glow-orange hero-glow-3" />
        <div className="hero-grid" />
      </div>

      <div className="hero-container container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-dot" />
            Available for Opportunities
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hi, I'm{' '}
            <span className="hero-name">Bappy Barman</span>
          </motion.h1>

          <motion.div
            className="hero-roles"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <span className="role-tag">MBA Candidate</span>
            <span className="role-divider">•</span>
            <span className="role-tag">Data Enthusiast</span>
            <span className="role-divider">•</span>
            <span className="role-tag">Developer</span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Passionate about solving business challenges through data-driven strategies, 
            market research, and customer-centric thinking.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <a href="#contact" className="btn-primary" id="hero-contact-btn">
              <span>Get in Touch</span>
            </a>
            <a href="#about" className="btn-outline" id="hero-about-btn">
              <span>Learn More</span>
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="https://www.linkedin.com/in/bappy-barman/" target="_blank" rel="noopener noreferrer" className="social-link" id="hero-linkedin" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/BappyBarman/" target="_blank" rel="noopener noreferrer" className="social-link" id="hero-github" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.hackerrank.com/bappy_in" target="_blank" rel="noopener noreferrer" className="social-link" id="hero-hackerrank" aria-label="HackerRank">
              <FaHackerrank />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
        >
          <div className="hero-image-ring" />
          <div className="hero-image-ring hero-image-ring-2" />
          <div className="hero-image-container">
            <img src="/profile.jpg" alt="Bappy Barman" className="hero-image" />
          </div>
          <div className="hero-float-card hero-float-1">
            <span className="float-emoji">🎓</span>
            <span className="float-text">MBA Student</span>
          </div>
          <div className="hero-float-card hero-float-2">
            <span className="float-emoji">📊</span>
            <span className="float-text">Data Driven</span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, y: { repeat: Infinity, duration: 1.5 } }}
        aria-label="Scroll down"
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  )
}
