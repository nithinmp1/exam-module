import React, { useState, useCallback, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './user-profile.css';

const isAuthenticated = () => {
    // Check if the user is logged in (e.g., by checking a token in local storage)
    const token = localStorage.getItem('userToken');
    return token !== null;
  };

const Profile = () => {
  return (
        <div className="main-container">
            {/* HEADER */}
            <header className="block">
                <ul className="header-menu horizontal-list">
                    <li>
                        <a className="header-menu-tab" href="#1"><span className="icon entypo-cog scnd-font-color"></span>Settings</a>
                    </li>
                    <li>
                        <a className="header-menu-tab" href="#2"><span className="icon fontawesome-user scnd-font-color"></span>Account</a>
                    </li>
                    <li>
                        <a className="header-menu-tab" href="#3"><span className="icon fontawesome-envelope scnd-font-color"></span>Messages</a>
                        <a className="header-menu-number" href="#4">5</a>
                    </li>
                    <li>
                        <a className="header-menu-tab" href="#5"><span className="icon fontawesome-star-empty scnd-font-color"></span>Favorites</a>
                    </li>
                </ul>
                <div className="profile-menu">
                    <p>Me <a href="#26"><span className="entypo-down-open scnd-font-color"></span></a></p>
                    <div className="profile-picture small-profile-picture">
                        <img width="40px" alt="Anne Hathaway picture" src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg" />
                    </div>
                </div>
            </header>

            {/* LEFT-CONTAINER */}
            <div className="left-container profile-container">
                <div className="menu-box block"> {/* MENU BOX (LEFT-CONTAINER) */}
                    <h2 className="titular">MENU BOX</h2>
                    <ul className="menu-box-menu">
                        <li>
                            <a className="menu-box-tab" href="#6"><span className="icon fontawesome-envelope scnd-font-color"></span>Messages<div className="menu-box-number">24</div></a>                            
                        </li>
                        <li>
                            <a className="menu-box-tab" href="#8"><span className="icon entypo-paper-plane scnd-font-color"></span>Invites<div className="menu-box-number">3</div></a>                            
                        </li>
                        <li>
                            <a className="menu-box-tab" href="#10"><span className="icon entypo-calendar scnd-font-color"></span>Events<div className="menu-box-number">5</div></a>                            
                        </li>
                        <li>
                            <a className="menu-box-tab" href="#12"><span className="icon entypo-cog scnd-font-color"></span>Account Settings</a>
                        </li>
                        <li>
                            <a className="menu-box-tab" href="#13"><span className="icon entypo-chart-line scnd-font-color"></span>Exam<div className="menu-box-number">1</div></a>
                        </li>                        
                    </ul>
                </div>
            </div>

            {/* MIDDLE-CONTAINER */}
            <div className="middle-container profile-container">
                <div className="profile block"> {/* PROFILE (MIDDLE-CONTAINER) */}
                    <a className="add-button" href="#28"><span className="icon entypo-plus scnd-font-color"></span></a>
                    <div className="profile-picture big-profile-picture clear">
                        <img width="150px" alt="Anne Hathaway picture" src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg" />
                    </div>
                    <h1 className="user-name">Anne Hathaway</h1>
                    <div className="profile-description">
                        <p className="scnd-font-color">Lorem ipsum dolor sit amet consectetuer adipiscing</p>
                    </div>
                    <ul className="profile-options horizontal-list">
                        <li><a className="comments" href="#40"><p><span className="icon fontawesome-comment-alt scnd-font-color"></span>23</p></a></li>
                        <li><a className="views" href="#41"><p><span className="icon fontawesome-eye-open scnd-font-color"></span>841</p></a></li>
                        <li><a className="likes" href="#42"><p><span className="icon fontawesome-heart-empty scnd-font-color"></span>49</p></a></li>
                    </ul>
                </div>
            </div>

            {/* RIGHT-CONTAINER */}
            <div className="right-container profile-container">
                <div className="join-newsletter block"> {/* JOIN NEWSLETTER (RIGHT-CONTAINER) */}
                    <h2 className="titular">JOIN THE NEWSLETTER</h2>
                    <div className="input-container">
                        <input type="text" placeholder="yourname@gmail.com" className="email text-input" />
                        <div className="input-icon envelope-icon-newsletter"><span className="fontawesome-envelope scnd-font-color"></span></div>
                    </div>
                    <a className="subscribe button" href="#21">SUBSCRIBE</a>
                </div>
                
                <div className="loading block"> {/* LOADING (RIGHT-CONTAINER) */}
                    <div className="progress-bar downloading"></div>
                    <p><span className="icon fontawesome-cloud-download scnd-font-color"></span>Downloading...</p>
                    <p className="percentage">81<sup>%</sup></p>
                    <div className="progress-bar uploading"></div>
                    <p><span className="icon fontawesome-cloud-upload scnd-font-color"></span>Uploading...</p>
                    <p className="percentage">43<sup>%</sup></p>
                </div> 
            </div>
        </div>
    );  
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


// const Profile = () => <h1>Welcome to the Home page!</h1>;

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
