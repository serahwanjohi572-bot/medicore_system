import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WISHLIST_KEY = 'wishlist';
const CART_KEY = 'cart';

const safeParseArray = (value, fallback = []) => {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
};

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [addedToCartIds, setAddedToCartIds] = useState([]);

  // READ ONLY on mount — never write reactively
  useEffect(() => {
    const saved = localStorage.getItem(WISHLIST_KEY);
    setWishlistItems(safeParseArray(saved, []));
  }, []);

  // Write ONLY inside mutation functions, never in a useEffect
  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => {
      const next = prev.filter((item) => item.product_id !== productId);
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event('wishlistUpdated'));
      return next;
    });
  };

  const moveToCart = (product) => {
    // Add to cart
    const currentCart = safeParseArray(localStorage.getItem(CART_KEY), []);
    const alreadyInCart = currentCart.some((c) => c.product_id === product.product_id);
    if (!alreadyInCart) {
      localStorage.setItem(CART_KEY, JSON.stringify([product, ...currentCart]));
      window.dispatchEvent(new Event('cartUpdated'));
    }

    // Visual feedback then remove from wishlist
    setAddedToCartIds((prev) => [...prev, product.product_id]);
    setTimeout(() => {
      removeFromWishlist(product.product_id);
      setAddedToCartIds((prev) => prev.filter((id) => id !== product.product_id));
    }, 600);
  };

  return (
    <div className="container my-5">
      <div className="wishlist-header d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-0 wishlist-title">
            ❤️ My Wishlist{' '}
            <span className="wishlist-count">({wishlistItems.length})</span>
          </h2>
          <div className="small text-muted mt-1">Save your favorite medicines for later</div>
        </div>
        <Link to="/" className="btn btn-outline-primary">
          Continue Shopping
        </Link>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="wishlist-empty text-center py-5">
          <i className="fas fa-heart-broken fa-5x text-muted mb-4"></i>
          <h4 className="fw-bold text-muted mb-3">Your wishlist is empty</h4>
          <p className="text-muted mb-4">Save items you love for later</p>
          <Link to="/" className="btn btn-primary btn-lg">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="row g-4 wishlist-grid">
          {wishlistItems.map((item) => (
            <div key={item.product_id} className="col-lg-4 col-xl-3">
              <div className="card wishlist-card h-100 border-0 position-relative">
                <div className="wishlist-card-img position-relative">
                  <img
                    src={
                      item.product_photo
                        ? `https://serahswala.alwaysdata.net/static/images/${item.product_photo}`
                        : 'https://via.placeholder.com/300x200?text=Wishlist'
                    }
                    className="card-img-top"
                    alt={item.product_name}
                  />
                  <button
                    className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                    onClick={() => removeFromWishlist(item.product_id)}
                    title="Remove from wishlist"
                    aria-label="Remove from wishlist"
                  >
                    ❌
                  </button>
                  <div className="position-absolute bottom-0 start-0 m-2 badge bg-danger">
                    Saved ❤️
                  </div>
                </div>

                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title fw-bold mb-2">{item.product_name}</h5>
                  <p className="text-muted flex-grow-1 mb-3">
                    {item.product_description?.substring(0, 80)}...
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-danger mb-0">KES {item.product_cost}</h4>
                    <small className="text-success fw-semibold">In Stock</small>
                  </div>
                  <div className="d-grid gap-2 mt-auto">
                    <button
                      onClick={() => moveToCart(item)}
                      className={`btn ${
                        addedToCartIds.includes(item.product_id) ? 'btn-success' : 'btn-primary'
                      }`}
                    >
                      <i className="fas fa-shopping-cart me-1"></i>
                      {addedToCartIds.includes(item.product_id)
                        ? 'Moving to Cart...'
                        : 'Move to Cart'}
                    </button>
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
      )}
    </div>
  );
};

export default Wishlist;