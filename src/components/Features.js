// src/components/Features.js
import React from 'react';

const Features = () => {
  return (
    <section className="features section" id="featured">
      <h2 className="section__title">Meet Juggernaut</h2>
      <div className="features__container container grid">
        <div className="features__group">
          <img src="imgs/jugg.png" alt="Juggernaut" className="features__img" />
          <div className="features__card features__card-1">
            <h3 className="features__card-title">54</h3>
            <p className="features__card-description">Attack <br /> Damage</p>
          </div>
          <div className="features__card features__card-2">
            <h3 className="features__card-title">5.7</h3>
            <p className="features__card-description">Physical <br /> Armor</p>
          </div>
          <div className="features__card features__card-3">
            <h3 className="features__card-title">305</h3>
            <p className="features__card-description">Movement <br /> Speed</p>
          </div>
        </div>
        <div className="jugg">
          <h1 className="jugg__title">Juggernaut</h1>
          <h3 className="roles__subtitle">
            <img src="imgs/agi.png" alt="Agility" className="attr" />
            Agility
          </h3>
          <h3 className="jugg__subtext">SLICES THROUGH HIS ENEMIES WITH PRECISE STRIKES</h3>
          <p className="jugg__text">In a flurry of slashes, Juggernaut cuts down his foes. Sprinting and spinning into battle with reckless abandon, and nearly invincible once he is able to begin his assault, stopping Juggernaut can often be just as difficult as surviving him.</p>
          <div className="jugg__skills">
            <img className="jugg__skills-place" src="imgs/jugg1.png" alt="Skill 1" />
            <img className="jugg__skills-place" src="imgs/jugg2.png" alt="Skill 2" />
            <img className="jugg__skills-place" src="imgs/jugg3.png" alt="Skill 3" />
            <img className="jugg__skills-place" src="imgs/jugg4.png" alt="Skill 4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
