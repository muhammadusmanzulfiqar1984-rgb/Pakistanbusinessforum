import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function IMF() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="International Monetary Fund"
            lead="International organization working to foster global monetary cooperation, secure financial stability, and promote sustainable economic growth."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/policy-organizations/international-monetary-fund.svg"
                  alt="IMF Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Washington, D.C., United States</p>
                <p><strong>Founded:</strong> 1944</p>
                <p><strong>Website:</strong> <a href="https://www.imf.org" target="_blank" rel="noopener noreferrer">www.imf.org</a></p>
              </div>
            </div>
            <p>
              The International Monetary Fund (IMF) is an international organization that works to foster 
              global monetary cooperation, secure financial stability, facilitate international trade, 
              promote high employment and sustainable economic growth, and reduce poverty around the world.
            </p>
            <p>
              The IMF provides policy advice, financial assistance, and capacity development support to 
              help member countries achieve macroeconomic stability and sustainable growth.
            </p>
          </Section>

          <Section title="Areas of Work">
            <p>
              The IMF focuses on macroeconomic and financial stability, fiscal policy, monetary policy, 
              exchange rate policies, and structural reforms. It conducts surveillance, provides financial 
              assistance, and offers technical assistance and training to member countries.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with the IMF 
              on economic policy research, macroeconomic analysis, and knowledge exchange initiatives. 
              This partnership facilitates the sharing of analytical insights, research methodologies, 
              and policy perspectives on economic stability and development.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
