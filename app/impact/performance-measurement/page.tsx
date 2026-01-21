import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import './page.css'

export default function PerformanceMeasurement() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Performance Measurement"
            lead="Development and implementation of performance frameworks, indicators, and data collection systems to monitor progress, track outcomes, and evaluate organizational effectiveness over time."
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="performance" />
            </div>
          </div>

          <Section title="Purpose">
              <p>
                Our research in performance measurement examines how performance frameworks, 
                indicators, and data collection systems are developed and implemented to monitor 
                progress, track outcomes, and evaluate organizational effectiveness over time. 
                We analyze performance measurement mechanisms and their effectiveness in supporting 
                evidence-based decision-making.
              </p>
              <p>
                This research provides evidence-based analysis of performance measurement 
                frameworks and their effectiveness in monitoring policy implementation and 
                organizational performance.
              </p>

          </Section>

          <Section title="Relevance">
            <p>
              Performance measurement research provides essential foundations for understanding 
              how organizational performance and policy implementation can be effectively 
              monitored and evaluated. Our work examines performance frameworks, analyzes 
              measurement mechanisms, and studies how performance data informs decision-making 
              and policy development.
            </p>
            <p>
              This research contributes to evaluation literature and provides institutional actors 
              with rigorous analysis of performance measurement frameworks and their effectiveness 
              in supporting evidence-based management and policy development.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Research outputs include performance measurement analysis reports, framework 
              assessments, and scholarly publications that examine performance measurement 
              mechanisms and their effectiveness. These findings contribute to evaluation 
              literature and provide evidence-based insights to support effective performance 
              measurement framework development and implementation.
            </p>
            <p>
              Our work advances understanding of performance measurement processes and supports 
              evidence-based performance framework development through rigorous analysis of 
              measurement mechanisms and their impacts on decision-making.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
