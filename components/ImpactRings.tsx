'use client'
import { useEffect, useRef, useState } from 'react'

const rings = [
  { label: 'Impact Evaluation', pct: 92, color: '#0f2463', desc: 'Experimental & quasi-experimental designs' },
  { label: 'Performance Measurement', pct: 85, color: '#C9A961', desc: 'KPIs, frameworks, monitoring systems' },
  { label: 'Process Evaluation', pct: 78, color: '#2c5f8a', desc: 'Implementation analysis' },
  { label: 'Economic Evaluation', pct: 88, color: '#3a7a4a', desc: 'Cost-benefit & cost-effectiveness' },
]

function Ring({ label, pct, color, desc, animate }: { label: string, pct: number, color: string, desc: string, animate: boolean }) {
  const r = 54
  const circ = 2 * Math.PI * r
  const dash = animate ? circ * (1 - pct / 100) : circ

  return (
    <div className="ring-card">
      <svg viewBox="0 0 120 120" className="ring-svg">
        <circle cx="60" cy="60" r={r} fill="none" stroke="#eee" strokeWidth="10" />
        <circle
          cx="60" cy="60" r={r} fill="none" stroke={color} strokeWidth="10"
          strokeDasharray={circ}
          strokeDashoffset={dash}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
          style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(.4,0,.2,1)' }}
        />
        <text x="60" y="65" textAnchor="middle" fontSize="20" fontWeight="700" fill={color}>{animate ? `${pct}%` : '0%'}</text>
      </svg>
      <div className="ring-label">{label}</div>
      <div className="ring-desc">{desc}</div>
    </div>
  )
}

export default function ImpactRings() {
  const ref = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimate(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="rings-wrap">
      {rings.map((r, i) => <Ring key={i} {...r} animate={animate} />)}
    </div>
  )
}
