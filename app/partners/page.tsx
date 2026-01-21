import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import './page.css'

export default function Partners() {
  const partnerCategories = [
    {
      href: '/partners/international-think-tanks',
      title: 'International Think Tanks',
      description: 'Collaborative partnerships with leading international think tanks, research institutions, and policy organizations engaged in governance, economic policy, and institutional research.'
    },
    {
      href: '/partners/academic-institutions',
      title: 'Academic Institutions',
      description: 'Partnerships with universities, research centers, and academic institutions supporting scholarly research, policy analysis, and institutional capacity building.'
    },
    {
      href: '/partners/policy-organizations',
      title: 'Policy Organizations',
      description: 'Collaborative relationships with policy research organizations, government institutions, and international bodies engaged in evidence-based policy development.'
    },
    {
      href: '/partners/local-partners',
      title: 'Local Partners',
      description: 'Profiles of national institutions and export-trade stakeholders relevant to Pakistan’s commerce, trade facilitation, and development priorities, aligned with research-driven engagement.'
    }
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Our Partners"
            lead={
              <>
                Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with international think tanks, academic institutions, and policy organizations to enhance research capabilities, share knowledge, and contribute to global policy discourse on governance and economic development.
              </>
            }
          />

          <Section title="Partnership Categories">
            <CardGrid>
              {partnerCategories.map((category) => (
                <Link key={category.href} href={category.href} className="card">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <span className="small-text">View partners</span>
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
