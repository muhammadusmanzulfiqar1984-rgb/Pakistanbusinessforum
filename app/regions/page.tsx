import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import './page.css'

export default function Regions() {
  const regions = [
    { href: '/regions/africa', title: 'Africa', description: 'Governance systems, regulatory environments, and economic policy across regional and national contexts.' },
    { href: '/regions/asia-pacific', title: 'Asia-Pacific', description: 'Institutional frameworks, economic policy, and regulatory dynamics across Asia-Pacific economies.' },
    { href: '/regions/europe', title: 'Europe', description: 'Regulatory governance, institutional balance, and economic policy coordination across Europe.' },
    { href: '/regions/middle-east-north-africa', title: 'Middle East & North Africa', description: 'Institutional reform, regulatory environments, and economic policy across MENA.' },
    { href: '/regions/americas', title: 'Americas', description: 'Economic policy, regulatory systems, and institutional capacity across the Americas.' },
    { href: '/regions/russia-eurasia', title: 'Russia & Eurasia', description: 'Institutional systems, regulatory frameworks, and economic policy across Eurasia.' },
  ]

  return (
    <>
      <Navigation />
      <main>

        <div className="page-container">
        <PageHeader
          title="Regions"
          lead="Regional research is organized to support comparative analysis, institutional understanding, and policy relevance across diverse governance and economic systems."
        />

        <Section title="Regional Coverage">
          <CardGrid>
            {regions.map((region) => (
              <Link key={region.href} href={region.href} className="card">
                <h3>{region.title}</h3>
                <p>{region.description}</p>
                <span className="small-text">View region</span>
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
