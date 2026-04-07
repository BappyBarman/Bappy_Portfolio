import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import './Contact.css'

const contactInfo = [
  {
    icon: <FiMapPin />,
    title: 'Location',
    value: 'Kalyani, Kolkata, India',
    color: '#6c63ff',
  },
  {
    icon: <FiPhone />,
    title: 'Phone',
    value: '6290459438',
    color: '#ff6b9d',
  },
  {
    icon: <FiMail />,
    title: 'Email',
    value: 'bappybarman02@gmail.com',
    color: '#ffa64d',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://getform.io/f/44b2ee2f-797c-4121-8e37-46b5c1700b1b', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(''), 3000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  return (
    <section id="contact" className="contact-section" ref={ref}>
      {/* Background decoration */}
      <div className="contact-bg-decor">
        <div className="bg-glow bg-glow-purple contact-glow-1" />
        <div className="bg-glow bg-glow-pink contact-glow-2" />
      </div>

      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's connect and build something amazing together
        </motion.p>

        <div className="contact-grid">
          {/* Contact Form */}
          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="form-title">Send a Message</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me what you have in mind..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary form-submit"
              id="contact-submit"
              disabled={status === 'sending'}
            >
              <FiSend />
              <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
            </button>
            {status === 'success' && (
              <motion.p
                className="form-status success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Message sent successfully!
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                className="form-status error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ❌ Something went wrong. Try again later.
              </motion.p>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                className="contact-info-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5 }}
                style={{ '--info-color': info.color }}
              >
                <div className="info-icon">
                  {info.icon}
                </div>
                <div className="info-content">
                  <span className="info-title">{info.title}</span>
                  <span className="info-value">{info.value}</span>
                </div>
              </motion.div>
            ))}

            <div className="contact-map glass-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14718.042178677887!2d88.42!3d22.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8957e5f47ff35%3A0x51de25d566a35b58!2sKalyani%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kalyani, Kolkata location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
