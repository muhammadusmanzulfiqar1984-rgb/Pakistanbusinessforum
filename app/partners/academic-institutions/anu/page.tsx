import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function ANU() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Australian National University"
            lead="Research university with strong programs in public policy, economics, and Asia-Pacific studies."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/academic-institutions/anu.svg"
                  alt="ANU Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Canberra, Australia</p>
                <p><strong>Founded:</strong> 1946</p>
                <p><strong>Website:</strong> <a href="https://www.anu.edu.au" target="_blank" rel="noopener noreferrer">www.anu.edu.au</a></p>
              </div>
            </div>
            <p>
              The Australian National University (ANU) is a public research university located in 
              Canberra, Australia. Founded in 1946, ANU is Australia's national university and one 
              of the country's leading research institutions.
            </p>
            <p>
              ANU's Crawford School of Public Policy and Research School of Economics conduct 
              extensive research in public policy, governance, economic development, and Asia-Pacific 
              studies, contributing significantly to policy discourse in the region and globally.
            </p>
          </Section>

          <Section title="Research Areas">
            <p>
              ANU conducts extensive research in public policy, governance, economic development, 
              Asia-Pacific studies, and institutional analysis. The university's research centers 
              produce evidence-based policy analysis and contribute significantly to academic and 
              policy debates in the Asia-Pacific region and globally.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with ANU on research projects, 
              academic exchanges, and knowledge sharing initiatives. This partnership facilitates 
              access to ANU's research expertise, academic resources, and policy analysis 
              capabilities, enhancing collaborative research on governance, economic policy, and 
              institutional development, particularly in the Asia-Pacific context.
            </p>
          </Section>

          <Section title="Scholarship Programme">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function maintains a special scholarship arrangement 
              with the Australian National University to support exceptional researchers, policy analysts, 
              and students from Pakistan and the broader Asia-Pacific region. This programme facilitates 
              academic and research opportunities at Australia's national research university.
            </p>
            <p>
              The scholarship programme covers various areas including public policy, economics, Asia-Pacific 
              studies, and institutional analysis. Selected candidates receive support for research 
              projects, academic courses, and collaborative research initiatives that align with Pakistan Business 
              Forum's strategic research priorities, with particular focus on Asia-Pacific policy challenges 
              and regional cooperation.
            </p>
            <p>
              This special arrangement reflects the strong partnership between Pakistan Business Forum — Strategic 
              Policy & Research Function and ANU, enabling knowledge exchange and capacity building in policy 
              research and analysis, particularly relevant to Asia-Pacific development contexts.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}