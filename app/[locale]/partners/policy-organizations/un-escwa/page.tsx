import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function UNESCWA() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="UN Economic and Social Commission for Western Asia"
            lead="UN regional commission promoting economic and social development through regional cooperation and policy coordination."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/policy-organizations/un-escwa.svg"
                  alt="UN ESCWA Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Beirut, Lebanon</p>
                <p><strong>Founded:</strong> 1973</p>
                <p><strong>Website:</strong> <a href="https://www.unescwa.org" target="_blank" rel="noopener noreferrer">www.unescwa.org</a></p>
              </div>
            </div>
            <p>
              The UN Economic and Social Commission for Western Asia (ESCWA) is one of five regional 
              commissions under the jurisdiction of the United Nations Economic and Social Council. 
              ESCWA promotes economic and social development through regional and subregional cooperation 
              and integration.
            </p>
            <p>
              ESCWA provides a framework for the formulation and harmonization of sectoral policies for 
              member countries, a platform for congress and coordination, a home for expertise and 
              knowledge, and an information observatory.
            </p>
          </Section>

          <Section title="Areas of Work">
            <p>
              ESCWA focuses on economic development, social development, statistics, technology for 
              development, and women's empowerment. It conducts research, provides policy advice, and 
              supports capacity building in the Western Asia region.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with ESCWA on 
              regional policy research, economic analysis, and knowledge exchange programs. This 
              partnership enables engagement with regional development challenges and sharing of policy 
              insights.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
