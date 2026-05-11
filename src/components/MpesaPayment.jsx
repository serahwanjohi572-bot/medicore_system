import React, { useState } from 'react';

const MpesaPayment = () => {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Simulate M-Pesa payment
    setTimeout(() => {
      setMessage('Payment initiated successfully! Check your phone for STK push.');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-success text-white text-center py-4">
              <i className="fas fa-mobile-alt fa-3x mb-3"></i>
              <h2 className="mb-0">M-Pesa Payment</h2>
              <p className="mb-0 opacity-75">Secure & Instant</p>
            </div>
            <div className="card-body p-5">
              {message && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  {message}
                  <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                </div>
              )}
              <form onSubmit={handlePayment}>
                <div className="mb-4">
                  <label className="form-label fw-bold">Phone Number</label>
                  <div className="input-group">
                    <span className="input-group-text">+254</span>
                    <input 
                      type="tel" 
                      className="form-control form-control-lg" 
                      placeholder="700 000 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required 
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label fw-bold">Amount</label>
                  <input 
                    type="number" 
                    className="form-control form-control-lg" 
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required 
                    min="10"
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-success w-100 btn-lg py-3"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Processing Payment...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-lock me-2 text-danger"></i>
                      Pay Now with M-Pesa
                    </>
                  )}
                </button>
              </form>
              <div className="text-center mt-4 p-4 bg-light rounded">
                <small className="text-muted">
                  <i className="fas fa-shield-alt me-1 text-success"></i>
                  Your data is secure with SSL encryption. M-Pesa STK push will be sent to your phone.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MpesaPayment;

