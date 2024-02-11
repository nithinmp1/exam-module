import React from 'react';
import logo from './logo-brilliance.png';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <div className="footer-brand">
              <img src={logo} alt="image" />
            </div>
            <h4>Greetings and Welcome to The Brilliance College for Competitive Exams</h4>
            <p>
              Brilliance College Thrissur was established in the year 1995, with an aim to coach and nurture young job aspirants of their choice of secured Jobs.
            </p>
            <ul className="foot-points social-network">
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <i className="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank">
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank">
                  <i className="bx bxl-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-8 col-lg-8">
            <div className="row">
              <div className="col-md-4">
                <h5>Main Office</h5>
                <p>
                  Brilliance College PSC | Bank | SSC Coaching, 5<sup>th</sup> floor Capital City Tower. Korapath Ln Round North Thrissur.
                </p>
                <div className="foot-iframe mt-4">
                  <iframe
                    width="100"
                    height="315"
                    src="https://www.youtube.com/embed/BBG0ykphSSA?si=5ts5hb_G0qS_bTVZ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="col-md-4">
                <h5>Contact</h5>
                <ul className="foot-points">
                  <li>
                    <a href="/" className="foot-call bx-common">
                      0487 2322 127 | 07012 7070 96
                    </a>
                  </li>
                  <li>
                    <a href="/" className="foot-mail bx-common">
                      brilliancecollege.org
                    </a>
                  </li>
                  <li>
                    <a href="/" className="foot-loc bx-common">
                      Brilliance College PSC | Bank | SSC Coaching Thrissur. 5th Floor, Right Wing, Capital City, Tower, Korappath Ln, Round North, Thrissur, Kerala 680001
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Quick Links</h5>
                <ul className="foot-points">
                  <li><a href="/">About us</a></li>
                  <li><a href="/">Courses</a></li>
                  <li><a href="/">Rank Holders</a></li>
                  <li><a href="/">Our Branches</a></li>
                  <li><a href="/">Blog</a></li>
                  <li><a href="/">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-foot mt-4">
        <div className="container">
          <div className="section-marquee-box">
            <p className="marquee-text">
              Amballur : +91 7907782129 | Chalakudy : +91 9074737844 | Chelakkara : +91 9188952208 | Edappal : +91 9188952202 | Irinjalakuda : +91 9188952201 | Kodakara : +91 9188952203 | Kodungallur : +91 9188952210 | Kunnamkullam : +91 9188952206 | Mala : +91 9188952207 | Ottupara : +91 9188952209 | Pavaratty : +91 9188952205 | Thrissur : +91 7012707096 | Thriprayar : +91 9188952204
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-footer">
          <p>
            Copyright © 2023 <span>Brilliance College</span> Thrissur: PSC | KAS | BANK | SSC | RRB |
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
