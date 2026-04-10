import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { getMediaItems } from '@/lib/sanity'
import './page.css'

export default async function Publications() {
  const t = await getTranslations('publications')
  const sanityMedia = await getMediaItems()
  const publications = sanityMedia?.filter(item => item.category === 'publication') || []

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader title={t('title')} lead={t('lead')} />
          
          {/* Dynamic Sanity Data Section */}
          {publications.length > 0 && (
            <Section title="Latest Dynamic Publications">
              <CardGrid>
                {publications.map((pub) => (
                  <Link key={pub._id} href={pub.externalUrl || pub.fileUrl || '#'} className="card" target="_blank">
                    <h3>{pub.title}</h3>
                    <p>{pub.excerpt}</p>
                    <span className="small-text">{new Date(pub.publishedAt).toLocaleDateString()} • {pub.author}</span>
                  </Link>
                ))}
              </CardGrid>
            </Section>
          )}

          <Section title={t('categoriesTitle')}>
            <p>{t('categoriesText')}</p>
          </Section>
          <Section title={t('browseTitle')}>
            <CardGrid>
              <Link href="/media/publications/academic-journals" className="card">
                <h3>{t('pub1Title')}</h3><p>{t('pub1Desc')}</p>
                <span className="small-text">{t('pub1Link')}</span>
              </Link>
              <Link href="/media/publications/research-reports" className="card">
                <h3>{t('pub2Title')}</h3><p>{t('pub2Desc')}</p>
                <span className="small-text">{t('pub2Link')}</span>
              </Link>
              <Link href="/media/publications/policy-briefs" className="card">
                <h3>{t('pub3Title')}</h3><p>{t('pub3Desc')}</p>
                <span className="small-text">{t('pub3Link')}</span>
              </Link>
              <Link href="/media/publications/working-papers" className="card">
                <h3>{t('pub4Title')}</h3><p>{t('pub4Desc')}</p>
                <span className="small-text">{t('pub4Link')}</span>
              </Link>
            </CardGrid>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
