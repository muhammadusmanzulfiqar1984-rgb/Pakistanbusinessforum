import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function NUS() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="National University of Singapore"
            lead="Leading Asian university with extensive research programs in public policy, economics, and governance studies."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/academic-institutions/nus.svg"
                  alt="NUS Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Singapore</p>
                <p><strong>Founded:</strong> 1905</p>
                <p><strong>Website:</strong> <a href="https://www.nus.edu.sg" target="_blank" rel="noopener noreferrer">www.nus.edu.sg</a></p>
              </div>
            </div>
            <p>
              The National University of Singapore (NUS) is a public research university located in 
              Singapore. Founded in 1905, NUS is Singapore's oldest and largest university, and one 
              of Asia's leading research institutions.
            </p>
            <p>
              NUS's Lee Kuan Yew School of Public Policy and Department of Economics conduct extensive 
              research in public policy, governance, economic development, and institutional analysis, 
              contributing significantly to policy discourse in Asia and globally.
            </p>
          </Section>

          <Section title="Research Areas">
            <p>
              NUS conducts extensive research in public policy, governance, economic development, 
              international relations, and institutional analysis. The university's research centers 
              produce evidence-based policy analysis and contribute significantly to academic and 
              policy debates in Asia and globally.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with NUS on research projects, 
              academic exchanges, and knowledge sharing initiatives. This partnership facilitates 
              access to NUS's research expertise, academic resources, and policy analysis 
              capabilities, enhancing collaborative research on governance, economic policy, and 
              institutional development, particularly in the Asian context.
            </p>
          </Section>

          <Section title="Scholarship Programme">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function maintains a special scholarship arrangement 
              with the National University of Singapore to support exceptional researchers, policy analysts, 
              and students from Pakistan and the broader Asian region. This programme facilitates academic 
              and research opportunities at one of Asia's leading research institutions.
            </p>
            <p>
              The scholarship programme covers various areas including public policy, economics, governance 
              studies, and regional development. Selected candidates receive support for research 
              projects, academic courses, and collaborative research initiatives that align with Pakistan Business 
              Forum's strategic research priorities, with particular focus on Asia-Pacific policy challenges.
            </p>
            <p>
              This special arrangement reflects the strong partnership between Pakistan Business Forum — Strategic 
              Policy & Research Function and NUS, enabling knowledge exchange and capacity building in policy 
              research and analysis, particularly relevant to Asian development contexts.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}