'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import PageShell from '@/components/PageShell'
import './page.css'

export default function About() {
  const [activeTab, setActiveTab] = useState('history')

  return (
    <>
      <Navigation />
      <main>
        <PageShell>
          <section className="page-header">
            <div className="container">
              <h1 className="page-title">Pakistan Business Forum<span className="trademark">®</span></h1>
              <p className="page-subtitle">STRATEGIC POLICY & RESEARCH PLATFORM</p>
              <p className="page-intro">An independent strategic policy and research platform engaged in analysis of governance, economic systems, regulatory frameworks, and institutional development at national and international levels.</p>
            </div>
          </section>

          <div className="about-content">
            <div className="about-tabs">
              <button 
                className={`tab-button ${activeTab === 'history' ? 'active' : ''}`}
                onClick={() => setActiveTab('history')}
              >
                History
              </button>
              <button 
                className={`tab-button ${activeTab === 'messages' ? 'active' : ''}`}
                onClick={() => setActiveTab('messages')}
              >
                Messages
              </button>
              <button 
                className={`tab-button ${activeTab === 'values' ? 'active' : ''}`}
                onClick={() => setActiveTab('values')}
              >
                Our Core Values
              </button>
              <button 
                className={`tab-button ${activeTab === 'team' ? 'active' : ''}`}
                onClick={() => setActiveTab('team')}
              >
                Our Team
              </button>
              <button 
                className={`tab-button ${activeTab === 'team-pakistan' ? 'active' : ''}`}
                onClick={() => setActiveTab('team-pakistan')}
              >
                Team Pakistan
              </button>
              <button 
                className={`tab-button ${activeTab === 'advisors' ? 'active' : ''}`}
                onClick={() => setActiveTab('advisors')}
              >
                Board of Advisors
              </button>
            </div>

            <div className="about-tab-content">
              {activeTab === 'history' && (
                <div className="tab-panel">
                  <h2>Our History</h2>
                  <p className="intro-text">
                    Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function was established as a structured analytical institution with clear boundaries 
                    and a commitment to independence. The Forum conducts evidence-based research with analytical 
                    independence to contribute to policy understanding and institutional clarity.
                  </p>

                  <div className="formation-details">
                    <h3>Formation & Development</h3>
                    <p>
                      The Forum was founded with the vision of creating an independent platform for evidence-based 
                      policy analysis. From its establishment, the institution has maintained a non-lobbying, 
                      non-political posture, focusing exclusively on rigorous research and analytical work.
                    </p>
                    <p>
                      The institution's development has been characterized by a commitment to methodological rigor, 
                      analytical transparency, and institutional safeguards that ensure research independence and 
                      scholarly integrity.
                    </p>
                  </div>

                  <div className="timeline-section">
                    <h3>Institutional Timeline</h3>
                    <div className="timeline-vertical" aria-label="Institutional continuity">
                      <div className="timeline-item">
                        <span className="timeline-year">2020</span>
                        <span className="timeline-text">Establishment of Pakistan Business Forum — Strategic Policy & Research Function as an independent strategic policy and research platform</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-year">2021</span>
                        <span className="timeline-text">Structural definition and establishment of research protocols and analytical frameworks</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-year">2022</span>
                        <span className="timeline-text">Research orientation and development of specialized practice areas and thematic focus</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-year">2023</span>
                        <span className="timeline-text">Institutional safeguards and implementation of governance frameworks ensuring research independence</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-year">2024</span>
                        <span className="timeline-text">Strategic consolidation and expansion of research portfolio and institutional partnerships</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-year">Present</span>
                        <span className="timeline-text">Ongoing stewardship and continued commitment to evidence-based policy analysis</span>
                      </div>
                    </div>
                  </div>

                  <div className="key-principles">
                    <h3>Key Principles</h3>
                    <ul>
                      <li>Independent analytical platform with no political or lobbying affiliations</li>
                      <li>Evidence-based policy research grounded in methodological rigor</li>
                      <li>Non-lobbying, non-political posture ensuring analytical objectivity</li>
                      <li>Institutional credibility sustained through continuity and disciplined practice</li>
                      <li>No representation undertaken without written mandate, with full commitment to professional and ethical standards</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'messages' && (
                <div className="tab-panel">
                  <h2>Leadership Messages</h2>
                  
                  <div className="message-card">
                    <h3>From the Patron-in-Chief</h3>
                    <p className="message-author">Mian Muhammad Usman, Patron-in-Chief</p>
                    <p>
                      Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function represents a commitment to institutional excellence and analytical 
                      independence. As Patron-in-Chief, I provide institutional oversight focused on continuity, 
                      standards, and responsibility in research practice and governance.
                    </p>
                    <p>
                      Our mission is to strengthen policy understanding through methodologically sound, analytically 
                      rigorous research that contributes meaningfully to contemporary governance challenges. The Forum 
                      operates with clear boundaries and a steadfast commitment to independence, ensuring that our 
                      research outputs serve the public interest through evidence-based analysis.
                    </p>
                  </div>

                  <div className="message-card">
                    <h3>From the Founder</h3>
                    <p className="message-author">Malik Naseer Ahmed, Founder</p>
                    <p>
                      The establishment of Pakistan Business Forum — Strategic Policy & Research Function was driven by a vision to create a structured 
                      analytical institution that operates with clarity of mandate and commitment to independence. 
                      From the outset, we have maintained clear boundaries and a disciplined approach to research 
                      and policy analysis.
                    </p>
                    <p>
                      The Forum exists to strengthen policy understanding by producing research that is methodologically 
                      sound, analytically rigorous, and relevant to contemporary governance challenges. We conduct 
                      evidence-based research with analytical independence, contributing to policy understanding and 
                      institutional clarity without engaging in lobbying or political advocacy.
                    </p>
                    <p>
                      Institutional credibility is sustained through continuity, clarity of mandate, and disciplined 
                      practice. We remain committed to maintaining the highest standards of research integrity and 
                      analytical objectivity.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="tab-panel">
                  <h2>Our Core Values</h2>
                  <p className="intro-text">
                    Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function is guided by a set of core values 
                    that define our institutional character, research approach, and commitment to excellence. These 
                    values shape every aspect of our work and ensure that we maintain the highest standards of 
                    integrity, independence, and analytical rigor.
                  </p>

                  <div className="values-grid">
                    <div className="value-card">
                      <h3>Independence</h3>
                      <p>
                        We maintain complete analytical independence from political, commercial, or advocacy interests. 
                        Our research is conducted without external influence, ensuring that findings and recommendations 
                        are based solely on evidence and rigorous analysis. This independence is fundamental to our 
                        credibility and the value we provide to policy audiences.
                      </p>
                    </div>

                    <div className="value-card">
                      <h3>Rigorous Methodology</h3>
                      <p>
                        We adhere to the highest standards of methodological rigor in all our research activities. 
                        Our analytical frameworks are grounded in established academic and professional standards, 
                        ensuring that our findings are reliable, replicable, and defensible. We employ diverse 
                        methodological approaches selected according to the specific research questions and analytical 
                        objectives of each project.
                      </p>
                    </div>

                    <div className="value-card">
                      <h3>Evidence-Based Analysis</h3>
                      <p>
                        All our research and policy analysis is grounded in empirical evidence and systematic inquiry. 
                        We prioritize data-driven insights over assumptions, ensuring that our recommendations and 
                        findings are supported by rigorous analysis and verifiable evidence. This commitment to 
                        evidence-based analysis distinguishes our work and ensures its relevance to policy practice.
                      </p>
                    </div>

                    <div className="value-card">
                      <h3>Transparency</h3>
                      <p>
                        We maintain transparency in our research processes, methodologies, and analytical frameworks. 
                        Our publications clearly articulate research questions, methodological approaches, data sources, 
                        and analytical limitations. This transparency enables readers to assess the validity and 
                        reliability of our findings and contributes to the credibility of our research outputs.
                      </p>
                    </div>

                    <div className="value-card">
                      <h3>Institutional Integrity</h3>
                      <p>
                        We operate with the highest standards of institutional integrity, maintaining clear boundaries 
                        between research activities and advocacy or political engagement. Our commitment to integrity 
                        ensures that our research outputs serve the public interest and contribute to informed 
                        policy discourse without being compromised by external interests or agendas.
                      </p>
                    </div>

                    <div className="value-card">
                      <h3>Academic Excellence</h3>
                      <p>
                        We strive for academic excellence in all our research activities, contributing to scholarly 
                        literature while maintaining relevance to policy practice. Our work undergoes rigorous peer 
                        review and editorial processes, ensuring that publications meet the highest standards of 
                        academic rigor and analytical quality. We engage with academic institutions and contribute 
                        to scholarly discourse on governance and policy issues.
                      </p>
                    </div>

                    <div className="value-card">
                      <h3>Non-Partisan Approach</h3>
                      <p>
                        We maintain a strictly non-partisan approach to policy research and analysis. Our work does 
                        not advocate for specific political positions, parties, or policy outcomes. Instead, we provide 
                        neutral, evidence-based analysis that informs policy debates and supports informed decision-making 
                        across diverse political and institutional contexts.
                      </p>
                    </div>

                    <div className="value-card">
                      <h3>Long-Term Perspective</h3>
                      <p>
                        We take a long-term perspective in our research and analysis, recognizing that effective policy 
                        development requires understanding of historical context, institutional continuity, and long-term 
                        implications. Our work contributes to institutional memory and supports strategic thinking that 
                        extends beyond immediate policy cycles.
                      </p>
                    </div>
                  </div>

                  <div className="values-principles">
                    <h3>Guiding Principles</h3>
                    <p>
                      These core values are supported by a set of guiding principles that inform our daily operations 
                      and research practices:
                    </p>
                    <ul>
                      <li><strong>Methodological Rigor:</strong> All research follows established academic and professional standards</li>
                      <li><strong>Analytical Objectivity:</strong> Research findings are based on evidence, not predetermined conclusions</li>
                      <li><strong>Intellectual Independence:</strong> Research is conducted free from external influence or pressure</li>
                      <li><strong>Professional Ethics:</strong> All activities adhere to the highest standards of professional conduct</li>
                      <li><strong>Institutional Stewardship:</strong> Resources are managed responsibly and transparently</li>
                      <li><strong>Knowledge Sharing:</strong> Research findings are made accessible to diverse audiences</li>
                      <li><strong>Continuous Improvement:</strong> We regularly review and enhance our research processes and methodologies</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'team' && (
                <div className="tab-panel">
                  <h2>Our Team</h2>
                  <p className="intro-text">
                    Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function is led by a diverse team of experts across multiple domains, 
                    ensuring comprehensive coverage of policy research, strategic communications, regional 
                    expertise, and institutional governance.
                  </p>

                  <div className="team-section">
                    <h3>Policy Board</h3>
                    <div className="team-grid">
                      <div className="team-member">
                        <h4>Mian Muhammad Usman</h4>
                        <p className="team-role">Patron-in-Chief</p>
                        <p className="team-bio">Provides institutional oversight focused on continuity, standards, and responsibility in research practice and governance.</p>
                      </div>
                      <div className="team-member">
                        <h4>Malik Naseer Ahmed</h4>
                        <p className="team-role">Founder</p>
                        <p className="team-bio">Established the Forum as a structured analytical institution with clear boundaries and commitment to independence.</p>
                      </div>
                      <div className="team-member">
                        <h4>Dr. Sarah Khan</h4>
                        <p className="team-role">Policy Board Member</p>
                        <p className="team-bio">Expert in governance frameworks and institutional development with extensive experience in policy analysis.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:policy.board@pakistanbusinessforum.org">policy.board@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            United Kingdom, London
                          </p>
                        </div>
                      </div>
                      <div className="team-member">
                        <h4>Ahmed Hassan</h4>
                        <p className="team-role">Policy Board Member</p>
                        <p className="team-bio">Specializes in economic policy research and strategic policy advisory with focus on development frameworks.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:policy.board@pakistanbusinessforum.org">policy.board@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Pakistan, Islamabad
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="team-section">
                    <h3>Research Heads</h3>
                    <div className="team-grid">
                      <div className="team-member">
                        <h4>Dr. Fatima Ali</h4>
                        <p className="team-role">Head of Research</p>
                        <p className="team-bio">Leads research activities across governance, economic policy, and institutional analysis with focus on methodological rigor.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:head.research@pakistanbusinessforum.org">head.research@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Pakistan, Islamabad
                          </p>
                        </div>
                      </div>
                      <div className="team-member">
                        <h4>Prof. Muhammad Zain</h4>
                        <p className="team-role">Head of Economic Research</p>
                        <p className="team-bio">Specializes in economic policy analysis, fiscal policy evaluation, and economic development frameworks.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:head.economic.research@pakistanbusinessforum.org">head.economic.research@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            United States, New York
                          </p>
                        </div>
                      </div>
                      <div className="team-member">
                        <h4>Dr. Ayesha Malik</h4>
                        <p className="team-role">Head of Policy Evaluation</p>
                        <p className="team-bio">Expert in policy design, evaluation mechanisms, and impact assessment methodologies.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:head.policy.evaluation@pakistanbusinessforum.org">head.policy.evaluation@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Canada, Ottawa
                          </p>
                        </div>
                      </div>
                      <div className="team-member">
                        <h4>Dr. Hassan Raza</h4>
                        <p className="team-role">Head of Governance Research</p>
                        <p className="team-bio">Focuses on institutional design, governance frameworks, and administrative capacity analysis.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:head.governance.research@pakistanbusinessforum.org">head.governance.research@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Australia, Canberra
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="team-section">
                    <h3>Media Heads</h3>
                    <div className="team-grid">
                      <div className="team-member">
                        <h4>Zara Sheikh</h4>
                        <p className="team-role">Head of Media & Communications</p>
                        <p className="team-bio">Leads strategic communications, media relations, and knowledge dissemination activities.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:head.media@pakistanbusinessforum.org">head.media@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Pakistan, Islamabad
                          </p>
                        </div>
                      </div>
                      <div className="team-member">
                        <h4>Omar Farooq</h4>
                        <p className="team-role">Head of Strategic Communications</p>
                        <p className="team-bio">Specializes in media engagement, public affairs, and communication strategy development.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:head.strategic.communications@pakistanbusinessforum.org">head.strategic.communications@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            United Arab Emirates, Dubai
                          </p>
                        </div>
                      </div>
                      <div className="team-member">
                        <h4>Hina Abbas</h4>
                        <p className="team-role">Head of Publications</p>
                        <p className="team-bio">Manages publication programs, research dissemination, and knowledge output coordination.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:head.publications@pakistanbusinessforum.org">head.publications@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Pakistan, Karachi
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="team-section">
                    <h3>Regional Heads</h3>
                    <div className="team-grid">
                      <div className="team-member">
                        <h4>Dr. James Wilson</h4>
                        <p className="team-role">Regional Head, Americas</p>
                        <p className="team-bio">Coordinates research and policy analysis activities across North and South American regions.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:regional.head.americas@pakistanbusinessforum.org">regional.head.americas@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            United States, Washington D.C.
                          </p>
                        </div>
                      </div>
                      <div className="team-member">
                        <h4>Dr. Li Wei</h4>
                        <p className="team-role">Regional Head, Asia-Pacific</p>
                        <p className="team-bio">Leads regional analysis and policy research activities across Asia-Pacific countries.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:regional.head.asiapacific@pakistanbusinessforum.org">regional.head.asiapacific@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Singapore, Singapore
                          </p>
                        </div>
                      </div>
                      <div className="team-member">
                        <h4>Dr. Klaus Mueller</h4>
                        <p className="team-role">Regional Head, Europe</p>
                        <p className="team-bio">Manages research initiatives and policy analysis across European institutions and frameworks.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:regional.head.europe@pakistanbusinessforum.org">regional.head.europe@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            United Kingdom, London
                          </p>
                        </div>
                      </div>
                      <div className="team-member">
                        <h4>Dr. Amina Hassan</h4>
                        <p className="team-role">Regional Head, Middle East & North Africa</p>
                        <p className="team-bio">Specializes in regional policy analysis and governance research across MENA countries.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:regional.head.mena@pakistanbusinessforum.org">regional.head.mena@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Lebanon, Beirut
                          </p>
                        </div>
                      </div>
                      <div className="team-member">
                        <h4>Dr. Kwame Osei</h4>
                        <p className="team-role">Regional Head, Africa</p>
                        <p className="team-bio">Coordinates research activities and policy analysis across African regional contexts.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:regional.head.africa@pakistanbusinessforum.org">regional.head.africa@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            South Africa, Pretoria
                          </p>
                        </div>
                      </div>
                      <div className="team-member">
                        <h4>Dr. Elena Petrov</h4>
                        <p className="team-role">Regional Head, Russia & Eurasia</p>
                        <p className="team-bio">Leads research initiatives and policy analysis across Russia and Eurasian regional frameworks.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:regional.head.russia.eurasia@pakistanbusinessforum.org">regional.head.russia.eurasia@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Russia, Moscow
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="team-section">
                    <h3>Administration</h3>
                    <div className="team-grid">
                      <div className="team-member">
                        <h4>Rashid Mahmood</h4>
                        <p className="team-role">Chief Administrative Officer</p>
                        <p className="team-bio">Oversees administrative operations, institutional management, and organizational coordination.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:chief.administrative.officer@pakistanbusinessforum.org">chief.administrative.officer@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Pakistan, Islamabad
                          </p>
                        </div>
                      </div>
                      <div className="team-member">
                        <h4>Nadia Khan</h4>
                        <p className="team-role">Director of Operations</p>
                        <p className="team-bio">Manages day-to-day operations, resource coordination, and institutional logistics.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:director.operations@pakistanbusinessforum.org">director.operations@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Pakistan, Lahore
                          </p>
                        </div>
                      </div>
                      <div className="team-member">
                        <h4>Usman Ali</h4>
                        <p className="team-role">Finance Director</p>
                        <p className="team-bio">Oversees financial management, budgeting, and resource allocation for research activities.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:finance.director@pakistanbusinessforum.org">finance.director@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Pakistan, Islamabad
                          </p>
                        </div>
                      </div>
                      <div className="team-member">
                        <h4>Sana Ahmed</h4>
                        <p className="team-role">Administrative Coordinator</p>
                        <p className="team-bio">Coordinates administrative support, documentation, and institutional record-keeping.</p>
                        <div className="team-contact">
                          <p className="team-email">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:administrative.coordinator@pakistanbusinessforum.org">administrative.coordinator@pakistanbusinessforum.org</a>
                          </p>
                          <p className="team-location">
                            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Pakistan, Islamabad
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'team-pakistan' && (
                <div className="tab-panel">
                  <h2>Team Pakistan</h2>
                  <p className="intro-text">
                    Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function brings together diverse voices and expertise from across Pakistan, 
                    representing all provinces, sectors, and communities. Our team reflects the rich diversity of Pakistan's regions, 
                    professions, and perspectives, ensuring comprehensive representation in our policy research and analysis.
                  </p>

                  <div className="team-pakistan-grid">
                    <div className="team-pakistan-section">
                      <h3>Provinces</h3>
                      <div className="team-pakistan-segment">
                        <h4>Punjab</h4>
                        <ul className="team-pakistan-list">
                          <li>Dr. Ahmed Raza</li>
                          <li>Malik Shahid Hussain</li>
                          <li>Prof. Ayesha Malik</li>
                          <li>Mian Usman Ali</li>
                        </ul>
                      </div>
                      <div className="team-pakistan-segment">
                        <h4>Sindh</h4>
                        <ul className="team-pakistan-list">
                          <li>Dr. Fatima Sheikh</li>
                          <li>Syed Hassan Ali</li>
                          <li>Nadia Khan</li>
                          <li>Ahmed Memon</li>
                        </ul>
                      </div>
                      <div className="team-pakistan-segment">
                        <h4>Khyber Pakhtunkhwa</h4>
                        <ul className="team-pakistan-list">
                          <li>Dr. Muhammad Zain</li>
                          <li>Hina Khattak</li>
                          <li>Khalid Afridi</li>
                          <li>Dr. Sanaullah Khan</li>
                        </ul>
                      </div>
                      <div className="team-pakistan-segment">
                        <h4>Balochistan</h4>
                        <ul className="team-pakistan-list">
                          <li>Dr. Amina Baloch</li>
                          <li>Mir Hassan Khan</li>
                          <li>Zara Mengal</li>
                          <li>Dr. Jamal Ahmed</li>
                        </ul>
                      </div>
                      <div className="team-pakistan-segment">
                        <h4>Gilgit-Baltistan</h4>
                        <ul className="team-pakistan-list">
                          <li>Dr. Ali Raza</li>
                          <li>Fatima Shah</li>
                          <li>Hassan Karim</li>
                        </ul>
                      </div>
                      <div className="team-pakistan-segment">
                        <h4>Azad Jammu and Kashmir</h4>
                        <ul className="team-pakistan-list">
                          <li>Dr. Sarah Mir</li>
                          <li>Ahmed Butt</li>
                          <li>Nadia Sheikh</li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-pakistan-section">
                      <h3>Central Area</h3>
                      <div className="team-pakistan-segment">
                        <ul className="team-pakistan-list">
                          <li>Dr. Hassan Raza</li>
                          <li>Malik Naseer</li>
                          <li>Dr. Ayesha Khan</li>
                          <li>Ahmed Mahmood</li>
                          <li>Prof. Fatima Ali</li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-pakistan-section">
                      <h3>Women</h3>
                      <div className="team-pakistan-segment">
                        <ul className="team-pakistan-list">
                          <li>Dr. Zara Sheikh</li>
                          <li>Hina Abbas</li>
                          <li>Dr. Ayesha Malik</li>
                          <li>Nadia Khan</li>
                          <li>Fatima Ali</li>
                          <li>Dr. Sarah Khan</li>
                          <li>Prof. Amina Hassan</li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-pakistan-section">
                      <h3>Labour</h3>
                      <div className="team-pakistan-segment">
                        <ul className="team-pakistan-list">
                          <li>Muhammad Aslam</li>
                          <li>Hassan Ali</li>
                          <li>Ahmed Khan</li>
                          <li>Zain Abbas</li>
                          <li>Rashid Mahmood</li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-pakistan-section">
                      <h3>Law</h3>
                      <div className="team-pakistan-segment">
                        <ul className="team-pakistan-list">
                          <li>Advocate Dr. Sarah Khan</li>
                          <li>Barrister Ahmed Hassan</li>
                          <li>Advocate Fatima Ali</li>
                          <li>Barrister Usman Ali</li>
                          <li>Advocate Hina Sheikh</li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-pakistan-section">
                      <h3>Industry</h3>
                      <div className="team-pakistan-segment">
                        <ul className="team-pakistan-list">
                          <li>Eng. Muhammad Zain</li>
                          <li>Dr. Hassan Raza</li>
                          <li>Ahmed Malik</li>
                          <li>Prof. Ayesha Khan</li>
                          <li>Eng. Usman Ali</li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-pakistan-section">
                      <h3>Intellectuals</h3>
                      <div className="team-pakistan-segment">
                        <ul className="team-pakistan-list">
                          <li>Prof. Dr. Fatima Ali</li>
                          <li>Dr. Ahmed Hassan</li>
                          <li>Prof. Muhammad Zain</li>
                          <li>Dr. Ayesha Malik</li>
                          <li>Prof. Hassan Raza</li>
                          <li>Dr. Sarah Khan</li>
                        </ul>
                      </div>
                    </div>

                    <div className="team-pakistan-section">
                      <h3>Business Community</h3>
                      <div className="team-pakistan-segment">
                        <ul className="team-pakistan-list">
                          <li>Mian Usman Ahmed</li>
                          <li>Malik Shahid Hussain</li>
                          <li>Ahmed Hassan</li>
                          <li>Syed Ali Raza</li>
                          <li>Hassan Mahmood</li>
                          <li>Muhammad Zain</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'advisors' && (
                <div className="tab-panel">
                  <h2>Board of Advisors</h2>
                  <p className="intro-text">
                    Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function is guided by a distinguished Board of Advisors comprising 
                    world-renowned experts from diverse fields and regions. These eminent advisors bring decades of experience, 
                    exceptional expertise, and global perspectives to support our mission of evidence-based policy research and analysis.
                  </p>

                  <div className="advisors-grid">
                    <div className="advisor-card">
                      <h4>Prof. Dr. Amartya Sen</h4>
                      <p className="advisor-field">Nobel Laureate in Economic Sciences</p>
                      <p className="advisor-bio">Distinguished economist and philosopher, recipient of the 1998 Nobel Prize in Economic Sciences for contributions to welfare economics and social choice theory.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        United States, Cambridge
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Joseph Stiglitz</h4>
                      <p className="advisor-field">Nobel Laureate in Economic Sciences</p>
                      <p className="advisor-bio">Renowned economist, former Chief Economist of the World Bank, and recipient of the 2001 Nobel Prize in Economic Sciences for analyses of markets with asymmetric information.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        United States, New York
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Thomas Piketty</h4>
                      <p className="advisor-field">Economic Inequality & Public Policy</p>
                      <p className="advisor-bio">Professor at the Paris School of Economics and École des Hautes Études en Sciences Sociales, leading expert on wealth inequality, capital, and economic history.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        France, Paris
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Dani Rodrik</h4>
                      <p className="advisor-field">International Political Economy</p>
                      <p className="advisor-bio">Ford Foundation Professor of International Political Economy at Harvard Kennedy School, expert on globalization, economic development, and political economy.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        United States, Cambridge
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Anne-Marie Slaughter</h4>
                      <p className="advisor-field">International Law & Policy</p>
                      <p className="advisor-bio">CEO of New America, former Director of Policy Planning at the U.S. State Department, and leading expert on international relations, law, and global governance.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        United States, Washington D.C.
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Ngaire Woods</h4>
                      <p className="advisor-field">Global Economic Governance</p>
                      <p className="advisor-bio">Dean of the Blavatnik School of Government at University of Oxford, expert on global economic governance, international institutions, and development policy.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        United Kingdom, Oxford
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Kishore Mahbubani</h4>
                      <p className="advisor-field">Asian Affairs & Global Governance</p>
                      <p className="advisor-bio">Distinguished Fellow at the Asia Research Institute, National University of Singapore, former Singaporean diplomat, and leading voice on Asian affairs and global governance.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        Singapore, Singapore
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Jeffrey Sachs</h4>
                      <p className="advisor-field">Sustainable Development</p>
                      <p className="advisor-bio">University Professor at Columbia University, Director of the Center for Sustainable Development, and leading expert on economic development, poverty alleviation, and sustainable development goals.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        United States, New York
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Daron Acemoglu</h4>
                      <p className="advisor-field">Political Economy & Institutions</p>
                      <p className="advisor-bio">Elizabeth and James Killian Professor of Economics at MIT, leading authority on political economy, economic growth, and the role of institutions in development.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        United States, Cambridge
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Raghuram Rajan</h4>
                      <p className="advisor-field">Finance & Economic Policy</p>
                      <p className="advisor-bio">Katherine Dusak Miller Distinguished Service Professor at University of Chicago Booth School of Business, former Governor of Reserve Bank of India, and expert on financial systems and economic policy.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        United States, Chicago
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  )
}
