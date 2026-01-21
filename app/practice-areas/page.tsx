import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import './page.css'

export default function PracticeAreas() {
  const practiceAreas = [
    {
      title: (
        <>
          Pakistan Business Forum<span className="trademark">®</span> – Strategic Policy & Research Function
        </>
      ),
      slug: 'strategic-policy-research-function',
      description: 'Institutional policy analysis and strategic studies capability supporting evidence-based understanding and institutional preparedness.'
    },
    {
      title: 'Public Affairs & Policy Advisory',
      slug: 'public-affairs-policy-advisory',
      description: 'Analysis of policy development processes, legislative frameworks, and institutional mechanisms governing public affairs management.'
    },
    {
      title: 'Regulatory Monitoring & Strategic Intelligence',
      slug: 'regulatory-monitoring-strategic-intelligence',
      description: 'Systematic analysis of regulatory developments, policy evolution, and institutional dynamics within governance structures.'
    },
    {
      title: 'Studies & Research',
      slug: 'studies-research',
      description: 'Independent scholarly research examining policy issues, economic phenomena, and governance challenges through rigorous analytical frameworks.'
    },
    {
      title: 'Economic Affairs',
      slug: 'economic-affairs',
      description: 'Specialized research in economic policy analysis, fiscal policy evaluation, and economic development frameworks.'
    },
    {
      title: 'Crisis Management',
      slug: 'crisis-management',
      description: 'Analytical support for policy-related contingencies, regulatory challenges, and institutional crises requiring systematic assessment.'
    },
    {
      title: 'Media & Strategic Communications',
      slug: 'media-strategic-communications',
      description: 'Research and analysis on communication strategies, policy messaging frameworks, and public engagement mechanisms.'
    }
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Practice Areas"
            lead={
              <>
                Organizational activities within Pakistan Business Forum<span className="trademark">®</span> are structured across six domains of policy research, analysis, and scholarly inquiry. The Pakistan Business Forum<span className="trademark">®</span> – Strategic Policy & Research Function is a cross-cutting analytical capability that supports these practice areas through evidence-based methods and institutional research standards.
              </>
            }
          />

          <Section title="Practice Areas">
            <CardGrid>
              {practiceAreas.map((area) => (
                <Link key={area.slug} href={`/practice-areas/${area.slug}`} className="card">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <span className="small-text">View details</span>
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
