'use client'
import { useEffect, useRef, useState } from 'react'

const regions = [
  { name: 'Pakistan', x: 62, y: 38, primary: true },
  { name: 'UK', x: 46, y: 24 },
  { name: 'USA', x: 18, y: 32 },
  { name: 'Germany', x: 49, y: 23 },
  { name: 'Singapore', x: 74, y: 50 },
  { name: 'UAE', x: 58, y: 40 },
  { name: 'Saudi Arabia', x: 57, y: 41 },
  { name: 'China', x: 74, y: 32 },
  { name: 'Turkey', x: 55, y: 30 },
  { name: 'Indonesia', x: 76, y: 54 },
  { name: 'Egypt', x: 53, y: 38 },
  { name: 'Switzerland', x: 49, y: 25 },
]

export default function WorldMap() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState<string | null>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="world-map-wrap">
      <div className="world-map-title">PBF Global Engagement — 12 Regions</div>
      <div className="world-map-container">
        {/* Simplified world outline via CSS background gradient layers */}
        <div className="world-map-bg" />
        {regions.map((r, i) => (
          <div
            key={i}
            className={`map-dot${r.primary ? ' map-dot-primary' : ''}${visible ? ' map-dot-visible' : ''}`}
            style={{ left: `${r.x}%`, top: `${r.y}%`, transitionDelay: `${i * 120}ms` }}
            onMouseEnter={() => setTooltip(r.name)}
            onMouseLeave={() => setTooltip(null)}
          >
            {r.primary && <div className="map-pulse" />}
            {tooltip === r.name && <div className="map-tooltip">{r.name}</div>}
          </div>
        ))}
        <div className="map-connection-lines">
          {visible && regions.filter(r => !r.primary).map((r, i) => (
            <svg key={i} className="map-line-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line
                x1="62%" y1="38%"
                x2={`${r.x}%`} y2={`${r.y}%`}
                stroke="#C0C0C0" strokeWidth="0.3" strokeDasharray="2 2" opacity="0.4"
                style={{ animationDelay: `${i * 120 + 600}ms` }}
                className="map-line"
              />
            </svg>
          ))}
        </div>
      </div>
      <div className="map-legend">
        <span className="map-legend-dot primary-dot" /> Headquarters
        <span className="map-legend-dot" style={{ marginLeft: 16 }} /> Partner Region
      </div>
    </div>
  )
}
