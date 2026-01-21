import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Image from 'next/image'
import './page.css'

export default function PetersonInstitute() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Peterson Institute for International Economics"
            lead="A private, nonprofit research institution focused on international economic policy research and analysis."
          />

          <Section title="About">
            <div className="partner-detail">
              <div className="partner-logo-section">
                <Image
                  src="/images/partners/international-think-tanks/peterson-institute.svg"
                  alt="Peterson Institute Logo"
                  width={180}
                  height={180}
                  className="partner-logo-large"
                />
              </div>
              <div className="partner-info">
                <p><strong>Location:</strong> Washington, D.C., United States</p>
                <p><strong>Founded:</strong> 1981</p>
                <p><strong>Website:</strong> <a href="https://www.piie.com" target="_blank" rel="noopener noreferrer">www.piie.com</a></p>
              </div>
            </div>
            <p>
              The Peterson Institute for International Economics is a private, nonprofit, nonpartisan 
              research institution devoted to the study of international economic policy.
            </p>
          </Section>

          <Section title={
            <>
              Partnership with Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
            </>
          }>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with the Peterson Institute on economic policy research, 
              trade analysis, and international economic development studies.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
