import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import GalleryItem, { type GalleryEventItem } from '@/components/GalleryItem'
import { getGalleryItems } from '@/lib/sanity'
import './page.css'

export const revalidate = 3600

export default async function Gallery() {
  const sanityItems = await getGalleryItems()

  let internationalEvents: GalleryEventItem[] = [
    {
      title: 'International Think Tank Summit 2025',
      location: 'Washington, D.C., United States',
      date: 'September 2025',
      type: 'Organized',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
      description: 'Major international summit convening think tanks and policy organizations from around the world.'
    },
    {
      title: 'Economic Policy Research Seminar',
      location: 'London, United Kingdom',
      date: 'April 2025',
      type: 'Participated',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      description: 'Academic seminar on fiscal policy and economic development strategies with European partners.'
    },
    {
      title: 'Regional Policy Dialogue',
      location: 'Singapore',
      date: 'May 2025',
      type: 'Organized',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop',
      description: 'Stakeholder dialogue on regional economic integration and trade policy across Asia-Pacific.'
    },
    {
      title: 'Governance and Institutional Reform Conference',
      location: 'Islamabad, Pakistan',
      date: 'March 2025',
      type: 'Organized',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
      description: 'Two-day conference on institutional reform and governance frameworks with regional participation.'
    },
    {
      title: 'Global Governance Symposium',
      location: 'Geneva, Switzerland',
      date: 'November 2025',
      type: 'Participated',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      description: 'International symposium on global governance challenges and multilateral cooperation.'
    },
    {
      title: 'Economic Development Workshop',
      location: 'Dubai, UAE',
      date: 'September 2025',
      type: 'Participated',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
      description: 'Workshop on economic development strategies and policy frameworks for emerging markets.'
    },
    {
      title: 'Regional Cooperation Dialogue',
      location: 'Bangkok, Thailand',
      date: 'July 2025',
      type: 'Participated',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
      description: 'Dialogue on regional economic cooperation and institutional collaboration across South and Southeast Asia.'
    },
    {
      title: 'Policy Research Conference',
      location: 'Brussels, Belgium',
      date: 'June 2025',
      type: 'Participated',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      description: 'Policy research conference focusing on European regulatory frameworks and economic policy.'
    },
    {
      title: 'Strategic Research Workshop',
      location: 'Karachi, Pakistan',
      date: 'June 2025',
      type: 'Organized',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
      description: 'Intensive workshop on policy research methodologies and evidence-based policy development.'
    },
    {
      title: 'Trade and Economic Development Forum',
      location: 'Lahore, Pakistan',
      date: 'October 2025',
      type: 'Organized',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop',
      description: 'Regional forum examining trade policy and economic development strategies with business leaders.'
    },
    {
      title: 'Delegation to Brookings Institution',
      location: 'Washington, D.C., United States',
      date: 'December 2025',
      type: 'Delegation',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
      description: 'Research delegation discussing collaboration on governance studies and economic policy research.'
    },
    {
      title: 'Delegation to Chatham House',
      location: 'London, United Kingdom',
      date: 'October 2025',
      type: 'Delegation',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
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
            title="Gallery"
            lead={
              <>
                Visual documentation of events, activities, partnerships, and institutional milestones of Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function.
              </>
            }
          />

          <Section title="About Our Gallery">
            <p>
                  The gallery showcases visual documentation of Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function's
              activities, events, partnerships, and institutional milestones. These images reflect the organization's 
              engagement with policy research, international collaboration, and knowledge dissemination activities.
            </p>
            <p>
              All photographs and visual materials are maintained for institutional documentation purposes and 
              represent the organization's commitment to transparency and accountability in its research and 
              policy engagement activities.
            </p>
          </Section>

          <Section title="International Events & Seminars">
            <p>
              Visual documentation of international events, conferences, seminars, and delegations where 
                  Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function has either organized or
              participated in policy discourse and knowledge exchange activities.
            </p>
            <div className="gallery-grid">
              {internationalEvents.map((event, index) => (
                <GalleryItem key={index} event={event} />
              ))}
            </div>
          </Section>

          <Section title="Usage Rights">
            <p>
                  All images in this gallery are the property of Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function.
              Images may be used for academic, research, or journalistic purposes with proper attribution. For commercial 
              use or reproduction requests, please contact our communications team.
            </p>
          </Section>

          <Section title="Contributions">
            <p>
                  If you have photographs or visual materials from Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function
              events or activities that you would like to contribute to the gallery, please contact our team through the 
              contact page. All contributions are subject to review and approval.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
