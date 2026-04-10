'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

const statsData = [
  { value: 2016, suffix: '', key: 'statFounded' },
  { value: 38,   suffix: '+', key: 'statResearch' },
  { value: 12,   suffix: '', key: 'statRegions' },
  { value: 5,    suffix: '', key: 'statPracticeAreas' },
]

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const step = Math.ceil(target / (duration / 16))

    function runCycle() {
      start = 0
      const timer = setInterval(() => {
        start += step
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
          // pause at final value then restart
          setTimeout(runCycle, 1800)
        } else {
          setCount(start)
        }
      }, 16)
      return timer
    }

    const timer = runCycle()
    return () => clearInterval(timer)
  }, [active, target, duration])

  return count
}

function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, 1800, active)
  return (
    <div className="stat-item">
      <span className="stat-number">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function StatsBar() {
  const t = useTranslations('home')
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(true)
  }, [])

  return (
    <div className="stats-bar">
      {statsData.map((stat) => (
        <StatItem key={stat.key} value={stat.value} suffix={stat.suffix} label={t(stat.key)} active={active} />
      ))}
    </div>
  )
}
