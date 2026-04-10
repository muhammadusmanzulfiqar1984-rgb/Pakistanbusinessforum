import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Link from 'next/link'
import './page.css'

export default function InternshipPrograms() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Internship Programs"
            lead={
              <>
                Structured internship programs for students and recent graduates interested in policy research, governance studies, and institutional analysis at Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function.
              </>
            }
          />

          <Section title="About Internship Programs">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function offers structured internship 
              programs designed to provide students and recent graduates with practical experience in policy 
              research, analytical work, and institutional operations. Our internship programs offer valuable 
              learning opportunities and exposure to evidence-based policy research methodologies.
            </p>
            <p>
              Interns work alongside experienced researchers and policy professionals, contributing to 
              research projects, analytical work, and institutional activities while gaining practical 
              skills and knowledge in policy research and analysis.
            </p>
          </Section>

          <Section title="Internship Types">
            <div className="position-list">
              <div className="position-item">
                <h3>Research Internships</h3>
                <p>
                  Research Internships provide opportunities to work on policy research projects, assist 
                  with data collection and analysis, and contribute to research reports and analytical 
                  outputs. Interns gain hands-on experience in research methodologies and policy analysis.
                </p>
                <p><strong>Duration:</strong> 3-6 months (full-time or part-time)</p>
                <p><strong>Eligibility:</strong></p>
                <ul className="requirements-list">
                  <li>Currently enrolled in or recently completed undergraduate or graduate degree</li>
                  <li>Academic background in public policy, economics, political science, or related field</li>
                  <li>Strong analytical and research skills</li>
                  <li>Excellent written and verbal communication abilities</li>
                  <li>Interest in policy research and analysis</li>
                </ul>
              </div>

              <div className="position-item">
                <h3>Policy Analysis Internships</h3>
                <p>
                  Policy Analysis Internships focus on analytical work related to policy design, evaluation, 
                  and implementation. Interns assist with policy research, contribute to analytical briefs, 
                  and participate in policy discussions and dialogues.
                </p>
                <p><strong>Duration:</strong> 3-6 months (full-time or part-time)</p>
                <p><strong>Eligibility:</strong></p>
                <ul className="requirements-list">
                  <li>Currently enrolled in or recently completed degree in public policy, public administration, or related field</li>
                  <li>Understanding of policy processes and frameworks</li>
                  <li>Strong analytical and critical thinking skills</li>
                  <li>Ability to work with policy documents and research materials</li>
                  <li>Interest in policy analysis and evaluation</li>
                </ul>
              </div>

              <div className="position-item">
                <h3>Communications and Media Internships</h3>
                <p>
                  Communications and Media Internships involve work on research dissemination, media 
                  relations, content development, and communication strategies. Interns contribute to 
                  knowledge products, social media, and public engagement activities.
                </p>
                <p><strong>Duration:</strong> 3-6 months (full-time or part-time)</p>
                <p><strong>Eligibility:</strong></p>
                <ul className="requirements-list">
                  <li>Currently enrolled in or recently completed degree in communications, journalism, media studies, or related field</li>
                  <li>Strong writing and communication skills</li>
                  <li>Experience or interest in content development and media</li>
                  <li>Understanding of research communication and knowledge dissemination</li>
                  <li>Proficiency in digital media tools and platforms</li>
                </ul>
              </div>

              <div className="position-item">
                <h3>Administrative and Operations Internships</h3>
                <p>
                  Administrative and Operations Internships provide experience in institutional operations, 
                  event management, administrative support, and organizational activities. Interns gain 
                  practical skills in operations and administration within a research organization context.
                </p>
                <p><strong>Duration:</strong> 3-6 months (full-time or part-time)</p>
                <p><strong>Eligibility:</strong></p>
                <ul className="requirements-list">
                  <li>Currently enrolled in or recently completed degree in business administration, management, or related field</li>
                  <li>Strong organizational and administrative skills</li>
                  <li>Ability to manage multiple tasks and priorities</li>
                  <li>Proficiency in office software and administrative tools</li>
                  <li>Interest in working in a research organization environment</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Internship Benefits">
            <p>
              Interns at Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function receive:
            </p>
            <ul className="benefits-list">
              <li>Hands-on experience in policy research and analysis</li>
              <li>Mentorship from experienced researchers and professionals</li>
              <li>Exposure to research methodologies and analytical frameworks</li>
              <li>Opportunity to contribute to meaningful research projects</li>
              <li>Networking opportunities with policy professionals and researchers</li>
              <li>Professional development and skill-building opportunities</li>
              <li>Certificate of completion upon successful internship</li>
              <li>Potential for future employment opportunities based on performance</li>
            </ul>
          </Section>

          <Section title="Internship Responsibilities">
            <p>
              Intern responsibilities vary by program type but may include:
            </p>
            <ul className="responsibilities-list">
              <li>Assisting with research projects and analytical work</li>
              <li>Collecting and organizing research data and materials</li>
              <li>Contributing to research reports, briefs, and analytical outputs</li>
              <li>Participating in research discussions and policy dialogues</li>
              <li>Supporting institutional activities and operations</li>
              <li>Attending seminars, workshops, and professional development sessions</li>
              <li>Contributing to knowledge dissemination and communication activities</li>
            </ul>
          </Section>

          <Section title="Application Process">
            <p>
              To apply for internship programs, please submit:
            </p>
            <ol className="process-list">
              <li>
                <strong>Application Form:</strong> Complete application form available on our website or 
                submit a cover letter expressing your interest in the internship program.
              </li>
              <li>
                <strong>Resume or CV:</strong> Current resume or curriculum vitae detailing your education, 
                relevant experience, and skills.
              </li>
              <li>
                <strong>Academic Transcript:</strong> Copy of your most recent academic transcript or 
                academic records.
              </li>
              <li>
                <strong>Writing Sample:</strong> Sample of your writing, such as an academic paper, 
                research essay, or analytical piece (optional but recommended).
              </li>
              <li>
                <strong>References:</strong> Contact information for 1-2 academic or professional references.
              </li>
            </ol>
            <p>
              Applications should be submitted through our <Link href="/contact" className="inline-link">contact page</Link>, 
              specifying "Internship Programs" in the subject line and indicating the type of internship 
              you are interested in.
            </p>
          </Section>

          <Section title="Selection Process">
            <p>
              Internship applications are reviewed based on:
            </p>
            <ul className="criteria-list">
              <li>Academic qualifications and performance</li>
              <li>Relevant skills and experience</li>
              <li>Interest in policy research and analysis</li>
              <li>Alignment with internship program objectives</li>
              <li>Availability and commitment to internship duration</li>
              <li>Potential for learning and contribution</li>
            </ul>
            <p>
              Selected candidates will be invited for interviews to discuss their interests, qualifications, 
              and internship expectations.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
