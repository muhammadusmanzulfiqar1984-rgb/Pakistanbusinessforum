import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function ResearchReports() {
  const reports = [
    {
      id: 1,
      title: "Governance Frameworks and Administrative Capacity: A Comprehensive Analysis of Institutional Mechanisms",
      authors: ["Dr. Fatima Ali", "Dr. Hassan Raza", "Prof. Muhammad Zain"],
      date: "March 2024",
      reportNumber: "PBF-RR-2024-001",
      pages: 156,
      abstract: "This comprehensive research report examines governance frameworks and administrative capacity across multiple institutional contexts. The report provides detailed analysis of institutional design principles, administrative mechanisms, and factors that contribute to effective governance. Through case study analysis and comparative research, we identify best practices and provide evidence-based recommendations for institutional development.",
      keyFindings: [
        "Administrative capacity is a critical determinant of policy effectiveness",
        "Institutional design significantly influences governance outcomes",
        "Stakeholder engagement enhances policy implementation success",
        "Regulatory clarity supports effective administrative functioning"
      ],
      topics: ["Governance", "Administrative Capacity", "Institutional Design", "Policy Implementation"]
    },
    {
      id: 2,
      title: "Economic Policy Coordination and Macroeconomic Stability: Evidence from Developing Economies",
      authors: ["Prof. Muhammad Zain", "Dr. Ayesha Malik"],
      date: "February 2024",
      reportNumber: "PBF-RR-2024-002",
      pages: 142,
      abstract: "This research report analyzes economic policy coordination mechanisms and their impact on macroeconomic stability in developing economies. The report examines fiscal and monetary policy interactions, coordination frameworks, and their effects on economic outcomes. Through empirical analysis and case studies, we provide insights into effective policy coordination strategies and their implementation challenges.",
      keyFindings: [
        "Policy coordination significantly improves macroeconomic stability",
        "Institutional frameworks are essential for effective coordination",
        "Communication mechanisms enhance coordination effectiveness",
        "Long-term perspective supports sustainable economic outcomes"
      ],
      topics: ["Economic Policy", "Macroeconomic Stability", "Policy Coordination", "Developing Economies"]
    },
    {
      id: 3,
      title: "Crisis Management Frameworks: Analysis of Institutional Response Mechanisms",
      authors: ["Dr. Hassan Raza", "Zara Sheikh"],
      date: "January 2024",
      reportNumber: "PBF-RR-2024-003",
      pages: 128,
      abstract: "This report examines crisis management frameworks and institutional response mechanisms for policy-related emergencies. Through analysis of crisis management practices, response frameworks, and recovery mechanisms, we identify factors that contribute to effective crisis management. The report provides evidence-based recommendations for developing robust crisis management capabilities.",
      keyFindings: [
        "Preparedness frameworks are essential for effective crisis response",
        "Coordination mechanisms improve crisis management outcomes",
        "Communication strategies are critical during crises",
        "Recovery planning supports long-term institutional resilience"
      ],
      topics: ["Crisis Management", "Emergency Response", "Institutional Resilience", "Risk Management"]
    },
    {
      id: 4,
      title: "Regulatory Monitoring and Strategic Intelligence: Tools and Methodologies for Policy Analysis",
      authors: ["Dr. Ayesha Malik", "Omar Farooq"],
      date: "December 2023",
      reportNumber: "PBF-RR-2023-004",
      pages: 134,
      abstract: "This research report develops tools and methodologies for systematic regulatory monitoring and strategic intelligence gathering. The report provides analytical frameworks for tracking regulatory developments, identifying policy trends, and anticipating policy changes. Through case studies and methodological development, we present practical tools for policy analysis and strategic planning.",
      keyFindings: [
        "Systematic monitoring enhances policy anticipation capabilities",
        "Analytical frameworks support strategic intelligence gathering",
        "Data collection methodologies improve monitoring effectiveness",
        "Trend analysis enables proactive policy engagement"
      ],
      topics: ["Regulatory Monitoring", "Strategic Intelligence", "Policy Analysis", "Trend Analysis"]
    }
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Research Reports"
            lead="Comprehensive analytical reports examining specific policy issues, institutional mechanisms, or governance challenges."
          />

          <Section title="Published Reports">
            <p className="publications-intro">
              Our research reports provide in-depth analysis of policy issues, governance mechanisms, 
              and institutional challenges. These comprehensive reports combine rigorous research with 
              practical insights, offering evidence-based recommendations for policy audiences.
            </p>

            <div className="publications-list">
              {reports.map((report) => (
                <article key={report.id} className="publication-paper">
                  <div className="publication-header">
                    <div className="report-number">{report.reportNumber}</div>
                    <h3 className="publication-title">{report.title}</h3>
                    <div className="publication-authors">
                      {report.authors.map((author, index) => (
                        <span key={index} className="author-name">
                          {author}
                          {index < report.authors.length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                    <div className="publication-meta">
                      <span className="publication-date">{report.date}</span>
                      <span className="report-pages">{report.pages} pages</span>
                    </div>
                  </div>

                  <div className="publication-content">
                    <div className="abstract-section">
                      <h4>Executive Summary</h4>
                      <p className="abstract-text">{report.abstract}</p>
                    </div>

                    <div className="findings-section">
                      <h4>Key Findings</h4>
                      <ul className="findings-list">
                        {report.keyFindings.map((finding, index) => (
                          <li key={index}>{finding}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="keywords-section">
                      <h4>Topics</h4>
                      <div className="keywords-list">
                        {report.topics.map((topic, index) => (
                          <span key={index} className="keyword-tag">
                            {topic}
                          </span>
                        ))}
                      </div>
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
