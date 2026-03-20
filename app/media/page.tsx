import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import { CardGrid } from '@/components/CardGrid'
import Link from 'next/link'
import { getMediaItems } from '@/lib/sanity'
import './page.css'

export const revalidate = 3600

export default async function Media() {
  const mediaItems = await getMediaItems()
  const hasItems = mediaItems && mediaItems.length > 0

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

          {hasItems && (
            <Section title="Latest Outputs">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {mediaItems!.slice(0, 6).map(item => (
                  <div key={item._id} style={{ borderLeft: '3px solid #C9A961', paddingLeft: '16px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline', marginBottom: '4px' }}>
                      <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0f2463', fontWeight: 600 }}>
                        {item.category === 'knowledge-output' ? 'Knowledge Output' : item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                      {item.publishedAt && (
                        <span style={{ fontSize: '12px', color: '#888' }}>{item.publishedAt}</span>
                      )}
                    </div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '16px' }}>
                      {(item.fileUrl || item.externalUrl) ? (
                        <a href={item.fileUrl || item.externalUrl!} target="_blank" rel="noopener noreferrer"
                          style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                          {item.title}
                        </a>
                      ) : item.title}
                    </h4>
                    {item.author && <p style={{ margin: '0 0 4px', fontSize: '13px', color: '#666' }}>{item.author}</p>}
                    {item.excerpt && <p style={{ margin: 0, fontSize: '14px', color: '#444', lineHeight: 1.5 }}>{item.excerpt}</p>}
                  </div>
                ))}
              </div>
            </Section>
          )}

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
