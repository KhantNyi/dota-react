// src/components/Play.js
import React from 'react';

const Play = () => {
  return (
    <section className="play section" id="play">
      <div className="play__container container grid">
        <img src="imgs/play-bg.png" alt="Play Background" className="play__bg" />
        <div className="play__data">
          <h2 className="section__title play__title">
            JOIN THE <br />
            BATTLE OF THE ANCIENTS
          </h2>
          <p className="play__description">
            Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic to discover. It's completely free to play and always will be – start defending your ancient now.
          </p>
          <a href="https://youtu.be/QQDS1uxoIR4?si=otkoy8n10vuR60-l" target="_blank" className="button">PLAY NOW</a>
        </div>
        <img src="imgs/gorgon.png" alt="Gorgon" className="play__img" />
      </div>
    </section>
  );
};

export default Play;
