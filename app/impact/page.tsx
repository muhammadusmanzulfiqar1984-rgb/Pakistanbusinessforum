import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import './page.css'

export default function Impact() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Measurement & Impact"
            lead="Research on evaluation methodologies, impact assessment frameworks, and measurement approaches for policy interventions, program effectiveness, and institutional performance."
          />

          <Section title="Evaluation Research Framework">
            <p>
              Systematic measurement and impact assessment are fundamental to understanding 
              the effectiveness of policy interventions, program implementations, and 
              institutional activities. Our evaluation research employs established 
              methodological frameworks to assess outcomes, examine causal relationships, and 
              generate evidence-based findings. This research contributes to understanding 
              what mechanisms produce desired outcomes and how resource allocation decisions 
              are informed by empirical evidence.
            </p>
          </Section>

          <Section title="Methods">
            <CardGrid>
              <Link href="/impact/impact-evaluation" className="card">
                <h3>Impact Evaluation</h3>
                <p>
                  Comprehensive assessment of policy and program impacts using experimental 
                  and quasi-experimental methods, examining causal relationships between 
                  interventions and outcomes, and identifying factors that contribute to 
                  success or failure.
                </p>
                <span className="small-text">View methodology</span>
              </Link>
              <Link href="/impact/performance-measurement" className="card">
                <h3>Performance Measurement</h3>
                <p>
                  Development and implementation of performance frameworks, indicators, and 
                  data collection systems to monitor progress, track outcomes, and evaluate 
                  organizational effectiveness over time.
                </p>
                <span className="small-text">View methodology</span>
              </Link>
              <Link href="/impact/process-evaluation" className="card">
                <h3>Process Evaluation</h3>
                <p>
                  Analysis of program implementation processes, identifying strengths and 
                  weaknesses in delivery mechanisms, stakeholder engagement, and operational 
                  effectiveness to inform program improvement.
                </p>
                <span className="small-text">View methodology</span>
              </Link>
              <Link href="/impact/economic-evaluation" className="card">
                <h3>Economic Evaluation</h3>
                <p>
                  Cost-effectiveness and cost-benefit analysis of policy interventions and 
                  programs, assessing economic efficiency and resource utilization to support 
                  evidence-based resource allocation decisions.
                </p>
                <span className="small-text">View methodology</span>
              </Link>
            </CardGrid>
          </Section>

          <Section title="Our Methodologies">
            <p>
              Our evaluation work employs diverse methodologies tailored to specific evaluation 
              questions and contexts. We utilize quantitative methods including randomized 
              controlled trials, quasi-experimental designs, and statistical analysis, as well 
              as qualitative methods including interviews, focus groups, case studies, and 
              participatory evaluation approaches. Our mixed-methods evaluations combine 
              quantitative and qualitative approaches to provide comprehensive insights into 
              program effectiveness and impact.
            </p>
          </Section>

          <Section title="Research Dissemination and Application">
            <p>
              Evaluation research findings are disseminated through comprehensive reports that 
              present clear findings, analytical conclusions, and research-based observations. 
              Throughout the research process, we engage with relevant institutions to ensure 
              that findings are accurately understood and that research design addresses 
              questions relevant to strategic planning and operational considerations.
            </p>
          </Section>

          <Section title="Research Standards">
            <p>
              All evaluation research adheres to established academic and professional standards 
              in evaluation methodology, ensuring methodological rigor, analytical objectivity, 
              and scholarly utility. We maintain commitments to transparent reporting, ethical 
              research practices, and the production of evaluation research that contributes to 
              organizational learning and evidence-based policy development.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
