import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function HarvardUniversity() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Harvard University"
            lead="World-renowned university with extensive research programs in public policy, governance, and economic analysis."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/academic-institutions/harvard-university.svg"
                  alt="Harvard University Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Cambridge, Massachusetts, United States</p>
                <p><strong>Founded:</strong> 1636</p>
                <p><strong>Website:</strong> <a href="https://www.harvard.edu" target="_blank" rel="noopener noreferrer">www.harvard.edu</a></p>
              </div>
            </div>
            <p>
              Harvard University is a private Ivy League research university in Cambridge, Massachusetts. 
              Founded in 1636, Harvard is the oldest institution of higher learning in the United States 
              and one of the world's most prestigious universities.
            </p>
            <p>
              Harvard's John F. Kennedy School of Government and Department of Economics are globally 
              recognized for their research and teaching in public policy, governance, and economic 
              analysis, producing influential policy research and analysis.
            </p>
          </Section>

          <Section title="Research Areas">
            <p>
              Harvard conducts extensive research in public policy, governance, economic development, 
              international relations, and institutional analysis. The university's research centers 
              and institutes produce evidence-based policy analysis and contribute significantly to 
              global policy discourse.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with Harvard University on 
              research projects, academic exchanges, and knowledge sharing initiatives. This partnership 
              facilitates access to Harvard's research expertise, academic resources, and policy analysis 
              capabilities, enhancing collaborative research on governance, economic policy, and 
              institutional development.
            </p>
          </Section>

          <Section title="Scholarship Programme">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function maintains a special scholarship arrangement 
              with Harvard University to support exceptional researchers, policy analysts, and students 
              from Pakistan and the broader region. This programme facilitates academic and research opportunities 
              at one of the world's most renowned institutions.
            </p>
            <p>
              The scholarship programme covers various areas including public policy, governance, economic 
              development, and international relations. Selected candidates receive support for research 
              projects, academic courses, and collaborative research initiatives that align with Pakistan Business 
              Forum's strategic research priorities.
            </p>
            <p>
              This special arrangement reflects the strong partnership between Pakistan Business Forum — Strategic 
              Policy & Research Function and Harvard University, enabling knowledge exchange and capacity 
              building in policy research and analysis.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}