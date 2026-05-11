import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = new FormData();
      data.append('username', username);
      data.append('password', password);

      const response = await axios.post('https://serahswala.alwaysdata.net/api/signin', data);
      if(response.data.user){
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/'); // Redirect to home page after successful login

      }else{
        setError('Invalid username or password');
      }
      
    } catch (err) {
      // Helps identify the real reason in the browser console
      console.error('Login error:', {
        status: err?.response?.status,
        data: err?.response?.data,
        message: err?.message,
      });
      setError(err.response?.data?.message || err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="col-md-5 p-5 card shadow-lg rounded-4">
        <div className="text-center mb-4">
          <i className="fas fa-sign-in-alt text-primary" style={{fontSize: '3rem'}}></i>
          <h1 className="text-primary mt-3">Sign In</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input 
              type="text" 
              className="form-control" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        <div className="text-center mt-3">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

