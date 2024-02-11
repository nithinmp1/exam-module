import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import './fonts.css';
import { Footer, Header  } from './containers';
import { Banner, Quiz, Account } from './components';
// import './App.css';

const Home = () => {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Quiz />
      <Footer />
    </div>
  )
}

export default Home