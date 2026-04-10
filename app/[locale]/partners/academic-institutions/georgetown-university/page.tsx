import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function GeorgetownUniversity() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Georgetown University"
            lead="University with strong focus on public policy, international affairs, and governance research."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/academic-institutions/georgetown-university.svg"
                  alt="Georgetown University Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Washington, D.C., United States</p>
                <p><strong>Founded:</strong> 1789</p>
                <p><strong>Website:</strong> <a href="https://www.georgetown.edu" target="_blank" rel="noopener noreferrer">www.georgetown.edu</a></p>
              </div>
            </div>
            <p>
              Georgetown University is a private research university located in Washington, D.C. Founded 
              in 1789, Georgetown is the oldest Catholic and Jesuit-affiliated institution of higher 
              learning in the United States.
            </p>
            <p>
              Georgetown's Walsh School of Foreign Service and McCourt School of Public Policy are 
              globally recognized for their research and teaching in public policy, international 
              affairs, and governance studies, producing influential policy research and analysis.
            </p>
          </Section>

          <Section title="Research Areas">
            <p>
              Georgetown conducts extensive research in public policy, international relations, 
              governance, economic development, and institutional analysis. The university's research 
              centers produce evidence-based policy analysis and contribute significantly to global 
              policy discourse.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with Georgetown University on 
              research projects, academic exchanges, and knowledge sharing initiatives. This partnership 
              facilitates access to Georgetown's research expertise, academic resources, and policy 
              analysis capabilities, enhancing collaborative research on governance, economic policy, 
              and institutional development.
            </p>
          </Section>

          <Section title="Scholarship Programme">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function maintains a special scholarship arrangement 
              with Georgetown University to support exceptional researchers, policy analysts, and students 
              from Pakistan and the broader region. This programme facilitates academic and research opportunities 
              at one of the world's leading institutions for public policy and international affairs.
            </p>
            <p>
              The scholarship programme covers various areas including public policy, international relations, 
              governance, and economic development. Selected candidates receive support for research 
              projects, academic courses, and collaborative research initiatives that align with Pakistan Business 
              Forum's strategic research priorities.
            </p>
            <p>
              This special arrangement reflects the strong partnership between Pakistan Business Forum — Strategic 
              Policy & Research Function and Georgetown University, enabling knowledge exchange and capacity 
              building in policy research and analysis.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}