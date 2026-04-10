import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import LogoSlider from '@/components/LogoSlider'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
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

export default async function Partners() {
  const t = await getTranslations('partners')

  const partnerCategories = [
    { href: '/partners/international-think-tanks', title: t('p1Title'), description: t('p1Desc') },
    { href: '/partners/academic-institutions', title: t('p2Title'), description: t('p2Desc') },
    { href: '/partners/policy-organizations', title: t('p3Title'), description: t('p3Desc') },
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title={t('title')}
            lead={t('lead')}
          />

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
        </div>
      </main>
      <Footer />
    </>
  )
}
