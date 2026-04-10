import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Link from 'next/link'
import './page.css'

export default function SIFC() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Special Investment Facilitation Council (SIFC)"
            lead={
              <>
                An institutional profile of Pakistan's single-window investment facilitation platform, established
                to streamline approvals, reduce bureaucratic hurdles, and attract strategic investment across priority
                sectors—aligned with evidence-based policy analysis that supports sustainable economic growth and
                prosperity for Pakistan.
              </>
            }
            eyebrow="Local Partners"
          />

          <div className="local-profile-note">
            <strong>Note:</strong> This page is an informational profile prepared by Pakistan Business Forum
            <span className="trademark">®</span> — Strategic Policy &amp; Research Function. It does not claim
            endorsement, official affiliation, or partnership unless explicitly documented.
          </div>

          <Section title="Key Personnel">
            <div className="key-personnel">
              <div className="personnel-item">
                <p>
                  <strong>Director General:</strong> Lieutenant General Tabassum Habib
                </p>
                <p className="personnel-role">
                  Leads the day-to-day operations and coordination of SIFC's investment facilitation activities across
                  federal ministries, provincial governments, and institutional stakeholders.
                </p>
              </div>
              <div className="personnel-item">
                <p>
                  <strong>Oversight:</strong> Prime Minister of Pakistan
                </p>
                <p className="personnel-role">
                  Provides strategic direction and high-level coordination for SIFC's mandate, ensuring alignment with
                  national economic development priorities and investment facilitation objectives.
                </p>
              </div>
              <div className="personnel-item">
                <p>
                  <strong>Federal Minister for Commerce:</strong> Jam Kamal Khan
                </p>
                <p className="personnel-role">
                  Coordinates trade and commerce policy alignment with SIFC's investment facilitation mandate, ensuring
                  coherence between trade policy and investment attraction strategies.
                </p>
              </div>
            </div>
            <p>
              SIFC operates as a coordinated platform bringing together federal ministries, provincial governments, and
              military institutions to facilitate strategic investment and reduce bureaucratic barriers for priority sector
              development. The council's structure enables streamlined coordination across multiple stakeholders to support
              efficient investment facilitation.
            </p>
          </Section>

          <Section title="Institutional Mandate (Overview)">
            <ul className="content-list">
              <li>Single-window facilitation platform for investment approvals and regulatory coordination</li>
              <li>Priority sector focus: agriculture, energy, information technology, defense production, and minerals</li>
              <li>Streamlined approval processes to reduce bureaucratic delays and improve investor experience</li>
              <li>Coordination across federal, provincial, and institutional stakeholders for investment facilitation</li>
              <li>Foreign and domestic investment attraction through structured facilitation and policy clarity</li>
            </ul>
          </Section>

          <Section title="Where Our Analytical Work Aligns">
            <div className="two-col">
              <div className="panel">
                <h3>Investment Policy Analysis</h3>
                <p>
                  Evidence-based research on investment climate, regulatory frameworks, and sector-specific policy
                  environments—supporting clarity on investment opportunities, constraints, and reform priorities.
                </p>
              </div>
              <div className="panel">
                <h3>Regulatory Streamlining</h3>
                <p>
                  Diagnostic work on approval processes, documentation requirements, and institutional interfaces to
                  identify bottlenecks and propose structured reforms that improve efficiency and predictability.
                </p>
              </div>
              <div className="panel">
                <h3>Sector Readiness Assessment</h3>
                <p>
                  Structured analysis of priority sectors (agriculture, energy, IT, defense, minerals) to assess
                  investment readiness, infrastructure gaps, and policy coherence—supporting evidence-based sector
                  strategies.
                </p>
              </div>
              <div className="panel">
                <h3>Institutional Coordination Frameworks</h3>
                <p>
                  Research on inter-agency coordination mechanisms, federal-provincial interfaces, and stakeholder
                  engagement models that support effective single-window facilitation and policy implementation.
                </p>
              </div>
            </div>
          </Section>

          <Section title="How Engagement Can Work (Research-Driven)">
            <ol className="content-list">
              <li>
                <strong>Scoping:</strong> define the investment facilitation question, sector focus, and analytical
                objectives
              </li>
              <li>
                <strong>Baseline:</strong> map current approval processes, regulatory requirements, and institutional
                interfaces
              </li>
              <li>
                <strong>Analysis:</strong> identify bottlenecks, coordination gaps, and reform opportunities through
                structured research
              </li>
              <li>
                <strong>Frameworks:</strong> develop evidence-based recommendations for streamlining, coordination, and
                policy coherence
              </li>
              <li>
                <strong>Evaluation:</strong> assess implementation outcomes and learning to support continuous improvement
                in facilitation effectiveness
              </li>
            </ol>
          </Section>

          <Section title="Priority Sectors">
            <p>
              SIFC focuses on facilitating investment across five priority sectors that align with Pakistan's economic
              development objectives:
            </p>
            <ul className="content-list">
              <li>
                <strong>Agriculture:</strong> modernization, value addition, and agri-tech investment to enhance
                productivity and export competitiveness
              </li>
              <li>
                <strong>Energy:</strong> renewable energy projects, power generation, and energy infrastructure to
                support sustainable energy security
              </li>
              <li>
                <strong>Information Technology:</strong> tech sector investment, digital infrastructure, and IT
                services to support digital economy growth
              </li>
              <li>
                <strong>Defense Production:</strong> strategic defense manufacturing and technology transfer to enhance
                self-reliance and industrial capacity
              </li>
              <li>
                <strong>Minerals:</strong> mining sector development, value addition, and resource extraction to maximize
                economic value from mineral resources
              </li>
            </ul>
          </Section>

          <Section title="Supporting Prosperous Pakistan">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy &amp; Research Function
              recognizes the importance of effective investment facilitation for sustainable economic growth. Our
              analytical work supports evidence-based understanding of investment policy, regulatory frameworks, and
              institutional coordination—contributing to policy clarity that helps attract strategic investment and
              supports Pakistan's economic prosperity.
            </p>
            <p>
              Through structured research and policy analysis, we aim to support institutional effectiveness, regulatory
              coherence, and evidence-based decision-making that facilitates investment-led growth and contributes to
              long-term economic development.
            </p>
          </Section>

          <Section title="Related">
            <p>
              For information on trade policy and commerce coordination, see{' '}
              <Link href="/partners/local-partners/ministry-of-commerce" className="related">
                Ministry of Commerce (Pakistan)
              </Link>
              . For export development and trade promotion, see{' '}
              <Link href="/partners/local-partners/tdap" className="related">
                Trade Development Authority of Pakistan (TDAP)
              </Link>
              .
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
