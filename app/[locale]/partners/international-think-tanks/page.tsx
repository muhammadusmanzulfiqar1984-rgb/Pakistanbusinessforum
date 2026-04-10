import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import LogoSlider from '@/components/LogoSlider'

const thinkTankLogos = [
  { src: '/images/partners/international-think-tanks/brookings-institution.svg', alt: 'Brookings Institution' },
  { src: '/images/partners/international-think-tanks/chatham-house.svg',         alt: 'Chatham House' },
  { src: '/images/partners/international-think-tanks/carnegie-endowment.svg',    alt: 'Carnegie Endowment' },
  { src: '/images/partners/international-think-tanks/csis.svg',                  alt: 'CSIS' },
  { src: '/images/partners/international-think-tanks/peterson-institute.svg',    alt: 'Peterson Institute' },
  { src: '/images/partners/international-think-tanks/cato-institute.svg',        alt: 'Cato Institute' },
]
import Link from 'next/link'
import './page.css'

export default function InternationalThinkTanks() {
  const thinkTanks = [
    {
      slug: 'brookings-institution',
      title: 'Brookings Institution',
      location: 'Washington, D.C., United States',
      description: 'A leading think tank conducting research and policy analysis on governance, economics, foreign policy, and global development.',
      website: 'https://www.brookings.edu',
      logo: 'https://www.google.com/s2/favicons?domain=brookings.edu&sz=128'
    },
    {
      slug: 'carnegie-endowment',
      title: 'Carnegie Endowment for International Peace',
      location: 'Washington, D.C., United States',
      description: 'A global think tank dedicated to advancing cooperation between nations and promoting active international engagement.',
      website: 'https://carnegieendowment.org',
      logo: 'https://www.google.com/s2/favicons?domain=carnegieendowment.org&sz=128'
    },
    {
      slug: 'chatham-house',
      title: 'Chatham House',
      location: 'London, United Kingdom',
      description: 'The Royal Institute of International Affairs, providing independent analysis on global affairs, policy challenges, and governance issues.',
      website: 'https://www.chathamhouse.org',
      logo: 'https://www.google.com/s2/favicons?domain=chathamhouse.org&sz=128'
    },
    {
      slug: 'csis',
      title: 'Center for Strategic and International Studies',
      location: 'Washington, D.C., United States',
      description: 'A bipartisan policy research organization focusing on defense, security, international relations, and economic policy.',
      website: 'https://www.csis.org',
      logo: 'https://www.google.com/s2/favicons?domain=csis.org&sz=128'
    },
    {
      slug: 'cato-institute',
      title: 'Cato Institute',
      location: 'Washington, D.C., United States',
      description: 'A public policy research organization dedicated to the principles of individual liberty, limited government, and free markets.',
      website: 'https://www.cato.org',
      logo: 'https://www.google.com/s2/favicons?domain=cato.org&sz=128'
    },
    {
      slug: 'peterson-institute',
      title: 'Peterson Institute for International Economics',
      location: 'Washington, D.C., United States',
      description: 'A private, nonprofit research institution focused on international economic policy research and analysis.',
      website: 'https://www.piie.com',
      logo: 'https://www.google.com/s2/favicons?domain=piie.com&sz=128'
    }
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="International Think Tanks"
            lead={
              <>
                Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with leading international think tanks to advance research, share analytical insights, and contribute to global policy discourse on governance, economic development, and institutional reform.
              </>
            }
          />

          <Section title="Partner Think Tanks">
            <div className="partners-grid">
              {thinkTanks.map((tank) => (
                <Link key={tank.slug} href={`/partners/international-think-tanks/${tank.slug}`} className="partner-card">
                  <div className="partner-logo-container">
                    <img
                      src={tank.logo}
                      alt={`${tank.title} Logo`}
                      className="partner-logo-image"
                    />
                  </div>
                  <h3>{tank.title}</h3>
                  <p className="partner-location">{tank.location}</p>
                  <p>{tank.description}</p>
                  <span className="small-text">View details</span>
                </Link>
              ))}
            </div>
          </Section>
        </div>
        <LogoSlider variant="gold" label="International Think Tanks" logos={thinkTankLogos} />
      </main>
      <Footer />
    </>
  )
}
