import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageShell from '@/components/PageShell'
import Section from '@/components/Section'
import StatsBar from '@/components/StatsBar'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
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

          <StatsBar />

          <ScrollReveal delay={0}>
            <Section title="Purpose">
              <p>
                Effective policy formulation requires reliable evidence, institutional context,
                and long-term perspective. Pakistan Business Forum — Strategic Policy &amp; Research Function exists to strengthen policy
                understanding by producing research that is methodologically sound, analytically
                rigorous, and relevant to contemporary governance challenges.
              </p>
              <p>
                The Forum operates independently of political affiliation, advocacy agendas,
                and commercial interests.
              </p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <Section title="Areas of Work">
              <div className="work-cards">
                <Link href="/practice-areas/public-affairs-policy-advisory" className="work-card">
                  <span className="work-card-num">01</span>
                  <strong>Public Policy &amp; Governance</strong>
                  <p>Analysis of policy design, institutional capacity, and administrative systems.</p>
                  <span className="work-card-arrow">Explore <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                </Link>
                <Link href="/research/economic-policy" className="work-card">
                  <span className="work-card-num">02</span>
                  <strong>Economic &amp; Development Policy</strong>
                  <p>Research on macroeconomic frameworks, sectoral performance, and development planning.</p>
                  <span className="work-card-arrow">Explore <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                </Link>
                <Link href="/practice-areas/regulatory-monitoring-strategic-intelligence" className="work-card">
                  <span className="work-card-num">03</span>
                  <strong>Regulatory &amp; Legal Frameworks</strong>
                  <p>Assessment of regulatory environments, compliance systems, and institutional effectiveness.</p>
                  <span className="work-card-arrow">Explore <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                </Link>
                <Link href="/research/governance-institutions" className="work-card">
                  <span className="work-card-num">04</span>
                  <strong>Institutional Performance &amp; Reform</strong>
                  <p>Evaluation of public-sector structures, service delivery, and reform initiatives.</p>
                  <span className="work-card-arrow">Explore <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                </Link>
                <Link href="/regions" className="work-card">
                  <span className="work-card-num">05</span>
                  <strong>Regional &amp; International Affairs</strong>
                  <p>Analytical work on regional dynamics, global governance, and cross-border policy issues.</p>
                  <span className="work-card-arrow">Explore <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                </Link>
              </div>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Section title="Analytical Approach">
              <p>
                Research undertaken by Pakistan Business Forum — Strategic Policy &amp; Research Function applies established policy-analysis
                methodologies, including empirical assessment, comparative analysis, and
                qualitative institutional review. Outputs are developed to inform understanding
                rather than advocate positions.
              </p>
              <p>
                The Forum does not engage in lobbying, political campaigning, or representation
                of interest groups.
              </p>
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <Section title="Engagement">
              <p>
                Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy &amp; Research Function engages with government institutions, international
                organizations, academic bodies, and policy professionals seeking objective
                analysis and structured insight. Engagements are conducted within clearly
                defined analytical and ethical boundaries.
              </p>
            </Section>
          </ScrollReveal>

          <p className="closing-line">Independent analysis in support of informed policy development.</p>
        </PageShell>
      </main>
      <Footer />
    </>
  )
}
