import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function KnowledgeOutputs() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Knowledge Outputs"
            lead="Diverse knowledge products including datasets, analytical tools, policy frameworks, and research outputs contributing to academic and policy knowledge bases."
          />

          <Section title="Knowledge Outputs Leadership">
            <p>
              Our knowledge outputs are coordinated by <strong>Hina Abbas</strong>, Head of Publications, 
              and <strong>Zara Sheikh</strong>, Head of Media & Communications. For inquiries regarding 
              knowledge outputs, please contact <a href="mailto:h.abbas@pakistanbusinessforum.org" className="email-link">h.abbas@pakistanbusinessforum.org</a> 
              or <a href="mailto:z.sheikh@pakistanbusinessforum.org" className="email-link">z.sheikh@pakistanbusinessforum.org</a>.
            </p>
          </Section>

          <Section title="Purpose">
              <p>
                Knowledge outputs encompass diverse research products including datasets, analytical 
                tools, policy frameworks, and other outputs that contribute to academic and policy 
                knowledge bases. These outputs make research findings accessible in various formats, 
                supporting both scholarly research and evidence-based policy development.
              </p>
              <p>
                Our knowledge outputs program ensures that research findings are made available in 
                formats suitable for diverse audiences, supporting both academic research and policy 
                practice through accessible knowledge products.
              </p>

          </Section>

          <Section title="Output Types">
            <p>
              Knowledge outputs include various product types:
            </p>
            <ul className="scope-list">
              <li><strong>Datasets:</strong> Research data made available for secondary analysis, 
              supporting transparency and enabling further research on policy issues and governance 
              challenges</li>
              <li><strong>Analytical Tools:</strong> Methodological frameworks, analytical models, 
              and research tools developed through our research activities and made available for 
              scholarly and policy use</li>
              <li><strong>Policy Frameworks:</strong> Analytical frameworks and conceptual models 
              designed to support policy analysis and evaluation, contributing to evidence-based 
              policy development</li>
              <li><strong>Research Outputs:</strong> Diverse research products including working 
              papers, research reports, and analytical summaries that contribute to knowledge bases</li>
            </ul>
          </Section>

          <Section title="Relevance">
            <p>
              Knowledge outputs contribute to academic and policy knowledge bases by making research 
              findings accessible in diverse formats. They support both scholarly research and 
              evidence-based policy development by providing analytical tools, datasets, and 
              frameworks that advance understanding of policy issues and governance challenges.
            </p>
            <p>
              Our knowledge outputs program ensures that research findings contribute to knowledge 
              accumulation and sharing, supporting transparency and enabling further research while 
              making analytical tools and frameworks available for scholarly and policy use.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Knowledge outputs contribute to academic and policy knowledge bases, advancing 
              understanding of policy issues and governance mechanisms through accessible research 
              products. They support transparency by making research data and analytical tools 
              available for further research and policy application.
            </p>
            <p>
              Our knowledge outputs program maintains high standards of quality and accessibility, 
              ensuring that research products contribute meaningfully to scholarly and policy 
              knowledge bases while supporting both academic research and evidence-based policy 
              development.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
