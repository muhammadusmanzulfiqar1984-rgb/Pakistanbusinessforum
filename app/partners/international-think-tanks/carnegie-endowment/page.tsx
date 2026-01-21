import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function CarnegieEndowment() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Carnegie Endowment for International Peace"
            lead="A global think tank dedicated to advancing cooperation between nations and promoting active international engagement."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/international-think-tanks/carnegie-endowment.svg"
                  alt="Carnegie Endowment Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Washington, D.C., United States</p>
                <p><strong>Founded:</strong> 1910</p>
                <p><strong>Website:</strong> <a href="https://carnegieendowment.org" target="_blank" rel="noopener noreferrer">carnegieendowment.org</a></p>
              </div>
            </div>
            <p>
              The Carnegie Endowment for International Peace is a global network of policy research centers 
              dedicated to advancing cooperation between nations and promoting active international engagement 
              by the United States. Founded in 1910, Carnegie conducts research, engages policymakers, and 
              works with partners around the world to develop practical solutions to global problems.
            </p>
          </Section>

          <Section title="Research Areas">
            <p>
              Carnegie focuses on regional studies covering Asia, Europe, the Middle East, Russia and Eurasia, 
              and the Americas. The institution conducts research on democracy, nuclear policy, technology and 
              international affairs, and climate and energy policy. Its global network enables comparative 
              analysis and cross-regional insights.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with the Carnegie Endowment on research projects, 
              policy dialogues, and knowledge exchange initiatives. This partnership facilitates the 
              sharing of regional expertise, analytical frameworks, and policy insights relevant to 
              governance, international relations, and economic development.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
