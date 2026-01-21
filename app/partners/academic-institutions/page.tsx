import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Link from 'next/link'
import './page.css'

export default function AcademicInstitutions() {
  const academicInstitutions = [
    {
      slug: 'oxford-university',
      title: 'University of Oxford',
      location: 'Oxford, United Kingdom',
      description: 'Leading research university with extensive programs in public policy, economics, and governance studies.',
      website: 'https://www.ox.ac.uk',
      logo: '/images/partners/academic-institutions/oxford-university.svg'
    },
    {
      slug: 'cambridge-university',
      title: 'University of Cambridge',
      location: 'Cambridge, United Kingdom',
      description: 'Prestigious research institution with strong focus on policy analysis, economic research, and institutional studies.',
      website: 'https://www.cam.ac.uk',
      logo: '/images/partners/academic-institutions/cambridge-university.svg'
    },
    {
      slug: 'harvard-university',
      title: 'Harvard University',
      location: 'Cambridge, Massachusetts, United States',
      description: 'World-renowned university with extensive research programs in public policy, governance, and economic analysis.',
      website: 'https://www.harvard.edu',
      logo: '/images/partners/academic-institutions/harvard-university.svg'
    },
    {
      slug: 'lse',
      title: 'London School of Economics and Political Science',
      location: 'London, United Kingdom',
      description: 'Leading social science institution specializing in economics, public policy, and governance research.',
      website: 'https://www.lse.ac.uk',
      logo: '/images/partners/academic-institutions/lse.svg'
    },
    {
      slug: 'stanford-university',
      title: 'Stanford University',
      location: 'Stanford, California, United States',
      description: 'Research university with strong programs in public policy, economics, and institutional analysis.',
      website: 'https://www.stanford.edu',
      logo: '/images/partners/academic-institutions/stanford-university.svg'
    },
    {
      slug: 'columbia-university',
      title: 'Columbia University',
      location: 'New York, United States',
      description: 'Research institution with extensive programs in public affairs, economic policy, and governance studies.',
      website: 'https://www.columbia.edu',
      logo: '/images/partners/academic-institutions/columbia-university.svg'
    },
    {
      slug: 'georgetown-university',
      title: 'Georgetown University',
      location: 'Washington, D.C., United States',
      description: 'University with strong focus on public policy, international affairs, and governance research.',
      website: 'https://www.georgetown.edu',
      logo: '/images/partners/academic-institutions/georgetown-university.svg'
    },
    {
      slug: 'nus',
      title: 'National University of Singapore',
      location: 'Singapore',
      description: 'Leading Asian university with extensive research programs in public policy, economics, and governance studies.',
      website: 'https://www.nus.edu.sg',
      logo: '/images/partners/academic-institutions/nus.svg'
    },
    {
      slug: 'anu',
      title: 'Australian National University',
      location: 'Canberra, Australia',
      description: 'Research university with strong programs in public policy, economics, and Asia-Pacific studies.',
      website: 'https://www.anu.edu.au',
      logo: '/images/partners/academic-institutions/anu.svg'
    }
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Academic Institutions"
            lead="Partnerships with universities, research centers, and academic institutions supporting scholarly research, policy analysis, and institutional capacity building."
          />

          <Section title="Academic Partnerships">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function collaborates with leading academic institutions worldwide to advance 
              research, share knowledge, and build institutional capacity in policy analysis, governance 
              studies, and economic research.
            </p>
            <div className="partners-grid">
              {academicInstitutions.map((institution) => (
                <Link key={institution.slug} href={`/partners/academic-institutions/${institution.slug}`} className="partner-card">
                  <div className="partner-logo-container">
                    <img
                      src={institution.logo}
                      alt={`${institution.title} Logo`}
                      className="partner-logo-image"
                    />
                  </div>
                  <h3>{institution.title}</h3>
                  <p className="partner-location">{institution.location}</p>
                  <p>{institution.description}</p>
                  <span className="small-text">View details</span>
                </Link>
              ))}
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
