'use client'

import { useTranslations } from 'next-intl'
import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import PageTabs from '@/components/PageTabs'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import LogoSlider from '@/components/LogoSlider'
import GalleryItem, { type GalleryEventItem } from '@/components/GalleryItem'
import Link from 'next/link'
import './page.css'

const policyLogos = [
  { src: '/images/partners/policy-organizations/world-bank.svg',           alt: 'World Bank' },
  { src: '/images/partners/policy-organizations/undp.svg',                 alt: 'UNDP' },
  { src: '/images/partners/policy-organizations/international-monetary-fund.svg', alt: 'IMF' },
  { src: '/images/partners/policy-organizations/oecd.svg',                 alt: 'OECD' },
  { src: '/images/partners/policy-organizations/asian-development-bank.svg', alt: 'Asian Development Bank' },
  { src: '/images/partners/policy-organizations/world-economic-forum.svg', alt: 'World Economic Forum' },
  { src: '/images/partners/policy-organizations/un-escwa.svg',             alt: 'UN ESCWA' },
  { src: '/images/partners/policy-organizations/unescap.svg',              alt: 'UNESCAP' },
]

const academicLogos = [
  { src: '/images/partners/academic-institutions/oxford-university.svg',    alt: 'University of Oxford' },
  { src: '/images/partners/academic-institutions/cambridge-university.svg', alt: 'University of Cambridge' },
  { src: '/images/partners/academic-institutions/harvard-university.svg',   alt: 'Harvard University' },
  { src: '/images/partners/academic-institutions/lse.svg',                  alt: 'LSE' },
  { src: '/images/partners/academic-institutions/stanford-university.svg',  alt: 'Stanford University' },
  { src: '/images/partners/academic-institutions/columbia-university.svg',  alt: 'Columbia University' },
  { src: '/images/partners/academic-institutions/georgetown-university.svg',alt: 'Georgetown University' },
  { src: '/images/partners/academic-institutions/nus.svg',                  alt: 'NUS' },
  { src: '/images/partners/academic-institutions/anu.svg',                  alt: 'ANU' },
]

const thinkTankLogos = [
  { src: '/images/partners/international-think-tanks/brookings-institution.svg', alt: 'Brookings Institution' },
  { src: '/images/partners/international-think-tanks/chatham-house.svg',         alt: 'Chatham House' },
  { src: '/images/partners/international-think-tanks/carnegie-endowment.svg',    alt: 'Carnegie Endowment' },
  { src: '/images/partners/international-think-tanks/csis.svg',                  alt: 'CSIS' },
  { src: '/images/partners/international-think-tanks/peterson-institute.svg',    alt: 'Peterson Institute' },
  { src: '/images/partners/international-think-tanks/cato-institute.svg',        alt: 'Cato Institute' },
]

