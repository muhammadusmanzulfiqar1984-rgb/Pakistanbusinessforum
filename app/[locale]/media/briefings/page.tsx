import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { getTranslations } from 'next-intl/server'
import './page.css'

export default async function Briefings() {
  const t = await getTranslations('briefings')
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader title={t('title')} lead={t('lead')} />
          <Section title={t('purposeTitle')}>
            <p>{t('purposeText1')}</p>
            <p>{t('purposeText2')}</p>
          </Section>
          <Section title={t('formatsTitle')}>
            <p>{t('formatsIntro')}</p>
            <ul className="scope-list">
              <li>{t('format1')}</li>
              <li>{t('format2')}</li>
              <li>{t('format3')}</li>
              <li>{t('format4')}</li>
            </ul>
          </Section>
          <Section title={t('relevanceTitle')}>
            <p>{t('relevanceText1')}</p>
            <p>{t('relevanceText2')}</p>
          </Section>
          <Section title={t('outcomesTitle')}>
            <p>{t('outcomesText1')}</p>
            <p>{t('outcomesText2')}</p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
