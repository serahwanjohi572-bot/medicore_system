import React from 'react';
import { Link } from 'react-router-dom';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-4">
      <h2 className="fw-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#0f2947' }}>
        {title}
      </h2>
      {subtitle ? <p className="text-muted mb-0 mt-2">{subtitle}</p> : null}
    </div>
  );
};

const About = () => {
  return (
    <main>
      {/* 1) Hero Section */}
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="hero-eyebrow mb-3">
                <span className="hero-badge">About Health Bridge</span>
              </div>

              <h1 className="hero-title">Connecting patients to trusted healthcare services with ease and care.</h1>

              <p className="hero-description">
                Health Bridge helps you access medicines, book appointments, and manage health needs in one
                secure, user-friendly platform.
              </p>

              <div className="hero-buttons d-flex gap-3 mt-4 flex-wrap">
                <Link to="/appointment" className="btn btn-light hero-cta px-4 py-3 fw-bold">
                  <i className="fas fa-calendar-check me-2" /> Book an Appointment
                </Link>
                <Link to="/" className="btn btn-primary hero-cta px-4 py-3 fw-bold">
                  <i className="fas fa-pills me-2" /> Browse Medicines
                </Link>
              </div>

              <div className="hero-trust-list d-flex flex-wrap gap-2 mt-4">
                <div className="hero-trust-item">
                  <i className="fas fa-shield-alt me-1" />
                  <span>Secure by default</span>
                </div>
                <div className="hero-trust-item">
                  <i className="fas fa-lock me-1" />
                  <span>Reliable access</span>
                </div>
                <div className="hero-trust-item">
                  <i className="fas fa-hand-holding-heart me-1" />
                  <span>Care-first experience</span>
                </div>
              </div>

              {/* Fun animated strip */}
              <div className="about-journey-strip mt-4" aria-label="Health journey">
                <div className="about-journey-step">
                  <span className="about-journey-emoji">🩺</span>
                  <div>
                    <div className="about-journey-title">Book</div>
                    <div className="about-journey-sub">Pick a doctor</div>
                  </div>
                </div>
                <div className="about-journey-step">
                  <span className="about-journey-emoji">📅</span>
                  <div>
                    <div className="about-journey-title">Plan</div>
                    <div className="about-journey-sub">Choose a time</div>
                  </div>
                </div>
                <div className="about-journey-step">
                  <span className="about-journey-emoji">💊</span>
                  <div>
                    <div className="about-journey-title">Treat</div>
                    <div className="about-journey-sub">Get medicines</div>
                  </div>
                </div>
                <div className="about-journey-orb" aria-hidden="true" />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-image-wrap">
                <img
                  className="hero-image"
                  src={process.env.PUBLIC_URL + '/images/health.jpg'}
                  alt="Healthcare and trust"
                />
                <div className="hero-image-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Our Mission */}
      <section className="py-5 about-pulse-section">
        <div className="container">
          <SectionHeader
            title="Our Mission"
            subtitle="Bridging the gap between patients and healthcare services."
          />

          <div className="row g-4 justify-content-center">
            <div className="col-lg-9">
              <div className="card border-0 shadow-sm p-4">
                <p className="mb-0" style={{ fontSize: '1.12rem', color: '#475569' }}>
                  Our mission is to bridge the gap between patients and healthcare services by providing a
                  seamless, reliable, and user-friendly platform for accessing medicines, booking appointments, and
                  managing health needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Our Vision */}
      <section className="py-5 trust-section">
        <div className="container">
          <SectionHeader
            title="Our Vision"
            subtitle="A platform people can count on—anytime, anywhere."
          />

          <div className="row g-4 justify-content-center">
            <div className="col-lg-9">
              <div className="card border-0 shadow-sm p-4">
                <p className="mb-0" style={{ fontSize: '1.12rem', color: '#475569' }}>
                  To become a leading digital healthcare platform that empowers individuals to take control of their
                  health anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) What We Offer */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            title="What We Offer"
            subtitle="Everything you need to manage health, made simple."
          />

          <div className="row g-4 about-feature-grid">
            <div className="col-md-6 col-lg-3">
              <div className="card trust-card h-100 border-0 shadow-sm p-4 about-feature-card">
                <h5 className="fw-bold d-flex align-items-center gap-2">
                  <span className="hero-badge about-feature-badge" style={{ background: 'rgba(0,168,150,0.12)', borderColor: 'rgba(0,168,150,0.22)', color: '#00a896' }}>
                    <i className="fas fa-pills" />
                  </span>
                  Easy access to medicines
                </h5>
                <p className="text-muted mb-0">Find products quickly and order with confidence.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card trust-card h-100 border-0 shadow-sm p-4 about-feature-card">
                <h5 className="fw-bold d-flex align-items-center gap-2">
                  <span className="hero-badge about-feature-badge" style={{ background: 'rgba(5,102,141,0.12)', borderColor: 'rgba(5,102,141,0.22)', color: '#05668d' }}>
                    <i className="fas fa-calendar-alt" />
                  </span>
                  Smart appointment booking
                </h5>
                <p className="text-muted mb-0">Choose a doctor, pick a time, and confirm fast.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card trust-card h-100 border-0 shadow-sm p-4 about-feature-card">
                <h5 className="fw-bold d-flex align-items-center gap-2">
                  <span className="hero-badge about-feature-badge" style={{ background: 'rgba(255,107,107,0.12)', borderColor: 'rgba(255,107,107,0.22)', color: '#ff6b6b' }}>
                    <i className="fas fa-heart" />
                  </span>
                  Wishlist & health tracking
                </h5>
                <p className="text-muted mb-0">Save items and keep track of what matters.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card trust-card h-100 border-0 shadow-sm p-4 about-feature-card">
                <h5 className="fw-bold d-flex align-items-center gap-2">
                  <span className="hero-badge about-feature-badge" style={{ background: 'rgba(86,43,201,0.12)', borderColor: 'rgba(86,43,201,0.22)', color: '#5a2ca0' }}>
                    <i className="fas fa-shield-alt" />
                  </span>
                  Secure and reliable platform
                </h5>
                <p className="text-muted mb-0">Safety-first experiences with trusted workflows.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card trust-card h-100 border-0 shadow-sm p-4 about-feature-card">
                <h5 className="fw-bold d-flex align-items-center gap-2">
                  <span className="hero-badge about-feature-badge" style={{ background: 'rgba(0,168,150,0.12)', borderColor: 'rgba(0,168,150,0.22)', color: '#00a896' }}>
                    <i className="fas fa-wallet" />
                  </span>
                  Seamless M-Pesa payments
                </h5>
                <p className="text-muted mb-0">Simple checkout designed for mobile payments.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card trust-card h-100 border-0 shadow-sm p-4 about-feature-card">
                <h5 className="fw-bold d-flex align-items-center gap-2">
                  <span className="hero-badge about-feature-badge" style={{ background: 'rgba(5,102,141,0.12)', borderColor: 'rgba(5,102,141,0.22)', color: '#05668d' }}>
                    <i className="fas fa-clock" />
                  </span>
                  Fast, user-friendly flow
                </h5>
                <p className="text-muted mb-0">Designed to feel smooth from start to finish.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card trust-card h-100 border-0 shadow-sm p-4 about-feature-card">
                <h5 className="fw-bold d-flex align-items-center gap-2">
                  <span className="hero-badge about-feature-badge" style={{ background: 'rgba(255,107,107,0.12)', borderColor: 'rgba(255,107,107,0.22)', color: '#ff6b6b' }}>
                    <i className="fas fa-user-nurse" />
                  </span>
                  Careful, patient-first experience
                </h5>
                <p className="text-muted mb-0">Clear steps and supportive interfaces.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card trust-card h-100 border-0 shadow-sm p-4 about-feature-card">
                <h5 className="fw-bold d-flex align-items-center gap-2">
                  <span className="hero-badge about-feature-badge" style={{ background: 'rgba(86,43,201,0.12)', borderColor: 'rgba(86,43,201,0.22)', color: '#5a2ca0' }}>
                    <i className="fas fa-clipboard-check" />
                  </span>
                  Built for trusted workflows
                </h5>
                <p className="text-muted mb-0">Reliable processes for medicines and appointments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) Our Team */}
      <section className="py-5 trust-section">
        <div className="container">
          <SectionHeader title="Our Team" subtitle="Real people building real healthcare tools." />

          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="about-team-card" aria-label="Team profile">
                <div className="about-team-avatar-wrap">
                  <img
                    src={process.env.PUBLIC_URL + '/images/developer.jpg'}
                    alt="Your Name – Developer"
                    className="about-team-avatar"
                  />
                </div>
                <h5 className="fw-bold mb-1">Your Name – Developer</h5>
                <div className="text-muted mb-3">Passionate about building digital healthcare solutions</div>
                <p className="mb-0 text-muted">Focused on simple UX, secure payments, and dependable experiences.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="about-team-card" aria-label="Team profile">
                <div className="about-team-avatar-wrap">
                  <img
                    src={process.env.PUBLIC_URL + '/images/doctors.jpg'}
                    alt="Second Team Member"
                    className="about-team-avatar"
                  />
                </div>
                <h5 className="fw-bold mb-1">Second Team Member</h5>
                <div className="text-muted mb-3">Building with empathy and precision</div>
                <p className="mb-0 text-muted">Works on integrations, reliability, and healthcare-friendly design.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="about-team-card" aria-label="Team profile">
                <div className="about-team-avatar-wrap">
                  <img
                    src={process.env.PUBLIC_URL + '/images/doctor4.jpg'}
                    alt="Clinical Advisor"
                    className="about-team-avatar"
                  />
                </div>
                <h5 className="fw-bold mb-1">Clinical Advisor</h5>
                <div className="text-muted mb-3">Ensuring patient safety in product decisions</div>
                <p className="mb-0 text-muted">Guides the platform toward clarity, care, and accountability.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-muted mb-0">
              Want to add your real profile? Replace the placeholder names in this component.
            </p>
          </div>
        </div>
      </section>


      {/* 6) Why Choose Us */}
      <section className="py-5">
        <div className="container">
          <SectionHeader title="Why Choose Us" subtitle="Because healthcare access should be fast, safe, and reliable." />

          <div className="row g-4 align-items-stretch">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm p-4 h-100">
                <h4 className="fw-bold mb-3">✔ What you get</h4>
                <ul className="list-unstyled mb-0">
                  <li className="mb-3 d-flex align-items-start gap-2">
                    <i className="fas fa-check-circle mt-1" style={{ color: '#00a896' }}></i>
                    <span className="text-muted">Fast and easy to use</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start gap-2">
                    <i className="fas fa-check-circle mt-1" style={{ color: '#00a896' }}></i>
                    <span className="text-muted">Secure transactions</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start gap-2">
                    <i className="fas fa-check-circle mt-1" style={{ color: '#00a896' }}></i>
                    <span className="text-muted">Reliable healthcare access</span>
                  </li>
                  <li className="mb-0 d-flex align-items-start gap-2">
                    <i className="fas fa-check-circle mt-1" style={{ color: '#00a896' }}></i>
                    <span className="text-muted">Modern user-friendly design</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-sm p-4 h-100" style={{ background: '#ffffff' }}>
                <h4 className="fw-bold mb-3">🔒 Trust and support</h4>
                <p className="text-muted mb-3">
                  We focus on building a trustworthy experience—from browsing medicines to booking appointments and completing payments.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <div className="p-3 rounded-4" style={{ background: 'rgba(5,102,141,0.06)', border: '1px solid rgba(5,102,141,0.12)', flex: '1 1 220px' }}>
                    <div className="fw-bold" style={{ color: '#05668d' }}>Transparent experience</div>
                    <div className="text-muted">Clear steps, fewer surprises.</div>
                  </div>
                  <div className="p-3 rounded-4" style={{ background: 'rgba(0,168,150,0.06)', border: '1px solid rgba(0,168,150,0.12)', flex: '1 1 220px' }}>
                    <div className="fw-bold" style={{ color: '#00a896' }}>Care-first communication</div>
                    <div className="text-muted">Help when you need it.</div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to="/appointment" className="btn btn-primary px-4 py-2 fw-bold">
                    <i className="fas fa-calendar-alt me-2" /> Start Booking
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7) Contact Section (mini) */}
      <section className="py-5 trust-section">
        <div className="container">
          <SectionHeader title="Contact Us" subtitle="We’re here to help—reach out anytime." />

          <div className="row g-4">
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm p-4 h-100">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex gap-3 align-items-start">
                      <div className="hero-badge" style={{ background: 'rgba(5,102,141,0.12)', borderColor: 'rgba(5,102,141,0.22)', color: '#05668d' }}>
                        <i className="fas fa-envelope" />
                      </div>
                      <div>
                        <div className="fw-bold">Email</div>
                        <a className="text-decoration-none" href="mailto:support@healthbridge.com">
                          support@healthbridge.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex gap-3 align-items-start">
                      <div className="hero-badge" style={{ background: 'rgba(0,168,150,0.12)', borderColor: 'rgba(0,168,150,0.22)', color: '#00a896' }}>
                        <i className="fas fa-phone" />
                      </div>
                      <div>
                        <div className="fw-bold">Phone</div>
                        <a className="text-decoration-none" href="tel:+254700000000">
                          +254 700 000 000
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="d-flex gap-3 align-items-start">
                      <div className="hero-badge" style={{ background: 'rgba(255,107,107,0.12)', borderColor: 'rgba(255,107,107,0.22)', color: '#ff6b6b' }}>
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div>
                        <div className="fw-bold">Location</div>
                        <div className="text-muted">Nairobi, Kenya</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-4" style={{ background: 'rgba(5,102,141,0.06)', border: '1px solid rgba(5,102,141,0.12)' }}>
                  <div className="fw-bold" style={{ color: '#05668d' }}>Quick support</div>
                  <div className="text-muted">Send us a message and we’ll guide you to the right next step.</div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-sm p-4 h-100">
                <h4 className="fw-bold mb-3">Need help right now?</h4>
                <p className="text-muted mb-3">
                  Book an appointment or browse medicines, then reach out if you have questions.
                </p>

                <div className="d-flex flex-column gap-2">
                  <Link to="/appointment" className="btn btn-primary px-4 py-2 fw-bold">
                    <i className="fas fa-calendar-check me-2" /> Book Doctor
                  </Link>
                  <Link to="/" className="btn btn-outline-primary px-4 py-2 fw-bold">
                    <i className="fas fa-pills me-2" /> Shop Medicines
                  </Link>
                </div>

                <div className="mt-4">
                  <div className="text-muted small">
                    For urgent medical emergencies, contact local emergency services.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

