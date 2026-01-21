import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import './page.css'

export default function MediaRelationsResearch() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Media Relations Research"
            lead="Research on media engagement mechanisms, including analysis of press release structures, media briefing formats, interview dynamics, and relationships between policy institutions and media organizations."
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="media-research" />
            </div>
          </div>

          <Section title="Purpose">
            <p>
              Our research in media relations examines how policy institutions engage with 
              media organizations, how policy positions and research findings are communicated 
              through media channels, and how media engagement mechanisms function. We analyze 
              press release structures, media briefing formats, interview dynamics, and 
              relationships between policy institutions and media organizations.
            </p>
            <p>
              This research contributes to understanding of how policy information is 
              disseminated through media channels and how media engagement strategies function 
              to communicate policy positions and research findings.
            </p>
          </Section>

          <Section title="Scope of Work">
            <p>
              Electronic media research examines how digital communication platforms function 
              within policy communication contexts. Electronic media is universal in most 
              developed contexts, with digital platforms playing vital roles in policy 
              communication and public discourse.
            </p>
            <p>
              Our research in this domain encompasses analysis of digital platforms including:
            </p>
            <ul className="scope-list">
              <li><strong>Google:</strong> Research on the most trusted platform for internet-based policy information access</li>
              <li><strong>YouTube:</strong> Analysis of video content as a global search engine for policy communication, with billions of active users playing vital roles in policy campaigns and communication strategies</li>
            </ul>
          </Section>

          <Section title="Relevance">
            <p>
              Media relations research provides essential insights for understanding how policy 
              information is communicated through media channels. Our work examines how policy 
              positions and research findings are effectively communicated through media, 
              analyzes media engagement mechanisms, and studies relationships between policy 
              institutions and media organizations.
            </p>
            <p>
              This research contributes to communication research literature and provides 
              evidence-based insights on media engagement strategies and their effectiveness 
              in communicating policy information.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Research outputs include media relations analysis reports, engagement strategy 
              assessments, and scholarly publications that examine media engagement mechanisms 
              and their effectiveness. These findings contribute to communication research 
              literature and provide evidence-based insights to support effective media 
              engagement strategies for policy communication.
            </p>
            <p>
              Our work advances understanding of media relations processes and supports 
              evidence-based media engagement strategy development through rigorous analysis 
              of media communication mechanisms and their impacts.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
