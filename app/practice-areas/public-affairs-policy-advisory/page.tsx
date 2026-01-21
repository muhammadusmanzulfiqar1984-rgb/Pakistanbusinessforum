import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import './page.css'

export default function PublicAffairsPolicyAdvisory() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Public Affairs & Policy Advisory"
            lead="Research-based analysis and advisory support on policy development processes, legislative frameworks, and institutional mechanisms."
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="public-affairs" />
            </div>
          </div>

          <Section title="Purpose">
              <p>
                This practice area provides research-based analysis and advisory support on 
                policy development processes, legislative frameworks, and institutional mechanisms. 
                The work focuses on systematic examination of how policy environments function and 
                how institutions interact within governance structures.
              </p>
              <p>
                Through rigorous research and analysis, this practice area supports evidence-based 
                policy development by examining policy frameworks, legislative processes, and institutional 
                operations. The research provides analytical insights that inform policy design 
                and implementation through methodologically sound inquiry.
              </p>

          </Section>

          <Section title="Scope of Work">
            <p>
              The scope of work encompasses several key areas of policy research and analysis:
            </p>
            <ul className="scope-list">
              <li>
                <strong>Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function:</strong> 
                Research-based analysis to support policy understanding and institutional 
                preparedness through evidence-based frameworks and rigorous analytical approaches.
              </li>
              <li>
                <strong>Policy Engagement:</strong> Research and analysis on decision-making 
                processes and systematic monitoring of policy procedures to support evidence-based 
                policy development and institutional engagement with governance mechanisms.
              </li>
              <li>
                <strong>Analytical Framework Development:</strong> Development of analytical 
                arguments and research-based tools adapted to policy contexts, providing 
                evidence-based frameworks for policy analysis and assessment.
              </li>
              <li>
                <strong>Institutional Mapping:</strong> Identification and analysis of decision 
                makers and stakeholders, and examination of institutional networks to support 
                long-term policy research and analytical engagement with governance structures.
              </li>
              <li>
                <strong>Coalition Research:</strong> Research on coalition building and 
                management processes, examining how institutional collaborations function within 
                policy development contexts and governance frameworks.
              </li>
              <li>
                <strong>Event Organization:</strong> Research and analysis on policy engagement 
                events including targeted meetings, roundtables, colloquia, conferences, 
                consultations, and policy forums that facilitate knowledge exchange and 
                evidence-based policy discourse.
              </li>
            </ul>
          </Section>

          <Section title="Policy Relevance">
            <p>
              This work contributes to understanding of policy development mechanisms and 
              institutional operations, providing evidence-based insights that inform policy 
              design and implementation. Research findings support informed decision-making 
              by examining how policy frameworks function in practice and identifying factors 
              that influence policy effectiveness.
            </p>
            <p>
              The analytical work helps institutional actors understand policy processes, 
              regulatory frameworks, and governance structures through rigorous research and 
              systematic examination of policy environments. This research contributes to the 
              academic and policy literature on public affairs management and policy advisory 
              processes.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Research outputs include analytical reports, policy assessments, and scholarly 
              publications that contribute to the policy literature. These findings support 
              evidence-based policy development and provide institutional actors with rigorous 
              analysis of policy processes, regulatory frameworks, and governance structures.
            </p>
            <p>
              The work advances understanding of how institutional mechanisms support effective 
              policy development and implementation, contributing to both academic discourse and 
              practical policy applications through methodologically rigorous research and analysis.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
