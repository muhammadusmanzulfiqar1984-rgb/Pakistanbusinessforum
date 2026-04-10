import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function WorldBank() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="World Bank"
            lead="International financial institution providing loans and grants to governments for development projects and policy reforms."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/policy-organizations/world-bank.svg"
                  alt="World Bank Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Washington, D.C., United States</p>
                <p><strong>Founded:</strong> 1944</p>
                <p><strong>Website:</strong> <a href="https://www.worldbank.org" target="_blank" rel="noopener noreferrer">www.worldbank.org</a></p>
              </div>
            </div>
            <p>
              The World Bank is an international financial institution that provides loans and grants to 
              governments of low and middle-income countries for the purpose of pursuing capital projects. 
              It comprises two institutions: the International Bank for Reconstruction and Development 
              (IBRD) and the International Development Association (IDA).
            </p>
            <p>
              The World Bank's mission is to end extreme poverty and promote shared prosperity in a 
              sustainable way. It provides financial and technical assistance to developing countries 
              for development programs and projects.
            </p>
          </Section>

          <Section title="Areas of Work">
            <p>
              The World Bank focuses on various development areas including education, health, infrastructure, 
              agriculture, environmental sustainability, and governance. It conducts research, provides 
              policy advice, and supports capacity building in developing countries.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with the World Bank 
              on research initiatives, policy analysis, and knowledge exchange programs. This partnership 
              enables the sharing of analytical insights, research methodologies, and policy perspectives 
              related to economic development, governance, and institutional capacity building.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
