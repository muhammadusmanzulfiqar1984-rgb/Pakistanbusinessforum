import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import './page.css'

export default function PolicyDesignEvaluation() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Policy Design & Evaluation"
            lead="Research examining policy design processes, evaluation mechanisms, and factors that influence policy effectiveness and outcomes in practice."
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="policy-design" />
            </div>
          </div>

          <Section title="Purpose">
            <p>
              Our research in policy design and implementation examines how policies are 
              designed, how implementation processes function, and what factors influence 
              policy effectiveness and outcomes. We analyze policy design processes, 
              implementation mechanisms, and factors that contribute to policy success or failure.
            </p>
            <p>
              This research provides evidence-based analysis of policy design and implementation 
              processes to inform policy development and improve policy effectiveness.
            </p>
          </Section>

          <Section title="Relevance">
            <p>
              Policy design and implementation research provides essential insights for 
              understanding how policies function in practice and what factors influence 
              policy effectiveness. Our work examines policy design processes, implementation 
              mechanisms, and factors that contribute to successful policy outcomes.
            </p>
            <p>
              This research contributes to policy literature and provides institutional actors 
              with rigorous analysis of policy design and implementation processes to inform 
              evidence-based policy development.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Research outputs include policy analysis reports, implementation studies, and 
              scholarly publications that examine policy design and implementation processes. 
              These findings contribute to policy literature and provide evidence-based insights 
              to inform policy design and improve policy implementation effectiveness.
            </p>
            <p>
              Our work advances understanding of policy processes and supports evidence-based 
              policy development through rigorous analysis of policy design and implementation 
              mechanisms and their impacts on policy outcomes.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
