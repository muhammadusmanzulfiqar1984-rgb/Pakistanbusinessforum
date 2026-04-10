import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function OxfordUniversity() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="University of Oxford"
            lead="Leading research university with extensive programs in public policy, economics, and governance studies."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/academic-institutions/oxford-university.svg"
                  alt="University of Oxford Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Oxford, United Kingdom</p>
                <p><strong>Founded:</strong> 1096</p>
                <p><strong>Website:</strong> <a href="https://www.ox.ac.uk" target="_blank" rel="noopener noreferrer">www.ox.ac.uk</a></p>
              </div>
            </div>
            <p>
              The University of Oxford is a collegiate research university in Oxford, England. It is the oldest 
              university in the English-speaking world and one of the world's leading academic institutions. 
              Oxford's research spans a wide range of disciplines including public policy, economics, governance, 
              and international relations.
            </p>
            <p>
              Oxford's Blavatnik School of Government and Department of Politics and International Relations are 
              renowned for their research and teaching in public policy, governance, and political economy, 
              contributing significantly to global policy discourse.
            </p>
          </Section>

          <Section title="Research Areas">
            <p>
              Oxford conducts extensive research in public policy, economic development, governance studies, 
              international relations, and institutional analysis. The university's research centers and 
              departments produce evidence-based policy analysis and contribute to academic and policy 
              debates on global challenges.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with the University of Oxford 
              on research projects, academic exchanges, and knowledge sharing initiatives. This partnership 
              facilitates access to Oxford's research expertise, academic resources, and policy analysis 
              capabilities, enhancing collaborative research on governance, economic policy, and institutional 
              development.
            </p>
          </Section>

          <Section title="Scholarship Programme">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function maintains a special scholarship arrangement 
              with the University of Oxford to support exceptional researchers, policy analysts, and students 
              from Pakistan and the broader region. This programme facilitates academic and research opportunities 
              at one of the world's leading institutions.
            </p>
            <p>
              The scholarship programme covers various areas including public policy, economics, governance 
              studies, and international relations. Selected candidates receive support for research projects, 
              academic courses, and collaborative research initiatives that align with Pakistan Business Forum<span className="trademark">®</span>'s 
              strategic research priorities.
            </p>
            <p>
              This special arrangement reflects the strong partnership between Pakistan Business Forum<span className="trademark">®</span> — Strategic 
              Policy & Research Function and the University of Oxford, enabling knowledge exchange and capacity 
              building in policy research and analysis.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}