import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Link from 'next/link'
import './page.css'

export default function CollaborativeResearch() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Collaborative Research"
            lead={
              <>
                Opportunities for academic institutions, think tanks, and research organizations to collaborate on joint research projects and knowledge exchange with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function.
              </>
            }
          />

          <Section title="About Collaborative Research">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function engages in collaborative 
              research partnerships with academic institutions, think tanks, research organizations, and 
              policy institutions. These collaborations enable the integration of diverse expertise, 
              sharing of resources, and enhancement of research capabilities.
            </p>
            <p>
              Collaborative research partnerships contribute to advancing knowledge, strengthening research 
              capacity, and producing high-quality analytical outputs that inform policy discourse and 
              scholarly literature.
            </p>
          </Section>

          <Section title="Collaboration Types">
            <div className="position-list">
              <div className="position-item">
                <h3>Joint Research Projects</h3>
                <p>
                  Joint Research Projects involve collaborative research initiatives where Pakistan Business 
                  Forum — Strategic Policy & Research Function partners with other institutions to conduct 
                  research on shared research questions or policy issues. Projects combine expertise, 
                  resources, and analytical capabilities from multiple partners.
                </p>
                <p><strong>Project Structure:</strong></p>
                <ul className="requirements-list">
                  <li>Defined research objectives and questions</li>
                  <li>Shared research design and methodology</li>
                  <li>Collaborative data collection and analysis</li>
                  <li>Joint authorship and publication of research outputs</li>
                  <li>Shared responsibility for project management and deliverables</li>
                </ul>
                <p><strong>Benefits:</strong></p>
                <ul className="benefits-list">
                  <li>Access to diverse expertise and perspectives</li>
                  <li>Sharing of research resources and capabilities</li>
                  <li>Enhanced research quality through collaboration</li>
                  <li>Broader impact and dissemination of research findings</li>
                  <li>Strengthened institutional relationships</li>
                </ul>
              </div>

              <div className="position-item">
                <h3>Knowledge Exchange Programs</h3>
                <p>
                  Knowledge Exchange Programs facilitate the sharing of research methodologies, analytical 
                  frameworks, and knowledge between Pakistan Business Forum — Strategic Policy & Research 
                  Function and partner institutions. Programs may include researcher exchanges, workshops, 
                  and collaborative learning activities.
                </p>
                <p><strong>Program Components:</strong></p>
                <ul className="requirements-list">
                  <li>Researcher and staff exchanges</li>
                  <li>Methodology workshops and training</li>
                  <li>Sharing of research tools and resources</li>
                  <li>Collaborative seminars and discussions</li>
                  <li>Knowledge sharing and best practices</li>
                </ul>
                <p><strong>Benefits:</strong></p>
                <ul className="benefits-list">
                  <li>Enhanced research capabilities and skills</li>
                  <li>Exposure to different research approaches</li>
                  <li>Strengthened research networks</li>
                  <li>Improved research quality and innovation</li>
                  <li>Long-term institutional relationships</li>
                </ul>
              </div>

              <div className="position-item">
                <h3>Academic Partnerships</h3>
                <p>
                  Academic Partnerships involve collaboration with universities, research centers, and 
                  academic institutions on research projects, student engagement, and scholarly activities. 
                  Partnerships support academic research, student learning, and knowledge production.
                </p>
                <p><strong>Partnership Activities:</strong></p>
                <ul className="requirements-list">
                  <li>Joint research projects with academic institutions</li>
                  <li>Student research opportunities and internships</li>
                  <li>Academic supervision and mentorship</li>
                  <li>Co-publication of research findings</li>
                  <li>Academic seminars and conferences</li>
                </ul>
                <p><strong>Benefits:</strong></p>
                <ul className="benefits-list">
                  <li>Integration of academic and policy research</li>
                  <li>Student engagement and development</li>
                  <li>Access to academic expertise and resources</li>
                  <li>Enhanced scholarly credibility</li>
                  <li>Contribution to academic literature</li>
                </ul>
              </div>

              <div className="position-item">
                <h3>Institutional Collaborations</h3>
                <p>
                  Institutional Collaborations involve long-term partnerships with think tanks, policy 
                  organizations, and research institutions for ongoing research collaboration, knowledge 
                  sharing, and institutional capacity building. Collaborations may include formal 
                  partnership agreements and structured engagement frameworks.
                </p>
                <p><strong>Collaboration Framework:</strong></p>
                <ul className="requirements-list">
                  <li>Formal partnership agreements and memoranda of understanding</li>
                  <li>Structured collaboration mechanisms</li>
                  <li>Regular research collaboration and exchange</li>
                  <li>Joint activities and initiatives</li>
                  <li>Long-term institutional relationship building</li>
                </ul>
                <p><strong>Benefits:</strong></p>
                <ul className="benefits-list">
                  <li>Sustained research collaboration</li>
                  <li>Institutional capacity building</li>
                  <li>Enhanced research impact and reach</li>
                  <li>Strengthened policy research networks</li>
                  <li>Mutual learning and development</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Partnership Criteria">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function seeks collaborative partners 
              who demonstrate:
            </p>
            <ul className="criteria-list">
              <li>Commitment to evidence-based, independent research</li>
              <li>High standards of research quality and methodological rigor</li>
              <li>Relevant expertise and research capabilities</li>
              <li>Alignment with research objectives and values</li>
              <li>Capacity for meaningful collaboration and contribution</li>
              <li>Institutional credibility and research reputation</li>
              <li>Commitment to non-advocacy, scholarly research principles</li>
            </ul>
          </Section>

          <Section title="Collaboration Process">
            <p>
              To initiate collaborative research partnerships:
            </p>
            <ol className="process-list">
              <li>
                <strong>Initial Inquiry:</strong> Contact Pakistan Business Forum — Strategic Policy & 
                Research Function through our contact page expressing interest in collaboration.
              </li>
              <li>
                <strong>Partnership Proposal:</strong> Submit a proposal outlining potential collaboration 
                areas, research interests, and proposed activities.
              </li>
              <li>
                <strong>Discussion and Assessment:</strong> Engage in discussions to assess alignment, 
                explore collaboration opportunities, and define collaboration framework.
              </li>
              <li>
                <strong>Partnership Agreement:</strong> Develop formal partnership agreement or memorandum 
                of understanding outlining collaboration terms, responsibilities, and expectations.
              </li>
              <li>
                <strong>Implementation:</strong> Begin collaborative activities, research projects, or 
                knowledge exchange programs as agreed.
              </li>
            </ol>
          </Section>

          <Section title="Current Partners">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with various 
              international think tanks, academic institutions, and research organizations. Information 
              about our partners is available on our <Link href="/partners" className="inline-link">Partners page</Link>.
            </p>
          </Section>

          <Section title="How to Initiate Collaboration">
            <p>
              To express interest in collaborative research opportunities, please contact us through our 
              <Link href="/contact" className="inline-link"> contact page</Link>, specifying:
            </p>
            <ul className="application-info">
              <li>Your institution or organization</li>
              <li>Areas of research interest and expertise</li>
              <li>Type of collaboration you are interested in</li>
              <li>Proposed collaboration activities or projects</li>
              <li>Your institution's research capabilities and resources</li>
            </ul>
            <p>
              Please include "Collaborative Research" in your message subject line for efficient processing.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
