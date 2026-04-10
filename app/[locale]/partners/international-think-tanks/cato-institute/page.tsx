import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function CatoInstitute() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Cato Institute"
            lead="A public policy research organization dedicated to the principles of individual liberty, limited government, and free markets."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/international-think-tanks/cato-institute.svg"
                  alt="Cato Institute Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Washington, D.C., United States</p>
                <p><strong>Founded:</strong> 1977</p>
                <p><strong>Website:</strong> <a href="https://www.cato.org" target="_blank" rel="noopener noreferrer">www.cato.org</a></p>
              </div>
            </div>
            <p>
              The Cato Institute is a public policy research organization dedicated to the principles of 
              individual liberty, limited government, free markets, and peace.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with the Cato Institute on research projects related 
              to economic policy, governance, and institutional development.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
