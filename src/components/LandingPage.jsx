import React from 'react';
import { Link } from 'react-router-dom';
import GetProducts from './GetProducts';
import HealthTips from './HealthTips';

const LandingPage = () => {
  return (
    <main>
      {/* Hero / Trust Header */}
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="hero-eyebrow mb-3">
                <span className="hero-badge">Security • Workflow • Interoperability</span>
              </div>

              <h2 className="hero-title">Bridging the Gap Between Technology and Care.</h2>
              <p className="hero-description">
                Health Bridge was built to simplify the complexities of modern medicine, allowing providers to focus on what matters most: the patient.
              </p>

              {/* Stats Bar */}
              <div className="hero-trust-list d-flex flex-wrap gap-2 mt-4">
                <div className="hero-trust-item">
                  <strong>10k+ </strong>
                  <span>Patients Managed</span>
                </div>
                <div className="hero-trust-item">
                  <strong>99.9% </strong>
                  <span>Uptime</span>
                </div>
                <div className="hero-trust-item">
                  <strong>HIPAA </strong>
                  <span>Compliant</span>
                </div>
              </div>

              <div className="hero-buttons d-flex gap-3 mt-4">
                <Link to="/appointment" className="btn btn-light hero-cta px-4 py-3 fw-bold">
                  <i className="fas fa-stethoscope me-2"></i>
                  Book a Doctor
                </Link>
                <Link to="/signup" className="btn btn-primary hero-cta px-4 py-3 fw-bold">
                  <i className="fas fa-shield-alt me-2"></i>
                  Get Secure Access
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image-wrap">
                <img
                  className="hero-image"
                  src={process.env.PUBLIC_URL + '/images/hblogo.jpg'}
                  alt="Healthcare professionals using Health Bridge"
                />
                <div className="hero-image-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="fw-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#0f2947' }}>
              Professional by design
            </h3>
            <p className="text-muted mb-0">
              Three pillars that keep care secure, streamlined, and ready to connect.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card trust-card p-4 h-100 border-0 shadow-sm">
                <h5 className="d-flex align-items-center gap-2">
                  <span className="hero-badge" style={{ background: 'rgba(5,102,141,0.12)', borderColor: 'rgba(5,102,141,0.22)', color: '#05668d' }}>
                    <i className="fas fa-shield-halved"></i>
                  </span>
                  Security First
                </h5>
                <p className="mb-0">
                  Your data is protected by enterprise-grade encryption and full HIPAA/GDPR compliance. We don't just store records; we safeguard lives.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card trust-card p-4 h-100 border-0 shadow-sm">
                <h5 className="d-flex align-items-center gap-2">
                  <span className="hero-badge" style={{ background: 'rgba(0,168,150,0.12)', borderColor: 'rgba(0,168,150,0.22)', color: '#00a896' }}>
                    <i className="fas fa-user-md"></i>
                  </span>
                  Provider Centric
                </h5>
                <p className="mb-0">
                  Designed by clinicians, for clinicians. We’ve eliminated the 'click-fatigue' of traditional EHRs to streamline your workflow.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card trust-card p-4 h-100 border-0 shadow-sm">
                <h5 className="d-flex align-items-center gap-2">
                  <span className="hero-badge" style={{ background: 'rgba(6,102,141,0.12)', borderColor: 'rgba(6,102,141,0.22)', color: '#05668d' }}>
                    <i className="fas fa-plug-circle-check"></i>
                  </span>
                  Interoperable
                </h5>
                <p className="mb-0">
                  Health Bridge is built to talk to other systems. Seamlessly share data across departments without losing a second of care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Leadership / Advisory Board */}
      <section className="py-5 trust-section">
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="fw-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Advisory & Leadership</h3>
            <p className="text-muted mb-0">
              Clinical expertise guiding product decisions.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card trust-card h-100 p-4 border-0 shadow-sm text-center">
                <img
                  src={process.env.PUBLIC_URL + '/images/doctor3.jpg'}
                  alt="Dr. Jane Smith"
                  className="rounded-circle mb-3"
                  style={{ width: 92, height: 92, objectFit: 'cover' }}
                />
                <h5 className="fw-bold mb-1">Dr. Jane Smith</h5>
                <div className="text-muted mb-3">Chief Medical Officer</div>
                <p className="mb-0">Ensures the platform supports clinical workflows and patient safety.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card trust-card h-100 p-4 border-0 shadow-sm text-center">
                <img
                  src={process.env.PUBLIC_URL + '/images/doctor.jpg'}
                  alt="Dr. Michael Johnson"
                  className="rounded-circle mb-3"
                  style={{ width: 92, height: 92, objectFit: 'cover' }}
                />
                <h5 className="fw-bold mb-1">Dr. Michael Johnson</h5>
                <div className="text-muted mb-3">Head of Clinical Operations</div>
                <p className="mb-0">Leads usability improvements based on real provider feedback.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card trust-card h-100 p-4 border-0 shadow-sm text-center">
                <img
                  src={process.env.PUBLIC_URL + '/images/doctors.jpg'}
                  alt="Dr. Amina Hassan"
                  className="rounded-circle mb-3"
                  style={{ width: 92, height: 92, objectFit: 'cover' }}
                />
                <h5 className="fw-bold mb-1">Dr. Amina Hassan</h5>
                <div className="text-muted mb-3">Privacy & Compliance Advisor</div>
                <p className="mb-0">Guides governance, audits, and compliance-by-design practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-5">
        <GetProducts />
      </section>

      {/* Health Tips preview */}
      <section className="py-5" style={{ background: 'rgba(255,255,255,0.55)' }}>
        <div className="container">
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-4">
            <div>
              <h3 className="fw-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#0f2947' }}>
                Wellness, made simple
              </h3>
              <p className="text-muted mb-0">Quick tips you can start today—hydration, nutrition, sleep, and stress.</p>
            </div>
            <Link to="/health-tips" className="btn btn-outline-secondary">
              View all tips
              <i className="fas fa-arrow-right ms-2" aria-hidden="true"></i>
            </Link>
          </div>

          <div className="row g-4">
            {[
              { title: 'Hydration', img: '/images/health.jpg', emoji: '💧' },
              { title: 'Nutrition', img: '/images/nutrition.jpg', emoji: '🥗' },
              { title: 'Movement', img: '/images/progress.jpg', emoji: '🚶‍♂️' },
              { title: 'Sleep', img: '/images/meditation.jpg', emoji: '😴' }
            ].map((x, idx) => (
              <div key={x.title} className="col-md-3">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: 22, overflow: 'hidden' }}>
                  <div style={{ height: 150, background: '#eaf6f5' }}>
                    <img
                      src={x.img}
                      alt={x.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="fw-bold" style={{ color: '#0f2947' }}>{x.title}</div>
                      <div style={{ fontSize: 28 }}>{x.emoji}</div>
                    </div>
                    <div className="text-muted" style={{ fontSize: 13, marginTop: 6 }}>
                      Tap to learn practical reminders.
                    </div>
                    <Link to="/health-tips" className="stretched-link" aria-label={`Open health tips about ${x.title}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security / Compliance badges + Contact */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm p-4 h-100">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <div>
                    <h3 className="fw-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Security you can trust
                    </h3>
                    <p className="text-muted mb-0">
                      Legitimacy through compliance and secure-by-default controls.
                    </p>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <div className="badge bg-light text-dark border px-3 py-2 rounded-pill" style={{ fontSize: '0.95rem' }}>
                      <i className="fas fa-shield-alt me-2" style={{ color: '#05668d' }}></i>
                      HIPAA
                    </div>
                    <div className="badge bg-light text-dark border px-3 py-2 rounded-pill" style={{ fontSize: '0.95rem' }}>
                      <i className="fas fa-check-circle me-2" style={{ color: '#00a896' }}></i>
                      SOC2
                    </div>
                    <div className="badge bg-light text-dark border px-3 py-2 rounded-pill" style={{ fontSize: '0.95rem' }}>
                      <i className="fas fa-globe me-2" style={{ color: '#05668d' }}></i>
                      GDPR
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="d-flex flex-wrap gap-3">
                    <div className="p-3 rounded-4" style={{ background: '#f4fbff', border: '1px solid rgba(5,102,141,0.12)', flex: '1 1 220px' }}>
                      <div className="fw-bold" style={{ color: '#05668d' }}>
                        Enterprise-grade encryption
                      </div>
                      <div className="text-muted">Protected in transit and at rest.</div>
                    </div>
                    <div className="p-3 rounded-4" style={{ background: '#f4fffb', border: '1px solid rgba(0,168,150,0.12)', flex: '1 1 220px' }}>
                      <div className="fw-bold" style={{ color: '#00a896' }}>
                        Full audit-ready governance
                      </div>
                      <div className="text-muted">Policies and controls designed for compliance.</div>
                    </div>
                    <div className="p-3 rounded-4" style={{ background: '#f9f6ff', border: '1px solid rgba(86,43,201,0.12)', flex: '1 1 220px' }}>
                      <div className="fw-bold" style={{ color: '#5a2ca0' }}>
                        Data access controls
                      </div>
                      <div className="text-muted">Least-privilege access and secure sessions.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-sm p-4 h-100">
                <h3 className="fw-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Contact & Location
                </h3>
                <p className="text-muted mb-3">Remote-first, but always reachable.</p>

                <div className="d-flex gap-3 mb-3">
                  <div className="hero-badge" style={{ background: 'rgba(5,102,141,0.12)', borderColor: 'rgba(5,102,141,0.22)', color: '#05668d' }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <div className="fw-bold">Headquarters</div>
                    <div className="text-muted">Nairobi, Kenya</div>
                  </div>
                </div>

                <div className="d-flex gap-3 mb-3">
                  <div className="hero-badge" style={{ background: 'rgba(0,168,150,0.12)', borderColor: 'rgba(0,168,150,0.22)', color: '#00a896' }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <div className="fw-bold">Support</div>
                    <a className="text-decoration-none" href="mailto:support@healthbridge.com">
                      support@healthbridge.com
                    </a>
                  </div>
                </div>

                <div className="p-3 rounded-4" style={{ background: 'rgba(5,102,141,0.06)', border: '1px solid rgba(5,102,141,0.12)' }}>
                  <div className="fw-bold" style={{ color: '#05668d' }}>Professional response</div>
                  <div className="text-muted">We triage and respond quickly for clinical and security requests.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;


