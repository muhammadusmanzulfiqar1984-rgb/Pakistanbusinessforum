import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import './page.css'

export default function MediaStrategicCommunications() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Media & Strategic Communications"
            lead="Research and analysis on communication strategies, policy messaging frameworks, and public engagement mechanisms."
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="media" />
            </div>
          </div>

          <Section title="Purpose">
              <p>
                This practice area conducts research and analysis on communication strategies, 
                policy messaging frameworks, and public engagement mechanisms. We examine how 
                complex policy issues are communicated to diverse audiences and analyze 
                communication effectiveness in policy contexts.
              </p>
              <p>
                Our work supports understanding of how policy information is disseminated and 
                how public discourse functions through systematic examination of messaging 
                effectiveness, communication frameworks, and public engagement mechanisms.
              </p>

          </Section>

          <Section title="Scope of Work">
            <p>
              Our research activities in this domain encompass:
            </p>
            <ul className="scope-list">
              <li>Research on communication strategy development and implementation</li>
              <li>Analysis of policy messaging frameworks and content</li>
              <li>Examination of media relations and communication channels</li>
              <li>Evaluation of public engagement mechanisms and processes</li>
              <li>Study of communication effectiveness and audience response</li>
              <li>Research on policy communication and public discourse</li>
            </ul>
          </Section>

          <Section title="Policy Relevance">
            <p>
              Communication research supports understanding of how policy information is 
              disseminated and how public discourse functions. This work informs policy 
              communication by examining messaging effectiveness, analyzing communication 
              frameworks, and studying how policy positions are communicated to diverse 
              audiences through various channels.
            </p>
            <p>
              Our research contributes to understanding of transparent and accountable public 
              engagement mechanisms and supports effective policy communication strategies.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Research activities produce communication analysis reports, messaging framework 
              assessments, and research publications on policy communication. These outputs 
              contribute to communication research literature and provide evidence-based insights 
              to support effective policy communication and public engagement strategies.
            </p>
            <p>
              Our work advances understanding of policy communication processes and supports 
              institutional actors in developing effective frameworks for communicating complex 
              policy issues to diverse audiences.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
