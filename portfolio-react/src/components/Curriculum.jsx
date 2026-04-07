import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBookOpen, FiBriefcase } from 'react-icons/fi'
import './Curriculum.css'

const education = [
  {
    title: 'Kalyani University',
    role: 'Master of Business Administration',
    period: '2024 - Present',
    desc: 'Pursuing MBA with a focus on management and business strategy.',
    icon: '🎓',
  },
  {
    title: 'Jadavpur University',
    role: 'B. Pharmaceutical Technology',
    period: '2018 - 2022',
    desc: 'CGPA of 8.56/10',
    icon: '🏛️',
  },
  {
    title: 'Pannalal Institution (H.S.)',
    role: 'Higher Secondary',
    period: '2016 - 2018',
    desc: 'Completed under WBCHSE board in 2018.',
    icon: '📚',
  },
]

const experience = [
  {
    title: "Dr. Reddy's Laboratories",
    role: 'Intern',
    period: 'Industrial Internship',
    desc: 'Project on "Sterile Handling in Industrial Microbiology and Fermentation Upstream processing" in MSAT, Biologics Division.',
    icon: '🔬',
  },
]

function TimelineItem({ item, index, isInView, side }) {
  return (
    <motion.div
      className={`timeline-item ${side}`}
      initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
    >
      <div className="timeline-dot">
        <span>{item.icon}</span>
      </div>
      <div className="timeline-card glass-card">
        <span className="timeline-period">{item.period}</span>
        <h4 className="timeline-title">{item.title}</h4>
        <span className="timeline-role">{item.role}</span>
        <p className="timeline-desc">{item.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Curriculum() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="curriculum-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Education & Experience
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My academic journey & professional experience
        </motion.p>

        <div className="timeline-container">
          <div className="timeline-column">
            <motion.div
              className="timeline-header"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
            >
              <FiBookOpen size={20} />
              <h3>Education</h3>
            </motion.div>
            <div className="timeline-line" />
            {education.map((item, i) => (
              <TimelineItem
                key={item.title}
                item={item}
                index={i}
                isInView={isInView}
                side="left"
              />
            ))}
          </div>

          <div className="timeline-column">
            <motion.div
              className="timeline-header"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <FiBriefcase size={20} />
              <h3>Experience</h3>
            </motion.div>
            <div className="timeline-line" />
            {experience.map((item, i) => (
              <TimelineItem
                key={item.title}
                item={item}
                index={i}
                isInView={isInView}
                side="right"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
