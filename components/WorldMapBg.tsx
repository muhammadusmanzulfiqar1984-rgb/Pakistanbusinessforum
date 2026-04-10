'use client'

import { useEffect, useState } from 'react'

// Each section id maps to a continent key
const SECTION_REGION_MAP: Record<string, string> = {
  'section-purpose':     'asia',
  'section-work':        'asia',
  'section-latest':      'europe',
  'section-analytical':  'americas',
  'section-engagement':  'africa',
}

const CONTINENT_COLORS: Record<string, string> = {
  asia:     'rgba(192, 192, 192,0.55)',
  africa:   'rgba(192, 192, 192,0.55)',
  europe:   'rgba(192, 192, 192,0.55)',
  americas: 'rgba(192, 192, 192,0.55)',
  oceania:  'rgba(192, 192, 192,0.55)',
}

// Simplified continent paths on a 1000×500 equirectangular projection
const CONTINENTS: { id: string; d: string }[] = [
  {
    id: 'americas',
    d: `M 160 80 L 185 75 L 200 90 L 195 120 L 210 150 L 205 180
        L 215 200 L 210 240 L 220 280 L 210 320 L 195 350 L 180 370
        L 170 350 L 160 310 L 150 270 L 155 240 L 145 200 L 140 170
        L 130 140 L 135 110 L 145 90 Z`,
  },
  {
    id: 'europe',
    d: `M 450 60 L 480 55 L 510 60 L 525 75 L 520 95 L 505 110
        L 490 120 L 470 118 L 455 105 L 445 85 Z`,
  },
  {
    id: 'africa',
    d: `M 460 130 L 490 125 L 520 130 L 535 160 L 540 200 L 535 250
        L 525 290 L 510 320 L 490 340 L 470 320 L 455 280 L 448 240
        L 450 200 L 452 160 Z`,
  },
  {
    id: 'asia',
    d: `M 530 55 L 600 45 L 680 50 L 750 60 L 800 80 L 820 110
        L 800 140 L 760 160 L 720 170 L 680 165 L 640 155 L 600 145
        L 565 130 L 535 110 L 525 85 Z`,
  },
  {
    id: 'oceania',
    d: `M 760 240 L 800 235 L 840 245 L 850 270 L 830 290 L 800 295
        L 770 285 L 755 265 Z`,
  },
]

export default function WorldMapBg() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const sections = Object.keys(SECTION_REGION_MAP).map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(SECTION_REGION_MAP[entry.target.id] || null)
          }
        })
      },
      { threshold: 0.35 }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="world-map-bg" aria-hidden="true">
      <svg
        viewBox="0 0 1000 500"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {CONTINENTS.map(c => (
          <path
            key={c.id}
            d={c.d}
            fill={active === c.id ? CONTINENT_COLORS[c.id] : 'rgba(15,36,99,0.06)'}
            stroke={active === c.id ? 'rgba(192, 192, 192,0.30)' : 'rgba(15,36,99,0.10)'}
            strokeWidth={active === c.id ? 1.5 : 0.8}
            style={{
              transition: 'fill 1.2s ease, stroke 1.2s ease, stroke-width 1.2s ease',
              filter: active === c.id ? 'drop-shadow(0 0 18px rgba(192, 192, 192,0.35))' : 'none',
            }}
          />
        ))}
      </svg>
    </div>
  )
}
