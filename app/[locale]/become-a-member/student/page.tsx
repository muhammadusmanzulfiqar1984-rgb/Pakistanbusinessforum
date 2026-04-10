import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
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
          title="Student Membership"
          lead="A membership pathway for students and early-career researchers focused on policy research access and academic learning."
        />

        <Section title="Purpose">
          <p>
            Student Membership supports academic engagement with policy research, analytical frameworks, and institutional learning resources.
          </p>
        </Section>

        <Section title="Scope">
          <ul className="scope-list">
            <li>Access to research briefs and publications</li><li>Participation in academic briefings and seminars</li><li>Structured learning resources on policy analysis</li>
          </ul>
        </Section>

        <Section title="Engagement Notes">
          <p>
            Designed to support academic learning and research exposure in institutional policy contexts.
          </p>
        </Section>
        </div>

      </main>
      <Footer />
    </>
  )
}
