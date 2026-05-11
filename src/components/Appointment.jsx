import React, { useEffect, useMemo, useState } from 'react';

const STEPS = [
  { key: 'doctor', label: 'Select Doctor' },
  { key: 'date', label: 'Choose Date' },
  { key: 'time', label: 'Pick Time' },
  { key: 'details', label: 'Details' },
  { key: 'confirm', label: 'Confirm' }
];

const Appointment = () => {
  // 1..5 (step index)
  const [step, setStep] = useState(1);

  // Use a local/inline dataset for now (no API wiring in this step)
  const doctors = useMemo(
    () => [
      {
        id: 'dr-john',
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        rating: 4.7,
        photo: '/images/doctor2.jpg'
      },
      {
        id: 'dr-jane',
        name: 'Dr. Jane Smith',
        specialty: 'General Medicine',
        rating: 4.6,
        photo: '/images/doctor3.jpg'
      },
      {
        id: 'dr-mike',
        name: 'Dr. Mike Johnson',
        specialty: 'Pediatrics',
        rating: 4.5,
        photo: '/images/doctor7.jpg'
      },
      {
        id: 'dr-sarah',
        name: 'Dr. Sarah Wilson',
        specialty: 'Gynecology',
        rating: 4.8,
        photo: '/images/doctor5.jpg'
      },
      {
        id: 'dr-emma',
        name: 'Dr. Emma Brown',
        specialty: 'Dermatology',
        rating: 4.6,
        photo: '/images/doctor4.jpg'
      },
      {
        id: 'dr-liam',
        name: 'Dr. Liam Taylor',
        specialty: 'Neurology',
        rating: 4.7,
        photo: '/images/doctor1.jpg'
      },
      {
        id: 'dr-olivia',
        name: 'Dr. Olivia Anderson',
        specialty: 'Orthopedics',
        rating: 4.5,
        photo: '/images/doctor6.jpg'
      },
      {
        id: 'dr-noah',
        name: 'Dr. Noah Martinez',
        specialty: 'Pulmonology',
        rating: 4.4,
        photo: '/images/doctor8.jpg'
      },
      {
        id: 'dr-ava',
        name: 'Dr. Ava Thomas',
        specialty: 'ENT',
        rating: 4.6,
        photo: '/images/doctor9.jpg'
      },
      {
        id: 'dr-ethan',
        name: 'Dr. Ethan Lee',
        specialty: 'Urology',
        rating: 4.5,
        photo: '/images/doctor10.jpg'
      }
    ],
    []
  );

  const timeSlots = useMemo(() => {
    // Example slots; later can be disabled based on booked appointments
    return ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'];
  }, []);

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const suggestedDates = useMemo(() => {
    // Next 14 days
    const days = Array.from({ length: 14 }, (_, i) => {
      const d = new Date(today);
      d.setDate(d.getDate() + i);
      return d;
    });

    return days;
  }, [today]);

  const [booking, setBooking] = useState({
    doctorId: '',
    date: '', // YYYY-MM-DD
    time: '', // label
    fullName: '',
    phone: '',
    issue: ''
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, msg: '', type: 'success' });

  const selectedDoctor = useMemo(() => doctors.find((d) => d.id === booking.doctorId), [doctors, booking.doctorId]);

  // Auto-fill from logged-in user
  useEffect(() => {
    try {
      const raw = localStorage.getItem('user');
      if (!raw) return;
      const user = JSON.parse(raw);
      if (user?.username && !booking.fullName) {
        setBooking((p) => ({ ...p, fullName: user.username }));
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showToast = (msg, type = 'success') => {
    setToast({ show: true, msg, type });
    window.setTimeout(() => setToast((t) => ({ ...t, show: false })), 2500);
  };

  const progressPct = ((step - 1) / 4) * 100;

  const canNextFromStep = () => {
    if (step === 1) return Boolean(booking.doctorId);
    if (step === 2) return Boolean(booking.date);
    if (step === 3) return Boolean(booking.time);
    if (step === 4) return Boolean(booking.fullName && booking.phone && booking.issue);
    return true;
  };

  const next = () => {
    if (!canNextFromStep()) {
      showToast('Please complete the current step first.', 'error');
      return;
    }
    setStep((s) => Math.min(5, s + 1));
  };

  const back = () => setStep((s) => Math.max(1, s - 1));

  const toggleDate = (yyyyMmDd) => {
    setBooking((p) => ({ ...p, date: yyyyMmDd, time: '' }));
  };

  const selectTime = (slot) => {
    setBooking((p) => ({ ...p, time: slot }));
  };

  const selectDoctor = (doctorId) => {
    // saving last selection is requested (smart touch)
    try {
      localStorage.setItem('last_selected_doctor', doctorId);
    } catch {
      // ignore
    }

    setBooking((p) => ({ ...p, doctorId, date: '', time: '' }));
  };

  useEffect(() => {
    // Load last selected doctor, but do not force step change
    try {
      const last = localStorage.getItem('last_selected_doctor');
      if (last && doctors.some((d) => d.id === last)) {
        setBooking((p) => ({ ...p, doctorId: last }));
      }
    } catch {
      // ignore
    }
  }, [doctors]);

  const handleConfirm = async (e) => {
    e.preventDefault();
    if (!canNextFromStep()) {
      showToast('Please complete booking details.', 'error');
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((r) => setTimeout(r, 900));

      showToast('Appointment booked successfully ✅', 'success');

      // Optional: persist appointment draft (or reset after booking)
      setBooking({ doctorId: '', date: '', time: '', fullName: booking.fullName, phone: booking.phone, issue: '' });
      setStep(1);
    } catch {
      showToast('Booking failed. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="appointment-shell">
        <div className="appointment-hero mb-4">
          <h1 className="fw-bold">Book an Appointment</h1>
          <p className="text-muted mb-0">A step-by-step booking flow—clean, fast, and professional.</p>
        </div>

        {/* Progress */}
        <div className="appointment-progress" aria-label="Booking progress">
          <div className="appointment-progress-bar" style={{ width: `${progressPct}%` }} />
          <div className="appointment-progress-steps">
            {STEPS.map((s, idx) => (
              <div key={s.key} className={`appointment-progress-step ${idx + 1 <= step ? 'active' : ''}`}>
                <div className="appointment-progress-dot">{idx + 1}</div>
                <div className="appointment-progress-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Toast */}
        {toast.show && (
          <div className={`hb-toast ${toast.type}`} role="status">
            <i
              className={
                toast.type === 'error'
                  ? 'fas fa-triangle-exclamation hb-toast-icon'
                  : 'fas fa-check-circle hb-toast-icon'
              }
              aria-hidden="true"
            ></i>
            <div className="hb-toast-message">{toast.msg}</div>
          </div>
        )}

        <div className="row g-4">
          <div className="col-lg-8">
            {step === 1 && (
              <section className="appointment-card">
                <h3 className="appointment-card-title">👨‍⚕️ Select Doctor</h3>

                {doctors.length === 0 ? (
                  <div className="appointment-empty">No doctors available</div>
                ) : (
                  <div className="appointment-doctor-grid">
                    {doctors.map((d) => {
                      const selected = d.id === booking.doctorId;
                      return (
                        <button
                          key={d.id}
                          type="button"
                          className={`appointment-doctor-card ${selected ? 'selected' : ''}`}
                          onClick={() => selectDoctor(d.id)}
                        >
                          <img src={d.photo} alt={d.name} className="appointment-doctor-photo" />
                          <div className="appointment-doctor-meta">
                            <div className="fw-bold">{d.name}</div>
                            <div className="text-muted">{d.specialty}</div>
                            <div className="appointment-rating">
                              <i className="fas fa-star text-warning me-1"></i>
                              <span>{d.rating.toFixed(1)}</span>
                            </div>
                          </div>
                          <div className="appointment-doctor-cta">{selected ? 'Selected' : 'Select'}</div>
                        </button>
                      );
                    })}
                  </div>
                )}

                <div className="appointment-actions mt-4">
                  <div />
                  <button className="btn btn-primary" onClick={next} disabled={!canNextFromStep()}>
                    Continue
                  </button>
                </div>
              </section>
            )}

            {step === 2 && (
              <section className="appointment-card">
                <h3 className="appointment-card-title">📅 Choose Date</h3>

                <div className="appointment-date-grid">
                  {suggestedDates.map((d) => {
                    const yyyyMmDd = d.toISOString().slice(0, 10);
                    const disabled = d < today;
                    const selected = booking.date === yyyyMmDd;
                    return (
                      <button
                        key={yyyyMmDd}
                        type="button"
                        className={`appointment-date ${selected ? 'selected' : ''}`}
                        disabled={disabled}
                        onClick={() => toggleDate(yyyyMmDd)}
                      >
                        <div className="appointment-date-day">
                          {d.toLocaleDateString(undefined, { weekday: 'short' })}
                        </div>
                        <div className="appointment-date-num">{d.getDate()}</div>
                        <div className="appointment-date-month">
                          {d.toLocaleDateString(undefined, { month: 'short' })}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {!booking.date && <div className="appointment-hint">Pick a date to continue.</div>}

                <div className="appointment-actions mt-4">
                  <button className="btn btn-outline-secondary" onClick={back}>
                    Back
                  </button>
                  <button className="btn btn-primary" onClick={next} disabled={!canNextFromStep()}>
                    Continue
                  </button>
                </div>
              </section>
            )}

            {step === 3 && (
              <section className="appointment-card">
                <h3 className="appointment-card-title">⏰ Pick Time Slot</h3>

                {timeSlots.length === 0 ? (
                  <div className="appointment-empty">No time slots</div>
                ) : (
                  <div className="appointment-time-grid">
                    {timeSlots.map((t) => {
                      const selected = booking.time === t;
                      const disabled = false;
                      return (
                        <button
                          key={t}
                          type="button"
                          className={`appointment-time ${selected ? 'selected' : ''}`}
                          disabled={disabled}
                          onClick={() => selectTime(t)}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                )}

                <div className="appointment-actions mt-4">
                  <button className="btn btn-outline-secondary" onClick={back}>
                    Back
                  </button>
                  <button className="btn btn-primary" onClick={next} disabled={!canNextFromStep()}>
                    Continue
                  </button>
                </div>
              </section>
            )}

            {step === 4 && (
              <section className="appointment-card">
                <h3 className="appointment-card-title">📝 Patient Details</h3>

                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Full name</label>
                      <input
                        className="form-control"
                        value={booking.fullName}
                        onChange={(e) => setBooking((p) => ({ ...p, fullName: e.target.value }))}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Phone number</label>
                      <input
                        className="form-control"
                        value={booking.phone}
                        onChange={(e) => setBooking((p) => ({ ...p, phone: e.target.value }))}
                        placeholder="e.g. 07XXXXXXXX"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-bold">What’s the issue?</label>
                      <textarea
                        className="form-control"
                        rows={4}
                        value={booking.issue}
                        onChange={(e) => setBooking((p) => ({ ...p, issue: e.target.value }))}
                        placeholder="Short description of symptoms / concern"
                      />
                    </div>
                  </div>
                </form>

                <div className="appointment-actions mt-4">
                  <button className="btn btn-outline-secondary" onClick={back}>
                    Back
                  </button>
                  <button className="btn btn-primary" onClick={next} disabled={!canNextFromStep()}>
                    Continue
                  </button>
                </div>
              </section>
            )}

            {step === 5 && (
              <section className="appointment-card">
                <h3 className="appointment-card-title">✅ Confirm Booking</h3>

                <div className="appointment-confirm-summary">
                  <div className="appointment-summary-item">
                    <div className="appointment-summary-label">Doctor</div>
                    <div className="appointment-summary-value">{selectedDoctor?.name || '-'}</div>
                  </div>
                  <div className="appointment-summary-item">
                    <div className="appointment-summary-label">Date</div>
                    <div className="appointment-summary-value">{booking.date || '-'}</div>
                  </div>
                  <div className="appointment-summary-item">
                    <div className="appointment-summary-label">Time</div>
                    <div className="appointment-summary-value">{booking.time || '-'}</div>
                  </div>
                  <div className="appointment-summary-item">
                    <div className="appointment-summary-label">Patient</div>
                    <div className="appointment-summary-value">
                      {booking.fullName || '-'} ({booking.phone || '-'})
                    </div>
                  </div>
                </div>

                <form onSubmit={handleConfirm}>
                  <div className="appointment-actions mt-4">
                    <button className="btn btn-outline-secondary" type="button" onClick={back}>
                      Back
                    </button>
                    <button
                      className="btn btn-success appointment-confirm-btn"
                      type="submit"
                      disabled={loading}
                    >
                      <i className="fas fa-calendar-check me-2"></i>
                      {loading ? 'Booking...' : 'Confirm Appointment'}
                    </button>
                  </div>
                </form>
              </section>
            )}
          </div>

          <div className="col-lg-4">
            <aside className="appointment-side">
              <div className="appointment-side-card">
                <div className="fw-bold mb-2">Last selection</div>
                <div className="text-muted small">Smart UX touch</div>

                <div className="appointment-side-row mt-3">
                  <div className="appointment-side-key">Doctor</div>
                  <div className="appointment-side-val">{selectedDoctor?.name || '—'}</div>
                </div>
                <div className="appointment-side-row">
                  <div className="appointment-side-key">Date</div>
                  <div className="appointment-side-val">{booking.date || '—'}</div>
                </div>
                <div className="appointment-side-row">
                  <div className="appointment-side-key">Time</div>
                  <div className="appointment-side-val">{booking.time || '—'}</div>
                </div>

                <div className="appointment-side-note mt-3">You can go step-by-step and confirm at the end.</div>
              </div>

              <div className="appointment-side-card appointment-side-card-muted mt-3">
                <div className="fw-bold mb-1">Need help?</div>
                <div className="text-muted small">We’ll contact you to confirm the appointment.</div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

