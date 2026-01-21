import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import './page.css'

export default function AsiaPacific() {
  return (
    <>
      <Navigation />
      <main>
        <div className="page-container">
          <PageHeader
            title="Asia-Pacific"
            lead="Regional research on institutional frameworks, economic policy, and regulatory dynamics across Asia-Pacific economies."
          />

          <Section title="Regional Leadership">
            <p>
              Our research activities in Asia-Pacific are coordinated by <strong>Dr. Li Wei</strong>, 
              Regional Head for Asia-Pacific. Dr. Wei leads regional analysis and policy research 
              activities across Asia-Pacific countries, ensuring comprehensive coverage of governance 
              systems, economic policy frameworks, and regulatory mechanisms.
            </p>
            <p>
              For inquiries regarding our Asia-Pacific research activities, please contact Dr. Wei at 
              <a href="mailto:l.wei@pakistanbusinessforum.org" className="email-link"> l.wei@pakistanbusinessforum.org</a>.
            </p>
          </Section>

          <Section title="Regional Focus">
            <p>
              Our research in Asia-Pacific examines institutional frameworks, economic policy, and 
              regulatory dynamics across diverse Asia-Pacific economies. We conduct comparative analysis 
              of governance systems, economic development strategies, and regulatory mechanisms that 
              influence policy effectiveness and economic outcomes across the region.
            </p>
            <p>
              Research outputs include regional policy analyses, institutional studies, and comparative 
              governance briefings that contribute to understanding of Asia-Pacific governance systems 
              and economic policy frameworks. Our work supports evidence-based policy development and 
              institutional capacity building across Asia-Pacific contexts.
            </p>
          </Section>

          <Section title="Analytical Themes">
            <p>
              Our research in Asia-Pacific addresses several key analytical themes:
            </p>
            <ul className="scope-list">
              <li><strong>Institutional Frameworks and Governance Systems:</strong> Analysis of 
              institutional design, governance structures, and administrative mechanisms that support 
              effective governance and economic development across Asia-Pacific economies.</li>
              <li><strong>Economic Policy and Development Strategies:</strong> Research on economic 
              development models, industrial policy frameworks, and growth strategies that influence 
              economic outcomes and development trajectories across the region.</li>
              <li><strong>Regulatory Dynamics and Market Oversight:</strong> Examination of regulatory 
              frameworks, market oversight mechanisms, and compliance structures that support economic 
              development and institutional accountability in Asia-Pacific contexts.</li>
              <li><strong>Regional Integration and Policy Coordination:</strong> Analysis of regional 
              integration initiatives, policy coordination mechanisms, and economic cooperation 
              frameworks that enhance regional development and policy coherence.</li>
              <li><strong>Trade Policy and Economic Cooperation:</strong> Research on trade policy 
              frameworks, economic cooperation mechanisms, and regional trade agreements that influence 
              economic integration and development across Asia-Pacific.</li>
            </ul>
          </Section>

          <Section title="Research Approach">
            <p>
              Our research approach in Asia-Pacific combines rigorous analytical frameworks with deep 
              understanding of regional contexts and institutional dynamics. We employ comparative 
              analysis, empirical evaluation, and case study research to examine governance systems, 
              economic policy mechanisms, and regulatory frameworks across diverse Asia-Pacific contexts.
            </p>
            <p>
              Research activities are conducted in collaboration with academic institutions, research 
              organizations, and policy institutions across Asia-Pacific, ensuring that our work is 
              grounded in local knowledge and contributes to regional policy discourse and institutional development.
            </p>
          </Section>

          <Section title="Policy Relevance">
            <p>
              Research on Asia-Pacific governance and economic systems contributes to understanding of 
              institutional development, economic policy effectiveness, and regulatory frameworks across 
              the region. Our work provides evidence-based insights that inform policy development, 
              support institutional capacity building, and contribute to regional policy discourse on 
              governance and economic development.
            </p>
            <p>
              Research findings are made accessible to policy audiences, academic institutions, and 
              regional organizations, supporting evidence-based policy development and contributing to 
              scholarly and policy literature on Asia-Pacific governance and economic systems.
            </p>
          </Section>

          <Section title="Research Outputs">
            <p>
              Research outputs include regional policy analyses, institutional studies, comparative 
              governance briefings, and research publications that examine governance systems, economic 
              policy frameworks, and regulatory mechanisms across Asia-Pacific contexts. These findings 
              contribute to understanding of Asia-Pacific governance and economic systems and provide 
              evidence-based insights to support policy development and institutional capacity building.
            </p>
            <p>
              Our work advances understanding of governance processes and economic policy mechanisms 
              across Asia-Pacific, supporting evidence-based policy development and contributing to 
              regional policy discourse on governance and economic development.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
