import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function MiddleEastNorthAfrica() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Middle East & North Africa"
            lead="Regional research addressing governance systems, regulatory environments, and economic policy across the Middle East and North Africa."
          />

          <Section title="Regional Leadership">
            <p>
              Our research activities in the Middle East & North Africa are coordinated by <strong>Dr. Amina Hassan</strong>, 
              Regional Head for Middle East & North Africa. Dr. Hassan specializes in regional policy 
              analysis and governance research across MENA countries, ensuring comprehensive coverage 
              of governance systems, regulatory frameworks, and economic policy mechanisms.
            </p>
            <p>
              For inquiries regarding our MENA research activities, please contact Dr. Hassan at 
              <a href="mailto:a.hassan@pakistanbusinessforum.org" className="email-link"> a.hassan@pakistanbusinessforum.org</a>.
            </p>
          </Section>

          <Section title="Regional Focus">
            <p>
              Our research in the Middle East & North Africa examines governance systems, regulatory 
              environments, and economic policy across diverse MENA countries. We conduct comparative 
              analysis of institutional frameworks, economic development strategies, and regulatory 
              mechanisms that influence policy effectiveness and governance outcomes across the region.
            </p>
            <p>
              Research outputs include structured regional assessments, policy briefs, and institutional 
              analyses that contribute to understanding of MENA governance systems and economic policy 
              frameworks. Our work supports evidence-based policy development and institutional capacity 
              building across MENA contexts.
            </p>
          </Section>

          <Section title="Analytical Themes">
            <p>
              Our research in the Middle East & North Africa addresses several key analytical themes:
            </p>
            <ul className="scope-list">
              <li><strong>Institutional Reform and Regulatory Modernization:</strong> Analysis of 
              institutional reform initiatives, regulatory modernization processes, and governance 
              transformation mechanisms that support effective governance and economic development 
              across MENA countries.</li>
              <li><strong>Economic Policy and Fiscal Governance:</strong> Research on economic 
              development strategies, fiscal policy frameworks, and public finance management systems 
              that influence economic growth and stability in MENA economies.</li>
              <li><strong>Public Administration and Service Delivery Capacity:</strong> Examination 
              of administrative capacity, service delivery mechanisms, and public sector reform 
              initiatives that enhance governance effectiveness and public service quality.</li>
              <li><strong>Regional Policy Coordination and Standards:</strong> Analysis of regional 
              integration initiatives, policy coordination mechanisms, and standard-setting processes 
              that enhance economic cooperation and development across MENA regional bodies.</li>
              <li><strong>Regulatory Environments and Market Oversight:</strong> Research on regulatory 
              frameworks, market oversight mechanisms, and compliance structures that support economic 
              development and institutional accountability in MENA contexts.</li>
            </ul>
          </Section>

          <Section title="Research Approach">
            <p>
              Our research approach in the Middle East & North Africa combines rigorous analytical 
              frameworks with deep understanding of regional contexts and institutional dynamics. We 
              employ comparative analysis, case study research, and empirical evaluation to examine 
              governance systems, economic policy mechanisms, and regulatory frameworks across diverse 
              MENA contexts.
            </p>
            <p>
              Research activities are conducted in collaboration with academic institutions, research 
              organizations, and policy institutions across MENA, ensuring that our work is grounded 
              in local knowledge and contributes to regional policy discourse and institutional development.
            </p>
          </Section>

          <Section title="Policy Relevance">
            <p>
              Research on MENA governance and economic systems contributes to understanding of 
              institutional development, economic policy effectiveness, and regulatory frameworks across 
              the region. Our work provides evidence-based insights that inform policy development, 
              support institutional capacity building, and contribute to regional policy discourse on 
              governance and economic development.
            </p>
            <p>
              Research findings are made accessible to policy audiences, academic institutions, and 
              regional organizations, supporting evidence-based policy development and contributing to 
              scholarly and policy literature on MENA governance and economic systems.
            </p>
          </Section>

          <Section title="Research Outputs">
            <p>
              Research outputs include structured regional assessments, policy briefs, institutional 
              analyses, and research publications that examine governance systems, economic policy 
              frameworks, and regulatory mechanisms across MENA contexts. These findings contribute 
              to understanding of MENA governance and economic systems and provide evidence-based 
              insights to support policy development and institutional capacity building.
            </p>
            <p>
              Our work advances understanding of governance processes and economic policy mechanisms 
              across the Middle East & North Africa, supporting evidence-based policy development and 
              contributing to regional policy discourse on governance and economic development.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
