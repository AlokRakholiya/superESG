import './login.scss';
import bachgroundimg from '../../../assets/images/bd.jpeg'
import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (username === 'user' && password === 'pass') {
        setErrorMessage('');
        alert('Login successful!');
        // Redirect to another page or perform other actions upon successful login
      } else {
        setErrorMessage('Invalid username or password');
      }
    };
  
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {errorMessage && <p id="errorMessage">{errorMessage}</p>}
      </div>
    );
  }
  
  export default Login;