import { useTranslations } from 'next-intl'
import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageShell from '@/components/PageShell'
import Section from '@/components/Section'
import StatsBar from '@/components/StatsBar'
import ScrollReveal from '@/components/ScrollReveal'
import WorldMapBg from '@/components/WorldMapBg'
import FloatingLiveTV from '@/components/FloatingLiveTV'
import Link from 'next/link'
import './page.css'

export default function Home() {
  const t = useTranslations('home')
  return (
    <>
      <Navigation />
      
      {/* Elegant Floating TV with glassmorphism */}
      <FloatingLiveTV />

      <main className="homepage-main">

        {/* Ghost world map underlay removed */}

        <PageShell>
          <section className="hero-section fade-in-up">
            <div className="hero-bg">
              <img
                src="/images/hero-parliament.jpg"
                alt=""
                aria-hidden="true"
                className="hero-bg-img"
              />
              <div className="hero-overlay" />
            </div>
            <div className="hero-content">
              <h1 className="page-title">{t('heroTitle')}</h1>
              <p className="lead">{t('heroLead')}</p>
              <p>{t('heroBody')}</p>
            </div>
          </section>

          <StatsBar />

          <ScrollReveal delay={0}>
            <Section title={t('purpose')} id="section-purpose">
              <p>{t('purposeText1')}</p>
              <p>{t('purposeText2')}</p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <Section title={t('areasOfWork')} id="section-work">
              <div className="work-cards">
                    <Link href="/practice-areas/public-affairs-policy-advisory" className="work-card">
                      <span className="work-card-num">01</span>
                      <strong>{t('work01Title')}</strong>
                      <p>{t('work01Desc')}</p>
                      <span className="work-card-arrow">{t('explore')} <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    </Link>
                    <Link href="/research/economic-policy" className="work-card">
                      <span className="work-card-num">02</span>
                      <strong>{t('work02Title')}</strong>
                      <p>{t('work02Desc')}</p>
                      <span className="work-card-arrow">{t('explore')} <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    </Link>
                    <Link href="/practice-areas/regulatory-monitoring-strategic-intelligence" className="work-card">
                      <span className="work-card-num">03</span>
                      <strong>{t('work03Title')}</strong>
                      <p>{t('work03Desc')}</p>
                      <span className="work-card-arrow">{t('explore')} <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    </Link>
                    <Link href="/research/governance-institutions" className="work-card">
                      <span className="work-card-num">04</span>
                      <strong>{t('work04Title')}</strong>
                      <p>{t('work04Desc')}</p>
                      <span className="work-card-arrow">{t('explore')} <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    </Link>
                    <Link href="/regions" className="work-card">
                      <span className="work-card-num">05</span>
                      <strong>{t('work05Title')}</strong>
                      <p>{t('work05Desc')}</p>
                      <span className="work-card-arrow">{t('explore')} <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    </Link>
                  </div>
              {/* Floating news ticker below */}
              <div className="work-news-ticker" aria-hidden="true">
                <div className="work-news-ticker-track">
                  {[
                    'New Research Published · Economic Policy Frameworks — March 2026',
                    'Forum Engages Regional Partners Across 12 Countries',
                    'Annual Policy Review 2025 Now Available',
                    'Strategic Advisory Brief: Institutional Reform — Q1 2026',
                    'Pakistan Business Forum® Launches Cross-Border Trade Initiative',
                    'Fifth Generation Policy Dialogue — April 2026',
                  ].flatMap((item, i) => [
                    <span key={`a${i}`} className="work-news-item">{item}</span>,
                    <span key={`b${i}`} className="work-news-sep" aria-hidden="true">·</span>,
                  ])}
                </div>
              </div>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <Section title={t('latestTitle')} id="section-latest">
              <div className="pub-strip">
                <Link href="/media/publications" className="pub-card">
                  <span className="pub-tag">{t('pub1Tag')}</span>
                  <strong className="pub-title">{t('pub1Title')}</strong>
                  <span className="pub-meta">{t('pub1Meta')}</span>
                  <span className="pub-arrow">{t('read')}</span>
                </Link>
                <Link href="/strategic-advisory" className="pub-card">
                  <span className="pub-tag">{t('pub2Tag')}</span>
                  <strong className="pub-title">{t('pub2Title')}</strong>
                  <span className="pub-meta">{t('pub2Meta')}</span>
                  <span className="pub-arrow">{t('read')}</span>
                </Link>
                <Link href="/practice-areas/economic-affairs" className="pub-card">
                  <span className="pub-tag">{t('pub3Tag')}</span>
                  <strong className="pub-title">{t('pub3Title')}</strong>
                  <span className="pub-meta">{t('pub3Meta')}</span>
                  <span className="pub-arrow">{t('read')}</span>
                </Link>
                <Link href="/media/knowledge-outputs" className="pub-card pub-card-cta">
                  <span className="pub-cta-label">{t('viewAll')}</span>
                  <strong className="pub-cta-title">{t('viewAllTitle')}</strong>
                  <span className="pub-arrow">{t('browseLibrary')}</span>
                </Link>
              </div>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Section title={t('analyticalApproach')} id="section-analytical">
              <p>{t('analyticalText1')}</p>
              <p>{t('analyticalText2')}</p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <Section title={t('engagement')} id="section-engagement">
              <p>{t('engagementText')}</p>
            </Section>
          </ScrollReveal>

          <p className="closing-line">{t('closingLine')}</p>
        </PageShell>
      </main>
      <Footer />
    </>
  )
}
