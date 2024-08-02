import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Heroes from './components/Heroes';
import Features from './components/Features';
import Roles from './components/Roles';
import Play from './components/Play';
import Logos from './components/Logos';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';
import useScrollReveal from './hooks/useScrollReveal';
import './styles/main.css';
import { ApiProvider } from './context/ApiContext';

const App = () => {
  useScrollReveal();

  useEffect(() => {
    const scrollHeader = () => {
      const header = document.getElementById('header');
      window.scrollY >= 50
        ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header');
    };

    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        const navMenuItem = document.querySelector(
          `.nav__menu a[href*=${sectionId}]`
        );

        if (navMenuItem) {
          scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
            ? navMenuItem.classList.add('active-link')
            : navMenuItem.classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', scrollActive);
    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  return (
    <ApiProvider>
    <div className="app">
      <Header />
      <main className="main">
        <Home />
        <Heroes />
        <Features />
        <Roles />
        <Play />
        <Logos />
      </main>
      <Footer />
      <ScrollUp />
    </div>
    </ApiProvider>
  );
};

export default App;
