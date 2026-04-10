import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function MinistryOfCommerce() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Ministry of Commerce (Pakistan)"
            lead={
              <>
                An institutional profile of Pakistan’s commerce and trade-policy administration, focused on
                trade governance, market access, facilitation reforms, and coordination across commerce-sector
                stakeholders—aligned with evidence-based policy analysis for a more prosperous Pakistan.
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
              <strong>Federal Minister for Commerce:</strong> Jam Kamal Khan
            </p>
            <p>
              The Ministry of Commerce operates under the leadership of Federal Minister Jam Kamal Khan, who oversees
              trade policy coordination, market access initiatives, and commercial strategy development aligned with
              Pakistan's economic growth objectives.
            </p>
          </Section>

          <Section title="Institutional Mandate (Overview)">
            <ul className="content-list">
              <li>Trade policy and commercial strategy coordination</li>
              <li>Market-access engagement and trade agreements support (where applicable)</li>
              <li>Trade facilitation and regulatory streamlining (process, standards, documentation)</li>
              <li>Coordination with export-development and sector bodies for competitiveness outcomes</li>
            </ul>
          </Section>

          <Section title="Where Our Analytical Work Aligns">
            <div className="two-col">
              <div className="panel">
                <h3>Trade Facilitation &amp; Cost-to-Trade</h3>
                <p>
                  Diagnostic work on bottlenecks, documentation burdens, border procedures, and compliance
                  frictions—mapped to practical reforms that improve predictability and reduce transaction
                  costs for legitimate commerce.
                </p>
              </div>
              <div className="panel">
                <h3>Market Access &amp; Export Competitiveness</h3>
                <p>
                  Evidence-based research on sector competitiveness, value chains, standards readiness, and
                  export diversification—supporting policy clarity for sustainable growth.
                </p>
              </div>
              <div className="panel">
                <h3>Regulatory Coherence</h3>
                <p>
                  Structured review of overlapping rules and institutional interfaces (federal–provincial,
                  regulator–operator) to improve coherence, transparency, and implementation feasibility.
                </p>
              </div>
              <div className="panel">
                <h3>Institutional Preparedness</h3>
                <p>
                  Scenario analysis and long-horizon planning for commerce policy—focused on resilience,
                  compliance integrity, and policy continuity rather than advocacy.
                </p>
              </div>
            </div>
          </Section>

          <Section title="How Engagement Can Work (Research-Driven)">
            <ol className="content-list">
              <li>
                <strong>Scoping:</strong> define the policy question, operational constraints, and data needs
              </li>
              <li>
                <strong>Evidence:</strong> compile baseline indicators, stakeholder inputs, and process maps
              </li>
              <li>
                <strong>Analysis:</strong> options assessment with risks, sequencing, and implementation notes
              </li>
              <li>
                <strong>Output:</strong> non-advocacy briefings, technical notes, and evaluation frameworks
              </li>
            </ol>
          </Section>

          <Section title="Related Local Stakeholder">
            <p className="related">
              See also: <a href="/partners/local-partners/tdap">Trade Development Authority of Pakistan (TDAP)</a>
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}

