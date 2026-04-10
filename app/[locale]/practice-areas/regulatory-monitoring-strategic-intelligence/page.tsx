import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import VigilanceMatrix from '@/components/VigilanceMatrix'
import ProcessFlow from '@/components/ProcessFlow'
import './page.css'

export default function RegulatoryMonitoringStrategicIntelligence() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Regulatory Monitoring & Strategic Intelligence"
            lead="Systematic analysis of regulatory developments, policy evolution, and institutional dynamics within governance systems."
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="regulatory" />
            </div>
          </div>

          <Section title="Purpose">
              <p>
                This practice area conducts systematic analysis of regulatory developments, 
                policy evolution, and institutional dynamics within governance systems. We 
                monitor and document changes in regulatory environments and examine their 
                implications for policy systems.
              </p>
              <p>
                Our work provides essential intelligence for understanding policy landscapes 
                and anticipating policy developments through continuous monitoring and analysis 
                of regulatory changes, policy trends, and institutional dynamics.
              </p>

          </Section>

          <Section title="Scope of Work">
            <div className="scope-sections">
              <div className="scope-item">
                <h3>Monitoring</h3>
                <p>
                  Continuous monitoring of political, parliamentary, and governmental 
                  developments through systematic documentation and analysis of regulatory 
                  and policy changes.
                </p>
              </div>
              <div className="scope-item">
                <h3>Identification</h3>
                <p>
                  Identification and follow-up of key institutional work streams, tracking 
                  policy development processes and regulatory evolution within governance 
                  systems.
                </p>
              </div>
              <div className="scope-item">
                <h3>Recommendations</h3>
                <p>
                  Development of research-based recommendations aligned with institutional 
                  calendars, providing evidence-based analysis to inform policy timing and 
                  engagement strategies.
                </p>
              </div>
            </div>
          </Section>

          <Section title="Vigilance Strategy">
            <p>All audiences are categorised across two axes — sentiment and relationship. No conversation is left unanswered. Hover each quadrant to see the response approach.</p>
            <VigilanceMatrix />
          </Section>

          <Section title="Monitoring Methodology">
            <ProcessFlow steps={[
              { num: '01', title: 'Identification', desc: 'Identification and follow-up of key institutional work streams — mapping policy development processes and regulatory evolution within governance systems.' },
              { num: '02', title: 'Monitoring', desc: 'Continuous monitoring of political, parliamentary, and governmental news — systematic documentation and analysis of regulatory and policy changes as they unfold.' },
              { num: '03', title: 'Recommendations', desc: 'Development of research-based recommendations aligned with the institutional calendar — providing evidence-based analysis to inform policy timing and engagement strategies.' },
            ]} />
          </Section>

          <Section title="Policy Relevance">
            <p>
              Regulatory analysis provides essential intelligence for understanding policy 
              landscapes and anticipating policy developments. This research supports 
              evidence-based decision-making by identifying regulatory trends, examining 
              policy implications, and analyzing how regulatory frameworks evolve and function 
              within governance systems.
            </p>
            <p>
              Our systematic monitoring and analysis contribute to understanding of regulatory 
              systems and provide institutional actors with comprehensive intelligence on policy 
              environments and regulatory dynamics.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Research activities produce regulatory analysis reports, policy trend assessments, 
              and strategic intelligence briefings that document and analyze regulatory 
              developments. These outputs contribute to understanding of regulatory systems and 
              provide institutional actors with systematic analysis of policy environments and 
              regulatory dynamics.
            </p>
            <p>
              Our work supports evidence-based decision-making through timely analysis of 
              regulatory changes and their implications for policy systems and governance 
              structures.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
