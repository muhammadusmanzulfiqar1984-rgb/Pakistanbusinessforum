'use client'

import { useState, useTransition } from 'react'
import { useTranslations } from 'next-intl'
import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import PageTabs from '@/components/PageTabs'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import { submitContactForm } from '@/app/actions/contact'
import './page.css'

function ContactForm() {
  const t = useTranslations('contact')
  const [isPending, startTransition] = useTransition()
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitStatus(null)
    const formData = new FormData(e.currentTarget)
    const formElement = e.currentTarget
    startTransition(async () => {
      const result = await submitContactForm(formData)
      if (result.error) {
        setSubmitStatus({ success: false, message: result.error })
      } else {
        setSubmitStatus({ success: true, message: result.message })
        formElement.reset()
      }
    })
  }

  return (
    <div className="contact-form-wrapper">
      <h3>{t('formTitle')}</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{t('formName')} *</label>
          <input type="text" id="name" name="name" required disabled={isPending} />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t('formEmail')} *</label>
          <input type="email" id="email" name="email" required disabled={isPending} />
        </div>
        <div className="form-group">
          <label htmlFor="organization">{t('formOrg')}</label>
          <input type="text" id="organization" name="organization" disabled={isPending} />
        </div>
        <div className="form-group">
          <label htmlFor="message">{t('formMessage')} *</label>
          <textarea id="message" name="message" rows={6} required disabled={isPending} />
        </div>
        <button type="submit" className="submit-button" disabled={isPending}>
          {isPending ? 'Sending...' : t('formSubmit')}
        </button>
        {submitStatus && (
          <div className={`form-status ${submitStatus.success ? 'success' : 'error'}`} style={{ marginTop: '1rem', padding: '1rem', borderRadius: '4px', backgroundColor: submitStatus.success ? '#d4edda' : '#f8d7da', color: submitStatus.success ? '#155724' : '#721c24' }}>
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  )
}

