import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function ColumbiaUniversity() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Columbia University"
            lead="Research institution with extensive programs in public affairs, economic policy, and governance studies."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/academic-institutions/columbia-university.svg"
                  alt="Columbia University Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> New York, United States</p>
                <p><strong>Founded:</strong> 1754</p>
                <p><strong>Website:</strong> <a href="https://www.columbia.edu" target="_blank" rel="noopener noreferrer">www.columbia.edu</a></p>
              </div>
            </div>
            <p>
              Columbia University is a private Ivy League research university located in New York City. 
              Founded in 1754, Columbia is one of the oldest institutions of higher learning in the 
              United States and a leading research university.
            </p>
            <p>
              Columbia's School of International and Public Affairs and Department of Economics are 
              globally recognized for their research and teaching in public policy, governance, 
              economic analysis, and international affairs, producing influential policy research.
            </p>
          </Section>

          <Section title="Research Areas">
            <p>
              Columbia conducts extensive research in public policy, governance, economic development, 
              international relations, and institutional analysis. The university's research centers 
              produce evidence-based policy analysis and contribute significantly to global policy 
              discourse.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with Columbia University on 
              research projects, academic exchanges, and knowledge sharing initiatives. This partnership 
              facilitates access to Columbia's research expertise, academic resources, and policy 
              analysis capabilities, enhancing collaborative research on governance, economic policy, 
              and institutional development.
            </p>
          </Section>

          <Section title="Scholarship Programme">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function maintains a special scholarship arrangement 
              with Columbia University to support exceptional researchers, policy analysts, and students 
              from Pakistan and the broader region. This programme facilitates academic and research opportunities 
              at one of the world's leading research institutions.
            </p>
            <p>
              The scholarship programme covers various areas including public affairs, economic policy, 
              governance studies, and international affairs. Selected candidates receive support for research 
              projects, academic courses, and collaborative research initiatives that align with Pakistan Business 
              Forum's strategic research priorities.
            </p>
            <p>
              This special arrangement reflects the strong partnership between Pakistan Business Forum — Strategic 
              Policy & Research Function and Columbia University, enabling knowledge exchange and capacity 
              building in policy research and analysis.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}