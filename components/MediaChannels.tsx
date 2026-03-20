'use client'
import { useState } from 'react'

const channels = [
  {
    id: 'electronic',
    label: 'Electronic',
    icon: '🌐',
    title: 'Electronic & Digital Media',
    points: [
      { name: 'Google', desc: 'The most renowned and trusted platform — search, discovery, and knowledge dissemination.' },
      { name: 'YouTube', desc: 'Global video platform with billions of active users — vital for campaign amplification.' },
      { name: 'Portals & Platforms', desc: 'News portals, policy websites, and digital publications reaching informed audiences.' },
    ]
  },
  {
    id: 'print',
    label: 'Print',
    icon: '📰',
    title: 'Print Media',
    points: [
      { name: 'Newspapers', desc: 'Structured editorial freedom and reader trust — a credible channel for policy communication.' },
      { name: 'Magazines', desc: 'Minimum formalities and targeted readership — effective for long-form policy narratives.' },
      { name: 'Publications', desc: 'Policy journals, academic press, and institutional reports reaching specialist audiences.' },
    ]
  },
  {
    id: 'broadcast',
    label: 'Broadcast',
    icon: '📡',
    title: 'Broadcast Media',
    points: [
      { name: 'Television', desc: 'Dramas, news, talk shows — the most expedient means for immediate wide-audience reach.' },
      { name: 'Radio', desc: 'A special place in public life — immediate, accessible, and trusted across all demographics.' },
      { name: 'Podcasts', desc: 'Long-form engagement for policy discourse, reaching educated and influential audiences.' },
    ]
  },
  {
    id: 'outdoor',
    label: 'Outdoor',
    icon: '🏙️',
    title: 'Outdoor & Activation',
    points: [
      { name: 'Billboards', desc: 'Highly targeted geographic advertising — strong for brand recognition in key locations.' },
      { name: 'Transit & OOH', desc: 'Bus benches, transit panels, and commuter-facing placements for sustained exposure.' },
      { name: 'Activations', desc: 'Branded floats, roundabout installations, and experiential touchpoints for direct engagement.' },
    ]
  },
  {
    id: 'social',
    label: 'Social',
    icon: '💬',
    title: 'Social Media',
    points: [
      { name: 'Facebook & Instagram', desc: 'Brand-centric content, reactive storytelling, and user-generated campaigns at scale.' },
      { name: 'Twitter / X', desc: 'Conversation-led platform — listen, monitor, respond, and build institutional voice.' },
      { name: 'LinkedIn', desc: 'High-integrity connections with policy, business, and institutional decision-makers.' },
    ]
  },
]

export default function MediaChannels() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)

  const switchTab = (i: number) => {
    if (i === active) return
    setAnimating(true)
    setTimeout(() => {
      setActive(i)
      setAnimating(false)
    }, 180)
  }

  const ch = channels[active]

  return (
    <div className="mc-wrap">
      <div className="mc-tabs">
        {channels.map((c, i) => (
          <button
            key={c.id}
            className={`mc-tab${active === i ? ' mc-tab-active' : ''}`}
            onClick={() => switchTab(i)}
          >
            <span className="mc-tab-icon">{c.icon}</span>
            <span className="mc-tab-label">{c.label}</span>
          </button>
        ))}
      </div>
      <div className={`mc-panel${animating ? ' mc-panel-exit' : ' mc-panel-enter'}`}>
        <div className="mc-panel-title">{ch.title}</div>
        <div className="mc-points">
          {ch.points.map((p, i) => (
            <div key={i} className="mc-point" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="mc-point-name">{p.name}</div>
              <div className="mc-point-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
