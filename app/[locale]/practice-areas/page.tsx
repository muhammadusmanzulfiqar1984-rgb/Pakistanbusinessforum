import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import PracticeHexGrid from '@/components/PracticeHexGrid'
import { getTranslations } from 'next-intl/server'
import './page.css'

export default async function PracticeAreas() {
  const t = await getTranslations('practiceAreas')
  const tc = await getTranslations('common')

  const practiceAreas = [
    {
      title: t('pa1Title'),
      slug: 'strategic-policy-research-function',
      description: t('pa1Desc')
    },
    {
      title: t('pa2Title'),
      slug: 'public-affairs-policy-advisory',
      description: t('pa2Desc')
    },
    {
      title: t('pa3Title'),
      slug: 'regulatory-monitoring-strategic-intelligence',
      description: t('pa3Desc')
    },
    {
      title: t('pa4Title'),
      slug: 'studies-research',
      description: t('pa4Desc')
    },
    {
      title: t('pa5Title'),
      slug: 'economic-affairs',
      description: t('pa5Desc')
    },
    {
      title: t('pa6Title'),
      slug: 'crisis-management',
      description: t('pa6Desc')
    },
    {
      title: t('pa7Title'),
      slug: 'media-strategic-communications',
      description: t('pa7Desc')
    }
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <div className="practice-hero-banner" aria-hidden="true" />
          <PageHeader
            title={t('title')}
            lead={t('lead')}
          />

          <Section title={t('sectionTitle')}>
            <PracticeHexGrid areas={practiceAreas as any} />
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
