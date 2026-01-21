import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function TDAP() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Trade Development Authority of Pakistan (TDAP)"
            lead={
              <>
                An institutional profile of Pakistan’s export-development and trade-promotion ecosystem,
                focused on market intelligence, exporter facilitation, and outreach—aligned with structured
                research that supports competitiveness and prosperity.
              </>
            }
            eyebrow="Local Partners"
          />

          <div className="local-profile-note">
            <strong>Note:</strong> This page is an informational profile prepared by Pakistan Business Forum
            <span className="trademark">®</span> — Strategic Policy &amp; Research Function. It does not claim
            endorsement, official affiliation, or partnership unless explicitly documented.
          </div>

          <Section title="Leadership">
            <p>
              <strong>Chief Executive Officer:</strong> Faiz Ahmad
            </p>
            <p>
              TDAP operates under the leadership of Chief Executive Officer Faiz Ahmad, who oversees export promotion
              initiatives, trade facilitation programs, and market outreach activities that support Pakistani exporters
              and contribute to trade-led economic growth.
            </p>
          </Section>

          <Section title="Institutional Role (Overview)">
            <ul className="content-list">
              <li>Export promotion and market-outreach support for Pakistani firms</li>
              <li>Trade fairs, exhibitions, and B2B platforms to connect buyers and exporters</li>
              <li>Market intelligence and sector readiness (standards, packaging, compliance)</li>
              <li>Facilitation support for participation, documentation guidance, and program coordination</li>
            </ul>
          </Section>

          <Section title="Where Our Analytical Work Aligns">
            <div className="two-col">
              <div className="panel">
                <h3>Export Diversification</h3>
                <p>
                  Research on sector opportunities, regional demand, and product-market fit to support
                  sustainable diversification beyond narrow export baskets.
                </p>
              </div>
              <div className="panel">
                <h3>Standards &amp; Compliance Readiness</h3>
                <p>
                  Frameworks that help identify capability gaps in quality, certification, logistics, and
                  documentation—structured as actionable readiness plans.
                </p>
              </div>
              <div className="panel">
                <h3>Program Evaluation</h3>
                <p>
                  Neutral evaluation models for trade-promotion initiatives (outputs, outcomes, and learning)
                  to strengthen institutional effectiveness over time.
                </p>
              </div>
              <div className="panel">
                <h3>Market Intelligence Briefings</h3>
                <p>
                  Evidence summaries on priority markets, emerging risks, and compliance shifts—formatted for
                  decision clarity and institutional preparedness.
                </p>
              </div>
            </div>
          </Section>

          <Section title="How Engagement Can Work (Research-Driven)">
            <ol className="content-list">
              <li>
                <strong>Define:</strong> target market, sector, and objective (promotion, readiness, access)
              </li>
              <li>
                <strong>Assess:</strong> baseline exporter constraints and compliance/standards requirements
              </li>
              <li>
                <strong>Design:</strong> measurable interventions and program dashboards
              </li>
              <li>
                <strong>Review:</strong> post-activity learning to improve future cycles
              </li>
            </ol>
          </Section>

          <Section title="Related Local Stakeholder">
            <p className="related">
              See also: <a href="/partners/local-partners/ministry-of-commerce">Ministry of Commerce (Pakistan)</a>
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}

