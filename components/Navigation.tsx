'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect, useTransition, useCallback } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { locales } from '@/i18n'
import './Navigation.css'

const localeLabels: Record<string, string> = {
  en: 'EN',
  ur: 'اردو',
  ar: 'عربي',
  zh: '中文',
  cs: 'CS',
  de: 'DE',
  fr: 'FR',
  es: 'ES',
}

// Static forex pairs with realistic rates (updated live feel via small random drift)
const FOREX_BASE = [
  { pair: 'USD/PKR', rate: 278.45, dir: 'up'   },
  { pair: 'EUR/USD', rate: 1.0842, dir: 'down'  },
  { pair: 'GBP/USD', rate: 1.2631, dir: 'up'   },
  { pair: 'USD/JPY', rate: 151.22, dir: 'down'  },
  { pair: 'EUR/PKR', rate: 301.80, dir: 'up'   },
  { pair: 'GBP/PKR', rate: 351.60, dir: 'up'   },
  { pair: 'AED/PKR', rate:  75.82, dir: 'down'  },
  { pair: 'SAR/PKR', rate:  74.20, dir: 'up'   },
  { pair: 'CNY/PKR', rate:  38.44, dir: 'down'  },
  { pair: 'XAU/USD', rate: 2324.10, dir: 'up'  },
]

// Media channels for the panel
const MEDIA_CHANNELS = [
  {
    id: 'bbc',
    logo: 'BBC',
    name: 'BBC News',
    desc: 'World Service Live',
    url: 'https://www.bbc.co.uk/news/live',
    color: '#bb1919',
  },
  {
    id: 'cnn',
    logo: 'CNN',
    name: 'CNN',
    desc: 'Breaking News Live',
    url: 'https://edition.cnn.com/live-tv',
    color: '#cc0000',
  },
]

