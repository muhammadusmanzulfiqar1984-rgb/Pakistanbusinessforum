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
