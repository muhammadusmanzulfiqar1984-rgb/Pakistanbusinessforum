import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function ChathamHouse() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Chatham House"
            lead="The Royal Institute of International Affairs, providing independent analysis on global affairs, policy challenges, and governance issues."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/international-think-tanks/chatham-house.svg"
                  alt="Chatham House Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> London, United Kingdom</p>
                <p><strong>Founded:</strong> 1920</p>
                <p><strong>Website:</strong> <a href="https://www.chathamhouse.org" target="_blank" rel="noopener noreferrer">www.chathamhouse.org</a></p>
              </div>
            </div>
            <p>
              Chatham House, officially known as the Royal Institute of International Affairs, is an 
              independent policy institute based in London. Founded in 1920, Chatham House provides 
              independent analysis, informed debate, and influential ideas on how to build a sustainably 
              secure, prosperous, and just world.
            </p>
          </Section>

          <Section title="Research Areas">
            <p>
              Chatham House conducts research across areas including international security, global economy, 
              energy and environment, health, and regional studies. The institute's work addresses critical 
              challenges such as climate change, conflict resolution, economic policy, and governance reform. 
              It operates under the Chatham House Rule, facilitating open and candid discussion.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with Chatham House on research projects, policy analysis, 
              and knowledge sharing initiatives. This partnership enables the exchange of analytical insights, 
              research methodologies, and policy perspectives on governance, economic development, and 
              international relations.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
