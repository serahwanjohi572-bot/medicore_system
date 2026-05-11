import React from 'react';

const Loader = ({ size = 'lg', color = 'primary', fullScreen = false, message = 'Loading...' }) => {
  const sizeClass = size === 'sm' ? 'spinner-border-sm' : '';
  const colorClass = color === 'primary' ? 'text-primary' : 
                     color === 'success' ? 'text-success' : 
                     color === 'danger' ? 'text-danger' : 
                     color === 'warning' ? 'text-warning' : 'text-primary';

  return (
    <div className={`loader-container ${fullScreen ? 'position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white bg-opacity-75 z-index-1050' : ''}`}>
      <div className="text-center">
        <div className={`spinner-border ${sizeClass} ${colorClass} mx-auto mb-3`} role="status">
          <span className="visually-hidden">{message}</span>
        </div>
        {message && (
          <div className="loader-message">
            <h5 className="fw-bold text-muted mb-2">{message}</h5>
            <div className="spinner-border spinner-border-sm ms-auto me-auto" role="status">
              <span className="visually-hidden">Please wait</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loader;

