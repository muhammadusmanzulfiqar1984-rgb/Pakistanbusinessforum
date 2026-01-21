import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function Americas() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Americas"
            lead="Regional research on governance, regulation, and economic policy across North, Central, and South America."
          />

          <Section title="Regional Leadership">
            <p>
              Our research activities in the Americas are coordinated by <strong>Dr. James Wilson</strong>, 
              Regional Head for the Americas. Dr. Wilson coordinates research and policy analysis 
              activities across North and South American regions, ensuring comprehensive coverage of 
              governance systems, regulatory frameworks, and economic policy mechanisms.
            </p>
            <p>
              For inquiries regarding our Americas research activities, please contact Dr. Wilson at 
              <a href="mailto:j.wilson@pakistanbusinessforum.org" className="email-link"> j.wilson@pakistanbusinessforum.org</a>.
            </p>
          </Section>

          <Section title="Regional Focus">
            <p>
              Our research in the Americas examines governance systems, regulatory environments, and 
              economic policy across North, Central, and South America. We conduct comparative analysis 
              of institutional frameworks, economic development strategies, and regulatory mechanisms 
              that influence policy effectiveness and governance outcomes across diverse American contexts.
            </p>
            <p>
              Research outputs include comparative policy analyses, institutional studies, and regional 
              briefings that contribute to understanding of American governance systems and economic 
              policy frameworks. Our work supports evidence-based policy development and institutional 
              capacity building across American regional contexts.
            </p>
          </Section>

          <Section title="Analytical Themes">
            <p>
              Our research in the Americas addresses several key analytical themes:
            </p>
            <ul className="scope-list">
              <li><strong>Economic Policy and Fiscal Governance:</strong> Research on economic 
              development strategies, fiscal policy frameworks, and monetary policy coordination 
              mechanisms that influence economic growth and stability across American economies.</li>
              <li><strong>Regulatory Systems and Compliance Frameworks:</strong> Examination of 
              regulatory frameworks, compliance mechanisms, and market oversight structures that 
              support economic development and institutional accountability in American contexts.</li>
              <li><strong>Institutional Capacity and Public Administration:</strong> Analysis of 
              institutional design, administrative mechanisms, and capacity-building initiatives that 
              support effective governance and public service delivery across American states.</li>
              <li><strong>Regional Policy Coordination and Standards:</strong> Research on regional 
              integration initiatives, policy coordination mechanisms, and standard-setting processes 
              that enhance economic cooperation and development across American regional bodies.</li>
              <li><strong>Trade Policy and Economic Integration:</strong> Analysis of trade policy 
              frameworks, economic integration mechanisms, and regional cooperation initiatives that 
              influence economic development and policy coordination.</li>
            </ul>
          </Section>

          <Section title="Research Approach">
            <p>
              Our research approach in the Americas combines rigorous analytical frameworks with deep 
              understanding of regional contexts and institutional dynamics. We employ comparative 
              analysis, empirical evaluation, and case study research to examine governance systems, 
              economic policy mechanisms, and regulatory frameworks across diverse American contexts.
            </p>
            <p>
              Research activities are conducted in collaboration with academic institutions, research 
              organizations, and policy institutions across the Americas, ensuring that our work is 
              grounded in local knowledge and contributes to regional policy discourse and institutional development.
            </p>
          </Section>

          <Section title="Policy Relevance">
            <p>
              Research on American governance and economic systems contributes to understanding of 
              institutional development, economic policy effectiveness, and regulatory frameworks across 
              the region. Our work provides evidence-based insights that inform policy development, 
              support institutional capacity building, and contribute to regional policy discourse on 
              governance and economic development.
            </p>
            <p>
              Research findings are made accessible to policy audiences, academic institutions, and 
              regional organizations, supporting evidence-based policy development and contributing to 
              scholarly and policy literature on American governance and economic systems.
            </p>
          </Section>

          <Section title="Research Outputs">
            <p>
              Research outputs include comparative policy analyses, institutional studies, regional 
              briefings, and research publications that examine governance systems, economic policy 
              frameworks, and regulatory mechanisms across American contexts. These findings contribute 
              to understanding of American governance and economic systems and provide evidence-based 
              insights to support policy development and institutional capacity building.
            </p>
            <p>
              Our work advances understanding of governance processes and economic policy mechanisms 
              across the Americas, supporting evidence-based policy development and contributing to 
              regional policy discourse on governance and economic development.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
