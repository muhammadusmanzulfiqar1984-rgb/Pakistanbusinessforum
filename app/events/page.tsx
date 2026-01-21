import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import './page.css'

export default function Events() {
  const upcomingEvents = [
    {
      title: 'Governance and Institutional Reform Conference 2026',
      date: 'March 15-16, 2026',
      location: 'Islamabad, Pakistan',
      description: 'A two-day conference bringing together policymakers, researchers, and academics to discuss institutional reform, governance frameworks, and regulatory policy challenges facing Pakistan and the broader region.',
      type: 'Conference'
    },
    {
      title: 'Economic Policy Research Seminar',
      date: 'April 8, 2026',
      location: 'London, United Kingdom',
      description: 'An academic seminar presenting recent research findings on fiscal policy, monetary frameworks, and economic development strategies. Features presentations by leading economists and policy researchers from Europe and Asia.',
      type: 'Seminar'
    },
    {
      title: 'Regional Policy Dialogue: Asia-Pacific',
      date: 'May 20-21, 2026',
      location: 'Singapore',
      description: 'Stakeholder dialogue focusing on regional economic integration, trade policy, and institutional cooperation across Asia-Pacific economies. Includes participation from regional think tanks and policy organizations.',
      type: 'Dialogue'
    },
    {
      title: 'Strategic Research Workshop',
      date: 'June 12-13, 2026',
      location: 'Karachi, Pakistan',
      description: 'Intensive workshop on policy research methodologies, analytical frameworks, and evidence-based policy development. Designed for researchers, analysts, and policy professionals.',
      type: 'Workshop'
    },
    {
      title: 'Public Engagement Forum: Media and Policy Communication',
      date: 'July 5, 2026',
      location: 'Online',
      description: 'Public forum examining the role of media in policy communication, strategic messaging frameworks, and effective public engagement mechanisms in policy discourse.',
      type: 'Forum'
    },
    {
      title: 'International Think Tank Summit',
      date: 'September 18-20, 2026',
      location: 'Washington, D.C., United States',
      description: 'Major international summit convening think tanks, research institutions, and policy organizations from around the world to discuss global governance challenges, research collaboration, and knowledge exchange.',
      type: 'Summit'
    },
    {
      title: 'Trade and Economic Development Forum',
      date: 'October 10-11, 2026',
      location: 'Lahore, Pakistan',
      description: 'Regional forum examining trade policy, economic development strategies, and regional integration opportunities. Features participation from policymakers and business leaders.',
      type: 'Forum'
    },
    {
      title: 'Global Governance Symposium',
      date: 'November 14-16, 2026',
      location: 'Geneva, Switzerland',
      description: 'International symposium on global governance challenges, multilateral cooperation, and institutional reform. Co-organized with international partners.',
      type: 'Symposium'
    }
  ]

  const previousEvents = [
    {
      title: 'Policy Research Conference 2025',
      date: 'November 2025',
      location: 'Islamabad, Pakistan',
      description: 'Annual conference on policy research and governance analysis with participation from regional institutions.'
    },
    {
      title: 'Economic Development Workshop',
      date: 'September 2025',
      location: 'Dubai, UAE',
      description: 'Workshop on economic development strategies and policy frameworks for emerging markets.'
    },
    {
      title: 'Regional Cooperation Dialogue',
      date: 'July 2025',
      location: 'Bangkok, Thailand',
      description: 'Dialogue on regional economic cooperation and institutional collaboration across South and Southeast Asia.'
    },
    {
      title: 'Governance Reform Seminar',
      date: 'May 2025',
      location: 'Lahore, Pakistan',
      description: 'Seminar on institutional reform and governance frameworks with academic and policy experts.'
    }
  ]

  const previousDelegations = [
    {
      title: 'Delegation to Brookings Institution',
      date: 'December 2025',
      location: 'Washington, D.C., United States',
      description: 'Research delegation to discuss collaboration on governance studies and economic policy research.'
    },
    {
      title: 'Delegation to Chatham House',
      date: 'October 2025',
      location: 'London, United Kingdom',
      description: 'Policy dialogue delegation focused on international relations and global governance challenges.'
    },
    {
      title: 'Delegation to Regional Think Tanks',
      date: 'August 2025',
      location: 'Singapore',
      description: 'Study visit to regional think tanks in Singapore for knowledge exchange and collaboration.'
    },
    {
      title: 'Delegation to European Institutions',
      date: 'June 2025',
      location: 'Brussels, Belgium',
      description: 'Policy research delegation to European institutions focusing on regulatory frameworks and economic policy.'
    }
  ]

  const upcomingDelegations = [
    {
      title: 'Delegation to Carnegie Endowment',
      date: 'April 15-18, 2026',
      location: 'Washington, D.C., United States',
      description: 'Upcoming delegation for research collaboration and policy dialogue on international affairs and governance.'
    },
    {
      title: 'Delegation to Regional Partners',
      date: 'June 20-25, 2026',
      location: 'Jakarta, Indonesia',
      description: 'Regional delegation to strengthen partnerships with think tanks and policy institutions in Southeast Asia.'
    },
    {
      title: 'Delegation to European Think Tanks',
      date: 'August 10-15, 2026',
      location: 'Berlin, Germany',
      description: 'Research delegation to European think tanks focusing on comparative governance and policy analysis.'
    }
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container events-page">
          <PageHeader
            title="Events"
            lead={
              <>
                Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function organizes and participates in events, conferences, and seminars that contribute to policy discourse, research dissemination, and institutional dialogue on governance, economic policy, and strategic research.
              </>
            }
          />

          <Section title="Upcoming Events">
            <p>
              Our events calendar includes conferences, seminars, workshops, and public dialogues 
              that bring together researchers, policymakers, academics, and stakeholders. All events 
              maintain high standards of analytical rigor and scholarly discourse.
            </p>
          </Section>

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

          <Section title="Event Registration">
            <p>
              Registration details and event programs will be made available closer to each event date. 
              For inquiries, please review our registration criteria and process.
            </p>
            <div style={{ marginTop: '12px' }}>
              <Link href="/events/registration" className="registration-link">
                View Registration Information and Criteria
              </Link>
            </div>
          </Section>

          <Section title="Previous Events">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function has organized and participated in numerous events throughout its history. 
              Below are highlights from recent events.
            </p>
            <CardGrid>
              {previousEvents.map((event, index) => (
                <div key={index} className="card event-card">
                  <div className="event-type">Past Event</div>
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

          <Section title="Previous Delegations">
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function organizes delegation visits to international 
              think tanks, policy institutions, and research centers to strengthen partnerships and facilitate knowledge exchange.
            </p>
            <CardGrid>
              {previousDelegations.map((delegation, index) => (
                <div key={index} className="card event-card">
                  <div className="event-type">Past Delegation</div>
                  <h3>{delegation.title}</h3>
                  <div className="event-meta">
                    <p className="event-date"><strong>Date:</strong> {delegation.date}</p>
                    <p className="event-location"><strong>Location:</strong> {delegation.location}</p>
                  </div>
                  <p>{delegation.description}</p>
                </div>
              ))}
            </CardGrid>
          </Section>

          <Section title="Upcoming Delegation Calendar">
            <p>
              Planned delegation visits to partner institutions and international think tanks for 2026, 
              supporting research collaboration, knowledge exchange, and institutional partnerships.
            </p>
            <CardGrid>
              {upcomingDelegations.map((delegation, index) => (
                <div key={index} className="card event-card">
                  <div className="event-type">Upcoming</div>
                  <h3>{delegation.title}</h3>
                  <div className="event-meta">
                    <p className="event-date"><strong>Date:</strong> {delegation.date}</p>
                    <p className="event-location"><strong>Location:</strong> {delegation.location}</p>
                  </div>
                  <p>{delegation.description}</p>
                </div>
              ))}
            </CardGrid>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