const RADIO_STATIONS = [
  { name: 'BBC World Service', url: 'https://stream.live.vc.bbcmedia.co.uk/bbc_world_service' },
  { name: 'VOA English',       url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/VOA_NEWS_AAC.aac' },
]

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('nav')
  const [, startTransition] = useTransition()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [mediaOpen, setMediaOpen] = useState(false)
  const [radioAudio, setRadioAudio] = useState<HTMLAudioElement | null>(null)
  const [radioPlaying, setRadioPlaying] = useState(false)
  const [radioStation, setRadioStation] = useState(0)
  const [forexRates, setForexRates] = useState(FOREX_BASE)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Simulate live forex drift every 8 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setForexRates(prev => prev.map(f => {
        const drift = (Math.random() - 0.49) * f.rate * 0.0008
        const newRate = +(f.rate + drift).toFixed(f.rate > 100 ? 2 : 4)
        return { ...f, rate: newRate, dir: drift >= 0 ? 'up' : 'down' }
      }))
    }, 8000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => { setMenuOpen(false); setLangOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen || mediaOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, mediaOpen])

  const switchLocale = (next: string) => {
    setLangOpen(false)
    const segments = pathname.split('/')
    const knownLocales: readonly string[] = locales
    if (knownLocales.includes(segments[1])) {
      segments[1] = next === 'en' ? '' : next
    } else {
      segments.splice(1, 0, next === 'en' ? '' : next)
    }
    const newPath = segments.join('/').replace(/\/\//g, '/') || '/'
    startTransition(() => { router.push(newPath) })
  }

  const toggleRadio = useCallback(() => {
    if (radioPlaying) {
      radioAudio?.pause()
      setRadioPlaying(false)
    } else {
      const audio = new Audio(RADIO_STATIONS[radioStation].url)
      audio.play().catch(() => {})
      setRadioAudio(audio)
      setRadioPlaying(true)
    }
  }, [radioPlaying, radioAudio, radioStation])

  const switchRadio = useCallback((idx: number) => {
    radioAudio?.pause()
    setRadioAudio(null)
    setRadioPlaying(false)
    setRadioStation(idx)
  }, [radioAudio])

  const navItems = [
    { href: '/about', label: t('about') },
    { href: '/', label: t('home'), exact: true },
    { href: '/strategic-advisory', label: t('strategicAdvisory') },
    { href: '/research', label: t('research') },
    { href: '/practice-areas', label: t('practiceAreas') },
    { href: '/impact', label: t('impact') },
    { href: '/media', label: t('media') },
    { href: '/regions', label: t('regions') },
    { href: '/gallery', label: t('gallery') },
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

  const doubled = [...forexRates, ...forexRates]

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        {/* News Ticker */}
        <div className="news-ticker-wrap" aria-hidden="true">
          <span className="news-ticker-label">{t('latest')}</span>
          <div className="news-ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="news-ticker-item">{item}</span>
            ))}
          </div>
        </div>

        {/* Forex Ticker */}
        <div className="forex-ticker-wrap" aria-hidden="true">
          <span className="forex-ticker-label">FOREX</span>
          <div className="forex-ticker-track">
            {doubled.map((f, i) => (
              <span key={i} className="forex-item">
                <span className="forex-pair">{f.pair}</span>
                <span className="forex-rate">{f.rate.toLocaleString('en-US', { minimumFractionDigits: f.rate > 100 ? 2 : 4, maximumFractionDigits: f.rate > 100 ? 2 : 4 })}</span>
                <span className={f.dir === 'up' ? 'forex-up' : 'forex-down'}>{f.dir === 'up' ? '▲' : '▼'}</span>
                <span className="forex-sep">|</span>
              </span>
            ))}
          </div>
        </div>

        <div className="nav-container">
          <div className="nav-logo-space">
            <Link href="/" className="logo-link" aria-label="Pakistan Business Forum Home">
              <Image
                src="/images/Pakistan business forum 1.png"
                alt="Pakistan Business Forum® Logo"
                width={56}
                height={56}
                priority
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>
          <div className="nav-brand">
            <div className="brand-text">
              <div className="brand-title">{t('brand')}<span className="trademark">®</span></div>
              <div className="brand-subtitle">{t('brandSubtitle')}</div>
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
            {/* Media / Live TV button */}
            <button
              className="nav-media-btn"
              aria-label="Live Media"
              onClick={() => setMediaOpen(true)}
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 5l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Live
            </button>

            {/* Language switcher */}
            <div className="lang-switcher">
              <button
                className="lang-btn"
                aria-label={t('language')}
                aria-expanded={langOpen}
                onClick={() => setLangOpen(o => !o)}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9M3 12h18" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span>{localeLabels[locale]}</span>
              </button>
              {langOpen && (
                <div className="lang-dropdown" role="menu">
                  {locales.map(l => (
                    <button
                      key={l}
                      role="menuitem"
                      className={`lang-option${l === locale ? ' active' : ''}`}
                      onClick={() => switchLocale(l)}
                    >
                      <span className="lang-option-code">{localeLabels[l]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className={`nav-hamburger${menuOpen ? ' open' : ''}`}
              aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
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

      {/* Media Panel */}
      {mediaOpen && (
        <div
          className="media-panel-overlay"
          onClick={e => { if (e.target === e.currentTarget) setMediaOpen(false) }}
          role="dialog"
          aria-modal="true"
          aria-label="Live Media"
        >
          <div className="media-panel">
            <button className="media-panel-close" onClick={() => setMediaOpen(false)} aria-label="Close">✕</button>
            <div className="media-panel-title">📺 Live Media</div>
            <div className="media-panel-sub">Watch BBC & CNN live or tune into radio</div>

            <div className="media-channels-grid">
              {MEDIA_CHANNELS.map(ch => (
                <a
                  key={ch.id}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-channel-btn"
                >
                  <div className="media-channel-logo" style={{ color: ch.color }}>{ch.logo}</div>
                  <div className="media-channel-name">{ch.name}</div>
                  <div className="media-channel-desc">{ch.desc}</div>
                  <span className="media-channel-live">● LIVE</span>
                </a>
              ))}
            </div>

            <div className="media-radio-row">
              {RADIO_STATIONS.map((station, idx) => (
                <button
                  key={idx}
                  className="media-radio-btn"
                  onClick={() => {
                    if (radioStation === idx && radioPlaying) {
                      toggleRadio()
                    } else if (radioStation !== idx) {
                      switchRadio(idx)
                    } else {
                      toggleRadio()
                    }
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="2" y="10" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="7" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M13 13h4M13 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M6 10V8a6 6 0 0 1 12 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {radioStation === idx && radioPlaying ? '⏸ ' : '▶ '}{station.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

