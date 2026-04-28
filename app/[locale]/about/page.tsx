'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import PageTabs from '@/components/PageTabs'
import Section from '@/components/Section'
import './page.css'

function HistoryTab() {
  const t = useTranslations('about')
  const timelineData = [
    { year: '2016', text: 'Establishment of Pakistan Business Forum® as an independent policy and research platform — founding mandate set, analytical boundaries defined' },
    { year: '2017', text: 'Early development phase — initial research agenda formulated, core practice areas identified and scoped' },
    { year: '2018', text: 'Structural definition — research protocols codified, analytical frameworks established, methodological standards formalised' },
    { year: '2019', text: 'Regional engagement expanded — policy analysis capabilities extended across governance, economic, and institutional domains' },
    { year: '2020', text: 'Research orientation deepened — specialised practice areas and thematic focus areas developed in response to shifting policy landscape' },
    { year: '2021', text: 'Institutional safeguards reinforced — governance frameworks implemented to ensure sustained research independence and integrity' },
    { year: '2022', text: 'Strategic consolidation — research portfolio expanded and institutional partnerships formalised across multiple regions' },
    { year: '2023', text: 'International collaborations deepened — think tank partnerships, academic affiliations, and cross-border research linkages formalised' },
    { year: '2024', text: 'Strategic advisory function matured — practice area specialisation strengthened, output quality benchmarked against global standards' },
    { year: 'Present', text: 'Active stewardship and continued commitment — evidence-based analysis delivered at scale, institutional continuity secured for the decade ahead' },
  ]

  const [activeYearIdx, setActiveYearIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  const advance = useCallback(() => {
    setActiveYearIdx(prev => (prev + 1) % timelineData.length)
  }, [timelineData.length])

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(advance, 3000)
    return () => clearInterval(id)
  }, [isPaused, advance])

  useEffect(() => {
    if (!trackRef.current) return
    const wrap = trackRef.current
    const track = wrap.firstElementChild as HTMLElement
    if (!track) return
    const btn = track.children[activeYearIdx] as HTMLElement
    if (!btn) return
    const scrollLeft = btn.offsetLeft - wrap.offsetWidth / 2 + btn.offsetWidth / 2
    wrap.scrollTo({ left: scrollLeft, behavior: 'smooth' })
  }, [activeYearIdx])

  const activeYear = timelineData[activeYearIdx].year

  return (
    <>
      <Section title="Our History">
        <p className="intro-text">
          Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function was established as a structured analytical institution with clear boundaries 
          and a commitment to independence.
        </p>
      </Section>

      <Section title="Formation & Development">
        <p>
          The Forum was founded with the vision of creating an independent platform for evidence-based 
          policy analysis. From its establishment, the institution has maintained a non-lobbying, 
          non-political posture, focusing exclusively on rigorous research and analytical work.
        </p>
      </Section>

      <div className="htl-section" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <h3>Institutional Timeline</h3>
        <div className="htl-track-wrap" ref={trackRef}>
          <div className="htl-track">
            {timelineData.map((item, idx) => (
              <button
                key={item.year}
                className={`htl-node ${idx === activeYearIdx ? 'active' : ''} ${idx < activeYearIdx ? 'passed' : ''}`}
                onClick={() => { setActiveYearIdx(idx); setIsPaused(true) }}
              >
                <span className="htl-dot" />
                <span className="htl-year">{item.year}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="htl-story">
          <div className="htl-story-card" key={activeYear}>
            <div className="htl-story-year">{activeYear}</div>
            <p className="htl-story-text">{timelineData[activeYearIdx].text}</p>
          </div>
        </div>
      </div>

      <Section title="Key Principles">
        <ul>
          <li>Independent analytical platform with no political or lobbying affiliations</li>
          <li>Evidence-based policy research grounded in methodological rigor</li>
          <li>Non-lobbying, non-political posture ensuring analytical objectivity</li>
          <li>Institutional credibility sustained through continuity and disciplined practice</li>
          <li>No representation undertaken without written mandate, with full commitment to professional and ethical standards</li>
        </ul>
      </Section>
    </>
  )
}

function TeamTab() {
  const [activeSubTab, setActiveSubTab] = useState('Policy Board')
  const teams: Record<string, { name: string; role: string; loc: string }[]> = {
    'Policy Board': [
      { name:'Mian Muhammad Usman', role:'Patron-in-Chief', loc:'Pakistan' },
      { name:'Dr. Hannah Whitfield', role:'Policy Board Member', loc:'UK, London' },
      { name:'Mr. Kamran Hashmi', role:'Policy Board Member', loc:'Pakistan, Islamabad' },
    ],
    'Research': [
      { name:'Dr. Sumera Iqbal', role:'Head of Research', loc:'Pakistan, Islamabad' },
      { name:'Prof. Edward Hollister', role:'Head of Economic Research', loc:'USA, New York' },
      { name:'Dr. Alain Tremblay', role:'Head of Policy Evaluation', loc:'Canada, Ottawa' },
      { name:'Dr. Margaret Donovan', role:'Head of Governance Research', loc:'Australia, Canberra' },
    ],
    'Media': [
      { name:'Ms. Hina Riaz', role:'Head of Media & Communications', loc:'Pakistan, Islamabad' },
      { name:'Mr. Yusuf Al-Mazrouei', role:'Head of Strategic Communications', loc:'UAE, Dubai' },
      { name:'Ms. Mehreen Lodhi', role:'Head of Publications', loc:'Pakistan, Karachi' },
    ],
    'Regional': [
      { name:'Dr. Gregory Whitman', role:'Regional Head, Americas', loc:'USA, Washington D.C.' },
      { name:'Dr. Wei Lim Chong', role:'Regional Head, Asia-Pacific', loc:'Singapore' },
      { name:'Dr. Oliver Pemberton', role:'Regional Head, Europe', loc:'UK, London' },
      { name:'Dr. Nadia Khoury', role:'Regional Head, MENA', loc:'Lebanon, Beirut' },
      { name:'Dr. Thabo Nkosi', role:'Regional Head, Africa', loc:'South Africa, Pretoria' },
      { name:'Dr. Anatoly Vasiliev', role:'Regional Head, Russia & Eurasia', loc:'Russia, Moscow' },
    ],
    'Administration': [
      { name:'Mr. Adil Bashir', role:'Chief Administrative Officer', loc:'Pakistan, Islamabad' },
      { name:'Ms. Komal Anwar', role:'Director of Operations', loc:'Pakistan, Islamabad' },
    ],
  }
  return (
    <Section title="Our Team">
      <div className="sub-tabs">
        {Object.keys(teams).map(s => (
          <button key={s} className={`sub-tab-btn ${activeSubTab === s ? 'active' : ''}`} onClick={() => setActiveSubTab(s)}>{s}</button>
        ))}
      </div>
      <div className="compact-grid">
        {(teams[activeSubTab] || []).map(m => (
          <div key={m.name} className="compact-card">
            <div className="compact-name">{m.name}</div>
            <div className="compact-role">{m.role}</div>
            <div className="compact-loc">{m.loc}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default function About() {
  const t = useTranslations('about')

  const locationIcon = (
    <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  )

  const tabs = [
    {
      id: 'history',
      label: t('tabHistory'),
      content: <HistoryTab />
    },
    {
      id: 'messages',
      label: t('tabMessages'),
      content: (
        <Section title="Leadership Messages">
          <div className="message-card patron-card">
            <div className="patron-photo-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/usman.jpg"
                alt="Mian Muhammad Usman — Patron-in-Chief, Pakistan Business Forum®"
                className="patron-photo"
              />
              <div className="patron-photo-name">Mian Muhammad Usman</div>
              <div className="patron-photo-title">Patron-in-Chief</div>
            </div>
            <div className="patron-message-col">
              <div className="patron-label">Message from the Patron-in-Chief</div>
              <h3>From the Patron-in-Chief</h3>
              <blockquote className="patron-quote">
                Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function represents a commitment to institutional excellence and analytical 
                independence. As Patron-in-Chief, I provide institutional oversight focused on continuity, 
                standards, and responsibility in research practice and governance.
              </blockquote>
              <p>
                Our mission is to strengthen policy understanding through methodologically sound, analytically 
                rigorous research that contributes meaningfully to contemporary governance challenges. The Forum 
                operates with clear boundaries and a steadfast commitment to independence, ensuring that our 
                research outputs serve the public interest through evidence-based analysis.
              </p>
            </div>
          </div>
        </Section>
      )
    },
    {
      id: 'values',
      label: t('tabValues'),
      content: (
        <>
          <Section title="Our Core Values">
            <p className="intro-text">
              Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function is guided by a set of core values 
              that define our institutional character, research approach, and commitment to excellence. These 
              values shape every aspect of our work and ensure that we maintain the highest standards of 
              integrity, independence, and analytical rigor.
            </p>
          </Section>

          <div className="values-grid">
            <div className="value-card"><h3>Independence</h3><p>We maintain complete analytical independence from political, commercial, or advocacy interests. Our research is conducted without external influence, ensuring that findings and recommendations are based solely on evidence and rigorous analysis.</p></div>
            <div className="value-card"><h3>Rigorous Methodology</h3><p>We adhere to the highest standards of methodological rigor in all our research activities. Our analytical frameworks are grounded in established academic and professional standards.</p></div>
            <div className="value-card"><h3>Evidence-Based Analysis</h3><p>All our research and policy analysis is grounded in empirical evidence and systematic inquiry. We prioritize data-driven insights over assumptions.</p></div>
            <div className="value-card"><h3>Transparency</h3><p>We maintain transparency in our research processes, methodologies, and analytical frameworks. Our publications clearly articulate research questions, methodological approaches, data sources, and analytical limitations.</p></div>
            <div className="value-card"><h3>Institutional Integrity</h3><p>We operate with the highest standards of institutional integrity, maintaining clear boundaries between research activities and advocacy or political engagement.</p></div>
            <div className="value-card"><h3>Academic Excellence</h3><p>We strive for academic excellence in all our research activities, contributing to scholarly literature while maintaining relevance to policy practice.</p></div>
            <div className="value-card"><h3>Non-Partisan Approach</h3><p>We maintain a strictly non-partisan approach to policy research and analysis. Our work does not advocate for specific political positions, parties, or policy outcomes.</p></div>
            <div className="value-card"><h3>Long-Term Perspective</h3><p>We take a long-term perspective in our research and analysis, recognizing that effective policy development requires understanding of historical context, institutional continuity, and long-term implications.</p></div>
          </div>

          <Section title="Guiding Principles">
            <ul>
              <li><strong>Methodological Rigor:</strong> All research follows established academic and professional standards</li>
              <li><strong>Analytical Objectivity:</strong> Research findings are based on evidence, not predetermined conclusions</li>
              <li><strong>Intellectual Independence:</strong> Research is conducted free from external influence or pressure</li>
              <li><strong>Professional Ethics:</strong> All activities adhere to the highest standards of professional conduct</li>
              <li><strong>Institutional Stewardship:</strong> Resources are managed responsibly and transparently</li>
              <li><strong>Knowledge Sharing:</strong> Research findings are made accessible to diverse audiences</li>
              <li><strong>Continuous Improvement:</strong> We regularly review and enhance our research processes and methodologies</li>
            </ul>
          </Section>
        </>
      )
    },
    {
      id: 'team',
      label: t('tabTeam'),
      content: <TeamTab />
    },
    {
      id: 'team-pakistan',
      label: t('tabTeamPak'),
      content: (
        <Section title="Team Pakistan">
          <p className="intro-text">Pakistan-based team members supporting institutional operations, research coordination, and administrative functions.</p>
          <div className="compact-grid">
            {[
              { name: 'Mian Muhammad Usman', role: 'Patron-in-Chief', loc: 'Pakistan' },
              { name: 'Mr. Adil Bashir', role: 'Chief Administrative Officer', loc: 'Islamabad' },
              { name: 'Ms. Komal Anwar', role: 'Director of Operations', loc: 'Islamabad' },
              { name: 'Dr. Sumera Iqbal', role: 'Head of Research', loc: 'Islamabad' },
              { name: 'Ms. Hina Riaz', role: 'Head of Media & Communications', loc: 'Islamabad' },
              { name: 'Ms. Mehreen Lodhi', role: 'Head of Publications', loc: 'Karachi' },
              { name: 'Mr. Kamran Hashmi', role: 'Policy Board Member', loc: 'Islamabad' },
            ].map(m => (
              <div key={m.name} className="compact-card">
                <div className="compact-name">{m.name}</div>
                <div className="compact-role">{m.role}</div>
                <div className="compact-loc">{m.loc}</div>
              </div>
            ))}
          </div>
        </Section>
      )
    },
    {
      id: 'advisors',
      label: t('tabAdvisors'),
      content: (
        <Section title="Board of Advisors">
          <p className="intro-text">
            Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function is guided by a distinguished Board of Advisors comprising 
            world-renowned experts from diverse fields and regions.
          </p>
          <div className="advisors-grid">
            {[
              { name: 'Prof. Dr. Edmund Pierce', field: 'Nobel Laureate in Economic Sciences', bio: 'Distinguished economist and philosopher, recognised for foundational contributions to welfare economics and social choice theory.', loc: 'United States, Cambridge' },
              { name: 'Prof. Dr. Theodore Larkin', field: 'Nobel Laureate in Economic Sciences', bio: 'Renowned economist and former chief economist at a leading international financial institution.', loc: 'United States, New York' },
              { name: 'Prof. Dr. Henri Dubois', field: 'Economic Inequality & Public Policy', bio: 'Professor at a leading European school of economics, expert on wealth inequality and capital distribution.', loc: 'France, Paris' },
              { name: 'Prof. Dr. Nathaniel Brewster', field: 'International Political Economy', bio: 'Professor of International Political Economy at a leading policy school, expert on globalisation and economic development.', loc: 'United States, Cambridge' },
              { name: 'Prof. Dr. Margaret Sinclair', field: 'International Law & Policy', bio: 'Former director of policy planning at a major government ministry and leading expert on international relations.', loc: 'United States, Washington D.C.' },
              { name: 'Prof. Dr. Charles Pendleton', field: 'Global Economic Governance', bio: 'Dean of a leading school of government, expert on global economic governance and development policy.', loc: 'United Kingdom, Oxford' },
              { name: 'Prof. Dr. Han Jia Wei', field: 'Asian Affairs & Global Governance', bio: 'Distinguished fellow at a leading Asian research institute and former diplomat.', loc: 'Singapore, Singapore' },
              { name: 'Prof. Dr. Frederick Caldwell', field: 'Sustainable Development', bio: 'University Professor and director of a sustainable development research centre.', loc: 'United States, New York' },
              { name: 'Prof. Dr. Stanley Whitlock', field: 'Political Economy & Institutions', bio: 'Professor of Economics at a leading research university, authority on political economy and institutions.', loc: 'United States, Cambridge' },
              { name: 'Prof. Dr. Reginald Hartley', field: 'Finance & Economic Policy', bio: 'Distinguished professor at a leading business school, former central bank governor.', loc: 'United States, Chicago' },
            ].map(a => (
              <div key={a.name} className="advisor-card">
                <h4>{a.name}</h4>
                <p className="advisor-field">{a.field}</p>
                <p className="advisor-bio">{a.bio}</p>
                <p className="advisor-location">{locationIcon} {a.loc}</p>
              </div>
            ))}
          </div>
        </Section>
      )
    },
    {
      id: 'regions',
      label: 'Regional Presence',
      content: (
        <>
          <Section title="Regional Presence">
            <p className="intro-text">
              Regional research is organized to support comparative analysis, institutional understanding, 
              and policy relevance across diverse governance and economic systems.
            </p>
          </Section>
          <div className="values-grid">
            <div className="value-card"><h3>Africa</h3><p>Governance systems, regulatory environments, and economic policy across regional and national contexts.</p></div>
            <div className="value-card"><h3>Asia-Pacific</h3><p>Institutional frameworks, economic policy, and regulatory dynamics across Asia-Pacific economies.</p></div>
            <div className="value-card"><h3>Europe</h3><p>Regulatory governance, institutional balance, and economic policy coordination across Europe.</p></div>
            <div className="value-card"><h3>Middle East & North Africa</h3><p>Institutional reform, regulatory environments, and economic policy across MENA.</p></div>
            <div className="value-card"><h3>Americas</h3><p>Economic policy, regulatory systems, and institutional capacity across the Americas.</p></div>
            <div className="value-card"><h3>Russia & Eurasia</h3><p>Institutional systems, regulatory frameworks, and economic policy across Eurasia.</p></div>
          </div>
        </>
      )
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <div className="about-hero-banner" aria-hidden="true" />
          <PageHeader
            title={<>Pakistan Business Forum<span className="trademark">®</span></>}
            lead={t('intro')}
            eyebrow="ABOUT"
          />
          <PageTabs tabs={tabs} />
        </div>
      </main>
      <Footer />
    </>
  )
}
