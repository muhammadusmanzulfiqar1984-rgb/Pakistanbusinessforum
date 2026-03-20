'use client'
import { useEffect, useRef, useState } from 'react'

interface Step {
  num: string
  title: string
  desc: string
}

export default function ProcessFlow({ steps, title }: { steps: Step[], title?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let count = 0
          const interval = setInterval(() => {
            count++
            setVisibleCount(count)
            if (count >= steps.length) clearInterval(interval)
          }, 200)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [steps.length])

  return (
    <div ref={ref} className="pf-wrap">
      {title && <p className="pf-subtitle">{title}</p>}
      {steps.map((s, i) => (
        <div
          key={i}
          className={`pf-step${visibleCount > i ? ' pf-step-visible' : ''}`}
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <div className="pf-left">
            <div className="pf-num">{s.num}</div>
            {i < steps.length - 1 && <div className={`pf-line${visibleCount > i + 1 ? ' pf-line-active' : ''}`} />}
          </div>
          <div className="pf-body">
            <div className="pf-title">{s.title}</div>
            <div className="pf-desc">{s.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
