import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import Link from 'next/link'
import './page.css'

export default function AcademicJournals() {
  const publications = [
    {
      id: 1,
      title: "Institutional Design and Policy Effectiveness: A Comparative Analysis of Governance Frameworks",
      authors: ["Dr. Maryam Tariq", "Prof. Saqib Mahmood", "Dr. Hira Javaid"],
      journal: "Journal of Policy Analysis and Governance",
      year: 2024,
      volume: "42",
      issue: "3",
      pages: "245-278",
      doi: "10.1016/j.jpag.2024.03.012",
      abstract: "This study examines the relationship between institutional design and policy effectiveness across diverse governance contexts. Through comparative analysis of 15 case studies, we identify key institutional mechanisms that contribute to successful policy implementation and outcomes. Our findings suggest that administrative capacity, regulatory clarity, and stakeholder engagement are critical factors influencing policy effectiveness.",
      keywords: ["Institutional Design", "Policy Effectiveness", "Governance", "Administrative Capacity", "Comparative Analysis"]
    },
    {
      id: 2,
      title: "Economic Policy Coordination in Developing Economies: Evidence from Fiscal and Monetary Integration",
      authors: ["Prof. Saqib Mahmood", "Dr. Imran Aftab"],
      journal: "Review of Economic Policy Studies",
      year: 2024,
      volume: "38",
      issue: "2",
      pages: "189-215",
      doi: "10.1080/rep.2024.02.008",
      abstract: "This paper analyzes the coordination mechanisms between fiscal and monetary policy in developing economies. Using panel data from 25 countries over a 15-year period, we examine how policy coordination affects economic stability and growth outcomes. Our results indicate that effective coordination frameworks contribute significantly to macroeconomic stability and sustainable growth trajectories.",
      keywords: ["Economic Policy", "Fiscal Policy", "Monetary Policy", "Policy Coordination", "Developing Economies"]
    },
    {
      id: 3,
      title: "Media Engagement and Policy Communication: Analyzing Institutional Communication Strategies",
      authors: ["Ms. Anum Pervaiz", "Mr. Bilawal Yusuf", "Dr. Maryam Tariq"],
      journal: "Public Administration and Communication",
      year: 2023,
      volume: "29",
      issue: "4",
      pages: "312-340",
      doi: "10.1177/pac.2023.29.4.312",
      abstract: "This research examines how policy institutions engage with media organizations to communicate policy positions and research findings. Through analysis of press releases, media briefings, and interview transcripts, we identify effective communication strategies and examine their impact on public discourse and policy understanding.",
      keywords: ["Media Relations", "Policy Communication", "Public Engagement", "Communication Strategy", "Institutional Communication"]
    },
    {
      id: 4,
      title: "Regulatory Monitoring and Strategic Intelligence: A Framework for Policy Anticipation",
      authors: ["Dr. Hira Javaid", "Mr. Owais Naveed"],
      journal: "Policy Studies Review",
      year: 2023,
      volume: "41",
      issue: "1",
      pages: "78-102",
      doi: "10.1093/psr.2023.41.1.78",
      abstract: "This paper develops a framework for systematic regulatory monitoring and strategic intelligence gathering in policy environments. We propose analytical tools and methodologies for tracking regulatory developments, identifying policy trends, and anticipating policy changes. The framework is applied to case studies in economic regulation and environmental policy.",
      keywords: ["Regulatory Monitoring", "Strategic Intelligence", "Policy Analysis", "Regulatory Frameworks", "Policy Anticipation"]
    },
    {
      id: 5,
      title: "Crisis Management and Institutional Response: Lessons from Policy-Related Emergencies",
      authors: ["Dr. Imran Aftab", "Dr. Maryam Tariq"],
      journal: "Journal of Crisis Management and Policy Response",
      year: 2023,
      volume: "15",
      issue: "2",
      pages: "145-172",
      doi: "10.1016/j.cmpr.2023.02.014",
      abstract: "This study examines crisis management frameworks and institutional response mechanisms in policy-related emergencies. Through analysis of crisis management practices across multiple sectors, we identify factors that contribute to effective crisis response and recovery. Our findings inform the development of robust crisis management frameworks for policy institutions.",
      keywords: ["Crisis Management", "Institutional Response", "Emergency Management", "Policy Crises", "Crisis Frameworks"]
    }
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Academic Journals"
            lead="Peer-reviewed articles published in scholarly journals covering policy analysis, governance research, and economic policy evaluation."
          />

          <Section title="Published Articles">
            <p className="publications-intro">
              Our research has been published in leading academic journals, contributing to scholarly 
              discourse on governance, economic policy, and institutional development. All publications 
              undergo rigorous peer review and adhere to the highest standards of academic rigor.
            </p>

            <div className="publications-list">
              {publications.map((pub) => (
                <article key={pub.id} className="publication-paper">
                  <div className="publication-header">
                    <h3 className="publication-title">{pub.title}</h3>
                    <div className="publication-authors">
                      {pub.authors.map((author, index) => (
                        <span key={index} className="author-name">
                          {author}
                          {index < pub.authors.length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                    <div className="publication-meta">
                      <span className="journal-name">{pub.journal}</span>
                      <span className="publication-year">{pub.year}</span>
                      <span className="volume-issue">
                        Vol. {pub.volume}, No. {pub.issue}, pp. {pub.pages}
                      </span>
                      <span className="doi">DOI: {pub.doi}</span>
                    </div>
                  </div>

                  <div className="publication-content">
                    <div className="abstract-section">
                      <h4>Abstract</h4>
                      <p className="abstract-text">{pub.abstract}</p>
                    </div>

                    <div className="keywords-section">
                      <h4>Keywords</h4>
                      <div className="keywords-list">
                        {pub.keywords.map((keyword, index) => (
                          <span key={index} className="keyword-tag">
                            {keyword}
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
