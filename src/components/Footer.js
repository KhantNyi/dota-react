// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="shape shape__big"></div>
      <div className="shape shape__small"></div>
      <div className="footer__container container grid">
        <div className="footer__content">
          <a href="#" className="footer__logo">
            <img src="imgs/logo.png" alt="Logo" />
            Dota 2
          </a>
          <p className="footer__description">
            Dota and the Dota logo are trademarks and/or <br />
            registered trademarks of Valve Corporation. <br />
            2022 Valve Corporation, All rights reserved.
          </p>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Valve</h3>
          <ul className="footer__links">
            <li><a href="#" className="footer__link">About</a></li>
            <li><a href="#" className="footer__link">Heroes</a></li>
            <li><a href="#" className="footer__link">Updates</a></li>
            <li><a href="#" className="footer__link">Store</a></li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Information</h3>
          <ul className="footer__links">
            <li><a href="#" className="footer__link">Support</a></li>
            <li><a href="#" className="footer__link">Report a bug</a></li>
            <li><a href="#" className="footer__link">Registration</a></li>
            <li><a href="#" className="footer__link">Schedule</a></li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Follow us</h3>
          <ul className="footer__social">
            <a href="#" target="_blank" className="footer__social-link">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#" target="_blank" className="footer__social-link">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" target="_blank" className="footer__social-link">
              <i className="ri-twitter-line"></i>
            </a>
          </ul>
        </div>
        <span className="footer__copy">&#169; Valve. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
