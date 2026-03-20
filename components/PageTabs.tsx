'use client'
import { useState, useRef, useEffect } from 'react'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

export default function PageTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const el = tabRefs.current[active]
    if (el) {
      setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth })
    }
  }, [active])

  return (
    <div className="ptabs-wrap">
      <div className="ptabs-bar" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={el => { tabRefs.current[i] = el }}
            role="tab"
            aria-selected={active === i}
            aria-controls={`ptabs-panel-${tab.id}`}
            className={`ptabs-tab${active === i ? ' ptabs-tab-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
        <div
          className="ptabs-indicator"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        />
      </div>
      <div
        key={active}
        id={`ptabs-panel-${tabs[active].id}`}
        role="tabpanel"
        className="ptabs-panel"
      >
        {tabs[active].content}
      </div>
    </div>
  )
}
