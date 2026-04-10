import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function OECD() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Organisation for Economic Co-operation and Development"
            lead="International organization promoting policies that improve economic and social well-being of people around the world."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/policy-organizations/oecd.svg"
                  alt="OECD Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Paris, France</p>
                <p><strong>Founded:</strong> 1961</p>
                <p><strong>Website:</strong> <a href="https://www.oecd.org" target="_blank" rel="noopener noreferrer">www.oecd.org</a></p>
              </div>
            </div>
            <p>
              The Organisation for Economic Co-operation and Development (OECD) is an intergovernmental 
              organization with 38 member countries, working to build better policies for better lives. 
              The OECD promotes policies that will improve the economic and social well-being of people 
              around the world.
            </p>
            <p>
              The OECD provides a forum in which governments can work together to share experiences and 
              seek solutions to common problems, and works with governments to understand what drives 
              economic, social, and environmental change.
            </p>
          </Section>

          <Section title="Areas of Work">
            <p>
              The OECD works on a wide range of policy areas including economic policy, education, 
              employment, environment, governance, innovation, social policy, and trade. It conducts 
              research, collects data, and provides policy recommendations to member countries.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with the OECD 
              on policy research, comparative analysis, and knowledge exchange programs. This partnership 
              enables access to OECD data and research, sharing of policy insights, and engagement with 
              international policy best practices.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
