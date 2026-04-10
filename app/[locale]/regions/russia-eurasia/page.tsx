import Navigation from '@/components/Navigation'
import Footer from '@/components/FooterClient'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function RussiaEurasia() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Russia & Eurasia"
            lead="Regional research focused on institutional systems, regulatory frameworks, and economic policy across Russia and Eurasian states."
          />

          <Section title="Regional Leadership">
            <p>
              Our research activities in Russia & Eurasia are coordinated by <strong>Dr. Elena Petrov</strong>, 
              Regional Head for Russia & Eurasia. Dr. Petrov leads research initiatives and policy 
              analysis across Russia and Eurasian regional frameworks, ensuring comprehensive coverage 
              of governance systems, regulatory mechanisms, and economic policy coordination.
            </p>
            <p>
              For inquiries regarding our Russia & Eurasia research activities, please contact Dr. Petrov at 
              <a href="mailto:e.petrov@pakistanbusinessforum.org" className="email-link"> e.petrov@pakistanbusinessforum.org</a>.
            </p>
          </Section>

          <Section title="Regional Focus">
            <p>
              Our research in Russia & Eurasia examines institutional systems, regulatory frameworks, 
              and economic policy across Russia and Eurasian states. We conduct comparative analysis 
              of governance structures, economic development strategies, and regulatory mechanisms that 
              influence policy effectiveness and institutional outcomes across the region.
            </p>
            <p>
              Research outputs include governance reviews, policy analyses, and institutional 
              studies that contribute to understanding of Eurasian governance systems and economic policy 
              frameworks. Our work supports evidence-based policy development and contributes to regional 
              policy discourse on governance and economic coordination.
            </p>
          </Section>

          <Section title="Analytical Themes">
            <p>
              Our research in Russia & Eurasia addresses several key analytical themes:
            </p>
            <ul className="scope-list">
              <li><strong>Institutional Governance and Administrative Capacity:</strong> Analysis of 
              institutional design, governance structures, and administrative mechanisms that support 
              effective governance and public service delivery across Russia and Eurasian states.</li>
              <li><strong>Regulatory Systems and Compliance Structures:</strong> Examination of 
              regulatory frameworks, compliance mechanisms, and oversight structures that support 
              economic development and institutional accountability in Eurasian contexts.</li>
              <li><strong>Economic Policy and Fiscal Frameworks:</strong> Research on economic 
              development strategies, fiscal policy mechanisms, and economic coordination frameworks 
              that influence economic growth and stability across the region.</li>
              <li><strong>Regional Policy Coordination and Standards:</strong> Analysis of regional 
              integration initiatives, policy coordination mechanisms, and standard-setting processes 
              that enhance economic cooperation and development across Eurasian regional bodies.</li>
              <li><strong>Trade Policy and Economic Integration:</strong> Research on trade policy 
              frameworks, economic integration mechanisms, and regional cooperation initiatives that 
              influence economic development and policy coordination across Eurasia.</li>
            </ul>
          </Section>

          <Section title="Research Approach">
            <p>
              Our research approach in Russia & Eurasia combines rigorous analytical frameworks with 
              deep understanding of regional contexts and institutional dynamics. We employ comparative 
              analysis, case study research, and empirical evaluation to examine governance systems, 
              economic policy mechanisms, and regulatory frameworks across diverse Eurasian contexts.
            </p>
            <p>
              Research activities are conducted in collaboration with academic institutions, research 
              organizations, and policy institutions across Russia and Eurasia, ensuring that our work 
              is grounded in local knowledge and contributes to regional policy discourse and institutional development.
            </p>
          </Section>

          <Section title="Policy Relevance">
            <p>
              Research on Eurasian governance and economic systems contributes to understanding of 
              institutional development, economic policy effectiveness, and regulatory frameworks across 
              the region. Our work provides evidence-based insights that inform policy development, 
              support institutional capacity building, and contribute to regional policy discourse on 
              governance and economic development.
            </p>
            <p>
              Research findings are made accessible to policy audiences, academic institutions, and 
              regional organizations, supporting evidence-based policy development and contributing to 
              scholarly and policy literature on Eurasian governance and economic systems.
            </p>
          </Section>

          <Section title="Research Outputs">
            <p>
              Research outputs include governance reviews, policy analyses, institutional studies, and 
              research publications that examine governance systems, economic policy frameworks, and 
              regulatory mechanisms across Russia and Eurasian contexts. These findings contribute to 
              understanding of Eurasian governance and economic systems and provide evidence-based 
              insights to support policy development and institutional capacity building.
            </p>
            <p>
              Our work advances understanding of governance processes and economic policy mechanisms 
              across Russia & Eurasia, supporting evidence-based policy development and contributing 
              to regional policy discourse on governance and economic coordination.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
