 'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import './Navigation.css'

export default function Navigation() {
  const pathname = usePathname()

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

  return (
    <header className="site-header">
      <div className="nav-container">
        <div className="nav-logo-space">
          <Link href="/" className="logo-link">
            <Image
              src="/logo-pbf.svg"
              alt="Pakistan Business Forum® Logo"
              width={140}
              height={60}
              priority
              style={{ objectFit: 'contain' }}
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
        </div>
      </div>
    </header>
  )
}

