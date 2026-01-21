import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import './page.css'

export default function EconomicAffairs() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Economic Affairs"
            lead="Specialized research in economic policy analysis, fiscal policy evaluation, and economic development frameworks."
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="economic" />
            </div>
          </div>

          <Section title="Purpose">
              <p>
                This practice area conducts specialized research in economic policy analysis, 
                fiscal policy evaluation, and economic development frameworks. We examine 
                economic trends, evaluate policy impacts, and research economic policy design 
                and implementation mechanisms.
              </p>
              <p>
                Our work provides critical foundations for evidence-based economic policy 
                development through rigorous analysis of economic phenomena, evaluation of policy 
                impacts, and examination of economic mechanisms and policy effectiveness.
              </p>

          </Section>

          <Section title="Scope of Work">
            <p>
              Our research in economic affairs examines how bilateral economic relations and 
              economic development strategies function within policy contexts. We analyze 
              employment generation mechanisms, capital inflow impacts, economic activity 
              patterns, and economic aid and development loan frameworks.
            </p>
            <p>
              The primary advantage for developing nations from bilateral economic relations 
              lies in employment generation, which represents a key focus of our analytical 
              work. With capital inflows to these countries, economic activity intensifies, 
              resulting in economic growth. For undeveloped economies, bilateral economic 
              relations research examines economic aid and loan mechanisms for development 
              projects.
            </p>
            <p>
              Our research activities in this domain encompass:
            </p>
            <ul className="scope-list">
              <li>Economic policy research and analysis</li>
              <li>Fiscal policy evaluation and assessment</li>
              <li>Economic impact evaluation of policy interventions</li>
              <li>Development policy research and analysis</li>
              <li>Macroeconomic analysis and policy evaluation</li>
              <li>Economic modeling and quantitative analysis</li>
            </ul>
          </Section>

          <Section title="Policy Relevance">
            <p>
              Economic research provides critical foundations for evidence-based economic policy 
              development. Research findings inform fiscal policy decisions, economic development 
              strategies, and policy interventions by examining economic trends, evaluating policy 
              impacts, and analyzing economic mechanisms and policy effectiveness.
            </p>
            <p>
              Our specialized research contributes to economic policy literature and provides 
              evidence-based analysis to inform economic policy development and decision-making 
              processes.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Research activities produce economic analysis reports, fiscal policy assessments, 
              and economic research publications that examine economic phenomena and policy impacts. 
              These outputs contribute to economic policy literature and provide evidence-based 
              analysis to inform economic policy development and decision-making.
            </p>
            <p>
              Our work advances understanding of economic policy mechanisms and provides institutional 
              actors with rigorous analysis of economic trends, policy impacts, and development 
              frameworks.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
