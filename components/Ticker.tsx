'use client'
import { useEffect, useState } from 'react'

const FALLBACK = [
  "PBF® releases new analysis on Pakistan's regulatory reform agenda",
  "Fifth Generation Warfare — how ideas shape tomorrow's conflicts",
  'Bilateral economic relations: employment generation as a key metric',
  'New research: cross-domain synergy in multi-domain policy environments',
  'Opinion Making Process — from vigilance to delivery at scale',
  'Pakistan Business Forum® expands regional coverage across 12 territories',
  'Strategic Advisory brief: institutional preparedness in a shifting policy landscape',
  'Public Affairs & Lobbying — amplifying voice in the corridors of power',
]

export default function Ticker() {
  const [items, setItems] = useState<string[]>(FALLBACK)

  useEffect(() => {
    fetch('/api/ticker')
      .then(r => r.json())
      .then(d => { if (d.items?.length) setItems(d.items.map((i: { text?: string; title?: string }) => i.text || i.title || '').filter(Boolean)) })
      .catch(() => {})
  }, [])

  const doubled = [...items, ...items]

  return (
    <div className="ticker-wrap" aria-label="Latest updates">
      <span className="ticker-badge">LATEST</span>
      <div className="ticker-track-wrap">
        <div className="ticker-track">
          {doubled.map((item, i) => (
            <span key={i} className="ticker-item">
              {item}
              <span className="ticker-sep" aria-hidden="true">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
