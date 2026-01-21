import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import './page.css'

export default function CrisisManagement() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Crisis Management"
            lead="Research and analysis on policy-related contingencies, regulatory challenges, and institutional crises requiring systematic assessment."
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="crisis" />
            </div>
          </div>

          <Section title="Purpose">
              <p>
                This practice area conducts research and analysis on policy-related contingencies, 
                regulatory challenges, and institutional crises requiring systematic assessment. We 
                examine crisis management frameworks, analyze institutional responses, and study 
                mechanisms for addressing policy-related emergencies.
              </p>
              <p>
                Our work contributes to understanding of how institutions and policy systems respond 
                to emergencies and contingencies through systematic examination of crisis management 
                practices and response frameworks.
              </p>

          </Section>

          <Section title="Scope of Work">
            <div className="scope-sections">
              <div className="scope-item">
                <h3>Assessment</h3>
                <p>
                  Assessment of communication procedures and crisis management frameworks 
                  through systematic analysis of institutional preparedness and response 
                  mechanisms.
                </p>
              </div>
              <div className="scope-item">
                <h3>Elaboration</h3>
                <p>
                  Development of crisis management and exit strategy frameworks through 
                  research-based analysis and systematic evaluation of response mechanisms 
                  and contingency planning.
                </p>
              </div>
              <div className="scope-item">
                <h3>Operation</h3>
                <p>
                  Operational support and coordination analysis of information channels, 
                  examining how communication mechanisms function during policy-related 
                  crises and regulatory challenges.
                </p>
              </div>
            </div>
          </Section>

          <Section title="Policy Relevance">
            <p>
              Crisis management research contributes to understanding of how institutions and 
              policy systems respond to emergencies and contingencies. This work supports 
              development of effective crisis response mechanisms by examining crisis management 
              practices, analyzing response frameworks, and identifying factors that influence 
              crisis management effectiveness.
            </p>
            <p>
              Our research provides evidence-based insights to support development of effective 
              crisis response and contingency planning mechanisms for policy-related emergencies.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Research outputs include crisis management assessments, policy response analyses, 
              and research publications on crisis management frameworks. These findings contribute 
              to crisis management literature and provide evidence-based insights to support 
              development of effective crisis response and contingency planning mechanisms.
            </p>
            <p>
              Our work advances understanding of crisis management processes and supports 
              institutional actors in developing effective frameworks for addressing policy-related 
              contingencies and regulatory challenges.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
