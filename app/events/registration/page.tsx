import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Link from 'next/link'
import './page.css'

export default function EventRegistration() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Event Registration"
            lead={
              <>
                Information about registration procedures, eligibility criteria, and requirements for Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function events, conferences, and seminars.
              </>
            }
          />

          <Section title="Registration Process">
            <p>
              Registration for Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function events is typically open 4-6 weeks before each 
              event date. Early registration is encouraged as events may have limited capacity. All 
              registrations are subject to approval based on eligibility criteria and availability.
            </p>
            <p>
              To register for an event, please review the eligibility criteria below and submit a 
              registration form through our contact page or email our events team directly. 
              Registration confirmations will be sent via email within 5-7 business days.
            </p>
          </Section>

          <Section title="Registration Criteria">
            <h3>General Eligibility Requirements</h3>
            <p>
              To be eligible for event registration, participants must meet at least one of the 
              following criteria:
            </p>
            <ul className="criteria-list">
              <li>
                <strong>Academic and Research Professionals:</strong> University faculty, researchers, 
                graduate students, and scholars engaged in policy research, governance studies, or 
                related academic fields.
              </li>
              <li>
                <strong>Policy Professionals:</strong> Government officials, policy analysts, 
                institutional researchers, and professionals working in policy development, regulatory 
                affairs, or governance.
              </li>
              <li>
                <strong>Think Tank and NGO Representatives:</strong> Staff members from think tanks, 
                research institutions, policy organizations, and civil society organizations engaged 
                in policy analysis or institutional research.
              </li>
              <li>
                <strong>Business and Private Sector:</strong> Business leaders, corporate policy 
                professionals, and private sector representatives with interests in policy, governance, 
                or economic development.
              </li>
              <li>
                <strong>Media Professionals:</strong> Journalists, editors, and media professionals 
                covering policy, governance, economics, or international affairs.
              </li>
              <li>
                <strong>Students:</strong> Graduate students and advanced undergraduate students 
                pursuing degrees in relevant fields such as political science, economics, public 
                administration, or international relations.
              </li>
            </ul>

            <h3>Documentation Requirements</h3>
            <p>
              Registration applications should include the following documentation:
            </p>
            <ul className="criteria-list">
              <li>Professional resume or curriculum vitae</li>
              <li>Brief statement of interest explaining relevance to your work or research</li>
              <li>Institutional affiliation (if applicable)</li>
              <li>For students: academic transcript or letter of recommendation from faculty</li>
              <li>For international participants: passport details and visa information</li>
            </ul>

            <h3>Selection Process</h3>
            <p>
              Event registrations are reviewed by the Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function events team based on:
            </p>
            <ul className="criteria-list">
              <li>Alignment of participant background with event themes and objectives</li>
              <li>Relevance to participant's professional or academic work</li>
              <li>Diversity of perspectives and institutional representation</li>
              <li>Event capacity and space availability</li>
            </ul>
          </Section>

          <Section title="Registration Fees">
            <p>
              Registration fees vary by event type and participant category:
            </p>
            <ul className="criteria-list">
              <li>
                <strong>Academics and Students:</strong> Reduced rates or complimentary registration 
                may be available for academic professionals and students upon request.
              </li>
              <li>
                <strong>Government Officials:</strong> Special rates apply for government officials 
                and public sector representatives.
              </li>
              <li>
                <strong>International Participants:</strong> Standard registration fees apply; 
                accommodation and travel arrangements are the responsibility of participants.
              </li>
              <li>
                <strong>Online Events:</strong> Most online events are offered free of charge or 
                at nominal rates.
              </li>
            </ul>
            <p>
              Specific fee information will be provided in event registration materials and 
              communications.
            </p>
          </Section>

          <Section title="International Participants">
            <p>
              International participants are welcome at Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function events. 
              International participants are responsible for:
            </p>
            <ul className="criteria-list">
              <li>Obtaining appropriate visas and travel documentation</li>
              <li>Arranging and covering travel and accommodation costs</li>
              <li>Ensuring compliance with entry requirements for Pakistan</li>
              <li>Providing proof of travel insurance (recommended)</li>
            </ul>
            <p>
              For events held abroad, Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function may provide invitation letters 
              to support visa applications upon request. Please contact our events team for 
              assistance with international participation.
            </p>
          </Section>

          <Section title="Cancellation and Refunds">
            <p>
              Registration cancellations must be submitted in writing at least 14 days before 
              the event date to be eligible for a refund. Cancellation requests received less 
              than 14 days before the event may not be eligible for refunds, except in cases 
              of documented emergencies.
            </p>
            <p>
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function reserves the right to cancel or reschedule events due to 
              circumstances beyond our control. In such cases, registered participants will be 
              notified and full refunds will be provided if events cannot be rescheduled.
            </p>
          </Section>

          <Section title="Contact for Registration">
            <p>
              For questions about event registration, eligibility criteria, or to submit 
              registration applications, please contact:
            </p>
            <p>
              <strong>Events Team</strong><br />
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function<br />
              Email: events@pakistanbusinessforum.org<br />
              Phone: +92 (0) 51-XXXXXXX
            </p>
            <p>
              You can also use our <Link href="/contact" className="inline-link">contact form</Link> to 
              inquire about event registration.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
