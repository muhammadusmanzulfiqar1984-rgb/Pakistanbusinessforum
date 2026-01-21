import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import './page.css'

export default function ProcessEvaluation() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Process Evaluation"
            lead="Analysis of program implementation processes, identifying strengths and weaknesses in delivery mechanisms, stakeholder engagement, and operational effectiveness to inform program improvement."
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="process" />
            </div>
          </div>

          <Section title="Purpose">
              <p>
                Our research in process evaluation analyzes program implementation processes, 
                identifying strengths and weaknesses in delivery mechanisms, stakeholder engagement, 
                and operational effectiveness. We examine implementation processes to inform program 
                improvement and enhance policy implementation effectiveness.
              </p>
              <p>
                This research provides evidence-based analysis of implementation processes and their 
                effectiveness in achieving policy objectives and supporting program success.
              </p>

          </Section>

          <Section title="Relevance">
            <p>
              Process evaluation research provides essential insights for understanding how 
              programs and policies are implemented and what factors influence implementation 
              effectiveness. Our work examines implementation mechanisms, analyzes delivery 
              processes, and studies how implementation factors contribute to program success 
              or failure.
            </p>
            <p>
              This research contributes to evaluation literature and provides institutional actors 
              with rigorous analysis of implementation processes to inform program improvement 
              and enhance policy implementation effectiveness.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Research outputs include process evaluation reports, implementation assessments, 
              and scholarly publications that examine implementation processes and their 
              effectiveness. These findings contribute to evaluation literature and provide 
              evidence-based insights to support program improvement and enhance implementation 
              effectiveness.
            </p>
            <p>
              Our work advances understanding of implementation processes and supports evidence-based 
              program improvement through rigorous analysis of delivery mechanisms and their 
              impacts on program effectiveness.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
