'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import PageShell from '@/components/PageShell'
import './page.css'

export default function About() {
  const t = useTranslations('about')
  const [activeTab, setActiveTab] = useState('history')
  const [activeSubTab, setActiveSubTab] = useState('Policy Board')

  return (
    <>
      <Navigation />
      <main>
        <PageShell>
          <section className="page-header">
            <div className="container">
              <h1 className="page-title">Pakistan Business Forum<span className="trademark">®</span></h1>
              <p className="page-subtitle">{t('subtitle')}</p>
              <p className="page-intro">{t('intro')}</p>
            </div>
          </section>

          <div className="about-content">
            <div className="about-tabs">
              <button 
                className={`tab-button ${activeTab === 'history' ? 'active' : ''}`}
                onClick={() => setActiveTab('history')}
              >
                {t('tabHistory')}
              </button>
              <button 
                className={`tab-button ${activeTab === 'messages' ? 'active' : ''}`}
                onClick={() => setActiveTab('messages')}
              >
                {t('tabMessages')}
              </button>
              <button 
                className={`tab-button ${activeTab === 'values' ? 'active' : ''}`}
                onClick={() => setActiveTab('values')}
              >
                {t('tabValues')}
              </button>
              <button 
                className={`tab-button ${activeTab === 'team' ? 'active' : ''}`}
                onClick={() => setActiveTab('team')}
              >
                {t('tabTeam')}
              </button>
              <button 
                className={`tab-button ${activeTab === 'team-pakistan' ? 'active' : ''}`}
                onClick={() => setActiveTab('team-pakistan')}
              >
                {t('tabTeamPak')}
              </button>
              <button 
                className={`tab-button ${activeTab === 'advisors' ? 'active' : ''}`}
                onClick={() => setActiveTab('advisors')}
              >
                {t('tabAdvisors')}
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
                        <span className="timeline-year">2016</span>
                        <div className="timeline-node"><span className="timeline-node-dot" /></div>
                        <span className="timeline-text">Establishment of Pakistan Business Forum® as an independent policy and research platform — founding mandate set, analytical boundaries defined</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-year">2017</span>
                        <div className="timeline-node"><span className="timeline-node-dot" /></div>
                        <span className="timeline-text">Early development phase — initial research agenda formulated, core practice areas identified and scoped</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-year">2018</span>
                        <div className="timeline-node"><span className="timeline-node-dot" /></div>
                        <span className="timeline-text">Structural definition — research protocols codified, analytical frameworks established, methodological standards formalised</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-year">2019</span>
                        <div className="timeline-node"><span className="timeline-node-dot" /></div>
                        <span className="timeline-text">Regional engagement expanded — policy analysis capabilities extended across governance, economic, and institutional domains</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-year">2020</span>
                        <div className="timeline-node"><span className="timeline-node-dot" /></div>
                        <span className="timeline-text">Research orientation deepened — specialised practice areas and thematic focus areas developed in response to shifting policy landscape</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-year">2021</span>
                        <div className="timeline-node"><span className="timeline-node-dot" /></div>
                        <span className="timeline-text">Institutional safeguards reinforced — governance frameworks implemented to ensure sustained research independence and integrity</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-year">2022</span>
                        <div className="timeline-node"><span className="timeline-node-dot" /></div>
                        <span className="timeline-text">Strategic consolidation — research portfolio expanded and institutional partnerships formalised across multiple regions</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-year">2023</span>
                        <div className="timeline-node"><span className="timeline-node-dot" /></div>
                        <span className="timeline-text">International collaborations deepened — think tank partnerships, academic affiliations, and cross-border research linkages formalised</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-year">2024</span>
                        <div className="timeline-node"><span className="timeline-node-dot" /></div>
                        <span className="timeline-text">Strategic advisory function matured — practice area specialisation strengthened, output quality benchmarked against global standards</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-year">Present</span>
                        <div className="timeline-node"><span className="timeline-node-dot" /></div>
                        <span className="timeline-text">Active stewardship and continued commitment — evidence-based analysis delivered at scale, institutional continuity secured for the decade ahead</span>
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

                  {/* Sub-tab pills */}
                  <div className="sub-tabs">
                    {['Policy Board','Research','Media','Regional','Administration'].map(s => (
                      <button key={s} className={`sub-tab-btn ${activeSubTab === s ? 'active' : ''}`} onClick={() => setActiveSubTab(s)}>{s}</button>
                    ))}
                  </div>

                  {activeSubTab === 'Policy Board' && (
                    <div className="compact-grid">
                      {[
                        { name:'Mian Muhammad Usman', role:'Patron-in-Chief', loc:'Pakistan' },
                        { name:'Dr. Amara Siddiqi', role:'Policy Board Member', loc:'UK, London' },
                        { name:'Mr. Bilal Chaudhry', role:'Policy Board Member', loc:'Pakistan, Islamabad' },
                      ].map(m => (
                        <div key={m.name} className="compact-card">
                          <div className="compact-name">{m.name}</div>
                          <div className="compact-role">{m.role}</div>
                          <div className="compact-loc">{m.loc}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSubTab === 'Research' && (
                    <div className="compact-grid">
                      {[
                        { name:'Dr. Rania Yousuf', role:'Head of Research', loc:'Pakistan, Islamabad' },
                        { name:'Prof. Ibrahim Kamal', role:'Head of Economic Research', loc:'USA, New York' },
                        { name:'Dr. Layla Mirza', role:'Head of Policy Evaluation', loc:'Canada, Ottawa' },
                        { name:'Dr. Cyrus Baig', role:'Head of Governance Research', loc:'Australia, Canberra' },
                      ].map(m => (
                        <div key={m.name} className="compact-card">
                          <div className="compact-name">{m.name}</div>
                          <div className="compact-role">{m.role}</div>
                          <div className="compact-loc">{m.loc}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSubTab === 'Media' && (
                    <div className="compact-grid">
                      {[
                        { name:'Ms. Samara Qazi', role:'Head of Media & Communications', loc:'Pakistan, Islamabad' },
                        { name:'Mr. Tariq Ansari', role:'Head of Strategic Communications', loc:'UAE, Dubai' },
                        { name:'Ms. Dina Wahab', role:'Head of Publications', loc:'Pakistan, Karachi' },
                      ].map(m => (
                        <div key={m.name} className="compact-card">
                          <div className="compact-name">{m.name}</div>
                          <div className="compact-role">{m.role}</div>
                          <div className="compact-loc">{m.loc}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSubTab === 'Regional' && (
                    <div className="compact-grid">
                      {[
                        { name:'Dr. Robert Callahan', role:'Regional Head, Americas', loc:'USA, Washington D.C.' },
                        { name:'Dr. Raymond Tan', role:'Regional Head, Asia-Pacific', loc:'Singapore' },
                        { name:'Dr. Stefan Hartmann', role:'Regional Head, Europe', loc:'UK, London' },
                        { name:'Dr. Leila Azouri', role:'Regional Head, MENA', loc:'Lebanon, Beirut' },
                        { name:'Dr. Emmanuel Asante', role:'Regional Head, Africa', loc:'South Africa, Pretoria' },
                        { name:'Dr. Natasha Volkov', role:'Regional Head, Russia & Eurasia', loc:'Russia, Moscow' },
                      ].map(m => (
                        <div key={m.name} className="compact-card">
                          <div className="compact-name">{m.name}</div>
                          <div className="compact-role">{m.role}</div>
                          <div className="compact-loc">{m.loc}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSubTab === 'Administration' && (
                    <div className="compact-grid">
                      {[
                        { name:'Mr. Tariq Salam', role:'Chief Administrative Officer', loc:'Pakistan, Islamabad' },
                        { name:'Ms. Saira Baig', role:'Director of Operations', loc:'Pakistan, Islamabad' },
                      ].map(m => (
                        <div key={m.name} className="compact-card">
                          <div className="compact-name">{m.name}</div>
                          <div className="compact-role">{m.role}</div>
                          <div className="compact-loc">{m.loc}</div>
                        </div>
                      ))}
                    </div>
                  )}
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
                      <h4>Prof. Dr. Arjun Chattopadhyay</h4>
                      <p className="advisor-field">Nobel Laureate in Economic Sciences</p>
                      <p className="advisor-bio">Distinguished economist and philosopher, recognised for foundational contributions to welfare economics and social choice theory.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        United States, Cambridge
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. William Forsythe</h4>
                      <p className="advisor-field">Nobel Laureate in Economic Sciences</p>
                      <p className="advisor-bio">Renowned economist and former chief economist at a leading international financial institution, recognised for analyses of markets with asymmetric information.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        United States, New York
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Laurent Mercier</h4>
                      <p className="advisor-field">Economic Inequality & Public Policy</p>
                      <p className="advisor-bio">Professor at a leading European school of economics, expert on wealth inequality, capital distribution, and long-run economic history.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        France, Paris
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Marcus Ellison</h4>
                      <p className="advisor-field">International Political Economy</p>
                      <p className="advisor-bio">Professor of International Political Economy at a leading policy school, expert on globalisation, economic development, and the political economy of reform.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        United States, Cambridge
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Catherine Aldridge</h4>
                      <p className="advisor-field">International Law & Policy</p>
                      <p className="advisor-bio">Former director of policy planning at a major government ministry and leading expert on international relations, international law, and global governance frameworks.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        United States, Washington D.C.
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Eleanor Harrington</h4>
                      <p className="advisor-field">Global Economic Governance</p>
                      <p className="advisor-bio">Dean of a leading school of government, expert on global economic governance, international institutions, and development policy.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        United Kingdom, Oxford
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Raymond Chen</h4>
                      <p className="advisor-field">Asian Affairs & Global Governance</p>
                      <p className="advisor-bio">Distinguished fellow at a leading Asian research institute and former diplomat, recognised as a leading voice on Asian affairs and global governance.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        Singapore, Singapore
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Daniel Whitmore</h4>
                      <p className="advisor-field">Sustainable Development</p>
                      <p className="advisor-bio">University Professor and director of a sustainable development research centre, leading expert on economic development, poverty alleviation, and sustainable development goals.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        United States, New York
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Adrian Karolewski</h4>
                      <p className="advisor-field">Political Economy & Institutions</p>
                      <p className="advisor-bio">Professor of Economics at a leading research university, leading authority on political economy, economic growth, and the role of institutions in development.</p>
                      <p className="advisor-location">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        United States, Cambridge
                      </p>
                    </div>

                    <div className="advisor-card">
                      <h4>Prof. Dr. Vikram Nair</h4>
                      <p className="advisor-field">Finance & Economic Policy</p>
                      <p className="advisor-bio">Distinguished professor at a leading business school, former central bank governor, and expert on financial systems, monetary policy, and economic stability.</p>
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
