import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const CART_KEY = 'cart';
const WISHLIST_KEY = 'wishlist';

const safeParseArray = (value, fallback = []) => {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
};

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [cartMsg, setCartMsg] = useState('');
  const [wishlistMsg, setWishlistMsg] = useState('');

  if (!product) {
    return (
      <div className="text-center py-5">
        <i className="fas fa-box-open fa-5x text-muted mb-4"></i>
        <h3>Product not found</h3>
        <p className="text-muted">This product may have been removed or the link is invalid.</p>
        <Link to="/" className="btn btn-primary mt-3">
          Back to Store
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    const currentCart = safeParseArray(localStorage.getItem(CART_KEY), []);
    const alreadyInCart = currentCart.some((item) => item.product_id === product.product_id);

    if (alreadyInCart) {
      setCartMsg('Already in cart');
    } else {
      const nextCart = [product, ...currentCart];
      localStorage.setItem(CART_KEY, JSON.stringify(nextCart));
      // Notify NavBar in the same tab
      window.dispatchEvent(new Event('cartUpdated'));
      setCartMsg('Added to cart! ✓');
    }
    setTimeout(() => setCartMsg(''), 2500);
  };

  const handleAddToWishlist = () => {
    const currentWishlist = safeParseArray(localStorage.getItem(WISHLIST_KEY), []);
    const alreadyInWishlist = currentWishlist.some(
      (item) => item.product_id === product.product_id
    );

    if (alreadyInWishlist) {
      setWishlistMsg('Already in wishlist');
    } else {
      const nextWishlist = [product, ...currentWishlist];
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(nextWishlist));
      // Notify NavBar in the same tab
      window.dispatchEvent(new Event('wishlistUpdated'));
      setWishlistMsg('Added to wishlist! ❤️');
    }
    setTimeout(() => setWishlistMsg(''), 2500);
  };

  const handleGoToCart = () => {
    handleAddToCart();
    navigate('/cart');
  };

  return (
    <div className="container my-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.product_name}
          </li>
        </ol>
      </nav>

      <div className="row g-5">
        {/* Image */}
        <div className="col-md-6">
          <img
            src={`https://serahswala.alwaysdata.net/static/images/${product.product_photo}`}
            className="product-details-img img-fluid rounded shadow"
            alt={product.product_name}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=No+Image';
            }}
          />
        </div>

        {/* Details */}
        <div className="col-md-6">
          <h1 className="fw-bold mb-2">{product.product_name}</h1>

          <h3 className="text-danger fw-bold mb-3">KES {Number(product.product_cost).toLocaleString()}</h3>

          <span className="badge bg-success mb-4 fs-6">In Stock</span>

          <p className="text-muted mb-4 lh-lg">{product.product_description}</p>

          <hr />

          {/* Feedback messages */}
          {cartMsg && (
            <div className="alert alert-success py-2 mb-3" role="status">
              {cartMsg}
            </div>
          )}
          {wishlistMsg && (
            <div className="alert alert-info py-2 mb-3" role="status">
              {wishlistMsg}
            </div>
          )}

          <div className="d-flex flex-wrap gap-3 mt-3">
            <button className="btn btn-primary btn-lg px-4" onClick={handleAddToCart}>
              <i className="fas fa-shopping-cart me-2"></i>
              Add to Cart
            </button>

            <button className="btn btn-outline-danger btn-lg px-4" onClick={handleAddToWishlist}>
              <i className="fas fa-heart me-2"></i>
              Save to Wishlist
            </button>

            <button className="btn btn-success btn-lg px-4" onClick={handleGoToCart}>
              <i className="fas fa-bolt me-2"></i>
              Buy Now
            </button>
          </div>

          <div className="mt-4">
            <Link to="/" className="btn btn-outline-secondary">
              <i className="fas fa-arrow-left me-2"></i>
              Back to Store
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;