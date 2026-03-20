'use client'
import { useEffect, useRef, useState } from 'react'

interface Anchor {
  label: string
  id: string
}

export default function AnchorBar({ anchors }: { anchors: Anchor[] }) {
  const [active, setActive] = useState(anchors[0]?.id ?? '')
  const [stuck, setStuck] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Sticky detection
      if (barRef.current) {
        setStuck(barRef.current.getBoundingClientRect().top <= 64)
      }
      // Active section detection
      let current = anchors[0]?.id ?? ''
      for (const anchor of anchors) {
        const el = document.getElementById(anchor.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) current = anchor.id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [anchors])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 100
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div ref={barRef} className={`anchor-bar${stuck ? ' anchor-bar-stuck' : ''}`}>
      <div className="anchor-bar-inner">
        {anchors.map(a => (
          <button
            key={a.id}
            className={`anchor-btn${active === a.id ? ' anchor-btn-active' : ''}`}
            onClick={() => scrollTo(a.id)}
          >
            {a.label}
          </button>
        ))}
      </div>
    </div>
  )
}
