import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function UNESCAP() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="UN Economic and Social Commission for Asia and the Pacific"
            lead="UN regional commission promoting regional cooperation and integration for sustainable development in Asia and the Pacific."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/policy-organizations/unescap.svg"
                  alt="UN ESCAP Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Bangkok, Thailand</p>
                <p><strong>Founded:</strong> 1947</p>
                <p><strong>Website:</strong> <a href="https://www.unescap.org" target="_blank" rel="noopener noreferrer">www.unescap.org</a></p>
              </div>
            </div>
            <p>
              The UN Economic and Social Commission for Asia and the Pacific (ESCAP) is the regional 
              development arm of the United Nations for the Asia-Pacific region. ESCAP promotes regional 
              cooperation and integration for sustainable development in Asia and the Pacific.
            </p>
            <p>
              ESCAP provides a forum for its member states to promote regional cooperation and collective 
              action in pursuit of the 2030 Agenda for Sustainable Development.
            </p>
          </Section>

          <Section title="Areas of Work">
            <p>
              ESCAP focuses on macroeconomic policy, trade and investment, transport, environment and 
              development, social development, statistics, and information and communications technology. 
              It conducts research, provides policy advice, and supports capacity building in the 
              Asia-Pacific region.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with ESCAP on 
              regional policy research, economic analysis, and knowledge exchange programs. This 
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
