import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import menu from './logo-brilliance.png';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  return (
    <header className="header" id="header">
      <section className="wrapper bottom-header">
        <div className="top-header">
          <div className="container-fluid">
            <div className="row w-100 align-items-center">
              <div className="col-lg-7 col-md-7">
                <ul className="top-list">
                  <li><a href="#" className=" bx time">Mon - Fri 09:00 - 17:00 </a></li>
                  <li><a href="#" className="envelop bx-common">brilliancecollege.in@gmail.com</a></li>
                  <li><a href="#" className="phone bx-common">0487 2322 127 /  07012 7070 96</a></li>
                </ul>
              </div>
              <div className="col-lg-5 col-md-5">
                <ul className="top-list social-network">
                  <li><a href="https://www.facebook.com/" target="_blank"><i className="bx bxl-facebook"></i></a></li>
                  <li><a href="https://twitter.com/" target="_blank"><i className="bx bxl-twitter"></i></a></li>
                  <li><a href="https://www.instagram.com/" target="_blank"><i className="bx bxl-instagram-alt"></i></a></li>
                  <li><a href="https://www.youtube.com/" target="_blank"><i className="bx bxl-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <a className="brand-wrap" href="index.html">
            <img className="white-logo brand" src={menu} alt="brand" />
          </a>
          <div className="burger" id="burger">
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
          <span className="overlay"></span>
          <nav className="navbar" id="navbar">
            <span className="nav-menus-wrapper-close-button">✕</span>
            <ul className="menu" id="menu">
              <li className="menu-item active"><a href="/" className="menu-link">Home</a></li>
              <li className="menu-item"><a href="" className="menu-link">About us</a></li>
              <li className="menu-item menu-dropdown">
                <span className="menu-link chevron" data-toggle="submenu">Courses</span>
                <ul className="submenu">
                  <li className="submenu-item"><a href="" className="submenu-link">PSC </a></li>
                  <li className="submenu-item"><a href="" className="submenu-link">KAS</a></li>
                  <li className="submenu-item"><a href="" className="submenu-link">BANK</a></li>
                  <li className="submenu-item"><a href="" className="submenu-link">SSC</a></li>
                  <li className="submenu-item"><a href="" className="submenu-link">RRB</a></li>
                </ul>
              </li>
              <li className="menu-item"><a href="" className="menu-link">Rank Holders</a></li>
              <li className="menu-item"><a href="" className="menu-link">Our Branches</a></li>
              <li className="menu-item"><a href="/account" className="menu-link">Contact</a></li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
}

export default Header;
