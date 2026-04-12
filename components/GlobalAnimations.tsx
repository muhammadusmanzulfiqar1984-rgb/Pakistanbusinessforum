'use client'

import { useEffect } from 'react'

export default function GlobalAnimations() {
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of element is visible
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal')
          observer.unobserve(entry.target) // Only animate once
        }
      })
    }, observerOptions)

    // Select elements that should animate on scroll
    // Delay selection slightly to ensure DOM is ready
    const timer = setTimeout(() => {
      const elementsToAnimate = document.querySelectorAll(
        '.page-intro, .section-text, .card, .partner-card, .team-member, .position-item, .gallery-item, .advisory-card, .value-card, .pub-card, .work-card'
      )

      elementsToAnimate.forEach((el) => {
        // Add base class if not already there
        if (!el.classList.contains('animate-reveal-ready') && !el.classList.contains('animate-reveal')) {
          el.classList.add('animate-reveal-ready')
          observer.observe(el)
        }
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return null // This component doesn't render anything
}
