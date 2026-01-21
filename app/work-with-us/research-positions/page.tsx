import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Link from 'next/link'
import './page.css'

export default function ResearchPositions() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Research Positions"
            lead={
              <>
                Opportunities for researchers, analysts, and policy professionals to contribute to evidence-based policy research and analysis at Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function.
              </>
            }
          />

          <Section title="About Research Positions">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function offers various research positions 
              for qualified professionals seeking to contribute to evidence-based policy analysis, governance 
              research, and institutional studies. Our research team conducts rigorous analytical work across 
              multiple domains including economic policy, governance frameworks, regulatory analysis, and 
              regional studies.
            </p>
            <p>
              Research positions at Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function provide 
              opportunities to work on meaningful policy research projects, collaborate with experienced 
              researchers, and contribute to scholarly and policy discourse through methodologically sound 
              analytical work.
            </p>
          </Section>

          <Section title="Available Positions">
            <div className="position-list">
              <div className="position-item">
                <h3>Policy Research Analysts</h3>
                <p>
                  Policy Research Analysts conduct analysis of policy design, implementation, and evaluation 
                  across various domains. Responsibilities include research design, data collection and analysis, 
                  report writing, and presentation of findings to stakeholders.
                </p>
                <p><strong>Requirements:</strong></p>
                <ul className="requirements-list">
                  <li>Master's degree or higher in public policy, political science, economics, or related field</li>
                  <li>Strong analytical and research capabilities</li>
                  <li>Experience in policy analysis or research</li>
                  <li>Excellent written and verbal communication skills</li>
                  <li>Proficiency in research methodologies and analytical tools</li>
                </ul>
              </div>

              <div className="position-item">
                <h3>Economic Policy Researchers</h3>
                <p>
                  Economic Policy Researchers focus on analysis of fiscal policy, monetary frameworks, economic 
                  development strategies, and macroeconomic policy evaluation. Work involves quantitative and 
                  qualitative analysis of economic phenomena and policy impacts.
                </p>
                <p><strong>Requirements:</strong></p>
                <ul className="requirements-list">
                  <li>Master's degree or higher in economics, public policy, or related field</li>
                  <li>Strong quantitative and analytical skills</li>
                  <li>Experience in economic research or policy analysis</li>
                  <li>Proficiency in statistical analysis and economic modeling</li>
                  <li>Knowledge of economic policy frameworks and institutions</li>
                </ul>
              </div>

              <div className="position-item">
                <h3>Governance and Institutional Analysts</h3>
                <p>
                  Governance and Institutional Analysts examine institutional design, governance frameworks, 
                  administrative systems, and regulatory environments. Work involves comparative analysis, 
                  institutional assessment, and evaluation of governance mechanisms.
                </p>
                <p><strong>Requirements:</strong></p>
                <ul className="requirements-list">
                  <li>Master's degree or higher in public administration, political science, governance studies, or related field</li>
                  <li>Understanding of institutional theory and governance frameworks</li>
                  <li>Experience in institutional analysis or governance research</li>
                  <li>Strong analytical and comparative research skills</li>
                  <li>Knowledge of regulatory and administrative systems</li>
                </ul>
              </div>

              <div className="position-item">
                <h3>Regional Studies Specialists</h3>
                <p>
                  Regional Studies Specialists conduct research on regional dynamics, comparative governance, 
                  and policy analysis across specific geographic regions. Work involves regional expertise, 
                  comparative analysis, and cross-regional policy research.
                </p>
                <p><strong>Requirements:</strong></p>
                <ul className="requirements-list">
                  <li>Master's degree or higher in regional studies, international relations, area studies, or related field</li>
                  <li>Specialized knowledge of specific regions (Asia-Pacific, Middle East, Europe, Americas, Africa)</li>
                  <li>Language proficiency relevant to regional focus</li>
                  <li>Experience in regional policy research or analysis</li>
                  <li>Understanding of regional governance and economic systems</li>
                </ul>
              </div>

              <div className="position-item">
                <h3>Research Associates and Fellows</h3>
                <p>
                  Research Associates and Fellows contribute to research projects, support analytical work, 
                  and engage in scholarly activities. Positions may be full-time, part-time, or project-based, 
                  depending on organizational needs and candidate qualifications.
                </p>
                <p><strong>Requirements:</strong></p>
                <ul className="requirements-list">
                  <li>Bachelor's degree or higher in relevant field</li>
                  <li>Research experience or demonstrated research capabilities</li>
                  <li>Interest in policy research and analysis</li>
                  <li>Strong analytical and writing skills</li>
                  <li>Ability to work independently and collaboratively</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Responsibilities">
            <p>
              Research positions at Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function involve 
              various responsibilities depending on the specific role and project requirements:
            </p>
            <ul className="responsibilities-list">
              <li>Conducting research on policy issues, governance challenges, and institutional dynamics</li>
              <li>Designing research methodologies and analytical frameworks</li>
              <li>Collecting and analyzing data from various sources</li>
              <li>Writing research reports, policy briefs, and analytical notes</li>
              <li>Presenting research findings to internal and external audiences</li>
              <li>Collaborating with team members and external partners</li>
              <li>Contributing to knowledge dissemination and publication activities</li>
              <li>Participating in policy dialogues, seminars, and research discussions</li>
            </ul>
          </Section>

          <Section title="Compensation and Benefits">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function offers competitive compensation 
              packages and benefits for research positions:
            </p>
            <ul className="benefits-list">
              <li>Competitive salary commensurate with qualifications and experience</li>
              <li>Access to research resources, databases, and analytical tools</li>
              <li>Professional development opportunities and training</li>
              <li>Publication opportunities and research support</li>
              <li>Collaboration with international think tanks and policy institutions</li>
              <li>Networking opportunities within the policy research community</li>
              <li>Health and retirement benefits (for full-time positions)</li>
              <li>Flexible work arrangements where appropriate</li>
            </ul>
          </Section>

          <Section title="Application Process">
            <p>
              To apply for research positions, please submit the following materials:
            </p>
            <ol className="process-list">
              <li>
                <strong>Cover Letter:</strong> A cover letter explaining your interest in the position, 
                relevant qualifications, and how your background aligns with our research objectives.
              </li>
              <li>
                <strong>Curriculum Vitae:</strong> A comprehensive CV detailing your education, research 
                experience, publications, and relevant professional background.
              </li>
              <li>
                <strong>Writing Samples:</strong> Samples of your research writing, such as research reports, 
                policy briefs, academic papers, or analytical notes (2-3 samples preferred).
              </li>
              <li>
                <strong>References:</strong> Contact information for 2-3 professional or academic references 
                who can speak to your research capabilities and qualifications.
              </li>
            </ol>
            <p>
              Applications should be submitted through our <Link href="/contact" className="inline-link">contact page</Link>, 
              specifying "Research Positions" in the subject line and indicating the specific position 
              you are interested in.
            </p>
          </Section>

          <Section title="Selection Criteria">
            <p>
              Applications are reviewed based on the following criteria:
            </p>
            <ul className="criteria-list">
              <li>Academic qualifications and research background</li>
              <li>Relevant research experience and demonstrated capabilities</li>
              <li>Quality of writing samples and analytical work</li>
              <li>Alignment with organizational research priorities</li>
              <li>Potential contribution to research objectives</li>
              <li>Commitment to evidence-based, non-advocacy research principles</li>
            </ul>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
