import React from 'react';
import './login.css';
import Footer from '../../components/footer/page'

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-heading">Log In</h1>
        <form className="login-form">
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              className="input-field username-input"
              aria-label="Username"
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="input-field password-input"
              aria-label="Password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
