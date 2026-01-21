import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function StrategicAdvisory() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Strategic Advisory"
            lead={
              <>
                The Strategic Policy & Research Function of Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function provides structured, research-based analysis supporting policy clarity, institutional preparedness, and long-term economic understanding.
              </>
            }
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="strategic-advisory" />
            </div>
          </div>

          <Section title="Purpose">
            <p>
              Strategic Advisory provides structured, research-based analysis that supports policy
              clarity, institutional preparedness, and long-term economic understanding within
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function.
            </p>
          </Section>

          <Section title="Scope of Work">
            <ul className="scope-list">
              <li>Policy and regulatory analysis</li>
              <li>Economic and institutional strategy</li>
              <li>Strategic intelligence and scenario assessment</li>
              <li>Advisory outputs including briefs, assessments, and analytical notes</li>
            </ul>
          </Section>

          <Section title="Policy Relevance">
            <p>
              The function contributes to policy discourse through neutral, research-driven analysis
              that improves understanding of governance, regulatory environments, and economic
              systems. It does not pursue advocacy or political outcomes.
            </p>
          </Section>

          <Section title="Outcomes">
            <ul className="scope-list">
              <li>Improved policy understanding</li>
              <li>Strategic preparedness</li>
              <li>Evidence-based insight</li>
              <li>Institutional clarity</li>
            </ul>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
