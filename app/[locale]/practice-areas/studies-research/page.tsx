import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import InstitutionalDiagram from '@/components/InstitutionalDiagram'
import ResearchPipeline from '@/components/ResearchPipeline'
import ProcessFlow from '@/components/ProcessFlow'
import './page.css'

export default function StudiesResearch() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Studies & Research"
            lead="Independent scholarly research examining policy issues, economic phenomena, and governance challenges through rigorous analytical frameworks."
          />

          <div className="container">
            <div className="section-image">
              <InstitutionalDiagram type="studies" />
            </div>
          </div>

          <Section title="Purpose">
              <p>
                This practice area conducts independent scholarly research examining policy 
                issues, economic phenomena, and governance challenges through rigorous analytical 
                frameworks. We employ validated methodologies to generate evidence-based findings 
                that contribute to academic and policy literature.
              </p>
              <p>
                Our research provides essential evidence to policy development and academic 
                discourse through rigorous analysis of policy issues, examination of causal 
                relationships, and generation of evidence-based insights on governance challenges 
                and policy effectiveness.
              </p>

          </Section>

          <Section title="Scope of Work">
            <div className="scope-sections">
              <div className="scope-item">
                <h3>Assessment</h3>
                <p>
                  Assessment of institutional needs based on public affairs objectives through 
                  systematic analysis and research design processes that align with policy 
                  research goals.
                </p>
              </div>
              <div className="scope-item">
                <h3>Tailored Research</h3>
                <p>
                  Development of tailored research teams with partner institutions including 
                  academic experts, research institutes, and think tanks, coordinating work 
                  throughout the research process to ensure methodological rigor.
                </p>
              </div>
              <div className="scope-item">
                <h3>Dissemination</h3>
                <p>
                  Promotion and targeted dissemination of research studies to contribute to 
                  public discourse, ensuring research findings are accessible to academic, 
                  policy, and institutional audiences.
                </p>
              </div>
            </div>
          </Section>

          <Section title="Research Methodology Pipeline">
            <p className="section-lead-text">Every research engagement follows a rigorous five-stage pipeline — from problem identification to peer-reviewed dissemination.</p>
            <ResearchPipeline />
          </Section>

          <Section title="Three-Phase Engagement Process">
            <ProcessFlow steps={[
              { num: '01', title: 'Assessment', desc: 'Assessment of institutional needs based on public affairs objectives — systematic analysis and research design aligned with policy research goals and evidence requirements.' },
              { num: '02', title: 'Tailored Research', desc: 'Set up of tailored research teams with partner institutions including academic experts, research institutes, and think tanks — coordinated throughout the research process to ensure methodological rigour.' },
              { num: '03', title: 'Promotion', desc: 'Promotion of studies and targeted diffusion to contribute to public debate — ensuring research findings reach academic, policy, and institutional audiences through effective dissemination channels.' },
            ]} />
          </Section>

          <Section title="Policy Relevance">
            <p>
              Independent research contributes essential evidence to policy development and 
              academic discourse. Research findings inform policy debates by providing rigorous 
              analysis of policy issues, examining causal relationships, and generating 
              evidence-based insights on governance challenges and policy effectiveness.
            </p>
            <p>
              Our scholarly research advances understanding of policy issues and provides 
              evidence-based foundations for policy development and scholarly discourse through 
              peer-reviewed publications and rigorous analytical frameworks.
            </p>
          </Section>

          <Section title="Outcomes">
            <p>
              Research outputs include peer-reviewed publications, research reports, policy 
              briefs, and working papers that contribute to academic and policy literature. 
              These findings advance understanding of policy issues and provide evidence-based 
              foundations for policy development and scholarly discourse.
            </p>
            <p>
              Our work contributes to the advancement of knowledge in policy research and 
              governance studies, generating findings of relevance to academic, policy, and 
              institutional communities.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
