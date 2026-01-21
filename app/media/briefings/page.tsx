import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function Briefings() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Briefings"
            lead="Analytical briefings providing concise summaries of research findings, policy developments, and institutional analysis for policy audiences and stakeholders."
          />

          <Section title="Briefing Leadership">
            <p>
              Our briefing activities are coordinated by <strong>Zara Sheikh</strong>, Head of Media & Communications, 
              and <strong>Omar Farooq</strong>, Head of Strategic Communications. For inquiries regarding briefings, 
              please contact <a href="mailto:z.sheikh@pakistanbusinessforum.org" className="email-link">z.sheikh@pakistanbusinessforum.org</a> 
              or <a href="mailto:o.farooq@pakistanbusinessforum.org" className="email-link">o.farooq@pakistanbusinessforum.org</a>.
            </p>
          </Section>

          <Section title="Purpose">
              <p>
                Briefings provide concise analytical summaries of research findings, policy 
                developments, and institutional analysis designed for policy audiences and 
                stakeholders. These documents translate complex research findings into accessible 
                formats that inform policy debates and institutional decision-making.
              </p>
              <p>
                Our briefings maintain analytical rigor while presenting information in formats 
                suitable for policy audiences, ensuring that research findings contribute to 
                evidence-based policy development and informed decision-making processes.
              </p>

          </Section>

          <Section title="Briefing Formats">
            <p>
              Briefings are produced in several formats tailored to different audiences and 
              purposes:
            </p>
            <ul className="scope-list">
              <li><strong>Policy Briefs:</strong> Concise summaries of research findings 
              addressing specific policy questions or governance challenges, designed for 
              policy audiences</li>
              <li><strong>Research Summaries:</strong> Analytical overviews of research 
              projects and findings, providing accessible introductions to complex research 
              questions and methodologies</li>
              <li><strong>Institutional Briefs:</strong> Analysis of institutional 
              developments, regulatory changes, and governance mechanisms relevant to policy 
              audiences and stakeholders</li>
              <li><strong>Issue Briefs:</strong> Focused analysis of specific policy issues 
              or governance challenges, examining policy implications and potential responses</li>
            </ul>
          </Section>

          <Section title="Relevance">
            <p>
              Briefings serve as bridge mechanisms between research and policy practice, 
              translating complex research findings into accessible formats that inform policy 
              debates and decision-making. They ensure that rigorous research contributes to 
              evidence-based policy development through effective knowledge translation.
            </p>
            <p>
              Our briefings maintain analytical accuracy and methodological transparency while 
              presenting information in formats suitable for diverse audiences, supporting 
              evidence-based policy development and informed institutional decision-making.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Briefings contribute to evidence-based policy development by making research 
              findings accessible to policy audiences and stakeholders. They support informed 
              decision-making by providing concise analytical summaries of complex policy issues 
              and research findings.
            </p>
            <p>
              Our briefing program ensures that rigorous research contributes to policy practice 
              through effective knowledge translation, maintaining analytical rigor while 
              presenting information in accessible formats suitable for diverse audiences.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