export default function Contact() {
  const t = useTranslations('contact')

  const memberships = [
    { title: 'Individual Membership', description: 'Access to research outputs, briefings, and institutional dialogue.' },
    { title: 'Corporate Membership', description: 'Structured engagement for organizations seeking policy analysis.' },
    { title: 'Student Membership', description: 'Academic access to research outputs and learning resources.' },
    { title: 'Institutional Partnership', description: 'Collaborative engagement with public and academic institutions.' },
  ]

  const opportunities = [
    { title: 'Research Positions', description: 'Opportunities for researchers, analysts, and policy professionals to contribute to evidence-based policy research.', areas: ['Policy Research Analysts', 'Economic Policy Researchers', 'Governance and Institutional Analysts', 'Research Associates and Fellows'] },
    { title: 'Internship Programs', description: 'Structured internship programs for students and recent graduates interested in policy research and governance studies.', areas: ['Research Internships', 'Policy Analysis Internships', 'Communications and Media Internships'] },
    { title: 'Consulting Opportunities', description: 'Consulting opportunities for experienced professionals and subject matter experts.', areas: ['Policy Consulting', 'Economic Analysis Consulting', 'Institutional Development Consulting'] },
    { title: 'Collaborative Research', description: 'Opportunities for academic institutions and think tanks to collaborate on joint research projects.', areas: ['Joint Research Projects', 'Knowledge Exchange Programs', 'Academic Partnerships'] },
  ]

  const tabs = [
    {
      id: 'contact',
      label: 'Contact',
      content: (
        <>
          <Section title={t('teamTitle')}>
            <p className="contact-team-intro">{t('teamIntro')}</p>
            <div className="team-director-row">
              <div className="team-director-card">
                <div className="team-avatar-wrap"><div className="team-avatar-placeholder">SA</div></div>
                <div className="team-director-role">Secretary General</div>
                <div className="team-director-name">Syed Aamir Ali</div>
                <a href="mailto:secretarygeneral@pakistanbusinessforum.org" className="team-email">secretarygeneral@pakistanbusinessforum.org</a>
              </div>
              <div className="team-director-card">
                <div className="team-avatar-wrap"><div className="team-avatar-placeholder">RD</div></div>
                <div className="team-director-role">Research Director</div>
                <div className="team-director-name">Research Directorate</div>
                <a href="mailto:research@pakistanbusinessforum.org" className="team-email">research@pakistanbusinessforum.org</a>
              </div>
              <div className="team-director-card">
                <div className="team-avatar-wrap"><div className="team-avatar-placeholder">MD</div></div>
                <div className="team-director-role">Media Director</div>
                <div className="team-director-name">Media & Communications</div>
                <a href="mailto:media@pakistanbusinessforum.org" className="team-email">media@pakistanbusinessforum.org</a>
              </div>
            </div>
            <div className="team-sections">
              <div className="team-section-group">
                <div className="team-section-title">Policy & Research</div>
                <div className="team-members-row">
                  <div className="team-member-card"><div className="team-member-avatar">PR</div><div className="team-member-name">Policy Research</div><div className="team-member-role">Research Analyst</div><a href="mailto:policy@pakistanbusinessforum.org" className="team-member-email">policy@pakistanbusinessforum.org</a></div>
                  <div className="team-member-card"><div className="team-member-avatar">EA</div><div className="team-member-name">Economic Affairs</div><div className="team-member-role">Senior Analyst</div><a href="mailto:economic@pakistanbusinessforum.org" className="team-member-email">economic@pakistanbusinessforum.org</a></div>
                  <div className="team-member-card"><div className="team-member-avatar">RM</div><div className="team-member-name">Regulatory Monitor</div><div className="team-member-role">Intelligence Officer</div><a href="mailto:regulatory@pakistanbusinessforum.org" className="team-member-email">regulatory@pakistanbusinessforum.org</a></div>
                </div>
              </div>
              <div className="team-section-group">
                <div className="team-section-title">Media & Strategic Communications</div>
                <div className="team-members-row">
                  <div className="team-member-card"><div className="team-member-avatar">MC</div><div className="team-member-name">Media Communications</div><div className="team-member-role">Communications Lead</div><a href="mailto:media@pakistanbusinessforum.org" className="team-member-email">media@pakistanbusinessforum.org</a></div>
                  <div className="team-member-card"><div className="team-member-avatar">PR</div><div className="team-member-name">Public Relations</div><div className="team-member-role">PR Officer</div><a href="mailto:pr@pakistanbusinessforum.org" className="team-member-email">pr@pakistanbusinessforum.org</a></div>
                </div>
              </div>
              <div className="team-section-group">
                <div className="team-section-title">Operations & Partnerships</div>
                <div className="team-members-row">
                  <div className="team-member-card"><div className="team-member-avatar">OP</div><div className="team-member-name">Operations</div><div className="team-member-role">Operations Manager</div><a href="mailto:operations@pakistanbusinessforum.org" className="team-member-email">operations@pakistanbusinessforum.org</a></div>
                  <div className="team-member-card"><div className="team-member-avatar">PA</div><div className="team-member-name">Partnerships</div><div className="team-member-role">Partnership Manager</div><a href="mailto:partners@pakistanbusinessforum.org" className="team-member-email">partners@pakistanbusinessforum.org</a></div>
                  <div className="team-member-card"><div className="team-member-avatar">EV</div><div className="team-member-name">Events</div><div className="team-member-role">Events Coordinator</div><a href="mailto:events@pakistanbusinessforum.org" className="team-member-email">events@pakistanbusinessforum.org</a></div>
                </div>
              </div>
            </div>
          </Section>
          <Section title="Contact Information">
            <div className="contact-wrapper">
              <div className="contact-info">
                <div className="info-item"><h3>Email</h3><p>contact@pakistanbusinessforum.org</p></div>
                <div className="info-item"><h3>Telephone</h3><p>+800 1234 5678</p></div>
                <div className="info-item"><h3>Address</h3><p><strong>United Kingdom Office:</strong><br />The City of London Corporation<br />PO Box 270<br />Guildhall<br />London<br />EC2P 2EJ<br />UNITED KINGDOM</p><p style={{ marginTop: '16px' }}><strong>Switzerland Office:</strong><br />Rue du Rhône 100<br />1204 Genève<br />Switzerland</p></div>
                <div className="info-item"><h3>Office Hours</h3><p>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday - Sunday: Closed</p></div>
              </div>
              <ContactForm />
            </div>
          </Section>
        </>
      )
    },
    {
      id: 'membership',
      label: 'Membership',
      content: (
        <Section title="Membership Options">
          <p>Memberships are structured to support research access, analytical engagement, and institutional learning within Pakistan Business Forum<span className="trademark">®</span>.</p>
          <CardGrid>
            {memberships.map((m, i) => (
              <div key={i} className="card"><h3>{m.title}</h3><p>{m.description}</p></div>
            ))}
          </CardGrid>
        </Section>
      )
    },
    {
      id: 'work',
      label: 'Work With Us',
      content: (
        <>
          <Section title="Opportunities">
            <p>Pakistan Business Forum<span className="trademark">®</span> welcomes talented individuals and organizations interested in contributing to evidence-based policy research, governance analysis, and institutional development.</p>
            <CardGrid>
              {opportunities.map((opp, i) => (
                <div key={i} className="card">
                  <h3>{opp.title}</h3>
                  <p>{opp.description}</p>
                  <ul className="opportunity-areas">
                    {opp.areas.map((area, j) => <li key={j}>{area}</li>)}
                  </ul>
                </div>
              ))}
            </CardGrid>
          </Section>
          <Section title="What We Look For">
            <ul className="qualities-list">
              <li>Strong analytical and research capabilities</li>
              <li>Commitment to evidence-based policy analysis</li>
              <li>Methodological rigor and scholarly integrity</li>
              <li>Relevant academic or professional background in policy, economics, governance, or related fields</li>
              <li>Excellent written and verbal communication skills</li>
            </ul>
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
          <div className="contact-hero-banner" aria-hidden="true" />
          <PageHeader title="Engage" lead={t('lead')} eyebrow="CONTACT" />
          <PageTabs tabs={tabs} />
        </div>
      </main>
      <Footer />
    </>
  )
}
