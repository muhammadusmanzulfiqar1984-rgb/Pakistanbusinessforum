import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import './page.css'

export default function BecomeAMember() {
  const memberships = [
    { href: '/become-a-member/individual', title: 'Individual Membership', description: 'Access to research outputs, briefings, and institutional dialogue.' },
    { href: '/become-a-member/corporate', title: 'Corporate Membership', description: 'Structured engagement for organizations seeking policy analysis.' },
    { href: '/become-a-member/student', title: 'Student Membership', description: 'Academic access to research outputs and learning resources.' },
    { href: '/become-a-member/institutional', title: 'Institutional Partnership', description: 'Collaborative engagement with public and academic institutions.' },
  ]

  return (
    <>
      <Navigation />
      <main>

        <div className="page-container">
        <PageHeader
          title="Become a member"
          lead={
            <>
              Memberships are structured to support research access, analytical engagement, and institutional learning within Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function.
            </>
          }
        />

        <Section title="Membership Options">
          <CardGrid>
            {memberships.map((membership) => (
              <Link key={membership.href} href={membership.href} className="card">
                <h3>{membership.title}</h3>
                <p>{membership.description}</p>
                <span className="small-text">View details</span>
              </Link>
            ))}
          </CardGrid>
        </Section>
        </div>

      </main>
      <Footer />
    </>
  )
}
