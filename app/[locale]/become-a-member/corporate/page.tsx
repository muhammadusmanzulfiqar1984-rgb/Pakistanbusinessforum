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
          title="Corporate Membership"
          lead="A structured membership for organizations seeking policy research access and analytical engagement."
        />

        <Section title="Purpose">
          <p>
            Corporate Membership supports institutional access to research outputs, policy briefings, and analytical programming.
          </p>
        </Section>

        <Section title="Scope">
          <ul className="scope-list">
            <li>Access to research briefings and analytical reports</li><li>Engagement on regulatory and policy themes</li><li>Participation in institutional dialogue forums</li>
          </ul>
        </Section>

        <Section title="Engagement Notes">
          <p>
            Designed for organizations requiring structured policy intelligence and research access.
          </p>
        </Section>
        </div>

      </main>
      <Footer />
    </>
  )
}
