import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './account.css';

const isAuthenticated = () => {
    // Check if the user is logged in (e.g., by checking a token in local storage)
    const token = localStorage.getItem('userToken');
    return token !== null;
  };

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await fetch('/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.status && data.message === "authentication success") {
        localStorage.setItem('userToken', data.data.token);
        // Redirect to profile page after successful login
        // return <Navigate to="/profile" />;
        window.location.href = '/account';
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      console.error('Error making POST request:', error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="page">
        <div className="container">
          <div className="left">
            <div className="login">Login</div>
            <div className="eula">
              By logging in you agree to the{' '}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                terms and conditions
              </a>
              .
            </div>
          </div>
          <div className="right">
            <div className="form">
              <label htmlFor="email">Email</label>
              <input type="email" id="emailInput" onChange={handleEmailChange} name="emailInput" />
              <label htmlFor="password">Password</label>
              <input type="password" id="passwordInput" onChange={handlePasswordChange} name="passwordInput" />
              <input type="submit" id="submitButton" onClick={handleButtonClick} value="Submit" />
              {error && <div className="error">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


const Profile = () => <h1>Welcome to the Home page!</h1>;

const Account = () => {
  if (isAuthenticated()) {
      return (
        <div>
          <Routes>
            <Route path="/" element={<Profile />} />
          </Routes>
        </div>
        );
  } else {
      return (
        <div>
          <Routes>
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </div>
      );
  }
};

export default Account;
