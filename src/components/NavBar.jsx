import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const safeParseArray = (value, fallback = []) => {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
};

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const updateCounts = () => {
    const cart = safeParseArray(localStorage.getItem('cart'), []);
    setCartCount(cart.length);

    const wishlist = safeParseArray(localStorage.getItem('wishlist'), []);
    setWishlistCount(wishlist.length);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    setUser(storedUser);

    // Initial count read
    updateCounts();

    // Listen for localStorage changes from other components/tabs
    window.addEventListener('storage', updateCounts);
    // Also listen for custom event fired within the same tab
    window.addEventListener('cartUpdated', updateCounts);
    window.addEventListener('wishlistUpdated', updateCounts);

    return () => {
      window.removeEventListener('storage', updateCounts);
      window.removeEventListener('cartUpdated', updateCounts);
      window.removeEventListener('wishlistUpdated', updateCounts);
    };
  }, []);

  useEffect(() => {
    // Re-read counts whenever route changes (e.g. returning from cart page)
    updateCounts();
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/signin');
  };

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark transition-all ${
        scrolled ? 'navbar-scrolled shadow-lg' : 'bg-primary'
      }`}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 d-flex align-items-center" to="/">
          <i className="fas fa-heartbeat text-danger me-2 fa-2x"></i>
          <span>
            Health<span className="text-danger">Bridge</span>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/')}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/health-tips')}`} to="/health-tips">
                Health Tips
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/appointment')}`} to="/appointment">
                Book Doctor
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/about')}`} to="/about">
                About
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            {/* Cart Icon */}
            <Link
              className="nav-link position-relative p-0"
              to="/cart"
              aria-label={`Cart, ${cartCount} items`}
            >
              <i className="fas fa-shopping-cart fa-lg text-light" aria-hidden="true"></i>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                  <span className="visually-hidden">cart items</span>
                </span>
              )}
            </Link>

            {/* Wishlist Icon */}
            <Link
              className="nav-link position-relative p-0"
              to="/wishlist"
              aria-label={`Wishlist, ${wishlistCount} items`}
            >
              <span aria-hidden="true">❤️</span>
              {wishlistCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {wishlistCount}
                  <span className="visually-hidden">wishlist items</span>
                </span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="dropdown">
                <button
                  className="btn btn-outline-light dropdown-toggle d-flex align-items-center"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user-circle fa-lg me-2"></i>
                  {user.username}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  {(user.isAdmin || user.role === 'admin') && (
                    <li>
                      <Link className="dropdown-item" to="/admin">
                        Admin Dashboard
                      </Link>
                    </li>
                  )}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="d-flex gap-2">
                <Link className="btn btn-outline-light" to="/signin">
                  Sign In
                </Link>
                <Link className="btn btn-danger" to="/signup">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar-scrolled {
          backdrop-filter: blur(10px);
          background-color: rgba(13, 110, 253, 0.95) !important;
        }
        .nav-link {
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          transform: translateY(-2px);
        }
        .dropdown-menu {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </nav>
  );
};

export default NavBar;