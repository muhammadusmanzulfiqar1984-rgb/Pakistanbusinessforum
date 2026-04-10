import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function WorkingPapers() {
  const papers = [
    {
      id: 1,
      title: "Institutional Design and Policy Outcomes: A Theoretical Framework",
      authors: ["Dr. Fatima Ali", "Dr. Hassan Raza"],
      date: "May 2024",
      paperNumber: "PBF-WP-2024-001",
      version: "Working Paper v1.0",
      abstract: "This working paper develops a theoretical framework for understanding the relationship between institutional design and policy outcomes. We propose a conceptual model that integrates institutional theory with policy analysis, examining how institutional mechanisms influence policy effectiveness. The framework provides a foundation for empirical research on institutional design and policy outcomes.",
      researchQuestions: [
        "How do institutional design principles influence policy effectiveness?",
        "What mechanisms mediate the relationship between institutional structure and policy outcomes?",
        "How do contextual factors moderate institutional design effects?"
      ],
      status: "Under Review",
      topics: ["Institutional Theory", "Policy Analysis", "Theoretical Framework", "Institutional Design"]
    },
    {
      id: 2,
      title: "Economic Policy Coordination Mechanisms: An Empirical Analysis",
      authors: ["Prof. Muhammad Zain", "Dr. Ayesha Malik"],
      date: "April 2024",
      paperNumber: "PBF-WP-2024-002",
      version: "Working Paper v1.2",
      abstract: "This working paper presents preliminary findings from empirical analysis of economic policy coordination mechanisms. Using panel data from developing economies, we examine how coordination frameworks affect macroeconomic outcomes. The paper discusses methodological approaches and presents initial findings, with further analysis ongoing.",
      researchQuestions: [
        "What coordination mechanisms are most effective for economic policy?",
        "How do coordination frameworks influence macroeconomic stability?",
        "What factors determine coordination effectiveness?"
      ],
      status: "Under Revision",
      topics: ["Economic Policy", "Policy Coordination", "Empirical Analysis", "Macroeconomic Policy"]
    },
    {
      id: 3,
      title: "Media Engagement and Policy Communication: A Comparative Study",
      authors: ["Zara Sheikh", "Omar Farooq", "Dr. Fatima Ali"],
      date: "March 2024",
      paperNumber: "PBF-WP-2024-003",
      version: "Working Paper v1.0",
      abstract: "This working paper examines media engagement strategies and their effectiveness in policy communication. Through comparative analysis of communication practices across different policy contexts, we identify factors that contribute to effective media engagement. The paper presents preliminary findings and discusses implications for communication strategy development.",
      researchQuestions: [
        "What communication strategies are most effective for policy institutions?",
        "How do media engagement mechanisms influence policy understanding?",
        "What factors determine the effectiveness of policy communication?"
      ],
      status: "Draft",
      topics: ["Media Relations", "Policy Communication", "Communication Strategy", "Public Engagement"]
    },
    {
      id: 4,
      title: "Regulatory Monitoring Methodologies: Development and Application",
      authors: ["Dr. Ayesha Malik", "Ahmed Hassan"],
      date: "February 2024",
      paperNumber: "PBF-WP-2024-004",
      version: "Working Paper v1.1",
      abstract: "This working paper develops methodologies for systematic regulatory monitoring and strategic intelligence gathering. We propose analytical frameworks and data collection approaches for tracking regulatory developments and identifying policy trends. The paper presents methodological innovations and discusses their application in policy analysis contexts.",
      researchQuestions: [
        "What methodologies are most effective for regulatory monitoring?",
        "How can strategic intelligence be systematically gathered and analyzed?",
        "What analytical frameworks support policy trend identification?"
      ],
      status: "Under Review",
      topics: ["Regulatory Monitoring", "Methodology", "Strategic Intelligence", "Policy Analysis"]
    }
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Working Papers"
            lead="Preliminary research findings and analytical frameworks made available for scholarly discussion and feedback."
          />

          <Section title="Working Papers">
            <p className="publications-intro">
              Our working papers represent ongoing research and preliminary findings made available 
              for scholarly discussion and feedback. These papers contribute to academic discourse 
              through early dissemination of research and enable engagement with the research community 
              during the development process.
            </p>

            <div className="publications-list">
              {papers.map((paper) => (
                <article key={paper.id} className="publication-paper working-paper">
                  <div className="publication-header">
                    <div className="paper-number">{paper.paperNumber}</div>
                    <div className="paper-version">{paper.version}</div>
                    <h3 className="publication-title">{paper.title}</h3>
                    <div className="publication-authors">
                      {paper.authors.map((author, index) => (
                        <span key={index} className="author-name">
                          {author}
                          {index < paper.authors.length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                    <div className="publication-meta">
                      <span className="publication-date">{paper.date}</span>
                      <span className={`paper-status status-${paper.status.toLowerCase().replace(' ', '-')}`}>
                        {paper.status}
                      </span>
                    </div>
                  </div>

                  <div className="publication-content">
                    <div className="abstract-section">
                      <h4>Abstract</h4>
                      <p className="abstract-text">{paper.abstract}</p>
                    </div>

                    <div className="research-questions-section">
                      <h4>Research Questions</h4>
                      <ul className="research-questions-list">
                        {paper.researchQuestions.map((question, index) => (
                          <li key={index}>{question}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="keywords-section">
                      <h4>Topics</h4>
                      <div className="keywords-list">
                        {paper.topics.map((topic, index) => (
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
