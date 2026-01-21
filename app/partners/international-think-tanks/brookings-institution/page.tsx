import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function BrookingsInstitution() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Brookings Institution"
            lead="A leading think tank conducting independent research and policy analysis on governance, economics, foreign policy, and global development."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/international-think-tanks/brookings-institution.svg"
                  alt="Brookings Institution Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Washington, D.C., United States</p>
                <p><strong>Founded:</strong> 1916</p>
                <p><strong>Website:</strong> <a href="https://www.brookings.edu" target="_blank" rel="noopener noreferrer">www.brookings.edu</a></p>
              </div>
            </div>
            <p>
              The Brookings Institution is a nonprofit public policy organization based in Washington, D.C. 
              Founded in 1916, Brookings conducts high-quality, independent research and provides innovative, 
              practical recommendations that advance democracy, promote economic and social welfare, and secure 
              a more open, safe, prosperous, and cooperative international system.
            </p>
          </Section>

          <Section title="Research Areas">
            <p>
              Brookings focuses on five areas of research: economic studies, foreign policy, governance studies, 
              metropolitan policy, and global economy and development. The institution's work addresses critical 
              issues facing the United States and the world, providing policymakers with insights and 
              recommendations grounded in rigorous analysis.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with the Brookings Institution on research initiatives, 
              policy analysis, and knowledge exchange programs. This partnership enables the sharing of 
              analytical methodologies, research findings, and policy insights related to governance, 
              economic development, and institutional capacity building.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
