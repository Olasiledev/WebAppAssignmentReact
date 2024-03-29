import React, { useState } from 'react';
import { loginUser } from './firebase-config'; 
import './cssStyles/Login.css';
import { useNavigate } from 'react-router-dom';

// Login function for providing the login access to the user..

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [flashMessage, setFlashMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setFlashMessage(''); 
    try {
      await loginUser(email, password);
      // Successful login
      setFlashMessage('Log in successful!');
      console.log("Log in successful");
      // Redirecting user
      navigate('/dashboard');
      //Clearing flash message
      setTimeout(() => {
        setFlashMessage('');
        //redirection logic
      }, 1500);
    } catch (error) {
      console.error("Login error", error);
      setError('Failed to login');
      alert('Incorrect username or password.');
    }
  };


  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      {error && <p className="login-error">{error}</p>}
      {flashMessage && <p className="login-success">{flashMessage}</p>}
      <form onSubmit={handleLogin} className="login-form">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="login-input" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="login-input" />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
