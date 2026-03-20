'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Your inquiry has been received. A response will be provided in due course.')
    setFormData({ name: '', email: '', organization: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Contact"
            lead="Contact information for inquiries regarding research activities, policy analysis, or institutional collaboration."
          />

          <Section title="Our Team">
            <p className="contact-team-intro">Get in touch with the relevant member of our team — we will be happy to assist with your inquiry.</p>

            {/* Director Cards */}
            <div className="team-director-row">
              <div className="team-director-card">
                <div className="team-avatar-wrap">
                  <div className="team-avatar-placeholder">SA</div>
                </div>
                <div className="team-director-role">Secretary General</div>
                <div className="team-director-name">Syed Aamir Ali</div>
                <a href="mailto:secretarygeneral@pakistanbusinessforum.org" className="team-email">secretarygeneral@pakistanbusinessforum.org</a>
              </div>
              <div className="team-director-card">
                <div className="team-avatar-wrap">
                  <div className="team-avatar-placeholder">RD</div>
                </div>
                <div className="team-director-role">Research Director</div>
                <div className="team-director-name">Research Directorate</div>
                <a href="mailto:research@pakistanbusinessforum.org" className="team-email">research@pakistanbusinessforum.org</a>
              </div>
              <div className="team-director-card">
                <div className="team-avatar-wrap">
                  <div className="team-avatar-placeholder">MD</div>
                </div>
                <div className="team-director-role">Media Director</div>
                <div className="team-director-name">Media & Communications</div>
                <a href="mailto:media@pakistanbusinessforum.org" className="team-email">media@pakistanbusinessforum.org</a>
              </div>
            </div>

            {/* Team sections */}
            <div className="team-sections">
              <div className="team-section-group">
                <div className="team-section-title">Policy & Research</div>
                <div className="team-members-row">
                  <div className="team-member-card">
                    <div className="team-member-avatar">PR</div>
                    <div className="team-member-name">Policy Research</div>
                    <div className="team-member-role">Research Analyst</div>
                    <a href="mailto:policy@pakistanbusinessforum.org" className="team-member-email">policy@pakistanbusinessforum.org</a>
                  </div>
                  <div className="team-member-card">
                    <div className="team-member-avatar">EA</div>
                    <div className="team-member-name">Economic Affairs</div>
                    <div className="team-member-role">Senior Analyst</div>
                    <a href="mailto:economic@pakistanbusinessforum.org" className="team-member-email">economic@pakistanbusinessforum.org</a>
                  </div>
                  <div className="team-member-card">
                    <div className="team-member-avatar">RM</div>
                    <div className="team-member-name">Regulatory Monitor</div>
                    <div className="team-member-role">Intelligence Officer</div>
                    <a href="mailto:regulatory@pakistanbusinessforum.org" className="team-member-email">regulatory@pakistanbusinessforum.org</a>
                  </div>
                </div>
              </div>

              <div className="team-section-group">
                <div className="team-section-title">Media & Strategic Communications</div>
                <div className="team-members-row">
                  <div className="team-member-card">
                    <div className="team-member-avatar">MC</div>
                    <div className="team-member-name">Media Communications</div>
                    <div className="team-member-role">Communications Lead</div>
                    <a href="mailto:media@pakistanbusinessforum.org" className="team-member-email">media@pakistanbusinessforum.org</a>
                  </div>
                  <div className="team-member-card">
                    <div className="team-member-avatar">PR</div>
                    <div className="team-member-name">Public Relations</div>
                    <div className="team-member-role">PR Officer</div>
                    <a href="mailto:pr@pakistanbusinessforum.org" className="team-member-email">pr@pakistanbusinessforum.org</a>
                  </div>
                </div>
              </div>

              <div className="team-section-group">
                <div className="team-section-title">Operations & Partnerships</div>
                <div className="team-members-row">
                  <div className="team-member-card">
                    <div className="team-member-avatar">OP</div>
                    <div className="team-member-name">Operations</div>
                    <div className="team-member-role">Operations Manager</div>
                    <a href="mailto:operations@pakistanbusinessforum.org" className="team-member-email">operations@pakistanbusinessforum.org</a>
                  </div>
                  <div className="team-member-card">
                    <div className="team-member-avatar">PA</div>
                    <div className="team-member-name">Partnerships</div>
                    <div className="team-member-role">Partnership Manager</div>
                    <a href="mailto:partners@pakistanbusinessforum.org" className="team-member-email">partners@pakistanbusinessforum.org</a>
                  </div>
                  <div className="team-member-card">
                    <div className="team-member-avatar">EV</div>
                    <div className="team-member-name">Events</div>
                    <div className="team-member-role">Events Coordinator</div>
                    <a href="mailto:events@pakistanbusinessforum.org" className="team-member-email">events@pakistanbusinessforum.org</a>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Contact Information">
            <div className="contact-wrapper">
              <div className="contact-info">
                  <div className="info-item">
                    <h3>Email</h3>
                    <p>contact@pakistanbusinessforum.org</p>
                  </div>
                  <div className="info-item">
                    <h3>Telephone</h3>
                    <p>+800 1234 5678</p>
                  </div>
                  <div className="info-item">
                    <h3>Address</h3>
                    <p>
                      <strong>United Kingdom Office:</strong><br />
                      The City of London Corporation<br />
                      PO Box 270<br />
                      Guildhall<br />
                      London<br />
                      EC2P 2EJ<br />
                      UNITED KINGDOM
                    </p>
                    <p style={{ marginTop: '16px' }}>
                      <strong>Switzerland Office:</strong><br />
                      Rue du Rhône 100<br />
                      1204 Genève<br />
                      Switzerland
                    </p>
                  </div>
                  <div className="info-item">
                    <h3>Office Hours</h3>
                    <p>
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
              </div>

              <div className="contact-form-wrapper">
                <h3>Inquiry Form</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="organization">Organization</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="submit-button">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
