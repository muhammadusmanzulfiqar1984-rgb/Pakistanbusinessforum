import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function UNDP() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="United Nations Development Programme"
            lead="UN agency working to eradicate poverty and reduce inequalities through sustainable development and policy support."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/policy-organizations/undp.svg"
                  alt="UNDP Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> New York, United States</p>
                <p><strong>Founded:</strong> 1965</p>
                <p><strong>Website:</strong> <a href="https://www.undp.org" target="_blank" rel="noopener noreferrer">www.undp.org</a></p>
              </div>
            </div>
            <p>
              The United Nations Development Programme (UNDP) is the UN's global development network, 
              advocating for change and connecting countries to knowledge, experience, and resources to 
              help people build a better life. UNDP works in nearly 170 countries and territories, 
              helping to achieve the eradication of poverty and the reduction of inequalities and exclusion.
            </p>
            <p>
              UNDP helps countries develop policies, leadership skills, partnering abilities, institutional 
              capabilities, and build resilience to sustain development results.
            </p>
          </Section>

          <Section title="Areas of Work">
            <p>
              UNDP focuses on sustainable development, democratic governance and peacebuilding, climate 
              and disaster resilience, and economic development. It provides policy advice, technical 
              assistance, and capacity development support to help countries achieve the Sustainable 
              Development Goals.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with UNDP on 
              development research, policy analysis, and capacity building initiatives. This partnership 
              enables engagement with development challenges, sharing of research findings, and 
              contribution to sustainable development goals.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
