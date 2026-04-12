import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import GalleryItem, { type GalleryEventItem } from '@/components/GalleryItem'
import { getGalleryItems } from '@/lib/sanity'
import { getTranslations } from 'next-intl/server'
import './page.css'

export const revalidate = 3600

export default async function Gallery() {
  const t = await getTranslations('gallery')
  const sanityItems = await getGalleryItems()

  let internationalEvents: GalleryEventItem[] = [
    {
      title: 'International Think Tank Summit 2025',
      location: 'Washington, D.C., United States',
      date: 'September 2025',
      type: 'Organized',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      description: 'Major international summit convening think tanks and policy organizations from around the world.'
    },
    {
      title: 'Economic Policy Research Seminar',
      location: 'London, United Kingdom',
      date: 'April 2025',
      type: 'Participated',
      image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&q=80',
      description: 'Academic seminar on fiscal policy and economic development strategies with European partners.'
    },
    {
      title: 'Regional Policy Dialogue',
      location: 'Singapore',
      date: 'May 2025',
      type: 'Organized',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
      description: 'Stakeholder dialogue on regional economic integration and trade policy across Asia-Pacific.'
    },
    {
      title: 'Governance and Institutional Reform Conference',
      location: 'Islamabad, Pakistan',
      date: 'March 2025',
      type: 'Organized',
      image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&q=80',
      description: 'Two-day conference on institutional reform and governance frameworks with regional participation.'
    },
    {
      title: 'Global Governance Symposium',
      location: 'Geneva, Switzerland',
      date: 'November 2025',
      type: 'Participated',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      description: 'International symposium on global governance challenges and multilateral cooperation.'
    },
    {
      title: 'Economic Development Workshop',
      location: 'Dubai, UAE',
      date: 'September 2025',
      type: 'Participated',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      description: 'Workshop on economic development strategies and policy frameworks for emerging markets.'
    },
    {
      title: 'Regional Cooperation Dialogue',
      location: 'Bangkok, Thailand',
      date: 'July 2025',
      type: 'Participated',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80',
      description: 'Dialogue on regional economic cooperation and institutional collaboration across South and Southeast Asia.'
    },
    {
      title: 'Policy Research Conference',
      location: 'Brussels, Belgium',
      date: 'June 2025',
      type: 'Participated',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
      description: 'Policy research conference focusing on European regulatory frameworks and economic policy.'
    },
    {
      title: 'Strategic Research Workshop',
      location: 'Karachi, Pakistan',
      date: 'June 2025',
      type: 'Organized',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80',
      description: 'Intensive workshop on policy research methodologies and evidence-based policy development.'
    },
    {
      title: 'Trade and Economic Development Forum',
      location: 'Lahore, Pakistan',
      date: 'October 2025',
      type: 'Organized',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80',
      description: 'Regional forum examining trade policy and economic development strategies with business leaders.'
    },
    {
      title: 'Delegation to Brookings Institution',
      location: 'Washington, D.C., United States',
      date: 'December 2025',
      type: 'Delegation',
      image: 'https://images.unsplash.com/photo-1580130732478-4e339fb33746?w=800&q=80',
      description: 'Research delegation discussing collaboration on governance studies and economic policy research.'
    },
    {
      title: 'Delegation to Chatham House',
      location: 'London, United Kingdom',
      date: 'October 2025',
      type: 'Delegation',
      image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80',
      description: 'Policy dialogue delegation focused on international relations and global governance challenges.'
    }
  ]

  // Override with Sanity CMS data if available
  if (sanityItems && sanityItems.length > 0) {
    internationalEvents = sanityItems.map(item => ({
      title: item.title,
      location: item.location,
      date: item.date,
      type: item.type,
      image: item.imageUrl || '',
      description: item.description,
    }))
  }

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title={t('title')}
            lead={t('lead')}
          />

          <Section title={t('aboutTitle')}>
            <p>{t('aboutText')}</p>
            <p>{t('aboutText2')}</p>
          </Section>

          <Section title={t('eventsTitle')}>
            <div className="gallery-grid">
              {internationalEvents.map((event, index) => (
                <GalleryItem key={index} event={event} />
              ))}
            </div>
          </Section>

          <Section title={t('usageTitle')}>
            <p>{t('usageText')}</p>
          </Section>

          <Section title={t('contributionsTitle')}>
            <p>{t('contributionsText')}</p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
