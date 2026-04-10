import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import './page.css'

export default async function Regions() {
  const t = await getTranslations('regions')
  const tc = await getTranslations('common')

  const regions = [
    { href: '/regions/africa', title: t('r1Title'), description: t('r1Desc') },
    { href: '/regions/asia-pacific', title: t('r2Title'), description: t('r2Desc') },
    { href: '/regions/europe', title: t('r3Title'), description: t('r3Desc') },
    { href: '/regions/middle-east-north-africa', title: t('r4Title'), description: t('r4Desc') },
    { href: '/regions/americas', title: t('r5Title'), description: t('r5Desc') },
    { href: '/regions/russia-eurasia', title: t('r6Title'), description: t('r6Desc') },
  ]

  return (
    <>
      <Navigation />
      <main>

        <div className="page-container">
        <PageHeader
          title={t('title')}
          lead={t('lead')}
        />

        <Section title={t('sectionTitle')}>
          <CardGrid>
            {regions.map((region) => (
              <Link key={region.href} href={region.href} className="card">
                <h3>{region.title}</h3>
                <p>{region.description}</p>
                <span className="small-text">{tc('viewRegion')}</span>
              </Link>
            ))}
          </CardGrid>
        </Section>
        </div>

      </main>
      <Footer />
    </>
  )
}
