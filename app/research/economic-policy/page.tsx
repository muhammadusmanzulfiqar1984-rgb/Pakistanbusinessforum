import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import './page.css'

export default function EconomicPolicy() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Economic Policy"
            lead="Research on fiscal policy, monetary policy, economic development strategies, and their impacts and effectiveness in supporting economic growth and stability."
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="economic-policy" />
            </div>
          </div>

          <Section title="Purpose">
            <p>
              Our research in economic policy examines fiscal policy, monetary policy, economic 
              development strategies, and their impacts on economic growth and stability. We 
              analyze how economic policy interventions function and evaluate their effectiveness 
              in achieving economic objectives.
            </p>
            <p>
              This research provides evidence-based analysis of economic policy mechanisms, 
              policy impacts, and economic outcomes to inform economic policy development 
              and decision-making.
            </p>
          </Section>

          <Section title="Relevance">
            <p>
              Economic policy research provides critical foundations for evidence-based economic 
              policy development. Our work examines economic trends, evaluates policy impacts, 
              and analyzes how fiscal and monetary policies function to influence economic 
              outcomes and support economic growth.
            </p>
            <p>
              This research contributes to economic policy literature and provides institutional 
              actors with rigorous analysis of economic policy mechanisms, policy effectiveness, 
              and economic development strategies.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Research outputs include economic analysis reports, fiscal policy assessments, and 
              scholarly publications that examine economic policy mechanisms and their impacts. 
              These findings contribute to economic policy literature and provide evidence-based 
              analysis to inform economic policy development and decision-making.
            </p>
            <p>
              Our work advances understanding of economic policy processes and supports 
              evidence-based economic policy development through rigorous analysis of policy 
              mechanisms and outcomes.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
