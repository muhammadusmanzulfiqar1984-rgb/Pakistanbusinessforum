import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function CSIS() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Center for Strategic and International Studies"
            lead="A bipartisan policy research organization focusing on defense, security, international relations, and economic policy."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/international-think-tanks/csis.svg"
                  alt="CSIS Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Washington, D.C., United States</p>
                <p><strong>Founded:</strong> 1962</p>
                <p><strong>Website:</strong> <a href="https://www.csis.org" target="_blank" rel="noopener noreferrer">www.csis.org</a></p>
              </div>
            </div>
            <p>
              The Center for Strategic and International Studies is a bipartisan, nonprofit policy research 
              organization dedicated to advancing practical ideas to address the world's greatest challenges.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with CSIS on research initiatives and policy analysis 
              focusing on strategic studies, international relations, and economic policy.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
