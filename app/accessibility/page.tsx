import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function Accessibility() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Accessibility"
            lead={
              <>
                Pakistan Business Forum<span className="trademark">®</span> is committed to providing a website that is accessible, inclusive, and usable for a wide range of audiences, including users with disabilities.
              </>
            }
          />

          <Section title="Accessibility Commitment">
            <p>
              We aim to align our digital experience with recognized accessibility standards and
              to maintain clarity, legibility, and navigational consistency across the site.
              Our approach emphasizes semantic structure, sufficient contrast, and predictable
              interaction patterns to support diverse user needs.
            </p>
          </Section>

          <Section title="Ongoing Improvements">
            <p>
              Accessibility is an ongoing process. We regularly review content, templates, and
              interaction patterns to improve usability and reduce barriers. Where issues are
              identified, we prioritize updates that improve equitable access to information.
            </p>
          </Section>

          <Section title="Support">
            <p>
              If you encounter accessibility barriers or require information in an alternative
              format, please contact us so we can provide assistance and improve the experience.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
