// src/components/Logos.js
import React from 'react';

const Logos = () => {
  return (
    <section className="logos section">
      <div className="logos__container container grid">
        <div className="logos__content">
          <img src="imgs/valve.png" alt="Valve" className="logos__img" />
        </div>
        <div className="logos__content">
          <img src="imgs/dota.png" alt="Dota" className="logos__img" />
        </div>
      </div>
    </section>
  );
};

export default Logos;
