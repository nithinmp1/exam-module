import React from 'react';
import winnerImage from './winner.png';
import scholarImage from './scholar-vector.png';
import './banner.css';

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="main-head">
          <h1 className="main-title">PSC - Kerala Public Service Commission Exams</h1>
        </div>
        <div className="vector-portfolio">
          <img className="first-child" src={winnerImage} alt="image" />
          <img className="second-child" src={scholarImage} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
