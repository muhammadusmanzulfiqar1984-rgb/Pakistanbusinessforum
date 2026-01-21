import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import './page.css'

export default function Media() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Media & Communications"
            lead="Research and analysis on communication strategies, policy messaging frameworks, and public engagement mechanisms in policy and governance contexts."
          />

          <Section title="Communication Approach">
            <p>
              Our organization disseminates research findings and analytical outputs through 
              diverse communication channels, ensuring that rigorous research contributes to 
              academic and policy discourse. We maintain high standards of analytical accuracy, 
              methodological transparency, and scholarly rigor in all communication activities.
            </p>
          </Section>

          <Section title="Knowledge Products">
            <CardGrid>
              <Link href="/media/publications" className="card">
                <h3>Publications</h3>
                <p>
                  Scholarly publications, research reports, and analytical outputs contributing 
                  to academic and policy literature on governance, economic policy, and 
                  institutional development. Our publications undergo rigorous peer review and 
                  editorial processes to ensure methodological rigor and analytical accuracy.
                </p>
                <span className="small-text">View publications</span>
              </Link>
              <Link href="/media/briefings" className="card">
                <h3>Briefings</h3>
                <p>
                  Analytical briefings providing concise summaries of research findings, policy 
                  developments, and institutional analysis for policy audiences and stakeholders. 
                  These documents translate complex research findings into accessible formats 
                  that inform policy debates and institutional decision-making.
                </p>
                <span className="small-text">View briefings</span>
              </Link>
              <Link href="/media/knowledge-outputs" className="card">
                <h3>Knowledge Outputs</h3>
                <p>
                  Diverse knowledge products including datasets, analytical tools, policy 
                  frameworks, and research outputs contributing to academic and policy knowledge 
                  bases. These outputs make research findings accessible in various formats, 
                  supporting both scholarly research and evidence-based policy development.
                </p>
                <span className="small-text">View knowledge outputs</span>
              </Link>
            </CardGrid>
          </Section>

          <Section title="Research Standards">
            <p>
              All communication activities and knowledge products are produced according to 
              principles of analytical accuracy, methodological transparency, and scholarly 
              rigor. Our work ensures that research findings and analytical outputs accurately 
              represent policy positions, research findings, and institutional activities, 
              contributing to transparent and accountable public engagement mechanisms.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
