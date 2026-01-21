import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function CookieSettings() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Cookie settings"
            lead={
              <>
                This page explains how cookies and similar technologies are used on the Pakistan Business Forum<span className="trademark">®</span> website and how preferences can be managed.
              </>
            }
          />

          <Section title="Use of Cookies">
            <p>
              Cookies help us understand how the website is used, maintain site functionality,
              and support a consistent user experience. We use cookies in a limited and
              responsible manner, aligned with institutional information practices.
            </p>
          </Section>

          <Section title="Preference Management">
            <p>
              Where applicable, you may adjust cookie preferences through your browser settings.
              The site will continue to function with essential cookies enabled by default, while
              non-essential cookies may be disabled according to your preferences.
            </p>
          </Section>

          <Section title="Updates">
            <p>
              Cookie practices may be updated periodically to reflect changes in systems or
              regulatory requirements. Any material adjustments will be reflected on this page.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
