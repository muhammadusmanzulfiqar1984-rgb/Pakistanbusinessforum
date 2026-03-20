'use client'
import { useEffect, useRef, useState } from 'react'

const quadrants = [
  {
    pos: 'top-left',
    label: 'Positive Protagonist',
    desc: 'Amplify and extend — turn supporters into advocates through sustained engagement.',
    color: '#2c5f3a',
    action: 'Extend',
  },
  {
    pos: 'top-right',
    label: 'Positive Follower',
    desc: 'Cultivate and convert — nurture passive positivity into active endorsement.',
    color: '#2c4a6e',
    action: 'Manage',
  },
  {
    pos: 'bottom-left',
    label: 'Negative Antagonist',
    desc: 'Counter immediately — suppress rising negativity with verified information and rapid response.',
    color: '#0f2463',
    action: 'Suppress',
  },
  {
    pos: 'bottom-right',
    label: 'Negative Follower',
    desc: 'Adapt and redirect — reframe the narrative before passive negativity compounds.',
    color: '#5a4a1a',
    action: 'Adapt',
  },
]

export default function VigilanceMatrix() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="vm-wrap">
      <div className="vm-axes">
        <div className="vm-y-label vm-y-top">Positive</div>
        <div className="vm-y-label vm-y-bottom">Negative</div>
        <div className="vm-x-label vm-x-left">Protagonist</div>
        <div className="vm-x-label vm-x-right">Follower</div>
        <div className="vm-axis-h" />
        <div className="vm-axis-v" />
        <div className="vm-grid">
          {quadrants.map((q, i) => (
            <div
              key={i}
              className={`vm-quadrant vm-${q.pos}${visible ? ' vm-q-visible' : ''}`}
              style={{ transitionDelay: `${i * 150}ms`, borderColor: q.color }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="vm-action" style={{ color: q.color }}>{q.action}</div>
              <div className="vm-q-label">{q.label}</div>
              <div className={`vm-q-desc${hovered === i ? ' vm-q-desc-show' : ''}`}>{q.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <p className="vm-caption">24/7 Vigilance Strategy — every conversation receives a response regardless of sentiment</p>
    </div>
  )
}
