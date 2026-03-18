import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import './page.css'

export default function LocalPartners() {
  const localPartners = [
    {
      slug: 'ministry-of-commerce',
      title: 'Ministry of Commerce (Pakistan)',
      description:
        'Institutional overview of the federal ministry responsible for trade policy, market access, trade facilitation, and commerce-sector coordination.',
      meta: 'Federal Government • Trade policy & facilitation',
      favicon: 'https://www.google.com/s2/favicons?domain=commerce.gov.pk&sz=128',
    },
    {
      slug: 'tdap',
      title: 'Trade Development Authority of Pakistan (TDAP)',
      description:
        'Institutional overview of Pakistan\'s export-development body supporting exporters through market intelligence, exhibitions, and trade-promotion programs.',
      meta: 'Export development • Promotion & outreach',
      favicon: 'https://www.google.com/s2/favicons?domain=tdap.gov.pk&sz=128',
    },
    {
      slug: 'sifc',
      title: 'Special Investment Facilitation Council (SIFC)',
      description:
        'Institutional overview of Pakistan\'s single-window investment facilitation body focused on attracting foreign and domestic investment across priority sectors including agriculture, energy, IT, defense production, and minerals.',
      meta: 'Investment facilitation • Single-window platform',
      favicon: 'https://www.google.com/s2/favicons?domain=sifc.gov.pk&sz=128',
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Local Partners"
            lead={
              <>
                This section presents institutional profiles relevant to commerce, trade facilitation, and
                export development in Pakistan. Content is provided for informational purposes and to
                outline areas of analytical alignment with Pakistan Business Forum<span className="trademark">®</span>{' '}
                — Strategic Policy &amp; Research Function. It does not imply endorsement, affiliation, or
                an official partnership unless explicitly stated in writing.
              </>
            }
          />

          <Section title="Local Stakeholders">
            <CardGrid>
              {localPartners.map((p) => (
                <Link key={p.slug} href={`/partners/local-partners/${p.slug}`} className="card local-partner-card">
                  <div className="local-partner-logo">
                    <img src={p.favicon} alt={`${p.title} favicon`} className="local-partner-favicon" />
                  </div>
                  <div className="local-partner-meta">{p.meta}</div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <span className="small-text">View profile</span>
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

