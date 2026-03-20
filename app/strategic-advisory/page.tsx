'use client'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import OpinionCycle from '@/components/OpinionCycle'
import VigilanceMatrix from '@/components/VigilanceMatrix'
import ProcessFlow from '@/components/ProcessFlow'
import PageTabs from '@/components/PageTabs'
import './page.css'

export default function StrategicAdvisory() {
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <>
          <Section title="Purpose">
            <p>Strategic Advisory provides structured, research-based analysis that supports policy clarity, institutional preparedness, and long-term economic understanding within Pakistan Business Forum<span className="trademark">®</span>.</p>
          </Section>
          <Section title="Scope of Work">
            <ul className="scope-list">
              <li>Policy and regulatory analysis</li>
              <li>Economic and institutional strategy</li>
              <li>Strategic intelligence and scenario assessment</li>
              <li>Advisory outputs including briefs, assessments, and analytical notes</li>
            </ul>
          </Section>
          <Section title="Policy Relevance">
            <p>The function contributes to policy discourse through neutral, research-driven analysis that improves understanding of governance, regulatory environments, and economic systems. It does not pursue advocacy or political outcomes.</p>
          </Section>
          <Section title="Outcomes">
            <ul className="scope-list">
              <li>Improved policy understanding</li>
              <li>Strategic preparedness</li>
              <li>Evidence-based insight</li>
              <li>Institutional clarity</li>
            </ul>
          </Section>
        </>
      )
    },
    {
      id: 'opinion',
      label: 'Opinion Making',
      content: (
        <Section title="Opinion Making Process">
          <p className="section-lead-text">We have the potential and capacity to turn over a new leaf on existing narratives. The process follows five interconnected stages — click any step to explore its methodology.</p>
          <OpinionCycle />
        </Section>
      )
    },
    {
      id: 'vigilance',
      label: 'Vigilance',
      content: (
        <Section title="Vigilance Strategy">
          <p className="section-lead-text">24/7 vigilance across all audience segments — every conversation receives a response regardless of sentiment. No narrative goes unaddressed.</p>
          <VigilanceMatrix />
        </Section>
      )
    },
    {
      id: '5gw',
      label: '5th Gen Warfare',
      content: (
        <Section title="Fifth Generation Warfare">
          <p className="section-lead-text">Fifth generation warfare is all about ideas — how we conceive of conflicts and prepare institutions to navigate them. Four interconnected approaches define the modern strategic environment.</p>
          <ProcessFlow steps={[
            { num: 'I',   title: 'Networks',           desc: 'Modern conflict uses extensive digital networks. Four interconnected grids — information, sensing, effects, and command — overlie the operational theatre. Force elements are interacting nodes that receive, act on, and pass forward data.' },
            { num: 'II',  title: 'Combat Cloud',        desc: 'Working together, the grids form a virtual combat cloud — akin to commercial cloud computing — that allows users to pull and add data as necessary, enabling longer-range tactical engagements.' },
            { num: 'III', title: 'Multi-Domain Battle', desc: 'Five operational domains: land, sea, air, space, and cyber. The key animating idea is cross-domain synergy — force applied across two or more domains in a complementary manner to achieve operational advantage.' },
            { num: 'IV',  title: 'Fusion Warfare',      desc: 'Addresses command and control concerns arising from additional information flows, software incompatibilities, and intrinsic vulnerabilities to attack and deception within complex networked environments.' },
          ]} />
        </Section>
      )
    },
    {
      id: 'amplification',
      label: 'Amplification & Games',
      content: (
        <>
          <Section title="Amplification">
            <div className="advisory-cards">
              <div className="advisory-card"><div className="advisory-card-icon">📡</div><div className="advisory-card-title">Trusted Influencer Network</div><p className="advisory-card-desc">A tailored amplification programme for every move — drawn from a large pool of trusted influencers, channels, and pages to ensure content reaches the maximum number of relevant audiences.</p></div>
              <div className="advisory-card"><div className="advisory-card-icon">🎯</div><div className="advisory-card-title">Targeted Diffusion</div><p className="advisory-card-desc">Every amplification effort is calibrated to the specific audience segment — ensuring the right message reaches the right people at the right moment across the right channels.</p></div>
              <div className="advisory-card"><div className="advisory-card-icon">📊</div><div className="advisory-card-title">Measurable Reach</div><p className="advisory-card-desc">All amplification activity is tracked and measured — providing full visibility into reach, engagement, and conversion across every channel deployed in the programme.</p></div>
            </div>
          </Section>
          <Section title="Strategic Games & Behavioural Intelligence">
            <div className="advisory-cards">
              <div className="advisory-card"><div className="advisory-card-icon">🧠</div><div className="advisory-card-title">Behaviour Analysis</div><p className="advisory-card-desc">Modern gaming has the power to record and analyse user behaviour at scale — providing insights into decision patterns that inform broader strategic positioning.</p></div>
              <div className="advisory-card"><div className="advisory-card-icon">🔄</div><div className="advisory-card-title">Image Shift</div><p className="advisory-card-desc">Games can help change or shift the image of an institution — embedding new associations and repositioning perception through sustained, immersive engagement.</p></div>
              <div className="advisory-card"><div className="advisory-card-icon">💡</div><div className="advisory-card-title">Lasting Influence</div><p className="advisory-card-desc">Games are one of the most powerful mediums to influence people — effects last longer because they create participatory experience rather than passive consumption.</p></div>
              <div className="advisory-card"><div className="advisory-card-icon">📝</div><div className="advisory-card-title">Content Intelligence</div><p className="advisory-card-desc">Gaming engagement helps better understand the content that resonates with specific user groups — informing the broader content strategy across all channels.</p></div>
            </div>
          </Section>
        </>
      )
    },
  ]
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Strategic Advisory"
            lead="The Strategic Policy and Research Function of Pakistan Business Forum provides structured, research-based analysis supporting policy clarity, institutional preparedness, and long-term economic understanding."
          />
          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="strategic-advisory" />
            </div>
          </div>
          <PageTabs tabs={tabs} />
        </div>
      </main>
      <Footer />
    </>
  )
}