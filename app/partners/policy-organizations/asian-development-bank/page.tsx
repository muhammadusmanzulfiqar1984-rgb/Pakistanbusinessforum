import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function ADB() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Asian Development Bank"
            lead="Regional development bank focused on reducing poverty and promoting sustainable development in Asia and the Pacific."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/policy-organizations/asian-development-bank.svg"
                  alt="ADB Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Manila, Philippines</p>
                <p><strong>Founded:</strong> 1966</p>
                <p><strong>Website:</strong> <a href="https://www.adb.org" target="_blank" rel="noopener noreferrer">www.adb.org</a></p>
              </div>
            </div>
            <p>
              The Asian Development Bank (ADB) is a regional development bank dedicated to reducing 
              poverty in Asia and the Pacific through inclusive economic growth, environmentally 
              sustainable growth, and regional integration. ADB provides loans, technical assistance, 
              grants, and equity investments to promote social and economic development.
            </p>
            <p>
              ADB assists its members and partners by providing loans, technical assistance, grants, and 
              equity investments to promote social and economic development.
            </p>
          </Section>

          <Section title="Areas of Work">
            <p>
              ADB focuses on infrastructure development, education, health, environmental sustainability, 
              regional cooperation, and private sector development. It conducts research, provides policy 
              advice, and supports capacity building in the Asia-Pacific region.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with ADB on 
              regional development research, policy analysis, and knowledge exchange programs. This 
              partnership enables engagement with regional development challenges, sharing of analytical 
              insights, and contribution to sustainable development in Asia and the Pacific.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
