import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import './page.css'

export default function Research() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Research & Insights"
            lead="Independent scholarly research examining contemporary policy challenges through rigorous methodological approaches and contributing to the academic and policy literature on governance and public administration."
          />

          <Section title="Research Methodology">
            <p>
              Our research activities are governed by established academic standards and 
              methodological protocols. We employ diverse analytical frameworks, including 
              quantitative methods, qualitative inquiry, comparative analysis, and policy 
              evaluation techniques, selected according to the specific research questions 
              and analytical objectives of each project.
            </p>
          </Section>

          <Section title="Research Themes">
            <CardGrid>
              <Link href="/research/governance-institutions" className="card">
                <h3>Governance & Institutions</h3>
                <p>
                  Analysis of institutional design, governance frameworks, and 
                  administrative capacity to support effective public service delivery 
                  and democratic accountability.
                </p>
                <span className="small-text">View research</span>
              </Link>
              <Link href="/research/economic-policy" className="card">
                <h3>Economic Policy</h3>
                <p>
                  Research on fiscal policy, monetary policy, economic development 
                  strategies, and their impacts and effectiveness in supporting 
                  economic growth and stability.
                </p>
                <span className="small-text">View research</span>
              </Link>
              <Link href="/research/media-relations-research" className="card">
                <h3>Media Relations Research</h3>
                <p>
                  Research on media engagement mechanisms, including analysis of press 
                  release structures, media briefing formats, interview dynamics, and 
                  relationships between policy institutions and media organizations.
                </p>
                <span className="small-text">View research</span>
              </Link>
              <Link href="/research/policy-design-evaluation" className="card">
                <h3>Policy Design & Evaluation</h3>
                <p>
                  Research examining policy design processes, evaluation mechanisms, 
                  and factors that influence policy effectiveness and outcomes in 
                  practice.
                </p>
                <span className="small-text">View research</span>
              </Link>
            </CardGrid>
          </Section>

          <Section title="Publications">
            <p>
              Our research findings are disseminated through multiple channels, including 
              research reports, policy briefs, working papers, and peer-reviewed academic 
              publications. Publications are made available to academic institutions, policy 
              institutions, civil society organizations, and the public, contributing to the 
              scholarly and policy literature.
            </p>
          </Section>

          <Section title="Research Portfolio">
            <p>
              Our research portfolio addresses contemporary policy challenges across multiple 
              domains. Research outputs are structured to contribute to ongoing academic and 
              policy discourse, with findings organized by research themes, methodologies, and 
              policy areas. Publications are catalogued and made accessible through appropriate 
              channels for scholarly and policy audiences.
            </p>
          </Section>

          <Section title="Research Collaboration">
            <p>
              The organization engages in collaborative research activities with academic 
              institutions, research organizations, and international bodies. These 
              collaborations enable the integration of diverse expertise and analytical 
              perspectives, enhancing the methodological rigor and analytical scope of 
              research projects addressing complex policy questions.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
