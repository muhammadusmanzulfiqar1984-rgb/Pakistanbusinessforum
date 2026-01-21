import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import './page.css'

export default function ImpactEvaluation() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Impact Evaluation"
            lead="Comprehensive assessment of policy and program impacts using experimental and quasi-experimental methods, examining causal relationships between interventions and outcomes."
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="impact" />
            </div>
          </div>

          <Section title="Purpose">
              <p>
                Our impact evaluation research conducts comprehensive assessment of policy and 
                program impacts using experimental and quasi-experimental methods. We examine 
                causal relationships between interventions and outcomes, and identify factors 
                that contribute to success or failure of policy interventions and programs.
              </p>
              <p>
                This research provides evidence-based assessment of policy and program impacts 
                to inform understanding of policy effectiveness and support evidence-based 
                policy development.
              </p>

          </Section>

          <Section title="Measurement Approaches">
            <p>
              Our impact evaluation research employs systematic measurement frameworks to track 
              results and monitor research efforts. Measurement approaches include quantitative 
              analysis of policy impacts, systematic tracking of outcomes, and comprehensive 
              assessment of program effectiveness.
            </p>
            <p>
              Measurement frameworks encompass analysis of articles published, total engagements, 
              average engagements by network, engagement patterns over time, and comprehensive 
              data visualization to support evidence-based assessment of policy impacts.
            </p>
          </Section>

          <Section title="Relevance">
            <p>
              Impact evaluation provides essential evidence for understanding policy effectiveness 
              and program impacts. Our work examines causal relationships between policy 
              interventions and outcomes, analyzes factors that contribute to policy success, and 
              generates evidence-based findings on policy impacts.
            </p>
            <p>
              This research contributes to evaluation literature and provides institutional actors 
              with rigorous analysis of policy and program impacts to inform evidence-based 
              decision-making and policy development.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Research outputs include impact evaluation reports, policy assessment studies, and 
              scholarly publications that examine policy and program impacts. These findings 
              contribute to evaluation literature and provide evidence-based insights on policy 
              effectiveness and program impacts.
            </p>
            <p>
              Our work advances understanding of policy impacts and supports evidence-based policy 
              development through rigorous analysis of causal relationships between interventions 
              and outcomes.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
