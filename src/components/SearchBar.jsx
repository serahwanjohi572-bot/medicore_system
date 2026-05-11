import React, { useState } from 'react';

const SearchBar = ({ onSearch, placeholder = "Search products, health tips..." }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="input-group input-group-lg">
        <span className="input-group-text bg-white border-end-0">
          <i className="fas fa-search text-muted"></i>
        </span>
        <input 
          type="text" 
          className="form-control border-start-0 ps-0 search-input" 
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary search-btn" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </div>
      {query && (
        <div className="search-suggestions mt-2">
          <small className="text-muted">
            Found results for "{query}"
          </small>
        </div>
      )}
      <style jsx>{`
        .search-form {
          max-width: 500px;
        }
        .search-input:focus {
          box-shadow: none;
          border-color: #0d6efd !important;
        }
        .search-btn {
          border-radius: 0 8px 8px 0;
        }
        .search-suggestions {
          opacity: 0.8;
        }
        @media (max-width: 768px) {
          .search-form {
            max-width: 100%;
          }
        }
      `}</style>
    </form>
  );
};

export default SearchBar;

