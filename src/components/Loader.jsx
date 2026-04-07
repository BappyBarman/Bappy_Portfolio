import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Loader.css'

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      <motion.div 
        className="loader"
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loader-content">
          <motion.div 
            className="loader-logo"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            BB
          </motion.div>
          <motion.h2 
            className="loader-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Bappy Barman
          </motion.h2>
          <div className="loader-bar-container">
            <motion.div 
              className="loader-bar"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          <motion.span 
            className="loader-percent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {progress}%
          </motion.span>
        </div>
        <div className="loader-bg-glow loader-glow-1" />
        <div className="loader-bg-glow loader-glow-2" />
      </motion.div>
    </AnimatePresence>
  )
}
