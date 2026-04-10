import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import LogoSlider from '@/components/LogoSlider'

const policyLogos = [
  { src: '/images/partners/policy-organizations/world-bank.svg',                   alt: 'World Bank' },
  { src: '/images/partners/policy-organizations/undp.svg',                         alt: 'UNDP' },
  { src: '/images/partners/policy-organizations/international-monetary-fund.svg',  alt: 'IMF' },
  { src: '/images/partners/policy-organizations/oecd.svg',                         alt: 'OECD' },
  { src: '/images/partners/policy-organizations/asian-development-bank.svg',       alt: 'Asian Development Bank' },
  { src: '/images/partners/policy-organizations/world-economic-forum.svg',         alt: 'World Economic Forum' },
  { src: '/images/partners/policy-organizations/un-escwa.svg',                     alt: 'UN ESCWA' },
  { src: '/images/partners/policy-organizations/unescap.svg',                      alt: 'UNESCAP' },
]
import Link from 'next/link'
import './page.css'

export default function PolicyOrganizations() {
  const policyOrganizations = [
    {
      slug: 'world-bank',
      title: 'World Bank',
      location: 'Washington, D.C., United States',
      description: 'International financial institution providing loans and grants to governments for development projects and policy reforms.',
      website: 'https://www.worldbank.org',
      logo: 'https://www.google.com/s2/favicons?domain=worldbank.org&sz=128'
    },
    {
      slug: 'international-monetary-fund',
      title: 'International Monetary Fund',
      location: 'Washington, D.C., United States',
      description: 'International organization working to foster global monetary cooperation, secure financial stability, and promote sustainable economic growth.',
      website: 'https://www.imf.org',
      logo: 'https://www.google.com/s2/favicons?domain=imf.org&sz=128'
    },
    {
      slug: 'oecd',
      title: 'Organisation for Economic Co-operation and Development',
      location: 'Paris, France',
      description: 'International organization promoting policies that improve economic and social well-being of people around the world.',
      website: 'https://www.oecd.org',
      logo: 'https://www.google.com/s2/favicons?domain=oecd.org&sz=128'
    },
    {
      slug: 'undp',
      title: 'United Nations Development Programme',
      location: 'New York, United States',
      description: 'UN agency working to eradicate poverty and reduce inequalities through sustainable development and policy support.',
      website: 'https://www.undp.org',
      logo: 'https://www.google.com/s2/favicons?domain=undp.org&sz=128'
    },
    {
      slug: 'asian-development-bank',
      title: 'Asian Development Bank',
      location: 'Manila, Philippines',
      description: 'Regional development bank focused on reducing poverty and promoting sustainable development in Asia and the Pacific.',
      website: 'https://www.adb.org',
      logo: 'https://www.google.com/s2/favicons?domain=adb.org&sz=128'
    },
    {
      slug: 'world-economic-forum',
      title: 'World Economic Forum',
      location: 'Geneva, Switzerland',
      description: 'International organization for public-private cooperation, engaging political, business, and other leaders to shape global, regional, and industry agendas.',
      website: 'https://www.weforum.org',
      logo: 'https://www.google.com/s2/favicons?domain=weforum.org&sz=128'
    },
    {
      slug: 'un-escwa',
      title: 'UN Economic and Social Commission for Western Asia',
      location: 'Beirut, Lebanon',
      description: 'UN regional commission promoting economic and social development through regional cooperation and policy coordination.',
      website: 'https://www.unescwa.org',
      logo: 'https://www.google.com/s2/favicons?domain=unescwa.org&sz=128'
    },
    {
      slug: 'unescap',
      title: 'UN Economic and Social Commission for Asia and the Pacific',
      location: 'Bangkok, Thailand',
      description: 'UN regional commission promoting regional cooperation and integration for sustainable development in Asia and the Pacific.',
      website: 'https://www.unescap.org',
      logo: 'https://www.google.com/s2/favicons?domain=unescap.org&sz=128'
    }
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Policy Organizations"
            lead={
              <>
                Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with leading international policy organizations, multilateral institutions, and development agencies to enhance policy analysis capabilities, share research findings, and contribute to evidence-based policy development.
              </>
            }
          />

          <Section title="Partner Policy Organizations">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function works with major international 
              policy organizations, multilateral institutions, and development agencies to enhance policy 
              analysis capabilities, share research findings, and contribute to evidence-based policy 
              development. These partnerships enable knowledge exchange, collaborative research, and 
              engagement with global policy discourse.
            </p>
            <div className="partners-grid">
              {policyOrganizations.map((org) => (
                <Link key={org.slug} href={`/partners/policy-organizations/${org.slug}`} className="partner-card">
                  <div className="partner-logo-container">
                    <img
                      src={org.logo}
                      alt={`${org.title} Logo`}
                      className="partner-logo-image"
                    />
                  </div>
                  <h3>{org.title}</h3>
                  <p className="partner-location">{org.location}</p>
                  <p>{org.description}</p>
                  <span className="small-text">View details</span>
                </Link>
              ))}
            </div>
          </Section>
        </div>
        <LogoSlider variant="light" label="International Policy Bodies" logos={policyLogos} />
      </main>
      <Footer />
    </>
  )
}
