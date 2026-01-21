import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function PrivacyNotice() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Privacy notice"
            lead={
              <>
                This notice outlines how Pakistan Business Forum<span className="trademark">®</span> handles personal information in a limited, responsible, and institutional manner.
              </>
            }
          />

          <Section title="Information We Collect">
            <p>
              We collect only the information necessary to respond to inquiries, provide
              requested materials, and maintain institutional communication. Information may
              include names, organizational details, and contact information provided by you.
            </p>
          </Section>

          <Section title="Use of Information">
            <p>
              Information is used solely for institutional correspondence, research-related
              engagement, and administrative purposes. We do not sell or trade personal data,
              and we do not use it for commercial profiling.
            </p>
          </Section>

          <Section title="Data Security and Retention">
            <p>
              Reasonable safeguards are maintained to protect information against unauthorized
              access or disclosure. Retention periods are limited to what is necessary for
              institutional record-keeping and compliance needs.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              If you have questions about this notice or wish to update your information, please
              contact the organization through the official contact channel listed on the site.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
