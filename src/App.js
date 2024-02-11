// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import { Banner, Quiz, Account } from './components';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default App;
