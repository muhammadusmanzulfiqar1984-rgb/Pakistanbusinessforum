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
      logo: 'https://www.google.com/s2/favicons?domain=ox.ac.uk&sz=128'
    },
    {
      slug: 'cambridge-university',
      title: 'University of Cambridge',
      location: 'Cambridge, United Kingdom',
      description: 'Prestigious research institution with strong focus on policy analysis, economic research, and institutional studies.',
      website: 'https://www.cam.ac.uk',
      logo: 'https://www.google.com/s2/favicons?domain=cam.ac.uk&sz=128'
    },
    {
      slug: 'harvard-university',
      title: 'Harvard University',
      location: 'Cambridge, Massachusetts, United States',
      description: 'World-renowned university with extensive research programs in public policy, governance, and economic analysis.',
      website: 'https://www.harvard.edu',
      logo: 'https://www.google.com/s2/favicons?domain=harvard.edu&sz=128'
    },
    {
      slug: 'lse',
      title: 'London School of Economics and Political Science',
      location: 'London, United Kingdom',
      description: 'Leading social science institution specializing in economics, public policy, and governance research.',
      website: 'https://www.lse.ac.uk',
      logo: 'https://www.google.com/s2/favicons?domain=lse.ac.uk&sz=128'
    },
    {
      slug: 'stanford-university',
      title: 'Stanford University',
      location: 'Stanford, California, United States',
      description: 'Research university with strong programs in public policy, economics, and institutional analysis.',
      website: 'https://www.stanford.edu',
      logo: 'https://www.google.com/s2/favicons?domain=stanford.edu&sz=128'
    },
    {
      slug: 'columbia-university',
      title: 'Columbia University',
      location: 'New York, United States',
      description: 'Research institution with extensive programs in public affairs, economic policy, and governance studies.',
      website: 'https://www.columbia.edu',
      logo: 'https://www.google.com/s2/favicons?domain=columbia.edu&sz=128'
    },
    {
      slug: 'georgetown-university',
      title: 'Georgetown University',
      location: 'Washington, D.C., United States',
      description: 'University with strong focus on public policy, international affairs, and governance research.',
      website: 'https://www.georgetown.edu',
      logo: 'https://www.google.com/s2/favicons?domain=georgetown.edu&sz=128'
    },
    {
      slug: 'nus',
      title: 'National University of Singapore',
      location: 'Singapore',
      description: 'Leading Asian university with extensive research programs in public policy, economics, and governance studies.',
      website: 'https://www.nus.edu.sg',
      logo: 'https://www.google.com/s2/favicons?domain=nus.edu.sg&sz=128'
    },
    {
      slug: 'anu',
      title: 'Australian National University',
      location: 'Canberra, Australia',
      description: 'Research university with strong programs in public policy, economics, and Asia-Pacific studies.',
      website: 'https://www.anu.edu.au',
      logo: 'https://www.google.com/s2/favicons?domain=anu.edu.au&sz=128'
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
