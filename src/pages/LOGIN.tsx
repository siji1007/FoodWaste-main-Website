import React, { useState } from 'react';
import MockAuthService from "./MockAuthService";

const LOGIN: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (MockAuthService.login(email, password)) {
      // Authentication successful
      setError('');
      setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
      
    } else {
      // Authentication failed
      setError('Invalid email or password');
    }
  };

  // Render login form if user is not logged in
  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-content">
          <h1 >LOGIN</h1>
          <div className="form login">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email address or Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a href="#">Forgot password?</a>
              <input type="submit" value="Login" style={{ marginTop: '20px' }} />
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      </div>
    );
  } else {
    // Render something else or nothing when user is logged in
    return null; // or render a different component
  }
};

export default LOGIN;
