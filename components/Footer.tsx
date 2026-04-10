import Link from 'next/link'
import './Footer.css'

// Translation prop type — passed from parent server component
interface FooterProps {
  t?: (key: string) => string
}

const defaultT = (key: string): string => {
  const defaults: Record<string, string> = {
    brandDesc: 'Independent analytical platform producing evidence-based policy, regulatory, and economic research since 2016.',
    practiceAreas: 'Practice Areas', publicAffairs: 'Public Affairs & Policy',
    regulatoryMonitoring: 'Regulatory Monitoring', economicAffairs: 'Economic Affairs',
    mediaComms: 'Media & Communications', crisisManagement: 'Crisis Management',
    strategicAdvisory: 'Strategic Advisory', research: 'Research',
    researchOverview: 'Research Overview', publications: 'Publications',
    knowledgeOutputs: 'Knowledge Outputs', policyBriefings: 'Policy Briefings',
    impact: 'Impact', regionalCoverage: 'Regional Coverage', organisation: 'Organisation',
    aboutPbf: 'About PBF', globalPartners: 'Global Partners', events: 'Events',
    gallery: 'Gallery', membership: 'Membership', workWithUs: 'Work With Us',
    contact: 'Contact',
    copyright: '© 2016–2026 Pakistan Business Forum®. All rights reserved. Informational and academic purposes only.',
    privacy: 'Privacy', terms: 'Terms', cookies: 'Cookies', accessibility: 'Accessibility',
  }
  return defaults[key] ?? key
}

export default function Footer({ t = defaultT }: FooterProps) {
  return (
    <div className="footer" role="contentinfo">
      {/* Top band */}
      <div className="footer-top">
        <div className="footer-top-inner">
          <div className="footer-brand">
            <div className="footer-brand-name">
              Pakistan Business Forum<span className="trademark">®</span>
            </div>
            <div className="footer-brand-sub">Strategic Policy &amp; Research Platform</div>
            <p className="footer-brand-desc">{t('brandDesc')}</p>
            {/* Social row */}
            <ul className="footer-socials" aria-label="Social media">
              <li><a className="social-link" href="https://www.facebook.com" aria-label="Facebook">f</a></li>
              <li><a className="social-link" href="https://www.x.com" aria-label="X">𝕏</a></li>
              <li><a className="social-link" href="https://www.linkedin.com" aria-label="LinkedIn">in</a></li>
              <li><a className="social-link" href="https://www.youtube.com" aria-label="YouTube">▶</a></li>
              <li><a className="social-link" href="https://www.instagram.com" aria-label="Instagram">IG</a></li>
              <li><a className="social-link" href="https://medium.com" aria-label="Medium">M</a></li>
              <li><a className="social-link" href="https://soundcloud.com" aria-label="SoundCloud">SC</a></li>
              <li><a className="social-link" href="/rss.xml" aria-label="RSS">RSS</a></li>
            </ul>
          </div>

          {/* Column: Practice Areas */}
          <div className="footer-col">
            <div className="footer-col-title">{t('practiceAreas')}</div>
            <ul className="footer-col-links">
              <li><Link href="/practice-areas/public-affairs-policy-advisory">{t('publicAffairs')}</Link></li>
              <li><Link href="/practice-areas/regulatory-monitoring-strategic-intelligence">{t('regulatoryMonitoring')}</Link></li>
              <li><Link href="/practice-areas/economic-affairs">{t('economicAffairs')}</Link></li>
              <li><Link href="/practice-areas/media-strategic-communications">{t('mediaComms')}</Link></li>
              <li><Link href="/practice-areas/crisis-management">{t('crisisManagement')}</Link></li>
              <li><Link href="/strategic-advisory">{t('strategicAdvisory')}</Link></li>
            </ul>
          </div>

          {/* Column: Research */}
          <div className="footer-col">
            <div className="footer-col-title">{t('research')}</div>
            <ul className="footer-col-links">
              <li><Link href="/research">{t('researchOverview')}</Link></li>
              <li><Link href="/media/publications">{t('publications')}</Link></li>
              <li><Link href="/media/knowledge-outputs">{t('knowledgeOutputs')}</Link></li>
              <li><Link href="/media/briefings">{t('policyBriefings')}</Link></li>
              <li><Link href="/impact">{t('impact')}</Link></li>
              <li><Link href="/regions">{t('regionalCoverage')}</Link></li>
            </ul>
          </div>

          {/* Column: Organisation */}
          <div className="footer-col">
            <div className="footer-col-title">{t('organisation')}</div>
            <ul className="footer-col-links">
              <li><Link href="/about">{t('aboutPbf')}</Link></li>
              <li><Link href="/partners">{t('globalPartners')}</Link></li>
              <li><Link href="/events">{t('events')}</Link></li>
              <li><Link href="/gallery">{t('gallery')}</Link></li>
              <li><Link href="/become-a-member">{t('membership')}</Link></li>
              <li><Link href="/work-with-us">{t('workWithUs')}</Link></li>
              <li><Link href="/contact">{t('contact')}</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom band */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copy">{t('copyright')}</p>
          <ul className="footer-legal">
            <li><Link href="/privacy-notice">{t('privacy')}</Link></li>
            <li><Link href="/terms-and-conditions">{t('terms')}</Link></li>
            <li><Link href="/cookie-settings">{t('cookies')}</Link></li>
            <li><Link href="/accessibility">{t('accessibility')}</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

