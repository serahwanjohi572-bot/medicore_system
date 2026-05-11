import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

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

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // Track IDs so ProductCard can show feedback
  const [cartIds, setCartIds] = useState([]);
  const [wishlistIds, setWishlistIds] = useState([]);

  const productsPerPage = 12;

  useEffect(() => {
    fetchProducts();
    // Seed current cart/wishlist ids for button feedback
    setCartIds(safeParseArray(localStorage.getItem(CART_KEY), []).map((i) => i.product_id));
    setWishlistIds(
      safeParseArray(localStorage.getItem(WISHLIST_KEY), []).map((i) => i.product_id)
    );
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        'https://serahswala.alwaysdata.net/api/get_product_details'
      );
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.product_description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [searchTerm, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const addToCart = (product) => {
    const currentCart = safeParseArray(localStorage.getItem(CART_KEY), []);
    const alreadyInCart = currentCart.some((c) => c.product_id === product.product_id);
    if (!alreadyInCart) {
      const nextCart = [product, ...currentCart];
      localStorage.setItem(CART_KEY, JSON.stringify(nextCart));
      setCartIds((prev) => [...prev, product.product_id]);
      // Notify NavBar (same-tab)
      window.dispatchEvent(new Event('cartUpdated'));
    }
  };

  const addToWishlist = (product) => {
    const currentWishlist = safeParseArray(localStorage.getItem(WISHLIST_KEY), []);
    const alreadyInWishlist = currentWishlist.some(
      (w) => w.product_id === product.product_id
    );
    if (!alreadyInWishlist) {
      const nextWishlist = [product, ...currentWishlist];
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(nextWishlist));
      setWishlistIds((prev) => [...prev, product.product_id]);
      // Notify NavBar (same-tab)
      window.dispatchEvent(new Event('wishlistUpdated'));
    }
  };

  if (loading) return <Loader message="Loading products..." />;

  return (
    <div className="container my-5">
      {/* Hero */}
      <div className="hero-section rounded-4 px-4 px-md-5 py-5 mb-5">
        <div className="row align-items-center position-relative">
          <div className="col-lg-6">
            <div className="text-white">
              <div className="hero-eyebrow mb-3">
                <span className="hero-badge">Trusted Healthcare Marketplace</span>
              </div>
              <h1 className="hero-title mb-3">Access healthcare products with confidence</h1>
              <p className="hero-description mb-4 text-info">
                Health Bridge connects you with reliable medicines, convenient ordering, and
                support you can reach when it matters. Discover products, manage your orders,
                and book appointments in one place.
              </p>
              <ul className="hero-trust-list list-unstyled d-flex flex-wrap gap-3 mb-4">
                <li className="hero-trust-item">
                  <i className="fas fa-check-circle me-2"></i> Verified products
                </li>
                <li className="hero-trust-item">
                  <i className="fas fa-headset me-2"></i> Fast customer support
                </li>
                <li className="hero-trust-item">
                  <i className="fas fa-lock me-2"></i> Secure checkout
                </li>
              </ul>
              <div className="hero-buttons d-flex gap-3 mt-4 flex-wrap">
                <a href="#products" className="btn btn-primary btn-lg hero-cta px-4">
                  Explore Products
                </a>
                <a
                  href="/appointment"
                  className="btn btn-light btn-lg hero-cta px-4 text-primary fw-bold"
                >
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="hero-image-wrap">
              <img
                src="/images/doctor.jpg"
                alt="Healthcare professional"
                className="hero-image"
              />
              <div className="hero-image-overlay" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="row mb-5" id="products">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold mb-4">
            <i className="fas fa-pills text-primary me-3"></i>
            Our Products
          </h1>
          <p className="lead text-muted mb-4">Discover quality healthcare products</p>
        </div>
      </div>

      {/* Search */}
      <div className="row mb-5">
        <div className="col-md-8 mx-auto">
          <SearchBar onSearch={(query) => setSearchTerm(query)} />
        </div>
      </div>

      {/* Products Grid */}
      <div className="row g-4 mb-5">
        {currentProducts.map((product) => (
          <div key={product.product_id} className="col-xl-3 col-lg-4 col-md-6">
            <ProductCard
              product={product}
              inCart={cartIds.includes(product.product_id)}
              inWishlist={wishlistIds.includes(product.product_id)}
              onAddToCart={() => addToCart(product)}
              onAddToWishlist={() => addToWishlist(product)}
            />
          </div>
        ))}
      </div>

      {/* Results Summary / Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-5">
          <i className="fas fa-search fa-5x text-muted mb-4"></i>
          <h3>No products found</h3>
          <p className="text-muted">Try adjusting your search terms</p>
        </div>
      ) : (
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <p className="text-muted mb-0">
              Showing {indexOfFirstProduct + 1}–
              {Math.min(indexOfLastProduct, filteredProducts.length)} of{' '}
              {filteredProducts.length} products
            </p>
          </div>
          <div className="col-md-6">
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GetProducts;