// src/components/Heroes.js
import React from 'react';

const Heroes = () => {
  return (
    <section className="heroes section" id="heroes">
      <div className="heroes__container container grid">
        <div className="heroes__group">
          <img className="heroes__img" src="imgs/heroes.png" alt="Heroes" />
          <div className="heroes__card">
            <h3 className="heroes__card-title">120+</h3>
            <p className="heroes__card-description">
              All Free Playable Heroes From The Start
            </p>
          </div>
        </div>
        <div className="heroes__data">
          <h2 className="section__title heroes__title">Who Will You Choose?</h2>
          <p className="heroes__description">
            From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and limitlessly diverse. Unleash incredible abilities and devastating ultimates on your way to victory.
          </p>
          <a href="https://www.youtube.com/watch?v=5C4waNV-GXs" target="_blank" className="button">See More</a>
        </div>
      </div>
    </section>
  );
};

export default Heroes;
