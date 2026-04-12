import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import { getMediaItems } from '@/lib/sanity'
import { getTranslations } from 'next-intl/server'
import './page.css'

export const revalidate = 3600

export default async function Media() {
  const [mediaItems, t, tc] = await Promise.all([
    getMediaItems(),
    getTranslations('media'),
    getTranslations('common'),
  ])
  const hasItems = mediaItems && mediaItems.length > 0

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container media-page">
          <div className="media-hero-banner" aria-hidden="true" />
          <PageHeader
            title={t('title')}
            lead={t('lead')}
          />

          <Section title={t('approachTitle')}>
            <p>{t('approachText')}</p>
          </Section>

          {hasItems && (
            <Section title={t('latestTitle')}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {mediaItems!.slice(0, 6).map(item => (
                  <div key={item._id} style={{ borderLeft: '3px solid #C0C0C0', paddingLeft: '16px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline', marginBottom: '4px' }}>
                      <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0f2463', fontWeight: 600 }}>
                        {item.category === 'knowledge-output' ? t('catKnowledgeOutput') : item.category === 'briefing' ? t('catBriefing') : t('catPublication')}
                      </span>
                      {item.publishedAt && (
                        <span style={{ fontSize: '12px', color: '#888' }}>{item.publishedAt}</span>
                      )}
                    </div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '16px' }}>
                      {(item.fileUrl || item.externalUrl) ? (
                        <a href={item.fileUrl || item.externalUrl!} target="_blank" rel="noopener noreferrer"
                          style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                          {item.title}
                        </a>
                      ) : item.title}
                    </h4>
                    {item.author && <p style={{ margin: '0 0 4px', fontSize: '13px', color: '#666' }}>{item.author}</p>}
                    {item.excerpt && <p style={{ margin: 0, fontSize: '14px', color: '#444', lineHeight: 1.5 }}>{item.excerpt}</p>}
                  </div>
                ))}
              </div>
            </Section>
          )}

          <Section title={t('productsTitle')}>
            <CardGrid>
              <Link href="/media/publications" className="card">
                <h3>{t('p1Title')}</h3>
                <p>{t('p1Desc')}</p>
                <span className="small-text">{tc('viewPublications')}</span>
              </Link>
              <Link href="/media/briefings" className="card">
                <h3>{t('p2Title')}</h3>
                <p>{t('p2Desc')}</p>
                <span className="small-text">{tc('viewBriefings')}</span>
              </Link>
              <Link href="/media/knowledge-outputs" className="card">
                <h3>{t('p3Title')}</h3>
                <p>{t('p3Desc')}</p>
                <span className="small-text">{tc('learnMore')}</span>
              </Link>
            </CardGrid>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
