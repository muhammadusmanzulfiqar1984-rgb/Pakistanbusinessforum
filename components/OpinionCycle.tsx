'use client'
import { useEffect, useRef, useState } from 'react'

const steps = [
  { label: 'Identify', desc: 'Map the landscape — audiences, narratives, and key influencers.' },
  { label: 'Vigilance', desc: 'Monitor continuously — detect shifts before they become movements.' },
  { label: 'Conversation', desc: 'Engage authentically — enter dialogue at the right moment.' },
  { label: 'Create Opportunity', desc: 'Build narrative hooks — generate shareable, resonant content.' },
  { label: 'Deliver at Scale', desc: 'Amplify through trusted channels — reach maximum audience.' },
]

export default function OpinionCycle() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(-1)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let i = 0
          const t = setInterval(() => {
            setActive(a => a + 1)
            i++
            if (i >= steps.length) clearInterval(t)
          }, 250)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="oc-wrap">
      <div className="oc-steps">
        {steps.map((s, i) => (
          <button
            key={i}
            className={`oc-step${active >= i ? ' oc-step-active' : ''}${selected === i ? ' oc-step-selected' : ''}`}
            style={{ transitionDelay: `${i * 50}ms` }}
            onClick={() => setSelected(i)}
          >
            <div className="oc-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="oc-step-label">{s.label}</div>
            {i < steps.length - 1 && <div className={`oc-arrow${active > i ? ' oc-arrow-active' : ''}`}>›</div>}
          </button>
        ))}
      </div>
      <div className="oc-detail">
        <div className="oc-detail-num">{String(selected + 1).padStart(2, '0')}</div>
        <div className="oc-detail-title">{steps[selected].label}</div>
        <div className="oc-detail-desc">{steps[selected].desc}</div>
      </div>
    </div>
  )
}
