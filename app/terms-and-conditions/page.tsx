import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function TermsAndConditions() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Terms and conditions"
            lead={
              <>
                These terms govern use of the Pakistan Business Forum<span className="trademark">®</span> website and its published materials.
              </>
            }
          />

          <Section title="Use of Content">
            <p>
              Materials are provided for informational and academic purposes. Content may be
              cited with appropriate attribution and without alteration that misrepresents
              context or meaning. Commercial use requires prior written permission.
            </p>
          </Section>

          <Section title="Institutional Neutrality">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> publishes research and analysis in a neutral, non-advocacy
              capacity. Materials do not constitute legal advice, regulatory advisory, or formal
              policy mandate unless explicitly stated in writing.
            </p>
          </Section>

          <Section title="Site Integrity">
            <p>
              Users may not attempt to disrupt site functionality, access restricted systems, or
              misuse content. We reserve the right to update, remove, or amend materials to ensure
              accuracy and institutional integrity.
            </p>
          </Section>

          <Section title="Updates">
            <p>
              Terms may be updated periodically. Continued use of the site indicates acceptance
              of the most recent version of these terms.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
