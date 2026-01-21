import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import './page.css'

export default function Publications() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Publications"
            lead="Scholarly publications, research reports, and analytical outputs contributing to academic and policy literature on governance, economic policy, and institutional development."
          />

          <Section title="Publication Leadership">
            <p>
              Our publications program is managed by <strong>Hina Abbas</strong>, Head of Publications, 
              with coordination from <strong>Zara Sheikh</strong>, Head of Media & Communications. 
              For inquiries regarding publications, please contact 
              <a href="mailto:h.abbas@pakistanbusinessforum.org" className="email-link"> h.abbas@pakistanbusinessforum.org</a> 
              or <a href="mailto:z.sheikh@pakistanbusinessforum.org" className="email-link">z.sheikh@pakistanbusinessforum.org</a>.
            </p>
          </Section>

          <Section title="Publication Categories">
            <p>
              Our publications program disseminates research findings through multiple channels, 
              including peer-reviewed academic journals, research reports, policy briefs, and 
              working papers. All publications undergo rigorous peer review and editorial processes 
              to ensure methodological rigor, analytical accuracy, and adherence to scholarly standards.
            </p>
          </Section>

          <Section title="Browse Publications">
            <CardGrid>
              <Link href="/media/publications/academic-journals" className="card">
                <h3>Academic Journals</h3>
                <p>
                  Peer-reviewed articles published in scholarly journals covering policy analysis, 
                  governance research, and economic policy evaluation. These publications contribute 
                  to academic discourse through rigorous methodological approaches and evidence-based analysis.
                </p>
                <span className="small-text">View journal articles</span>
              </Link>
              <Link href="/media/publications/research-reports" className="card">
                <h3>Research Reports</h3>
                <p>
                  Comprehensive analytical reports examining specific policy issues, institutional 
                  mechanisms, or governance challenges. These reports provide in-depth analysis 
                  and evidence-based recommendations for policy audiences and stakeholders.
                </p>
                <span className="small-text">View research reports</span>
              </Link>
              <Link href="/media/publications/policy-briefs" className="card">
                <h3>Policy Briefs</h3>
                <p>
                  Concise analytical summaries of research findings designed for policy audiences. 
                  These briefs translate complex research into accessible formats that inform 
                  policy debates and institutional decision-making processes.
                </p>
                <span className="small-text">View policy briefs</span>
              </Link>
              <Link href="/media/publications/working-papers" className="card">
                <h3>Working Papers</h3>
                <p>
                  Preliminary research findings and analytical frameworks made available for 
                  scholarly discussion and feedback. These papers represent ongoing research 
                  and contribute to academic discourse through early dissemination of findings.
                </p>
                <span className="small-text">View working papers</span>
              </Link>
            </CardGrid>
          </Section>

          <Section title="Publication Standards">
            <p>
              All publications undergo rigorous peer review and editorial processes to ensure 
              methodological rigor, analytical accuracy, and adherence to scholarly standards. 
              Our work contributes to academic discourse and policy debates through evidence-based 
              research and analysis, maintaining high standards of intellectual independence and 
              methodological transparency.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
