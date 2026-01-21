import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Link from 'next/link'
import './page.css'

export default function ConsultingOpportunities() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Consulting Opportunities"
            lead={
              <>
                Consulting opportunities for experienced professionals and subject matter experts to contribute specialized expertise to research projects at Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function.
              </>
            }
          />

          <Section title="About Consulting Opportunities">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function engages experienced consultants 
              and subject matter experts to provide specialized expertise for research projects, analytical 
              work, and institutional activities. Consulting opportunities allow professionals to contribute 
              their expertise while maintaining flexibility in their engagement.
            </p>
            <p>
              Consultants work on project-based assignments, providing specialized knowledge and analytical 
              capabilities to support research objectives and enhance the quality and depth of analytical 
              outputs.
            </p>
          </Section>

          <Section title="Consulting Areas">
            <div className="position-list">
              <div className="position-item">
                <h3>Policy Consulting</h3>
                <p>
                  Policy Consultants provide expertise on policy design, implementation, evaluation, and 
                  reform. Work involves analysis of policy frameworks, assessment of policy effectiveness, 
                  and recommendations for policy improvement.
                </p>
                <p><strong>Expertise Areas:</strong></p>
                <ul className="requirements-list">
                  <li>Policy design and formulation</li>
                  <li>Policy implementation and evaluation</li>
                  <li>Regulatory policy and compliance</li>
                  <li>Public administration and governance</li>
                  <li>Policy reform and institutional change</li>
                </ul>
                <p><strong>Requirements:</strong></p>
                <ul className="requirements-list">
                  <li>Advanced degree in public policy, public administration, or related field</li>
                  <li>Extensive experience in policy analysis or policy development</li>
                  <li>Deep knowledge of policy processes and frameworks</li>
                  <li>Strong analytical and communication skills</li>
                  <li>Track record of policy work or consulting</li>
                </ul>
              </div>

              <div className="position-item">
                <h3>Economic Analysis Consulting</h3>
                <p>
                  Economic Analysis Consultants provide expertise on economic policy, fiscal analysis, 
                  economic modeling, and development economics. Work involves quantitative analysis, 
                  economic research, and policy evaluation.
                </p>
                <p><strong>Expertise Areas:</strong></p>
                <ul className="requirements-list">
                  <li>Macroeconomic policy analysis</li>
                  <li>Fiscal policy and public finance</li>
                  <li>Economic modeling and forecasting</li>
                  <li>Development economics and growth</li>
                  <li>Trade and international economics</li>
                </ul>
                <p><strong>Requirements:</strong></p>
                <ul className="requirements-list">
                  <li>Advanced degree in economics or related field</li>
                  <li>Extensive experience in economic research or analysis</li>
                  <li>Proficiency in economic modeling and statistical analysis</li>
                  <li>Strong quantitative and analytical skills</li>
                  <li>Experience in economic policy consulting or research</li>
                </ul>
              </div>

              <div className="position-item">
                <h3>Institutional Development Consulting</h3>
                <p>
                  Institutional Development Consultants provide expertise on institutional design, capacity 
                  building, organizational development, and governance reform. Work involves assessment of 
                  institutional capacity and recommendations for institutional improvement.
                </p>
                <p><strong>Expertise Areas:</strong></p>
                <ul className="requirements-list">
                  <li>Institutional design and reform</li>
                  <li>Capacity building and organizational development</li>
                  <li>Governance frameworks and systems</li>
                  <li>Public sector management</li>
                  <li>Institutional assessment and evaluation</li>
                </ul>
                <p><strong>Requirements:</strong></p>
                <ul className="requirements-list">
                  <li>Advanced degree in public administration, management, or related field</li>
                  <li>Extensive experience in institutional development or organizational consulting</li>
                  <li>Knowledge of governance and institutional frameworks</li>
                  <li>Strong analytical and strategic thinking skills</li>
                  <li>Experience in institutional assessment and reform</li>
                </ul>
              </div>

              <div className="position-item">
                <h3>Regional Expertise Consulting</h3>
                <p>
                  Regional Expertise Consultants provide specialized knowledge on specific geographic regions, 
                  including political dynamics, economic systems, governance structures, and policy contexts. 
                  Work involves regional analysis and comparative research.
                </p>
                <p><strong>Expertise Areas:</strong></p>
                <ul className="requirements-list">
                  <li>Regional political and economic dynamics</li>
                  <li>Comparative governance and policy analysis</li>
                  <li>Regional integration and cooperation</li>
                  <li>Cross-regional policy research</li>
                  <li>Regional institutional frameworks</li>
                </ul>
                <p><strong>Requirements:</strong></p>
                <ul className="requirements-list">
                  <li>Advanced degree in regional studies, international relations, or related field</li>
                  <li>Deep expertise in specific geographic regions</li>
                  <li>Language proficiency relevant to regional focus</li>
                  <li>Extensive experience in regional research or analysis</li>
                  <li>Understanding of regional governance and economic systems</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Consulting Engagement">
            <p>
              Consulting engagements at Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function are 
              typically structured as:
            </p>
            <ul className="engagement-list">
              <li><strong>Project-Based:</strong> Consultants engaged for specific research projects with 
                defined scope, timeline, and deliverables</li>
              <li><strong>Advisory:</strong> Consultants providing strategic advice and expertise on 
                research directions and analytical approaches</li>
              <li><strong>Specialized Expertise:</strong> Consultants contributing specialized knowledge 
                and skills to enhance research quality and depth</li>
              <li><strong>Review and Evaluation:</strong> Consultants providing external review and 
                evaluation of research outputs and methodologies</li>
            </ul>
          </Section>

          <Section title="Compensation">
            <p>
              Consulting compensation is determined based on:
            </p>
            <ul className="benefits-list">
              <li>Scope and complexity of the consulting assignment</li>
              <li>Level of expertise and experience required</li>
              <li>Duration and time commitment</li>
              <li>Deliverables and expected outputs</li>
              <li>Market rates for similar consulting services</li>
            </ul>
            <p>
              Compensation terms are discussed and agreed upon during the engagement process, with 
              consideration for fair and competitive rates.
            </p>
          </Section>

          <Section title="Application Process">
            <p>
              To express interest in consulting opportunities, please submit:
            </p>
            <ol className="process-list">
              <li>
                <strong>Consultant Profile:</strong> A profile or CV detailing your expertise, experience, 
                and qualifications relevant to consulting work.
              </li>
              <li>
                <strong>Areas of Expertise:</strong> Description of your consulting areas and specialized 
                knowledge.
              </li>
              <li>
                <strong>Previous Work:</strong> Examples of previous consulting work, research projects, 
                or relevant professional experience.
              </li>
              <li>
                <strong>Availability:</strong> Information about your availability and preferred engagement 
                terms.
              </li>
            </ol>
            <p>
              Submit your consulting profile through our <Link href="/contact" className="inline-link">contact page</Link>, 
              specifying "Consulting Opportunities" in the subject line and indicating your areas of 
              expertise.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
