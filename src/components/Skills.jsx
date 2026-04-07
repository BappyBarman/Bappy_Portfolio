import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Skills.css'

const technicalSkills = [
  { name: 'Python', level: 90, color: '#6c63ff' },
  { name: 'HTML & CSS', level: 85, color: '#ff6b9d' },
  { name: 'SQL', level: 80, color: '#ffa64d' },
  { name: 'JavaScript', level: 75, color: '#4ade80' },
]

const professionalSkills = [
  { name: 'Teamwork', level: 95 },
  { name: 'Dedication', level: 95 },
  { name: 'Communication', level: 90 },
  { name: 'Creativity', level: 90 },
  { name: 'Management', level: 90 },
]

function SkillBar({ name, level, color, delay, isInView }) {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-bar-name">{name}</span>
        <motion.span
          className="skill-bar-percent"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ delay, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          style={color ? { background: color } : {}}
        />
      </div>
    </div>
  )
}

function CircularSkill({ name, level, delay, isInView }) {
  const circumference = 2 * Math.PI * 42
  const offset = circumference - (level / 100) * circumference

  return (
    <motion.div
      className="circular-skill"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="circular-svg-wrapper">
        <svg viewBox="0 0 100 100" className="circular-svg">
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="var(--bg-tertiary)"
            strokeWidth="6"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : {}}
            transition={{ delay, duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            transform="rotate(-90 50 50)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6c63ff" />
              <stop offset="100%" stopColor="#ff6b9d" />
            </linearGradient>
          </defs>
        </svg>
        <div className="circular-value">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.5 }}
          >
            {level}%
          </motion.span>
        </div>
      </div>
      <span className="circular-label">{name}</span>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Technical & professional expertise
        </motion.p>

        <div className="skills-grid">
          <motion.div
            className="skills-card glass-card"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="skills-card-title">
              <span className="card-icon">⚡</span>
              Technical Skills
            </h3>
            <div className="skills-bars">
              {technicalSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  delay={0.3 + i * 0.15}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills-card glass-card"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="skills-card-title">
              <span className="card-icon">🎯</span>
              Professional Skills
            </h3>
            <div className="circular-skills-grid">
              {professionalSkills.map((skill, i) => (
                <CircularSkill
                  key={skill.name}
                  {...skill}
                  delay={0.4 + i * 0.12}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
