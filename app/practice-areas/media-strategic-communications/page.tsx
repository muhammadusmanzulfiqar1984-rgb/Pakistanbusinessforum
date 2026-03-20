'use client'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import MediaChannels from '@/components/MediaChannels'
import PageTabs from '@/components/PageTabs'
import './page.css'

export default function MediaStrategicCommunications() {
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <>
          <Section title="Purpose">
            <p>This practice area conducts research and analysis on communication strategies, policy messaging frameworks, and public engagement mechanisms. We examine how complex policy issues are communicated to diverse audiences and analyze communication effectiveness in policy contexts.</p>
            <p>Our work supports understanding of how policy information is disseminated and how public discourse functions through systematic examination of messaging effectiveness, communication frameworks, and public engagement mechanisms.</p>
          </Section>
          <Section title="Scope of Work">
            <ul className="scope-list">
              <li>Research on communication strategy development and implementation</li>
              <li>Analysis of policy messaging frameworks and content</li>
              <li>Examination of media relations and communication channels</li>
              <li>Evaluation of public engagement mechanisms and processes</li>
              <li>Study of communication effectiveness and audience response</li>
              <li>Research on policy communication and public discourse</li>
            </ul>
          </Section>
          <Section title="Policy Relevance">
            <p>Communication research supports understanding of how policy information is disseminated and how public discourse functions. This work informs policy communication by examining messaging effectiveness, analyzing communication frameworks, and studying how policy positions are communicated to diverse audiences through various channels.</p>
          </Section>
          <Section title="Outcomes">
            <p>Research activities produce communication analysis reports, messaging framework assessments, and research publications on policy communication. These outputs contribute to communication research literature and provide evidence-based insights to support effective policy communication and public engagement strategies.</p>
          </Section>
        </>
      )
    },
    {
      id: 'channels',
      label: 'Five Channels',
      content: (
        <Section title="Five-Channel Media Framework">
          <p className="section-lead-text">Strategic communications operates across five distinct media environments — each requiring a tailored approach to audience, format, and message.</p>
          <MediaChannels />
        </Section>
      )
    },
    {
      id: 'platforms',
      label: 'Platform Strategy',
      content: (
        <Section title="Platform Strategy">
          <div className="platform-grid">
            <div className="platform-card">
              <div className="platform-icon">📘</div>
              <div className="platform-name">Facebook</div>
              <ul className="platform-points">
                <li><strong>Website Integration</strong> — Share links in the newsfeed, redirect audiences to key content and offers.</li>
                <li><strong>Ads</strong> — Increase visibility and create a viral loop through targeted advertising.</li>
                <li><strong>Moderation</strong> — Turn audiences into advocates by starting meaningful conversations.</li>
              </ul>
            </div>
            <div className="platform-card">
              <div className="platform-icon">🐦</div>
              <div className="platform-name">Twitter / X</div>
              <ul className="platform-points">
                <li><strong>Story-telling</strong> — Create dialogue with followers through narrative-driven content.</li>
                <li><strong>Listen, Monitor & Respond</strong> — Powerful tool for real-time institutional voice and service.</li>
                <li><strong>Ads</strong> — Boost campaigns and time-sensitive promotions for maximum reach.</li>
              </ul>
            </div>
            <div className="platform-card">
              <div className="platform-icon">📸</div>
              <div className="platform-name">Instagram</div>
              <ul className="platform-points">
                <li><strong>Brand-Centric Content</strong> — Focus around the ideas and feeling associated with the brand.</li>
                <li><strong>Behind The Scenes</strong> — Transparency and inside looks build authentic audience trust.</li>
                <li><strong>User Generated Contests</strong> — User content combines with brand stories to develop overarching narrative.</li>
              </ul>
            </div>
            <div className="platform-card">
              <div className="platform-icon">▶️</div>
              <div className="platform-name">YouTube</div>
              <ul className="platform-points">
                <li><strong>Viewer Conversion</strong> — Video is the most powerful communication form — conversions comparatively stronger than any other channel.</li>
                <li><strong>Viewer Subscription</strong> — Strategy focused on growing subscription base for sustained reach.</li>
                <li><strong>Detailed Analytics</strong> — Full audience demographic data and campaign performance stats.</li>
              </ul>
            </div>
            <div className="platform-card">
              <div className="platform-icon">💼</div>
              <div className="platform-name">LinkedIn</div>
              <ul className="platform-points">
                <li><strong>Connections & Integrity</strong> — High-integrity corporate profile for institutional credibility.</li>
                <li><strong>Reactive Storytelling</strong> — Top-of-mind stories combined with brand-relevant messaging.</li>
                <li><strong>LinkedIn Ads</strong> — Assist marketing campaigns and increase conversions with decision-makers.</li>
              </ul>
            </div>
          </div>
        </Section>
      )
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Media & Strategic Communications"
            lead="Research and analysis on communication strategies, policy messaging frameworks, and public engagement mechanisms."
          />
          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="media" />
            </div>
          </div>
          <PageTabs tabs={tabs} />
        </div>
      </main>
      <Footer />
    </>
  )
}
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Media & Strategic Communications"
            lead="Research and analysis on communication strategies, policy messaging frameworks, and public engagement mechanisms."
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="media" />
            </div>
          </div>

          <Section title="Purpose">
              <p>
                This practice area conducts research and analysis on communication strategies, 
                policy messaging frameworks, and public engagement mechanisms. We examine how 
                complex policy issues are communicated to diverse audiences and analyze 
                communication effectiveness in policy contexts.
              </p>
              <p>
                Our work supports understanding of how policy information is disseminated and 
                how public discourse functions through systematic examination of messaging 
                effectiveness, communication frameworks, and public engagement mechanisms.
              </p>

          </Section>

          <Section title="Scope of Work">
            <p>
              Our research activities in this domain encompass:
            </p>
            <ul className="scope-list">
              <li>Research on communication strategy development and implementation</li>
              <li>Analysis of policy messaging frameworks and content</li>
              <li>Examination of media relations and communication channels</li>
              <li>Evaluation of public engagement mechanisms and processes</li>
              <li>Study of communication effectiveness and audience response</li>
              <li>Research on policy communication and public discourse</li>
            </ul>
          </Section>

          <Section title="Five-Channel Media Framework">
            <p className="section-lead-text">Strategic communications operates across five distinct media environments — each requiring a tailored approach to audience, format, and message.</p>
            <MediaChannels />
          </Section>

          <Section title="Platform Strategy">
            <div className="platform-grid">
              <div className="platform-card">
                <div className="platform-icon">📘</div>
                <div className="platform-name">Facebook</div>
                <ul className="platform-points">
                  <li><strong>Website Integration</strong> — Share links in the newsfeed, redirect audiences to key content and offers.</li>
                  <li><strong>Ads</strong> — Increase visibility and create a viral loop through targeted advertising.</li>
                  <li><strong>Moderation</strong> — Turn audiences into advocates by starting meaningful conversations.</li>
                </ul>
              </div>
              <div className="platform-card">
                <div className="platform-icon">🐦</div>
                <div className="platform-name">Twitter / X</div>
                <ul className="platform-points">
                  <li><strong>Story-telling</strong> — Create dialogue with followers through narrative-driven content.</li>
                  <li><strong>Listen, Monitor & Respond</strong> — Powerful tool for real-time institutional voice and service.</li>
                  <li><strong>Ads</strong> — Boost campaigns and time-sensitive promotions for maximum reach.</li>
                </ul>
              </div>
              <div className="platform-card">
                <div className="platform-icon">📸</div>
                <div className="platform-name">Instagram</div>
                <ul className="platform-points">
                  <li><strong>Brand-Centric Content</strong> — Focus around the ideas and feeling associated with the brand.</li>
                  <li><strong>Behind The Scenes</strong> — Transparency and inside looks build authentic audience trust.</li>
                  <li><strong>User Generated Contests</strong> — User content combines with brand stories to develop overarching narrative.</li>
                </ul>
              </div>
              <div className="platform-card">
                <div className="platform-icon">▶️</div>
                <div className="platform-name">YouTube</div>
                <ul className="platform-points">
                  <li><strong>Viewer Conversion</strong> — Video is the most powerful communication form — conversions comparatively stronger than any other channel.</li>
                  <li><strong>Viewer Subscription</strong> — Strategy focused on growing subscription base for sustained reach.</li>
                  <li><strong>Detailed Analytics</strong> — Full audience demographic data and campaign performance stats.</li>
                </ul>
              </div>
              <div className="platform-card">
                <div className="platform-icon">💼</div>
                <div className="platform-name">LinkedIn</div>
                <ul className="platform-points">
                  <li><strong>Connections & Integrity</strong> — High-integrity corporate profile for institutional credibility.</li>
                  <li><strong>Reactive Storytelling</strong> — Top-of-mind stories combined with brand-relevant messaging.</li>
                  <li><strong>LinkedIn Ads</strong> — Assist marketing campaigns and increase conversions with decision-makers.</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Policy Relevance">
            <p>
              Communication research supports understanding of how policy information is 
              disseminated and how public discourse functions. This work informs policy 
              communication by examining messaging effectiveness, analyzing communication 
              frameworks, and studying how policy positions are communicated to diverse 
              audiences through various channels.
            </p>
            <p>
              Our research contributes to understanding of transparent and accountable public 
              engagement mechanisms and supports effective policy communication strategies.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Research activities produce communication analysis reports, messaging framework 
              assessments, and research publications on policy communication. These outputs 
              contribute to communication research literature and provide evidence-based insights 
              to support effective policy communication and public engagement strategies.
            </p>
            <p>
              Our work advances understanding of policy communication processes and supports 
              institutional actors in developing effective frameworks for communicating complex 
              policy issues to diverse audiences.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
