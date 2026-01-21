import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageShell from '@/components/PageShell'
import Section from '@/components/Section'
import './page.css'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="homepage-main">
        <PageShell>
          <section className="hero-section fade-in-up">
            <h1 className="page-title">Advancing Evidence-Based Policy Analysis</h1>
            <p className="lead">
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function is an independent strategic policy and research platform
              contributing analytical work on governance, economic systems, regulatory frameworks,
              and institutional development.
            </p>
            <p>
              The Forum undertakes structured research and policy analysis to support informed
              decision-making across public institutions, international partners, and
              knowledge-based stakeholders.
            </p>
          </section>

          <Section title="Purpose">
            <p>
              Effective policy formulation requires reliable evidence, institutional context,
              and long-term perspective. Pakistan Business Forum — Strategic Policy & Research Function exists to strengthen policy
              understanding by producing research that is methodologically sound, analytically
              rigorous, and relevant to contemporary governance challenges.
            </p>
            <p>
              The Forum operates independently of political affiliation, advocacy agendas,
              and commercial interests.
            </p>
          </Section>

          <Section title="Areas of Work">
            <ul className="clean-list">
              <li><strong>Public Policy and Governance</strong> — Analysis of policy design,
                  institutional capacity, and administrative systems.</li>
              <li><strong>Economic and Development Policy</strong> — Research on macroeconomic
                  frameworks, sectoral performance, and development planning.</li>
              <li><strong>Regulatory and Legal Frameworks</strong> — Assessment of regulatory
                  environments, compliance systems, and institutional effectiveness.</li>
              <li><strong>Institutional Performance and Reform</strong> — Evaluation of
                  public-sector structures, service delivery, and reform initiatives.</li>
              <li><strong>Regional and International Affairs</strong> — Analytical work on
                  regional dynamics, global governance, and cross-border policy issues.</li>
            </ul>
          </Section>

          <Section title="Analytical Approach">
            <p>
              Research undertaken by Pakistan Business Forum — Strategic Policy & Research Function applies established policy-analysis
              methodologies, including empirical assessment, comparative analysis, and
              qualitative institutional review. Outputs are developed to inform understanding
              rather than advocate positions.
            </p>
            <p>
              The Forum does not engage in lobbying, political campaigning, or representation
              of interest groups.
            </p>
          </Section>

          <Section title="Engagement">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function engages with government institutions, international
              organizations, academic bodies, and policy professionals seeking objective
              analysis and structured insight. Engagements are conducted within clearly
              defined analytical and ethical boundaries.
            </p>
          </Section>

          <p className="closing-line">Independent analysis in support of informed policy development.</p>
        </PageShell>
      </main>
      <Footer />
    </>
  )
}
