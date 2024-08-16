import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      setError('Passwords do not match');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.username === username)) {
      setError('Username already taken');
    } else if (users.some(user => user.email === email)) {
      setError('Email already registered');
    } else if (users.some(user => user.phone === phone)) {
      setError('Phone number already registered');
    } else {
      const newUser = { username, email, phone, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      // Initialize empty notes for the new user
      localStorage.setItem(`notes-${username}`, JSON.stringify([]));

      navigate('/login');
    }
  };

  return (
    <div id="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i
              className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} show-password-icon`}
              onClick={() => setShowPassword(prev => !prev)}
            ></i>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="rePassword">Re-enter Password:</label>
          <div className="password-container">
            <input
              type={showRePassword ? "text" : "password"}
              id="rePassword"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              required
            />
            <i
              className={`fa ${showRePassword ? 'fa-eye-slash' : 'fa-eye'} show-password-icon`}
              onClick={() => setShowRePassword(prev => !prev)}
            ></i>
          </div>
        </div>
        <button type="submit">Register</button>
        {error && <p className="error">{error}</p>}
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
