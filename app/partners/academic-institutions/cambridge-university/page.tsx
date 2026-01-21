import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function CambridgeUniversity() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="University of Cambridge"
            lead="Prestigious research institution with strong focus on policy analysis, economic research, and institutional studies."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/academic-institutions/cambridge-university.svg"
                  alt="University of Cambridge Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Cambridge, United Kingdom</p>
                <p><strong>Founded:</strong> 1209</p>
                <p><strong>Website:</strong> <a href="https://www.cam.ac.uk" target="_blank" rel="noopener noreferrer">www.cam.ac.uk</a></p>
              </div>
            </div>
            <p>
              The University of Cambridge is a collegiate research university in Cambridge, England. Founded 
              in 1209, Cambridge is one of the world's oldest and most prestigious universities. The university 
              is renowned for its research excellence in economics, public policy, and governance studies.
            </p>
            <p>
              Cambridge's Faculty of Economics and Department of Politics and International Studies conduct 
              cutting-edge research in economic policy, governance, and institutional analysis, contributing 
              to academic and policy debates worldwide.
            </p>
          </Section>

          <Section title="Research Areas">
            <p>
              Cambridge conducts extensive research in economic policy, public administration, governance 
              studies, international relations, and institutional economics. The university's research 
              centers produce influential policy analysis and contribute to evidence-based policy 
              development globally.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with the University of Cambridge 
              on research initiatives, academic exchanges, and knowledge sharing programs. This partnership 
              enables access to Cambridge's research expertise, facilitates collaborative research projects, 
              and supports knowledge exchange on governance, economic policy, and institutional development.
            </p>
          </Section>

          <Section title="Scholarship Programme">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function maintains a special scholarship arrangement 
              with the University of Cambridge to support exceptional researchers, policy analysts, and students 
              from Pakistan and the broader region. This programme facilitates academic and research opportunities 
              at one of the world's most prestigious institutions.
            </p>
            <p>
              The scholarship programme covers various areas including economic policy, public administration, 
              governance studies, and institutional economics. Selected candidates receive support for research 
              projects, academic courses, and collaborative research initiatives that align with Pakistan Business 
              Forum's strategic research priorities.
            </p>
            <p>
              This special arrangement reflects the strong partnership between Pakistan Business Forum<span className="trademark">®</span> — Strategic 
              Policy & Research Function and the University of Cambridge, enabling knowledge exchange and capacity 
              building in policy research and analysis.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}