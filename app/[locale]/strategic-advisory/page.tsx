'use client'
import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import OpinionCycle from '@/components/OpinionCycle'
import VigilanceMatrix from '@/components/VigilanceMatrix'
import ProcessFlow from '@/components/ProcessFlow'
import PageTabs from '@/components/PageTabs'
import { useTranslations } from 'next-intl'
import './page.css'

export default function StrategicAdvisory() {
  const t = useTranslations('strategicAdvisory')

  const tabs = [
    {
      id: 'overview',
      label: t('tabOverview'),
      content: (
        <>
          <Section title={t('purposeTitle')}>
            <p>{t('purposeText')}</p>
          </Section>
          <Section title={t('scopeTitle')}>
            <ul className="scope-list">
              <li>{t('scope1')}</li>
              <li>{t('scope2')}</li>
              <li>{t('scope3')}</li>
              <li>{t('scope4')}</li>
            </ul>
          </Section>
          <Section title={t('relevanceTitle')}>
            <p>{t('relevanceText')}</p>
          </Section>
          <Section title={t('outcomesTitle')}>
            <ul className="scope-list">
              <li>{t('outcome1')}</li>
              <li>{t('outcome2')}</li>
              <li>{t('outcome3')}</li>
              <li>{t('outcome4')}</li>
            </ul>
          </Section>
        </>
      )
    },
    {
      id: 'opinion',
      label: t('tabOpinion'),
      content: (
        <Section title={t('opinionTitle')}>
          <p className="section-lead-text">{t('opinionText')}</p>
          <OpinionCycle />
        </Section>
      )
    },
    {
      id: 'vigilance',
      label: t('tabVigilance'),
      content: (
        <Section title={t('vigilanceTitle')}>
          <p className="section-lead-text">{t('vigilanceText')}</p>
          <VigilanceMatrix />
        </Section>
      )
    },
    {
      id: '5gw',
      label: t('tab5gw'),
      content: (
        <Section title={t('fgwTitle')}>
          <p className="section-lead-text">{t('fgwText')}</p>
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
      label: t('tabAmplification'),
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
          <div className="container">
            <section className="sa-hero">
              <img
                src="/images/policy-checkmate.jpg"
                alt=""
                aria-hidden="true"
                className="sa-hero-img"
              />
              <div className="sa-hero-overlay" />
              <div className="eyebrow">STRATEGIC FUNCTION</div>
              <h1 className="page-title">{t('title')}</h1>
              <p className="page-intro">{t('lead')}</p>
            </section>
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