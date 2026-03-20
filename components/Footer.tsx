import Link from 'next/link'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top band */}
      <div className="footer-top">
        <div className="footer-top-inner">
          <div className="footer-brand">
            <div className="footer-brand-name">
              Pakistan Business Forum<span className="trademark">®</span>
            </div>
            <div className="footer-brand-sub">Strategic Policy & Research Platform</div>
            <p className="footer-brand-desc">
              Independent analytical platform producing evidence-based policy, regulatory, and economic research since 2016.
            </p>
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
            <div className="footer-col-title">Practice Areas</div>
            <ul className="footer-col-links">
              <li><Link href="/practice-areas/public-affairs-policy-advisory">Public Affairs & Policy</Link></li>
              <li><Link href="/practice-areas/regulatory-monitoring-strategic-intelligence">Regulatory Monitoring</Link></li>
              <li><Link href="/practice-areas/economic-affairs">Economic Affairs</Link></li>
              <li><Link href="/practice-areas/media-strategic-communications">Media & Communications</Link></li>
              <li><Link href="/practice-areas/crisis-management">Crisis Management</Link></li>
              <li><Link href="/strategic-advisory">Strategic Advisory</Link></li>
            </ul>
          </div>

          {/* Column: Research */}
          <div className="footer-col">
            <div className="footer-col-title">Research</div>
            <ul className="footer-col-links">
              <li><Link href="/research">Research Overview</Link></li>
              <li><Link href="/media/publications">Publications</Link></li>
              <li><Link href="/media/knowledge-outputs">Knowledge Outputs</Link></li>
              <li><Link href="/media/briefings">Policy Briefings</Link></li>
              <li><Link href="/impact">Impact</Link></li>
              <li><Link href="/regions">Regional Coverage</Link></li>
            </ul>
          </div>

          {/* Column: Organisation */}
          <div className="footer-col">
            <div className="footer-col-title">Organisation</div>
            <ul className="footer-col-links">
              <li><Link href="/about">About PBF</Link></li>
              <li><Link href="/partners">Global Partners</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/become-a-member">Membership</Link></li>
              <li><Link href="/work-with-us">Work With Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom band */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copy">
            © 2016–2026 Pakistan Business Forum<span className="trademark">®</span>. All rights reserved.
            Informational and academic purposes only.
          </p>
          <ul className="footer-legal">
            <li><Link href="/privacy-notice">Privacy</Link></li>
            <li><Link href="/terms-and-conditions">Terms</Link></li>
            <li><Link href="/cookie-settings">Cookies</Link></li>
            <li><Link href="/accessibility">Accessibility</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

