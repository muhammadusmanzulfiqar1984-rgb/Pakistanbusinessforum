import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import './page.css'

export default function StrategicPolicyResearchFunction() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title={
              <>
                Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
              </>
            }
            lead={
              <>
                An institutional capability founded within Pakistan Business Forum<span className="trademark">®</span> to advance policy analysis, strategic studies, and economic research. It operates as a research-driven function focused on analytical clarity and institutional preparedness.
              </>
            }
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="strategic-advisory" />
            </div>
          </div>

          <Section title="About">
            <p>
              The Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function is an
              institutional capability founded within Pakistan Business Forum<span className="trademark">®</span> to advance
              policy analysis, strategic studies, and economic research. It operates as a
              research-driven function focused on analytical clarity and institutional
              preparedness.
            </p>
            <p>
              This function is independent from advocacy or political engagement. Its role
              is to provide neutral, evidence-based analysis that supports policy
              understanding and long-term institutional planning.
            </p>
          </Section>

          <Section title="Purpose">
            <p>
              The purpose of the Strategic Policy & Research Function is to strengthen
              informed decision-making, clarify policy options, and deepen long-term
              economic understanding through methodologically rigorous analysis.
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
              The function contributes to policy discourse by producing research that
              improves understanding of institutional choices and regulatory environments
              without claiming influence or political outcomes. It emphasizes neutrality,
              research integrity, and institutional value.
            </p>
          </Section>

          <Section title="Outcomes">
            <ul className="scope-list">
              <li>Improved understanding of policy contexts</li>
              <li>Strategic preparedness for institutional planning</li>
              <li>Evidence-based insight grounded in research</li>
              <li>Institutional clarity on long-term policy considerations</li>
            </ul>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
