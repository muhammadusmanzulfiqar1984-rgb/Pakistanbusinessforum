'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import './Navigation.css'

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/', label: 'Home', exact: true },
    { href: '/strategic-advisory', label: 'Strategic Advisory' },
    { href: '/research', label: 'Research' },
    { href: '/practice-areas', label: 'Practice Areas' },
    { href: '/impact', label: 'Impact' },
    { href: '/media', label: 'Media' },
    { href: '/regions', label: 'Regions' },
    { href: '/gallery', label: 'Gallery' },
  ]

  const isActive = (href: string, exact = false) => {
    if (exact) return pathname === href
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const [tickerItems, setTickerItems] = useState([
    'New Research Published · Economic Policy Frameworks — March 2026',
    'Forum Engages Regional Partners Across 12 Countries',
    'Annual Policy Review 2025 Now Available',
    'Strategic Advisory Brief: Institutional Reform — Q1 2026',
  ])

  useEffect(() => {
    fetch('/api/ticker')
      .then(r => r.json())
      .then(data => { if (data?.items?.length) setTickerItems(data.items) })
      .catch(() => {})
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="news-ticker-wrap" aria-hidden="true">
        <span className="news-ticker-label">Latest</span>
        <div className="news-ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="news-ticker-item">{item}</span>
          ))}
        </div>
      </div>
      <div className="nav-container">
        <div className="nav-logo-space">
          <Link href="/" className="logo-link">
            <Image
              src="/images/Pakistan business forum 1.png"
              alt="Pakistan Business Forum® Logo"
              width={200}
              height={100}
              priority
              style={{ objectFit: 'contain', maxHeight: '90px' }}
            />
          </Link>
        </div>
        <div className="nav-brand">
          <div className="brand-text">
            <div className="brand-title">Pakistan Business Forum<span className="trademark">®</span></div>
            <div className="brand-subtitle">
              Strategic Policy & Research Platform
            </div>
          </div>
        </div>

        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${isActive(item.href, item.exact) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="nav-search" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M11 3a8 8 0 1 0 4.9 14.3l4 4a1 1 0 0 0 1.4-1.4l-4-4A8 8 0 0 0 11 3zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12z" />
            </svg>
          </button>
          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`nav-drawer${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="nav-drawer-links" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-drawer-link${isActive(item.href, item.exact) ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

