import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }

    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }

    const navLink = document.querySelectorAll('.nav__link');

    function linkAction() {
      navMenu.classList.remove('show-menu');
    }

    navLink.forEach(n => n.addEventListener('click', linkAction));

    return () => {
      if (navToggle) navToggle.removeEventListener('click', () => {});
      if (navClose) navClose.removeEventListener('click', () => {});
      navLink.forEach(n => n.removeEventListener('click', linkAction));
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src="/imgs/logo.png" alt="Logo" />
          Dota 2
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">Home</a>
            </li>
            <li className="nav__item">
              <a href="#heroes" className="nav__link">Heroes</a>
            </li>
            <li className="nav__item">
              <a href="#featured" className="nav__link">Featured</a>
            </li>
            <li className="nav__item">
              <a href="#roles" className="nav__link">Roles</a>
            </li>
            <li className="nav__item">
              <a href="#play" className="nav__link">Play Now</a>
            </li>
          </ul>
          <div className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
