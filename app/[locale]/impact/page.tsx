import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import ImpactRings from '@/components/ImpactRings'
import { getTranslations } from 'next-intl/server'
import './page.css'

export default async function Impact() {
  const t = await getTranslations('impact')
  const tc = await getTranslations('common')
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title={t('title')}
            lead={t('lead')}
          />

          <Section title={t('frameworkTitle')}>
            <p>{t('frameworkText')}</p>
          </Section>

          <ImpactRings
            labels={[t('ring1Label'), t('ring2Label'), t('ring3Label'), t('ring4Label')]}
            descs={[t('ring1Desc'), t('ring2Desc'), t('ring3Desc'), t('ring4Desc')]}
          />

          <Section title={t('methodsTitle')}>
            <CardGrid>
              <Link href="/impact/impact-evaluation" className="card">
                <h3>{t('m1Title')}</h3>
                <p>{t('m1Desc')}</p>
                <span className="small-text">{tc('viewMethodology')}</span>
              </Link>
              <Link href="/impact/performance-measurement" className="card">
                <h3>{t('m2Title')}</h3>
                <p>{t('m2Desc')}</p>
                <span className="small-text">{tc('viewMethodology')}</span>
              </Link>
              <Link href="/impact/process-evaluation" className="card">
                <h3>{t('m3Title')}</h3>
                <p>{t('m3Desc')}</p>
                <span className="small-text">{tc('viewMethodology')}</span>
              </Link>
              <Link href="/impact/economic-evaluation" className="card">
                <h3>{t('m4Title')}</h3>
                <p>{t('m4Desc')}</p>
                <span className="small-text">{tc('viewMethodology')}</span>
              </Link>
            </CardGrid>
          </Section>

          <Section title={t('researchStandardsTitle')}>
            <p>{t('researchStandardsText')}</p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
