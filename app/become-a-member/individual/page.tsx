import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function MembershipPage() {
  return (
    <>
      <Navigation />
      <main>

        <div className="page-container">
        <PageHeader
          title="Individual Membership"
          lead="A structured membership for individuals seeking access to policy research, analytical briefings, and institutional knowledge resources."
        />

        <Section title="Purpose">
          <p>
            Individual Membership supports informed engagement with Pakistan Business Forum<span className="trademark">®</span>'s research outputs and analytical programming.
          </p>
        </Section>

        <Section title="Scope">
          <ul className="scope-list">
            <li>Access to research briefs and analytical notes</li><li>Participation in policy briefings and discussions</li><li>Structured updates on research themes</li>
          </ul>
        </Section>

        <Section title="Engagement Notes">
          <p>
            Membership is intended for professionals, researchers, and stakeholders seeking structured exposure to policy analysis.
          </p>
        </Section>
        </div>

      </main>
      <Footer />
    </>
  )
}
