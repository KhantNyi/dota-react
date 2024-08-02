import React, { useContext, useEffect, useState } from 'react';
import mixitup from 'mixitup';
import { ApiContext } from '../context/ApiContext';

const Roles = () => {
  const { heroStats, error } = useContext(ApiContext);
  const [visibleHeroes, setVisibleHeroes] = useState(9);
  const [filter, setFilter] = useState('eve');
  const [mixer, setMixer] = useState(null);

  useEffect(() => {
    if (heroStats.length > 0) {
      // Initialize MixItUp
      const mixInstance = mixitup('.roles__content', {
        selectors: {
          target: '.roles__card',
        },
        animation: {
          duration: 300,
        },
        load: {
          filter: `.${filter}`
        }
      });

      setMixer(mixInstance);

      // Cleanup function to destroy MixItUp instance
      return () => {
        mixInstance.destroy();
      };
    }
  }, [filter, heroStats]);

  useEffect(() => {
    if (mixer) {
      mixer.filter(`.${filter}`);
    }
  }, [filter, mixer]);

  // Function to handle "See More" button
  const handleSeeMore = () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    setVisibleHeroes(prev => prev + (isMobile ? 4 : 9));
  };

  // Function to handle filter changes
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Function to get the filtered and sorted heroes
  const getFilteredAndSortedHeroes = () => {
    // Filter heroes based on selected filter
    let filteredHeroes;
    if (filter === 'eve') {
      filteredHeroes = heroStats;
    } else if (filter === 'uni') {
      filteredHeroes = heroStats.filter(hero => hero.primary_attr === 'all');
    } else {
      filteredHeroes = heroStats.filter(hero => hero.primary_attr === filter);
    }

    // Sort heroes alphabetically by their name
    filteredHeroes = filteredHeroes.sort((a, b) => a.localized_name.localeCompare(b.localized_name));

    return filteredHeroes;
  };

  const filteredAndSortedHeroes = getFilteredAndSortedHeroes();

  // Adjust visible heroes based on screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = () => {
      setVisibleHeroes(mediaQuery.matches ? 4 : 9);
    };
    handleResize();
    mediaQuery.addListener(handleResize);
    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <section className="roles section" id="roles">
      <h2 className="section__title">Unique Hero Roles</h2>
      <div className="roles__container container">
        <ul className="roles__filters">
          <li>
            <button className={`roles__item ${filter === 'eve' ? 'active-roles' : ''}`} onClick={() => handleFilterChange('eve')}>
              <span>All</span>
            </button>
          </li>
          <li>
            <button className={`roles__item ${filter === 'str' ? 'active-roles' : ''}`} onClick={() => handleFilterChange('str')}>
              <img src="/imgs/str.png" alt="Strength" />
            </button>
          </li>
          <li>
            <button className={`roles__item ${filter === 'agi' ? 'active-roles' : ''}`} onClick={() => handleFilterChange('agi')}>
              <img src="/imgs/agi.png" alt="Agility" />
            </button>
          </li>
          <li>
            <button className={`roles__item ${filter === 'int' ? 'active-roles' : ''}`} onClick={() => handleFilterChange('int')}>
              <img src="/imgs/int.png" alt="Intelligence" />
            </button>
          </li>
          <li>
            <button className={`roles__item ${filter === 'uni' ? 'active-roles' : ''}`} onClick={() => handleFilterChange('uni')}>
              <img src="/imgs/uni.png" alt="Universal" />
            </button>
          </li>
        </ul>
        <div className="roles__content grid">
          {filteredAndSortedHeroes.slice(0, visibleHeroes).map(hero => {
            const heroImageUrl = `https://steamcdn-a.akamaihd.net/${hero.img}`;
            const heroIconUrl = `https://steamcdn-a.akamaihd.net/${hero.icon}`;

            return (
              <article
                key={hero.id}
                className={`roles__card mix ${hero.primary_attr === 'str' ? 'str' : hero.primary_attr === 'agi' ? 'agi' : hero.primary_attr === 'int' ? 'int' : hero.primary_attr === 'all' ? 'uni' : ''} eve`}
              >
                <div className="shape shape__smaller"></div>
                <h1 className="roles__title">{hero.localized_name}</h1>
                <h3 className="roles__subtitle">
                  <img src={heroIconUrl} alt={hero.localized_name} className="attr" />
                  {hero.primary_attr}
                </h3>
                <img src={heroImageUrl} alt={hero.localized_name} className="roles__img" />
                <h3 className="roles__q">{hero.attack_type}</h3>
              </article>
            );
          })}
        </div>
        {visibleHeroes < filteredAndSortedHeroes.length && (
          <div className="roles__see-more">
            <a onClick={handleSeeMore} className="button">See More</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Roles;
