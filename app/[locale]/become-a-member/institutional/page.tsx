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
          title="Institutional Partnership"
          lead="Collaborative engagement for public, academic, and research institutions seeking structured policy analysis and research cooperation."
        />

        <Section title="Purpose">
          <p>
            Institutional Partnership supports collaborative research, policy analysis, and knowledge exchange aligned with Pakistan Business Forum<span className="trademark">®</span>'s analytical standards.
          </p>
        </Section>

        <Section title="Scope">
          <ul className="scope-list">
            <li>Joint research initiatives and analytical collaboration</li><li>Structured policy briefings and research exchanges</li><li>Access to institutional research resources</li>
          </ul>
        </Section>

        <Section title="Engagement Notes">
          <p>
            Partnerships are structured to support institutional learning, comparative analysis, and research collaboration.
          </p>
        </Section>
        </div>

      </main>
      <Footer />
    </>
  )
}
