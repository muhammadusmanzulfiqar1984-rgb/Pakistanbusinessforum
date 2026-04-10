import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import './page.css'

export default function EconomicEvaluation() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Economic Evaluation"
            lead="Cost-effectiveness and cost-benefit analysis of policy interventions and programs, assessing economic efficiency and resource utilization to support evidence-based resource allocation decisions."
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="economic-eval" />
            </div>
          </div>

          <Section title="Purpose">
              <p>
                Our research in economic evaluation conducts cost-effectiveness and cost-benefit 
                analysis of policy interventions and programs. We assess economic efficiency and 
                resource utilization to support evidence-based resource allocation decisions and 
                inform understanding of economic impacts of policy interventions.
              </p>
              <p>
                This research provides evidence-based analysis of economic efficiency and resource 
                utilization to inform resource allocation decisions and support evidence-based 
                policy development.
              </p>

          </Section>

          <Section title="Relevance">
            <p>
              Economic evaluation research provides essential foundations for understanding 
              economic efficiency and resource utilization of policy interventions and programs. 
              Our work examines economic impacts, analyzes cost-effectiveness and cost-benefit 
              relationships, and studies how economic factors influence policy effectiveness and 
              resource allocation decisions.
            </p>
            <p>
              This research contributes to evaluation literature and provides institutional actors 
              with rigorous economic analysis to inform evidence-based resource allocation and 
              policy development decisions.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Research outputs include economic evaluation reports, cost-benefit analyses, and 
              scholarly publications that examine economic efficiency and resource utilization 
              of policy interventions. These findings contribute to evaluation literature and 
              provide evidence-based insights to inform resource allocation decisions and support 
              evidence-based policy development.
            </p>
            <p>
              Our work advances understanding of economic impacts and supports evidence-based 
              resource allocation through rigorous analysis of economic efficiency and resource 
              utilization mechanisms.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
