import React from 'react';
import { Link } from 'react-router-dom';

const image_url = 'https://serahswala.alwaysdata.net/static/images/';

const ProductCard = ({ product, onAddToCart, onAddToWishlist, inCart = false, inWishlist = false }) => {
  return (
    <div className="card h-100 shadow-sm border-0 product-card hover-shadow">
      {/* IMAGE */}
      <div className="position-relative">
        <img
          src={
            product?.product_photo
              ? image_url + product.product_photo
              : 'https://via.placeholder.com/300x250?text=No+Image'
          }
          className="card-img-top product-img"
          alt={product.product_name}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x250?text=No+Image';
          }}
        />

        {/* Wishlist button — top right */}
        <button
          className={`position-absolute btn btn-sm rounded-circle shadow ${
            inWishlist ? 'btn-danger' : 'btn-light'
          }`}
          style={{ top: '8px', right: '8px' }}
          onClick={onAddToWishlist}
          title={inWishlist ? 'In Wishlist' : 'Add to Wishlist'}
          aria-label={inWishlist ? 'In Wishlist' : 'Add to Wishlist'}
        >
          <i className={`${inWishlist ? 'fas' : 'far'} fa-heart`}></i>
        </button>

        {/* Quick add to cart — top left */}
        <button
          className={`position-absolute btn btn-sm rounded-circle shadow ${
            inCart ? 'btn-success' : 'btn-primary'
          }`}
          style={{ top: '8px', left: '8px' }}
          onClick={onAddToCart}
          title={inCart ? 'In Cart' : 'Quick Add to Cart'}
          aria-label={inCart ? 'Already in Cart' : 'Quick Add to Cart'}
        >
          <i className={`fas ${inCart ? 'fa-check' : 'fa-shopping-cart'}`}></i>
        </button>
      </div>

      {/* BODY */}
      <div className="card-body d-flex flex-column p-4">
        <h5 className="card-title fw-bold mb-2">{product.product_name}</h5>
        <p className="text-muted small flex-grow-1 mb-3">
          {product.product_description?.substring(0, 80)}...
        </p>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="badge bg-success">In Stock</span>
          <h5 className="text-danger fw-bold mb-0">
            KES {Number(product.product_cost).toLocaleString()}
          </h5>
        </div>

        <Link
          to={`/product/${product.product_id}`}
          state={{ product }}
          className="btn btn-primary w-100 mt-auto"
        >
          <i className="fas fa-eye me-1"></i>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;