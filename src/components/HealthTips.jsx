import React from 'react';

const HealthTips = () => {
  const tips = [
    {
      title: 'Stay Hydrated',
      description: 'Drink water regularly to support digestion, energy levels, and healthy skin.',
      icon: 'fas fa-tint',
      image: '/images/hydration.jpg',
      bullets: ['Carry a bottle', 'Start your day with water', 'Listen to your thirst']
    },
    {
      title: 'Eat Balanced Meals',
      description: 'Choose foods from all groups: fruits, vegetables, whole grains, and lean proteins.',
      icon: 'fas fa-apple-alt',
      image: '/images/nutrition.jpg',
      bullets: ['Half plate veggies', 'Add protein every meal', 'Limit sugary drinks']
    },
    {
      title: 'Move Your Body',
      description: 'Aim for daily movement—walking, stretching, or light workouts.',
      icon: 'fas fa-dumbbell',
      image: '/images/move.jpg',
      bullets: ['10-minute walks', 'Stretch in the morning', 'Be consistent, not perfect']
    },
    {
      title: 'Get Quality Sleep',
      description: 'Rest helps your immune system and improves focus and mood.',
      icon: 'fas fa-bed',
      image: '/images/sleep.jpg',
      bullets: ['Keep a sleep schedule', 'Reduce screen time', 'Cool, dark room']
    },
    {
      title: 'Manage Stress',
      description: 'Try simple calming habits like breathing exercises, meditation, or yoga.',
      icon: 'fas fa-spa',
      image: '/images/goals.jpg',
      bullets: ['Deep breathing', 'Short mindfulness breaks', 'Stay connected']
    },
    {
      title: 'Know Your Medications',
      description: 'Take medicines as prescribed and ask questions—your safety matters.',
      icon: 'fas fa-pills',
      image: '/images/med.jpg',
      bullets: ['Check dosage', 'Don’t skip doses', 'Ask your pharmacist']
    },
    {
      title: 'Practice Portion Control',
      description: 'Use smaller plates and check portions to support healthy weight and digestion.',
      icon: 'fas fa-utensils',
      image: '/images/healthy4.jpg',
      bullets: ['Fill half your plate with veggies', 'Slow down while eating', 'Avoid eating straight from the pack']
    },
    {
      title: 'Add More Fiber',
      description: 'Fiber helps keep your gut healthy and can improve fullness and blood sugar balance.',
      icon: 'fas fa-seedling',
      image: '/images/fibre.jpg',
      bullets: ['Include fruits daily', 'Choose whole grains', 'Add beans and legumes']
    },
    {
      title: 'Limit Sugary Drinks',
      description: 'Cut back on soda and sweetened beverages to protect teeth and energy levels.',
      icon: 'fas fa-glass-whiskey',
      image: '/images/healthy1.jpg',
      bullets: ['Choose water or unsweetened drinks', 'Read nutrition labels', 'Keep treats occasional']
    },
    {
      title: 'Check Your Blood Pressure',
      description: 'Regular checks help you catch hypertension early and stay healthier long-term.',
      icon: 'fas fa-heartbeat',
      image: '/images/blood.jpg',
      bullets: ['Know your numbers', 'Reduce salt intake', 'Follow clinician advice']
    },
    {
      title: 'Wash Hands & Stay Clean',
      description: 'Good hygiene helps prevent infections and keeps your household healthier.',
      icon: 'fas fa-hand-sparkles',
      image: '/images/hands.jpg',
      bullets: ['Wash 20 seconds', 'Use sanitizer when needed', 'Avoid touching your face']
    },
    {
      title: 'Schedule Preventive Care',
      description: 'Screenings and checkups can detect issues early—even when you feel fine.',
      icon: 'fas fa-notes-medical',
      image: '/images/prevention.jpg',
      bullets: ['Get routine checkups', 'Ask what screenings you need', 'Update your medical history']
    }
  ];

  return (
    <div className="health-tips-page">
      {/* Hero */}
      <section className="health-tips-hero" aria-label="Health tips hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="health-tips-hero-content">
                <div className="health-tips-pill">
                  <i className="fas fa-heartbeat me-2" aria-hidden="true"></i>
                  <span>Practical wellness for everyday life</span>
                </div>
                <h1 className="health-tips-hero-title">Health Tips</h1>
                <p className="health-tips-hero-subtitle">
                  Small habits, big results. Explore simple, reliable tips you can start today—right from your phone.
                </p>

                <div className="health-tips-hero-actions">
                  <a href="#tips-grid" className="btn btn-primary btn-lg px-4">
                    <i className="fas fa-book-open me-2" aria-hidden="true"></i>
                    Explore tips
                  </a>
                  <a href="/appointment" className="btn btn-outline-light btn-lg px-4">
                    <i className="fas fa-user-md me-2" aria-hidden="true"></i>
                    Book a doctor
                  </a>
                </div>

                <div className="health-tips-hero-highlights mt-4">
                  <div className="highlight-item">
                    <i className="fas fa-shield-alt" aria-hidden="true"></i>
                    <div>
                      <div className="fw-bold">Safe & simple</div>
                      <div className="text-muted">Easy to follow</div>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-bolt" aria-hidden="true"></i>
                    <div>
                      <div className="fw-bold">Quick wins</div>
                      <div className="text-muted">Start today</div>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-hand-holding-heart" aria-hidden="true"></i>
                    <div>
                      <div className="fw-bold">For everyone</div>
                      <div className="text-muted">Everyday wellness</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="health-tips-hero-image" role="img" aria-label="Healthy lifestyle collage">
                <img src="/images/healthy.jpg" alt="Healthy lifestyle" />
                <div className="health-tips-hero-image-overlay" />
                <div className="health-tips-hero-stats" aria-hidden="true">
                  <div className="stat-card">
                    <div className="stat-value">6</div>
                    <div className="stat-label">Core tips</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">5 min</div>
                    <div className="stat-label">Daily habit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips grid */}
      <div className="container my-5" id="tips-grid">
        <div className="text-center mb-5">
          <h2 className="health-tips-section-title">
            <i className="fas fa-seedling text-primary me-2" aria-hidden="true"></i>
            Tips you can actually use
          </h2>
          <p className="text-muted mb-0">
            Each card includes a relatable image and a few quick reminders to help you stay on track.
          </p>
        </div>

        <div className="row g-4">
          {tips.map((tip, idx) => (
            <div key={tip.title} className="col-md-6 col-lg-4">
              <article className="health-tip-card" aria-label={tip.title}>
                <div className="health-tip-card-media">
                  <img src={tip.image} alt={tip.title} />
                  <div className="health-tip-card-badge">
                    <i className={tip.icon} aria-hidden="true"></i>
                    <span>Tip {idx + 1}</span>
                  </div>
                </div>

                <div className="health-tip-card-body">
                  <h3 className="health-tip-card-title">{tip.title}</h3>
                  <p className="health-tip-card-desc">{tip.description}</p>

                  <ul className="health-tip-bullets">
                    {tip.bullets.map((b) => (
                      <li key={b}>
                        <i className="fas fa-check-circle text-success me-2" aria-hidden="true"></i>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="health-tip-card-footer">
                    <a className="health-tip-link" href="/appointment">
                      <i className="fas fa-stethoscope me-2" aria-hidden="true"></i>
                      Ask a doctor
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Quick callout */}
        <section className="health-tips-callout mt-5" aria-label="Quick guidance callout">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h3 className="mb-2">Need personalized advice?</h3>
              <p className="text-muted mb-0">
                If you have symptoms, ongoing conditions, or questions about medications, booking an appointment can help.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="/appointment" className="btn btn-primary btn-lg">
                <i className="fas fa-calendar-check me-2" aria-hidden="true"></i>
                Book appointment
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HealthTips;

