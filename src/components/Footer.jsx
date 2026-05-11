import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-modern mt-auto" aria-label="Site footer">
      <div className="footer-animated-stripe" aria-hidden="true" />
      <div className="container">

        <div className="footer-top">
          <div className="row g-4 align-items-start">
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand">
                <div className="footer-brand-mark" aria-hidden="true">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <div>
                  <h5 className="footer-brand-title">
                    Health Bridge
                    <span className="footer-brand-sub">Your pharmacy + doctor hub</span>
                  </h5>
                  <p className="footer-muted mb-0">
                    Connecting you to better healthcare. Shop medicines, book appointments, and stay informed.
                  </p>
                </div>
              </div>

              <div className="footer-badges mt-3" aria-label="Compliance badges">
                <span className="footer-badge">🛡️ HIPAA</span>
                <span className="footer-badge">✅ SOC2</span>
                <span className="footer-badge">🌍 GDPR</span>
              </div>

              <div className="footer-small-note mt-3">
                <i className="fas fa-shield-virus me-2" aria-hidden="true"></i>
                Secure-by-default health experience.
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <h6 className="footer-heading">Quick Links</h6>
              <ul className="footer-links list-unstyled mb-0">
                <li className="mb-2">
                  <Link to="/" className="footer-link">🏠 Home</Link>
                </li>
                <li className="mb-2">
                  <Link to="/health-tips" className="footer-link">🌿 Health Tips</Link>
                </li>
                <li className="mb-2">
                  <Link to="/appointment" className="footer-link">👨‍⚕️ Appointments</Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="footer-link">💙 About</Link>
                </li>
              </ul>
              <Link to="/" className="footer-link footer-link-muted d-inline-block mt-3">
                📄 Terms & Privacy
              </Link>
            </div>

            <div className="col-lg-3 col-md-6">
              <h6 className="footer-heading">Support</h6>
              <ul className="footer-links list-unstyled mb-0">
                <li className="footer-support-item mb-2">
                  <i className="fas fa-phone" aria-hidden="true"></i>
                  <span>+254 700 000 000</span>
                </li>
                <li className="footer-support-item mb-2">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  <a href="mailto:support@healthbridge.com" className="footer-link">support@healthbridge.com</a>
                </li>
                <li className="footer-support-item mb-2">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  <span>Nairobi, Kenya</span>
                </li>
              </ul>

              <div className="footer-callout mt-3" role="note" aria-label="Security callout">
                <div className="footer-callout-icon" aria-hidden="true">
                  🔒
                </div>
                <div>
                  <div className="fw-bold footer-callout-title">Secure by default</div>
                  <div className="footer-muted">Protected interactions for every patient.</div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h6 className="footer-heading">Follow Us</h6>

              <div className="footer-social" aria-label="Social media links">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill"
                  aria-label="Facebook"
                >
                  <span aria-hidden="true">📘</span>
                  <i className="fab fa-facebook-f" aria-hidden="true"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill"
                  aria-label="Twitter"
                >
                  <span aria-hidden="true">🕊️</span>
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill"
                  aria-label="Instagram"
                >
                  <span aria-hidden="true">📸</span>
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill"
                  aria-label="LinkedIn"
                >
                  <span aria-hidden="true">💼</span>
                  <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>
              </div>

              <div className="footer-newsletter mt-3">
                <div className="footer-newsletter-title">✨ Newsletter</div>
                <p className="footer-muted mb-3">Get weekly health tips and pharmacy deals.</p>
                <form className="row g-2" onSubmit={(e) => e.preventDefault()}>
                  <div className="col-12">
                    <input type="email" className="form-control" placeholder="Your email" aria-label="Email" />
                  </div>
                  <div className="col-12 d-grid">
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom text-center">
          <p className="footer-muted mb-0">© {new Date().getFullYear()} Health Bridge. All rights reserved.</p>
        </div>
      </div>

      <div className="footer-ambient" aria-hidden="true">
        <span className="blob blob-1"></span>
        <span className="blob blob-2"></span>
        <span className="blob blob-3"></span>
      </div>
    </footer>
  );
};

export default Footer;

