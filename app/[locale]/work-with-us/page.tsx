import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import './page.css'

export default function WorkWithUs() {
  const opportunities = [
    {
      href: '/work-with-us/research-positions',
      title: 'Research Positions',
      description: 'Opportunities for researchers, analysts, and policy professionals to contribute to evidence-based policy research and analysis.',
      areas: [
        'Policy Research Analysts',
        'Economic Policy Researchers',
        'Governance and Institutional Analysts',
        'Regional Studies Specialists',
        'Research Associates and Fellows'
      ]
    },
    {
      href: '/work-with-us/internship-programs',
      title: 'Internship Programs',
      description: 'Structured internship programs for students and recent graduates interested in policy research, governance studies, and institutional analysis.',
      areas: [
        'Research Internships',
        'Policy Analysis Internships',
        'Communications and Media Internships',
        'Administrative and Operations Internships'
      ]
    },
    {
      href: '/work-with-us/consulting-opportunities',
      title: 'Consulting Opportunities',
      description: 'Consulting opportunities for experienced professionals and subject matter experts to contribute specialized expertise to research projects.',
      areas: [
        'Policy Consulting',
        'Economic Analysis Consulting',
        'Institutional Development Consulting',
        'Regional Expertise Consulting'
      ]
    },
    {
      href: '/work-with-us/collaborative-research',
      title: 'Collaborative Research',
      description: 'Opportunities for academic institutions, think tanks, and research organizations to collaborate on joint research projects and knowledge exchange.',
      areas: [
        'Joint Research Projects',
        'Knowledge Exchange Programs',
        'Academic Partnerships',
        'Institutional Collaborations'
      ]
    }
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Work with us"
            lead={
              <>
                Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function offers opportunities for researchers, analysts, interns, and collaborative partners to contribute to evidence-based policy research and institutional analysis.
              </>
            }
          />

          <Section title="About Working with Us">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function welcomes talented individuals and 
              organizations interested in contributing to evidence-based policy research, governance analysis, and 
              institutional development. We offer various opportunities for engagement, from full-time research 
              positions to collaborative partnerships and internship programs.
            </p>
            <p>
              Our work environment emphasizes analytical rigor, methodological transparency, and scholarly integrity. 
              We value diversity of perspectives, interdisciplinary approaches, and commitment to independent, 
              non-advocacy research.
            </p>
          </Section>

          <Section title="Opportunities">
            <CardGrid>
              {opportunities.map((opportunity, index) => (
                <Link key={index} href={opportunity.href} className="card opportunity-card">
                  <h3>{opportunity.title}</h3>
                  <p>{opportunity.description}</p>
                  <ul className="opportunity-areas">
                    {opportunity.areas.map((area, areaIndex) => (
                      <li key={areaIndex}>{area}</li>
                    ))}
                  </ul>
                  <span className="small-text">View details</span>
                </Link>
              ))}
            </CardGrid>
          </Section>

          <Section title="Application Process">
            <p>
              To express interest in working with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function, 
              please review the following process:
            </p>
            <ol className="process-list">
              <li>
                <strong>Review Opportunities:</strong> Review available positions and opportunities listed on 
                this page and determine which best matches your qualifications and interests.
              </li>
              <li>
                <strong>Prepare Application Materials:</strong> Prepare a comprehensive application including 
                your resume or curriculum vitae, a cover letter explaining your interest and qualifications, 
                and relevant work samples or portfolio materials.
              </li>
              <li>
                <strong>Submit Application:</strong> Submit your application through our contact page, 
                specifying the type of opportunity you are interested in. Applications are reviewed on a 
                rolling basis.
              </li>
              <li>
                <strong>Review and Selection:</strong> Applications are reviewed by our team based on 
                qualifications, alignment with organizational needs, and potential contribution to our 
                research objectives.
              </li>
              <li>
                <strong>Interview Process:</strong> Selected candidates will be invited for interviews 
                and further assessment, which may include discussions about research interests, analytical 
                approaches, and institutional fit.
              </li>
            </ol>
          </Section>

          <Section title="What We Look For">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function seeks individuals and partners 
              who demonstrate:
            </p>
            <ul className="qualities-list">
              <li>Strong analytical and research capabilities</li>
              <li>Commitment to evidence-based policy analysis</li>
              <li>Methodological rigor and scholarly integrity</li>
              <li>Ability to work independently and collaboratively</li>
              <li>Relevant academic or professional background in policy, economics, governance, or related fields</li>
              <li>Excellent written and verbal communication skills</li>
              <li>Understanding of and commitment to non-advocacy, independent research principles</li>
            </ul>
          </Section>

          <Section title="Benefits and Support">
            <p>
              Working with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function offers:
            </p>
            <ul className="benefits-list">
              <li>Opportunity to contribute to meaningful policy research and analysis</li>
              <li>Access to research resources, databases, and analytical tools</li>
              <li>Collaboration with experienced researchers and policy professionals</li>
              <li>Professional development and learning opportunities</li>
              <li>Exposure to international think tanks and policy institutions</li>
              <li>Publication opportunities for research outputs</li>
              <li>Networking opportunities within the policy research community</li>
            </ul>
          </Section>

          <Section title="Equal Opportunity">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function is committed to equal opportunity 
              and diversity. We welcome applications from qualified individuals regardless of background, 
              and we are committed to creating an inclusive work environment that values diverse perspectives 
              and experiences.
            </p>
          </Section>

          <Section title="How to Apply">
            <p>
              To apply for positions or express interest in collaboration opportunities, please contact us 
              through our <Link href="/contact" className="inline-link">contact page</Link>, specifying:
            </p>
            <ul className="application-info">
              <li>The type of opportunity you are interested in</li>
              <li>Your qualifications and relevant experience</li>
              <li>Your research interests and areas of expertise</li>
              <li>Your availability and preferred engagement terms</li>
            </ul>
            <p>
              For specific inquiries about positions, internships, or collaborative opportunities, please 
              include "Work with Us" in your message subject line.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
