'use client'
import { useState } from 'react'

const CHANNELS = [
  { id: 'bbc',       label: 'BBC',   color: '#bb1919', videoId: 'I3sXIr6iRTE' },
  { id: 'aljazeera', label: 'AJZ',   color: '#d4961a', videoId: 'gCNeDWCI0vo' },
  { id: 'sky',       label: 'SKY',   color: '#005eb8', videoId: 'qainU_9aOUY' },
  { id: 'dw',        label: 'DW',    color: '#009ede', videoId: 'LuKwFajn37U' },
]

interface LiveScreenProps {
  compact?: boolean
}

export default function LiveScreen({ compact = false }: LiveScreenProps) {
  const [active, setActive] = useState(0)
  const [muted, setMuted] = useState(true)
  const ch = CHANNELS[active]
  const src = `https://www.youtube.com/embed/${ch.videoId}?autoplay=1&mute=${muted ? 1 : 0}&rel=0&modestbranding=1`

  if (compact) {
    return (
      <div className="live-compact">
        {/* top bar */}
        <div className="live-compact-bar">
          <span className="live-dot" />
          <span className="live-compact-label">LIVE</span>
          <div className="live-compact-tabs">
            {CHANNELS.map((c, i) => (
              <button
                key={c.id}
                className={`live-compact-tab${i === active ? ' active' : ''}`}
                style={i === active ? { color: c.color } : {}}
                onClick={() => setActive(i)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <button className="live-compact-mute" onClick={() => setMuted(m => !m)}>
            {muted ? '🔇' : '🔊'}
          </button>
        </div>
        {/* screen */}
        <div className="live-compact-screen">
          <iframe
            key={ch.id + muted}
            src={src}
            title={ch.label}
            allow="autoplay; encrypted-media"
            allowFullScreen
            frameBorder="0"
            className="live-compact-iframe"
          />
          <div className="live-compact-gloss" />
          <div className="live-compact-bug" style={{ borderColor: ch.color + '50' }}>
            <span className="live-dot" style={{ width: 5, height: 5 }} />
            <span style={{ color: ch.color, fontWeight: 800, fontSize: 9, letterSpacing: '0.06em' }}>{ch.label}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="live-screen-wrap">
      <div className="live-silver-line" />
      <div className="live-screen-inner">
        <div className="live-channel-bar">
          <span className="live-channel-bar-label">
            <span className="live-dot" />
            LIVE
          </span>
          <div className="live-channel-tabs">
            {CHANNELS.map((c, i) => (
              <button
                key={c.id}
                className={`live-ch-tab${i === active ? ' active' : ''}`}
                style={i === active ? { color: c.color, borderColor: c.color } : {}}
                onClick={() => setActive(i)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <button className="live-mute-btn" onClick={() => setMuted(m => !m)}>
            {muted ? '🔇' : '🔊'} {muted ? 'Unmute' : 'Mute'}
          </button>
        </div>
        <div className="live-screen-frame">
          <iframe
            key={ch.id + muted}
            src={src}
            title={ch.label}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            className="live-iframe"
          />
          <div className="live-screen-gloss" />
          <div className="live-bug" style={{ borderColor: ch.color + '40' }}>
            <span className="live-dot" />
            <span style={{ color: ch.color, fontWeight: 900, fontSize: 11 }}>{ch.label}</span>
            <span className="live-bug-text">LIVE</span>
          </div>
        </div>
      </div>
      <div className="live-silver-line live-silver-line--reverse" />
    </div>
  )
}
