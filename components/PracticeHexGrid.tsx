'use client'
import { useState } from 'react'
import Link from 'next/link'

interface Area {
  title: string | React.ReactNode
  slug: string
  description: string
  icon: string
}

export default function PracticeHexGrid({ areas }: { areas: Area[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  const icons = ['🏛️', '📋', '🔭', '📖', '💹', '🛡️', '📡']

  return (
    <div className="hex-grid">
      {areas.map((area, i) => (
        <Link
          href={`/practice-areas/${area.slug}`}
          key={i}
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
      ))}
    </div>
  )
}
