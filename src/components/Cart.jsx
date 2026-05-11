import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const CART_KEY = 'cart';

const safeParseArray = (value, fallback = []) => {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // READ ONLY on mount — never write reactively
  useEffect(() => {
    const raw = localStorage.getItem(CART_KEY);
    setCartItems(safeParseArray(raw, []));
  }, []);

  // Write ONLY inside the mutation function, never in a useEffect
  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const next = prev.filter((item) => item.product_id !== productId);
      localStorage.setItem(CART_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event('cartUpdated'));
      return next;
    });
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + Number(item.product_cost || 0), 0);
  }, [cartItems]);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4 cart-header">
        <h2 className="fw-bold mb-0">
          🛒 Shopping Cart <span className="cart-count">({cartItems.length})</span>
        </h2>
        <Link to="/" className="btn btn-outline-primary">
          Continue Shopping
        </Link>
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty text-center py-5">
          <i className="fas fa-shopping-cart fa-5x text-muted mb-4"></i>
          <h4 className="fw-bold text-muted mb-3">Your cart is empty</h4>
          <p className="text-muted mb-4">Add medicines to cart and checkout in seconds.</p>
          <Link to="/" className="btn btn-primary btn-lg">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="row cart-layout g-4">
          <div className="col-lg-8">
            <div className="wishlist-grid row g-4">
              {cartItems.map((item) => (
                <div key={item.product_id} className="col-lg-6 col-xl-4">
                  <div className="card wishlist-card cart-card h-100 border-0 position-relative">
                    <div className="wishlist-card-img position-relative">
                      <img
                        src={
                          item.product_photo
                            ? `https://serahswala.alwaysdata.net/static/images/${item.product_photo}`
                            : 'https://via.placeholder.com/300x200?text=Cart'
                        }
                        className="card-img-top"
                        alt={item.product_name}
                      />
                      <button
                        className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                        onClick={() => removeFromCart(item.product_id)}
                        title="Remove from cart"
                        aria-label="Remove from cart"
                      >
                        ❌
                      </button>
                    </div>

                    <div className="card-body d-flex flex-column p-4">
                      <h5 className="card-title fw-bold mb-2">{item.product_name}</h5>
                      <p className="text-muted flex-grow-1 mb-3">
                        {item.product_description?.substring(0, 80)}...
                      </p>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-danger mb-0">KES {item.product_cost}</h4>
                      </div>
                      <div className="d-grid gap-2 mt-auto">
                        <Link
                          to={`/product/${item.product_id}`}
                          state={{ product: item }}
                          className="btn btn-outline-primary"
                        >
                          <i className="fas fa-eye me-1"></i>
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm sticky-top cart-summary" style={{ top: '20px' }}>
              <div className="card-body">
                <h5 className="card-title">Cart Summary</h5>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>KES {subtotal.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping:</span>
                  <span>KES 200</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4 fw-bold fs-5">
                  <span>Total:</span>
                  <span>KES {(subtotal + 200).toLocaleString()}</span>
                </div>
                <Link to="/checkout" className="btn btn-primary w-100 mb-3">
                  Proceed to Checkout
                </Link>
                <Link to="/" className="btn btn-outline-secondary w-100">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;