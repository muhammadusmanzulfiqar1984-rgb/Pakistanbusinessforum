'use client'

import { useTranslations } from 'next-intl'
import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import PageTabs from '@/components/PageTabs'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import PracticeHexGrid from '@/components/PracticeHexGrid'
import ImpactRings from '@/components/ImpactRings'
import Link from 'next/link'
import './page.css'

export default function OurWork() {
  const t = useTranslations('practiceAreas')
  const tr = useTranslations('research')
  const ti = useTranslations('impact')
  const tc = useTranslations('common')

  const practiceAreas = [
    { title: t('pa1Title'), slug: 'strategic-policy-research-function', description: t('pa1Desc') },
    { title: t('pa2Title'), slug: 'public-affairs-policy-advisory', description: t('pa2Desc') },
    { title: t('pa3Title'), slug: 'regulatory-monitoring-strategic-intelligence', description: t('pa3Desc') },
    { title: t('pa4Title'), slug: 'studies-research', description: t('pa4Desc') },
    { title: t('pa5Title'), slug: 'economic-affairs', description: t('pa5Desc') },
    { title: t('pa6Title'), slug: 'crisis-management', description: t('pa6Desc') },
    { title: t('pa7Title'), slug: 'media-strategic-communications', description: t('pa7Desc') },
  ]

  const tabs = [
    {
      id: 'practice',
      label: 'Practice Areas',
      content: (
        <Section title={t('sectionTitle')}>
          <PracticeHexGrid areas={practiceAreas as any} />
        </Section>
      )
    },
    {
      id: 'research',
      label: 'Research & Methodology',
      content: (
        <>
          <Section title={tr('methodTitle')}>
            <p>{tr('methodText')}</p>
          </Section>
          <Section title={tr('themesTitle')}>
            <CardGrid>
              <Link href="/research/governance-institutions" className="card"><h3>{tr('theme1Title')}</h3><p>{tr('theme1Desc')}</p><span className="small-text">{tc('viewResearch')}</span></Link>
              <Link href="/research/economic-policy" className="card"><h3>{tr('theme2Title')}</h3><p>{tr('theme2Desc')}</p><span className="small-text">{tc('viewResearch')}</span></Link>
              <Link href="/research/media-relations-research" className="card"><h3>{tr('theme3Title')}</h3><p>{tr('theme3Desc')}</p><span className="small-text">{tc('viewResearch')}</span></Link>
              <Link href="/research/policy-design-evaluation" className="card"><h3>{tr('theme4Title')}</h3><p>{tr('theme4Desc')}</p><span className="small-text">{tc('viewResearch')}</span></Link>
            </CardGrid>
          </Section>
          <Section title={tr('pubTitle')}><p>{tr('pubText')}</p></Section>
          <Section title={tr('collaborationTitle')}><p>{tr('collaborationText')}</p></Section>
        </>
      )
    },
    {
      id: 'impact',
      label: 'Measurement & Impact',
      content: (
        <>
          <Section title={ti('frameworkTitle')}><p>{ti('frameworkText')}</p></Section>
          <ImpactRings
            labels={[ti('ring1Label'), ti('ring2Label'), ti('ring3Label'), ti('ring4Label')]}
            descs={[ti('ring1Desc'), ti('ring2Desc'), ti('ring3Desc'), ti('ring4Desc')]}
          />
          <Section title={ti('methodsTitle')}>
            <CardGrid>
              <Link href="/impact/impact-evaluation" className="card"><h3>{ti('m1Title')}</h3><p>{ti('m1Desc')}</p><span className="small-text">{tc('viewMethodology')}</span></Link>
              <Link href="/impact/performance-measurement" className="card"><h3>{ti('m2Title')}</h3><p>{ti('m2Desc')}</p><span className="small-text">{tc('viewMethodology')}</span></Link>
              <Link href="/impact/process-evaluation" className="card"><h3>{ti('m3Title')}</h3><p>{ti('m3Desc')}</p><span className="small-text">{tc('viewMethodology')}</span></Link>
              <Link href="/impact/economic-evaluation" className="card"><h3>{ti('m4Title')}</h3><p>{ti('m4Desc')}</p><span className="small-text">{tc('viewMethodology')}</span></Link>
            </CardGrid>
          </Section>
          <Section title={ti('researchStandardsTitle')}><p>{ti('researchStandardsText')}</p></Section>
        </>
      )
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Our Work"
            lead="Independent research and policy analysis across governance, economic systems, and institutional development — structured through defined practice areas and rigorous methodology."
            eyebrow="WORK"
          />
          <PageTabs tabs={tabs} />
        </div>
      </main>
      <Footer />
    </>
  )
}
