'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 2016, label: 'Founded', suffix: '' },
  { value: 38, label: 'Research Outputs', suffix: '+' },
  { value: 12, label: 'Regions Covered', suffix: '' },
  { value: 5, label: 'Practice Areas', suffix: '' },
]

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])

  return count
}

function StatItem({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCountUp(stat.value, 1800, active)
  return (
    <div className="stat-item">
      <span className="stat-number">
        {count.toLocaleString()}{stat.suffix}
      </span>
      <span className="stat-label">{stat.label}</span>
    </div>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="stats-bar">
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} active={active} />
      ))}
    </div>
  )
}
