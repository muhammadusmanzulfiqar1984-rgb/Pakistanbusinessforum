'use client'
import { useEffect, useRef, useState } from 'react'

const ringData = [
  { pct: 92, color: '#0f2463' },
  { pct: 85, color: '#C0C0C0' },
  { pct: 78, color: '#2c5f8a' },
  { pct: 88, color: '#3a7a4a' },
]

type RingItem = { label: string; desc: string; pct: number; color: string }

function Ring({ label, pct, color, desc, animate }: RingItem & { animate: boolean }) {
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

export default function ImpactRings({ labels, descs }: { labels?: string[]; descs?: string[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)

  const defaultLabels = ['Impact Evaluation', 'Performance Measurement', 'Process Evaluation', 'Economic Evaluation']
  const defaultDescs = ['Experimental & quasi-experimental designs', 'KPIs, frameworks, monitoring systems', 'Implementation analysis', 'Cost-benefit & cost-effectiveness']

  const rings: RingItem[] = ringData.map((r, i) => ({
    ...r,
    label: (labels && labels[i]) || defaultLabels[i],
    desc: (descs && descs[i]) || defaultDescs[i],
  }))

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
