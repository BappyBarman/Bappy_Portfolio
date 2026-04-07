import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCalendar, FiPhone, FiMail, FiMapPin, FiTarget, FiDownload } from 'react-icons/fi'
import { FaDatabase, FaCode, FaGamepad, FaHeadphones, FaPlane, FaBook, FaCamera } from 'react-icons/fa'
import './About.css'

const personalData = [
  { icon: <FiCalendar />, label: 'Birthday', value: '03 May 1999' },
  { icon: <FiPhone />, label: 'Mobile', value: '6290459438' },
  { icon: <FiMail />, label: 'Email', value: 'bappybarman02@gmail.com' },
  { icon: <FiMapPin />, label: 'Location', value: 'Kalyani, Kolkata, India' },
  { icon: <FiTarget />, label: 'Interests', value: 'Cybersecurity, Data Science', highlight: true },
]

const passions = [
  { icon: <FaDatabase />, label: 'Data', color: '#6c63ff' },
  { icon: <FaCode />, label: 'Programming', color: '#ff6b9d' },
  { icon: <FaGamepad />, label: 'Gaming', color: '#ffa64d' },
  { icon: <FaHeadphones />, label: 'Music', color: '#4ade80' },
  { icon: <FaPlane />, label: 'Travel', color: '#38bdf8' },
  { icon: <FaBook />, label: 'Books', color: '#c084fc' },
  { icon: <FaCamera />, label: 'Photography', color: '#fb923c' },
]

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Getting to know who I am
        </motion.p>

        <motion.div
          className="about-intro glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            Hi, I'm <span className="highlight-name">Bappy Barman</span>, an MBA (Marketing) candidate at{' '}
            <strong>Kalyani University</strong>, with a background in{' '}
            <strong>Pharmaceutical Technology</strong> from <strong>Jadavpur University</strong>, 
            Kolkata. I'm passionate about solving business challenges through{' '}
            <strong>data-driven strategies</strong>, <strong>market research</strong>, and{' '}
            <strong>customer-centric thinking</strong>. My strong communication skills and 
            collaborative mindset enable me to work effectively in cross-functional teams. 
            I am particularly interested in <strong>marketing analytics</strong>,{' '}
            <strong>digital strategy</strong>, and <strong>business consulting</strong>.
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Personal Data */}
          <motion.div
            className="about-card glass-card"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="about-card-title">
              <span className="card-title-icon">📋</span>
              Personal Data
            </h3>
            <div className="personal-data-list">
              {personalData.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="data-item"
                  custom={i}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={fadeUpVariant}
                >
                  <span className="data-icon">{item.icon}</span>
                  <div className="data-content">
                    <span className="data-label">{item.label}</span>
                    <span className={`data-value ${item.highlight ? 'data-highlight' : ''}`}>
                      {item.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Passions */}
          <motion.div
            className="about-card glass-card"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="about-card-title">
              <span className="card-title-icon">❤️</span>
              I Love
            </h3>
            <div className="passions-grid">
              {passions.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="passion-item"
                  custom={i}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={fadeUpVariant}
                  whileHover={{ scale: 1.08, y: -5 }}
                  style={{ '--passion-color': item.color }}
                >
                  <span className="passion-icon">{item.icon}</span>
                  <span className="passion-label">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://drive.google.com/file/d/1x2E0-F5jBOzQbNOf-gs8ru1sXczXqFxZ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            id="about-download-cv"
          >
            <FiDownload />
            <span>Download CV</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
