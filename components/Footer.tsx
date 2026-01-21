import Link from 'next/link'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-socials" aria-label="Social media">
          <li><a className="social-link" href="https://www.facebook.com" aria-label="Facebook">F</a></li>
          <li><a className="social-link" href="https://www.x.com" aria-label="X">X</a></li>
          <li><a className="social-link" href="https://www.substack.com" aria-label="Substack">S</a></li>
          <li><a className="social-link" href="https://www.instagram.com" aria-label="Instagram">IG</a></li>
          <li><a className="social-link" href="https://www.youtube.com" aria-label="YouTube">YT</a></li>
          <li><a className="social-link" href="https://www.linkedin.com" aria-label="LinkedIn">in</a></li>
          <li><a className="social-link" href="https://medium.com" aria-label="Medium">M</a></li>
          <li><a className="social-link" href="https://soundcloud.com" aria-label="SoundCloud">SC</a></li>
          <li><a className="social-link" href="https://podcasts.google.com" aria-label="Podcasts">P</a></li>
          <li><a className="social-link" href="https://discord.com" aria-label="Discord">D</a></li>
          <li><a className="social-link" href="/rss.xml" aria-label="RSS">RSS</a></li>
        </ul>
        <div className="footer-divider" aria-hidden="true"></div>
        <p className="footer-line">
          <span className="footer-maroon">Pakistan Business Forum<span className="trademark">®</span> — Strategic Policy & Research Function</span>. Independent analytical platform producing evidence-based policy, regulatory, and economic research.
          </p>
          <p className="footer-line">
          <span className="footer-maroon">© 2022–2026 Pakistan Business Forum<span className="trademark">®</span>. All rights reserved.</span> Informational and academic purposes only; no lobbying, political advocacy, legal representation, or advisory services unless expressly stated. Domain names and online identifiers administered under applicable registration frameworks.
        </p>
        <ul className="footer-tabs" aria-label="Footer links">
          <li><Link href="/become-a-member">Membership</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/partners">Global Partners</Link></li>
          <li><Link href="/partners/local-partners">Local Partners</Link></li>
          <li><Link href="/work-with-us">Work with us</Link></li>
          <li><Link href="/accessibility">Accessibility</Link></li>
          <li><Link href="/cookie-settings">Cookie settings</Link></li>
          <li><Link href="/privacy-notice">Privacy notice</Link></li>
          <li><Link href="/terms-and-conditions">Terms and conditions</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
  )
}
