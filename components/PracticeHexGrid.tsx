'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Area {
  title: string | React.ReactNode
  slug: string
  description: string
  icon: string
}

export default function PracticeHexGrid({ areas }: { areas: Area[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  const icons = ['🏛️', '📋', '🔭', '📖', '💹', '🛡️', '📡']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } }
  }

  return (
    <motion.div 
      className="hex-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {areas.map((area, i) => (
        <motion.div key={i} variants={itemVariants}>
          <Link
            href={`/practice-areas/${area.slug}`}
            className={`hex-card${hovered === i ? ' hex-hovered' : ''}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="hex-icon">{icons[i] || '📌'}</div>
            <div className="hex-title">{area.title}</div>
            <div className={`hex-desc${hovered === i ? ' hex-desc-visible' : ''}`}>
              {area.description}
            </div>
            <div className="hex-arrow">→</div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
