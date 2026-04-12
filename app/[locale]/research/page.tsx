import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import './page.css'

export default async function Research() {
  const t = await getTranslations('research')
  const tc = await getTranslations('common')
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container research-page">
          <div className="research-hero-banner" aria-hidden="true" />
          <PageHeader
            title={t('title')}
            lead={t('lead')}
          />

          <Section title={t('methodTitle')}>
            <p>{t('methodText')}</p>
          </Section>

          <Section title={t('themesTitle')}>
            <CardGrid>
              <Link href="/research/governance-institutions" className="card">
                <h3>{t('theme1Title')}</h3>
                <p>{t('theme1Desc')}</p>
                <span className="small-text">{tc('viewResearch')}</span>
              </Link>
              <Link href="/research/economic-policy" className="card">
                <h3>{t('theme2Title')}</h3>
                <p>{t('theme2Desc')}</p>
                <span className="small-text">{tc('viewResearch')}</span>
              </Link>
              <Link href="/research/media-relations-research" className="card">
                <h3>{t('theme3Title')}</h3>
                <p>{t('theme3Desc')}</p>
                <span className="small-text">{tc('viewResearch')}</span>
              </Link>
              <Link href="/research/policy-design-evaluation" className="card">
                <h3>{t('theme4Title')}</h3>
                <p>{t('theme4Desc')}</p>
                <span className="small-text">{tc('viewResearch')}</span>
              </Link>
            </CardGrid>
          </Section>

          <Section title={t('pubTitle')}>
            <p>{t('pubText')}</p>
          </Section>

          <Section title={t('portfolioTitle')}>
            <p>{t('portfolioText')}</p>
          </Section>

          <Section title={t('collaborationTitle')}>
            <p>{t('collaborationText')}</p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
