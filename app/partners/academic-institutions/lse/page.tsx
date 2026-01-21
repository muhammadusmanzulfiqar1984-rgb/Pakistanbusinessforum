import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function LSE() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="London School of Economics and Political Science"
            lead="Leading social science institution specializing in economics, public policy, and governance research."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/academic-institutions/lse.svg"
                  alt="LSE Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> London, United Kingdom</p>
                <p><strong>Founded:</strong> 1895</p>
                <p><strong>Website:</strong> <a href="https://www.lse.ac.uk" target="_blank" rel="noopener noreferrer">www.lse.ac.uk</a></p>
              </div>
            </div>
            <p>
              The London School of Economics and Political Science (LSE) is a public research university 
              located in London, England. Founded in 1895, LSE is one of the world's leading social 
              science institutions, specializing in economics, politics, sociology, and public policy.
            </p>
            <p>
              LSE's Department of Economics, Department of Government, and public policy programs are 
              globally recognized for their research excellence and contributions to policy analysis, 
              economic research, and governance studies.
            </p>
          </Section>

          <Section title="Research Areas">
            <p>
              LSE conducts extensive research in economics, public policy, governance, political science, 
              and international relations. The school's research centers produce influential policy 
              analysis and contribute significantly to academic and policy debates on global challenges.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with LSE on research projects, 
              academic exchanges, and knowledge sharing initiatives. This partnership facilitates access 
              to LSE's research expertise, academic resources, and policy analysis capabilities, 
              enhancing collaborative research on governance, economic policy, and institutional development.
            </p>
          </Section>

          <Section title="Scholarship Programme">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function maintains a special scholarship arrangement 
              with the London School of Economics and Political Science to support exceptional researchers, 
              policy analysts, and students from Pakistan and the broader region. This programme facilitates 
              academic and research opportunities at one of the world's leading social science institutions.
            </p>
            <p>
              The scholarship programme covers various areas including economics, public policy, governance, 
              and political science. Selected candidates receive support for research projects, academic 
              courses, and collaborative research initiatives that align with Pakistan Business Forum<span className="trademark">®</span>'s 
              strategic research priorities.
            </p>
            <p>
              This special arrangement reflects the strong partnership between Pakistan Business Forum — Strategic 
              Policy & Research Function and LSE, enabling knowledge exchange and capacity building in policy 
              research and analysis.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}