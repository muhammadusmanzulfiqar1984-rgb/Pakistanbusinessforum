import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function WEF() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="World Economic Forum"
            lead="International organization for public-private cooperation, engaging political, business, and other leaders to shape global, regional, and industry agendas."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/policy-organizations/world-economic-forum.svg"
                  alt="WEF Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Geneva, Switzerland</p>
                <p><strong>Founded:</strong> 1971</p>
                <p><strong>Website:</strong> <a href="https://www.weforum.org" target="_blank" rel="noopener noreferrer">www.weforum.org</a></p>
              </div>
            </div>
            <p>
              The World Economic Forum (WEF) is an international organization for public-private 
              cooperation. The Forum engages the foremost political, business, cultural, and other 
              leaders of society to shape global, regional, and industry agendas.
            </p>
            <p>
              WEF is committed to improving the state of the world by engaging business, political, 
              academic, and other leaders of society to shape global, regional, and industry agendas.
            </p>
          </Section>

          <Section title="Areas of Work">
            <p>
              WEF focuses on global challenges including economic growth, environmental sustainability, 
              social inclusion, technology governance, and international cooperation. It conducts research, 
              organizes events, and facilitates dialogue among stakeholders.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with WEF on 
              policy research, global governance analysis, and knowledge exchange initiatives. This 
              partnership enables engagement with global policy discourse, sharing of research insights, 
              and participation in international policy dialogues.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