export default function Partners() {
  const t = useTranslations('partners')
  const tg = useTranslations('gallery')

  const partnerCategories = [
    { href: '/partners/international-think-tanks', title: t('p1Title'), description: t('p1Desc') },
    { href: '/partners/academic-institutions', title: t('p2Title'), description: t('p2Desc') },
    { href: '/partners/policy-organizations', title: t('p3Title'), description: t('p3Desc') },
  ]

  const upcomingEvents = [
    { title: 'Governance and Institutional Reform Conference 2026', date: 'March 15-16, 2026', location: 'Islamabad, Pakistan', description: 'A two-day conference bringing together policymakers, researchers, and academics to discuss institutional reform and governance frameworks.', type: 'Conference' },
    { title: 'Economic Policy Research Seminar', date: 'April 8, 2026', location: 'London, United Kingdom', description: 'An academic seminar presenting recent research findings on fiscal policy, monetary frameworks, and economic development strategies.', type: 'Seminar' },
    { title: 'Regional Policy Dialogue: Asia-Pacific', date: 'May 20-21, 2026', location: 'Singapore', description: 'Stakeholder dialogue focusing on regional economic integration, trade policy, and institutional cooperation across Asia-Pacific economies.', type: 'Dialogue' },
    { title: 'International Think Tank Summit', date: 'September 18-20, 2026', location: 'Washington, D.C., United States', description: 'Major international summit convening think tanks, research institutions, and policy organizations from around the world.', type: 'Summit' },
    { title: 'Global Governance Symposium', date: 'November 14-16, 2026', location: 'Geneva, Switzerland', description: 'International symposium on global governance challenges, multilateral cooperation, and institutional reform.', type: 'Symposium' },
  ]

  const delegations = [
    { title: 'Delegation to Carnegie Endowment', date: 'April 15-18, 2026', location: 'Washington, D.C.', description: 'Research collaboration and policy dialogue on international affairs and governance.' },
    { title: 'Delegation to Regional Partners', date: 'June 20-25, 2026', location: 'Jakarta, Indonesia', description: 'Strengthen partnerships with think tanks and policy institutions in Southeast Asia.' },
    { title: 'Delegation to European Think Tanks', date: 'August 10-15, 2026', location: 'Berlin, Germany', description: 'Comparative governance and policy analysis with European think tanks.' },
  ]

  const galleryEvents: GalleryEventItem[] = [
    { title: 'International Think Tank Summit 2025', location: 'Washington, D.C.', date: 'September 2025', type: 'Organized', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', description: 'Major summit convening think tanks and policy organizations from over 30 countries.' },
    { title: 'Economic Policy Research Seminar', location: 'London, United Kingdom', date: 'April 2025', type: 'Participated', image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&q=80', description: 'Academic seminar on fiscal policy and economic development strategies with European partners.' },
    { title: 'Regional Policy Dialogue', location: 'Singapore', date: 'May 2025', type: 'Organized', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80', description: 'Stakeholder dialogue on regional economic integration and trade policy across Asia-Pacific.' },
    { title: 'Governance Reform Conference', location: 'Islamabad, Pakistan', date: 'March 2025', type: 'Organized', image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&q=80', description: 'Two-day conference on institutional reform and governance frameworks with 200+ participants.' },
  ]

  const tabs = [
    {
      id: 'partners',
      label: 'Partners',
      content: (
        <>
          <Section title={t('categoriesTitle')}>
            <CardGrid>
              {partnerCategories.map((category) => (
                <Link key={category.href} href={category.href} className="card">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <span className="small-text">{t('viewPartners')}</span>
                </Link>
              ))}
            </CardGrid>
          </Section>
          <Section title="Policy Organisations">
            <LogoSlider variant="light" label="International Policy Bodies" logos={policyLogos} />
          </Section>
          <Section title="Academic Institutions">
            <LogoSlider variant="dark" label="Affiliated Universities" logos={academicLogos} />
          </Section>
          <Section title="International Think Tanks">
            <LogoSlider variant="gold" label="Global Research Partners" logos={thinkTankLogos} />
          </Section>
        </>
      )
    },
    {
      id: 'events',
      label: 'Events & Delegations',
      content: (
        <>
          <Section title="2026 Event Calendar">
            <CardGrid>
              {upcomingEvents.map((event, index) => (
                <div key={index} className="card event-card">
                  <div className="event-type">{event.type}</div>
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <p className="event-date"><strong>Date:</strong> {event.date}</p>
                    <p className="event-location"><strong>Location:</strong> {event.location}</p>
                  </div>
                  <p>{event.description}</p>
                </div>
              ))}
            </CardGrid>
          </Section>
          <Section title="Upcoming Delegations">
            <CardGrid>
              {delegations.map((d, index) => (
                <div key={index} className="card event-card">
                  <div className="event-type">Delegation</div>
                  <h3>{d.title}</h3>
                  <div className="event-meta">
                    <p className="event-date"><strong>Date:</strong> {d.date}</p>
                    <p className="event-location"><strong>Location:</strong> {d.location}</p>
                  </div>
                  <p>{d.description}</p>
                </div>
              ))}
            </CardGrid>
          </Section>
        </>
      )
    },
    {
      id: 'gallery',
      label: 'Gallery',
      content: (
        <Section title={tg('eventsTitle')}>
          <div className="gallery-grid">
            {galleryEvents.map((event, index) => (
              <GalleryItem key={index} event={event} />
            ))}
          </div>
        </Section>
      )
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container partners-page">
          <div className="partners-hero-banner" aria-hidden="true" />
          <PageHeader title="Partners & Events" lead={t('lead')} eyebrow="PARTNERSHIPS" />
          <PageTabs tabs={tabs} />
        </div>
      </main>
      <Footer />
    </>
  )
}
