import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function StanfordUniversity() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Stanford University"
            lead="Research university with strong programs in public policy, economics, and institutional analysis."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/academic-institutions/stanford-university.svg"
                  alt="Stanford University Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Stanford, California, United States</p>
                <p><strong>Founded:</strong> 1885</p>
                <p><strong>Website:</strong> <a href="https://www.stanford.edu" target="_blank" rel="noopener noreferrer">www.stanford.edu</a></p>
              </div>
            </div>
            <p>
              Stanford University is a private research university located in Stanford, California. 
              Founded in 1885, Stanford is one of the world's leading research institutions, known 
              for its innovation and research excellence across multiple disciplines.
            </p>
            <p>
              Stanford's Freeman Spogli Institute for International Studies and Department of Economics 
              conduct extensive research in public policy, governance, economic development, and 
              institutional analysis, contributing to global policy discourse.
            </p>
          </Section>

          <Section title="Research Areas">
            <p>
              Stanford conducts extensive research in public policy, governance, economic development, 
              international relations, and institutional analysis. The university's research centers 
              produce evidence-based policy analysis and contribute significantly to academic and 
              policy debates worldwide.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with Stanford University on 
              research projects, academic exchanges, and knowledge sharing initiatives. This partnership 
              facilitates access to Stanford's research expertise, academic resources, and policy 
              analysis capabilities, enhancing collaborative research on governance, economic policy, 
              and institutional development.
            </p>
          </Section>

          <Section title="Scholarship Programme">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function maintains a special scholarship arrangement 
              with Stanford University to support exceptional researchers, policy analysts, and students 
              from Pakistan and the broader region. This programme facilitates academic and research opportunities 
              at one of the world's leading research institutions.
            </p>
            <p>
              The scholarship programme covers various areas including public policy, governance, economic 
              development, and international relations. Selected candidates receive support for research 
              projects, academic courses, and collaborative research initiatives that align with Pakistan Business 
              Forum's strategic research priorities.
            </p>
            <p>
              This special arrangement reflects the strong partnership between Pakistan Business Forum — Strategic 
              Policy & Research Function and Stanford University, enabling knowledge exchange and capacity 
              building in policy research and analysis.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}