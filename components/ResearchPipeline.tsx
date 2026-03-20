'use client'
import { useEffect, useRef, useState } from 'react'

const steps = [
  { icon: '🔍', label: 'Problem\nIdentification', desc: 'Define policy question & scope' },
  { icon: '📚', label: 'Literature\nReview', desc: 'Survey existing evidence' },
  { icon: '⚙️', label: 'Methodology\nDesign', desc: 'Select analytical framework' },
  { icon: '📊', label: 'Data\nCollection', desc: 'Primary & secondary sources' },
  { icon: '✅', label: 'Analysis &\nPublication', desc: 'Peer review & dissemination' },
]

export default function ResearchPipeline() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(-1)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(0) } },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (active >= 0 && active < steps.length - 1) {
      const t = setTimeout(() => setActive(a => a + 1), 400)
      return () => clearTimeout(t)
    }
  }, [active])

  return (
    <div ref={ref} className="pipeline-wrap">
      {steps.map((s, i) => (
        <div key={i} className={`pipeline-step${active >= i ? ' pipeline-active' : ''}`}>
          <div className="pipeline-icon">{s.icon}</div>
          <div className="pipeline-label">{s.label.split('\n').map((l, j) => <span key={j}>{l}<br/></span>)}</div>
          <div className="pipeline-desc">{s.desc}</div>
          {i < steps.length - 1 && (
            <div className={`pipeline-arrow${active > i ? ' arrow-active' : ''}`}>→</div>
          )}
        </div>
      ))}
    </div>
  )
}
