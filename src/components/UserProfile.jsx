import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    if (!storedUser) {
      navigate('/signin');
      return;
    }
    setUser(storedUser);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center py-4">
              <i className="fas fa-user-circle fa-5x mb-3"></i>
              <h2 className="mb-0">Welcome back!</h2>
              <h4>{user.username}</h4>
            </div>
            <div className="card-body p-5">
              <div className="row text-center mb-4">
                <div className="col-md-4">
                  <div className="border-end">
                    <h1 className="text-primary display-4">{Math.floor(Math.random() * 100)}</h1>
                    <p className="text-muted">Orders</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="border-end">
                    <h1 className="text-success display-4">{Math.floor(Math.random() * 10)}</h1>
                    <p className="text-muted">Appointments</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <h1 className="text-info display-4">{Math.floor(Math.random() * 50)}</h1>
                  <p className="text-muted">Points</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <h5><i className="fas fa-envelope me-2"></i>Email</h5>
                  <p className="fw-bold">{user.email}</p>
                </div>
                <div className="col-md-6 mb-3">
                  <h5><i className="fas fa-phone me-2"></i>Phone</h5>
                  <p className="fw-bold">{user.phone}</p>
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link to="/wishlist" className="btn btn-outline-primary me-md-2">Wishlist</Link>
                <Link to="/cart" className="btn btn-primary me-md-2">My Cart</Link>
                <button onClick={handleLogout} className="btn btn-danger">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

