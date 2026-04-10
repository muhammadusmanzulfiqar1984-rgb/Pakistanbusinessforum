import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import './page.css'

export default function GovernanceInstitutions() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Governance & Institutions"
            lead="Analysis of institutional design, governance frameworks, and administrative capacity to support effective public service delivery and democratic accountability."
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="governance" />
            </div>
          </div>

          <Section title="Purpose">
            <p>
              Our research in governance and institutions examines how institutional design 
              and governance frameworks function to support effective public service delivery 
              and democratic accountability. We analyze administrative capacity, institutional 
              structures, and governance mechanisms that enable effective policy implementation.
            </p>
            <p>
              This research contributes to understanding of how institutions operate within 
              governance systems and how administrative capacity influences policy effectiveness 
              and public service delivery.
            </p>
          </Section>

          <Section title="Relevance">
            <p>
              Institutional analysis provides essential foundations for understanding governance 
              processes and policy effectiveness. Our research examines how institutional design 
              influences policy outcomes, how governance frameworks function in practice, and 
              how administrative capacity supports effective public service delivery.
            </p>
            <p>
              This work contributes to academic and policy literature on governance and 
              institutional development, providing evidence-based insights on institutional 
              design, governance frameworks, and administrative capacity.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Research outputs include scholarly publications, research reports, and policy 
              briefs that examine institutional design, governance frameworks, and administrative 
              capacity. These findings contribute to understanding of how institutions function 
              within governance systems and how administrative mechanisms support effective 
              policy implementation.
            </p>
            <p>
              Our work advances understanding of governance processes and provides evidence-based 
              insights to inform institutional design and governance framework development.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
