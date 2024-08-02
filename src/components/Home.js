// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="shape shape__big"></div>
      <div className="shape shape__small"></div>
      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">Ember Spirit</h1>
          <h2 className="home__subtitle">Melee Carry</h2>
          <h3 className="home__subtext">
            <img src="/imgs/agi.png" alt="Agility" />
            Agility
          </h3>
        </div>
        <img className="home__img" src="/imgs/ember.png" alt="Ember Spirit" />
        <div className="home__stat">
          <div className="home__stat-data">
            <img src="/imgs/str.png" alt="Strength" />
            <h2 className="home__stat-number">21</h2>
            <h3 className="home__stat-name">STRENGTH</h3>
          </div>
          <div className="home__stat-data">
            <img src="/imgs/agi.png" alt="Agility" />
            <h2 className="home__stat-number">22</h2>
            <h3 className="home__stat-name">AGILITY</h3>
          </div>
          <div className="home__stat-data">
            <img src="/imgs/int.png" alt="Intelligence" />
            <h2 className="home__stat-number">20</h2>
            <h3 className="home__stat-name">INTELLIGENCE</h3>
          </div>
        </div>
        <a href="https://www.youtube.com/watch?v=Xx0YUuvW4wA" target="_blank" className="home__button">ACCEPT</a>
      </div>
    </section>
  );
};

export default Home;
