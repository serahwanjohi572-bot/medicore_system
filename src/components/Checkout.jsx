import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0 mb-4">
            <div className="card-header bg-light border-0">
              <h4 className="mb-0">
                <i className="fas fa-credit-card me-2"></i>
                Billing Details
              </h4>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">First Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Last Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Phone</label>
                  <input type="tel" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Address</label>
                  <textarea className="form-control" rows="2" required></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card shadow-lg border-0 sticky-top" style={{top: '20px'}}>
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal:</span>
                <span>KES 2,500</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping:</span>
                <span>KES 200</span>
              </div>
              <div className="d-flex justify-content-between mb-4 border-top pt-3 fw-bold fs-4">
                <span>Total:</span>
                <span>KES 2,700</span>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-success btn-lg py-3">
                  <i className="fas fa-lock me-2"></i>
                  Pay KES 2,700 with M-Pesa
                </button>
                <Link to="/cart" className="btn btn-outline-secondary">
                  <i className="fas fa-arrow-left me-2"></i>Return to Cart
                </Link>
              </div>
              <div className="text-center mt-4 p-3 bg-light rounded">
                <small className="text-success">
                  <i className="fas fa-shield-alt me-1"></i>
                  Secure checkout with SSL encryption
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

