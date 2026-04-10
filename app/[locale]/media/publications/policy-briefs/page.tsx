import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function PolicyBriefs() {
  const briefs = [
    {
      id: 1,
      title: "Strengthening Administrative Capacity: Key Recommendations for Institutional Development",
      authors: ["Dr. Fatima Ali"],
      date: "April 2024",
      briefNumber: "PBF-PB-2024-001",
      summary: "This policy brief examines the critical role of administrative capacity in effective policy implementation. Drawing on recent research findings, we provide evidence-based recommendations for strengthening administrative mechanisms and enhancing institutional effectiveness.",
      recommendations: [
        "Invest in administrative capacity building programs",
        "Develop clear regulatory frameworks and procedures",
        "Enhance stakeholder engagement mechanisms",
        "Establish performance monitoring and evaluation systems"
      ],
      topic: "Administrative Capacity"
    },
    {
      id: 2,
      title: "Economic Policy Coordination: Framework for Fiscal and Monetary Integration",
      authors: ["Prof. Muhammad Zain", "Dr. Ayesha Malik"],
      date: "March 2024",
      briefNumber: "PBF-PB-2024-002",
      summary: "This brief presents a framework for effective coordination between fiscal and monetary policy. Based on empirical analysis of policy coordination mechanisms, we outline key principles and practical approaches for enhancing policy coherence and macroeconomic stability.",
      recommendations: [
        "Establish formal coordination mechanisms between fiscal and monetary authorities",
        "Develop shared analytical frameworks and data systems",
        "Enhance communication and information sharing",
        "Create institutional structures that support policy coordination"
      ],
      topic: "Economic Policy Coordination"
    },
    {
      id: 3,
      title: "Crisis Management Preparedness: Building Institutional Resilience",
      authors: ["Dr. Hassan Raza"],
      date: "February 2024",
      briefNumber: "PBF-PB-2024-003",
      summary: "This policy brief addresses the importance of crisis management preparedness for policy institutions. We provide practical guidance on developing crisis management frameworks, response mechanisms, and recovery planning to enhance institutional resilience.",
      recommendations: [
        "Develop comprehensive crisis management frameworks",
        "Establish clear communication protocols for emergencies",
        "Create coordination mechanisms for crisis response",
        "Implement regular preparedness exercises and training"
      ],
      topic: "Crisis Management"
    },
    {
      id: 4,
      title: "Regulatory Monitoring and Strategic Intelligence: Tools for Policy Anticipation",
      authors: ["Dr. Ayesha Malik"],
      date: "January 2024",
      briefNumber: "PBF-PB-2024-004",
      summary: "This brief introduces tools and methodologies for systematic regulatory monitoring and strategic intelligence gathering. We present practical approaches for tracking regulatory developments and anticipating policy changes to support informed decision-making.",
      recommendations: [
        "Implement systematic regulatory monitoring systems",
        "Develop analytical frameworks for trend identification",
        "Establish data collection and analysis capabilities",
        "Create mechanisms for strategic intelligence sharing"
      ],
      topic: "Regulatory Monitoring"
    },
    {
      id: 5,
      title: "Media Engagement Strategies: Effective Communication for Policy Institutions",
      authors: ["Zara Sheikh", "Omar Farooq"],
      date: "December 2023",
      briefNumber: "PBF-PB-2023-005",
      summary: "This policy brief examines effective media engagement strategies for policy institutions. Based on research on communication mechanisms and media relations, we provide guidance on developing communication strategies that enhance policy understanding and public engagement.",
      recommendations: [
        "Develop clear communication strategies aligned with policy objectives",
        "Establish relationships with key media organizations",
        "Create accessible formats for communicating complex policy issues",
        "Implement feedback mechanisms to assess communication effectiveness"
      ],
      topic: "Media Engagement"
    }
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Policy Briefs"
            lead="Concise analytical summaries of research findings designed for policy audiences, translating complex research into accessible formats."
          />

          <Section title="Published Briefs">
            <p className="publications-intro">
              Our policy briefs provide concise, evidence-based analysis designed for policy audiences 
              and stakeholders. These briefs translate complex research findings into accessible formats 
              that inform policy debates and support informed decision-making.
            </p>

            <div className="publications-list">
              {briefs.map((brief) => (
                <article key={brief.id} className="publication-paper policy-brief">
                  <div className="publication-header">
                    <div className="brief-number">{brief.briefNumber}</div>
                    <h3 className="publication-title">{brief.title}</h3>
                    <div className="publication-authors">
                      {brief.authors.map((author, index) => (
                        <span key={index} className="author-name">
                          {author}
                          {index < brief.authors.length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                    <div className="publication-meta">
                      <span className="publication-date">{brief.date}</span>
                      <span className="brief-topic">{brief.topic}</span>
                    </div>
                  </div>

                  <div className="publication-content">
                    <div className="summary-section">
                      <h4>Summary</h4>
                      <p className="abstract-text">{brief.summary}</p>
                    </div>

                    <div className="recommendations-section">
                      <h4>Key Recommendations</h4>
                      <ul className="recommendations-list">
                        {brief.recommendations.map((rec, index) => (
                          <li key={index}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
