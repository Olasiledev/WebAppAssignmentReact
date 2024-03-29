import React, { useState } from 'react';
import { registerUser } from './firebase-config';
import './cssStyles/Register.css';
import { useNavigate } from 'react-router-dom';

// Register Function for providing register access to the user..

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [programName, setProgramName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await registerUser(email, password, { firstName, lastName, programName, courseName });
      navigate('/register');
    } catch (error) {
      const errorMessage = 'Failed to register. ' + error.message;
      console.error("Registration error", error);
      setError('Failed to register. ' + error.message);
      alert(errorMessage);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      {error && <p className="register-error">{error}</p>}
      <form onSubmit={handleRegister} className="register-form">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="register-input" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="register-input" />
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required className="register-input" />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required className="register-input" />
        <input type="text" value={programName} onChange={(e) => setProgramName(e.target.value)} placeholder="Program Name" required className="register-input" />
        <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} placeholder="Course Name" required className="register-input" />
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
}

export default Register;
