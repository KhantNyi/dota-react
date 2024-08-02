import React, { createContext, useState, useEffect } from 'react';
import { fetchHeroes, fetchHeroStats } from '../api/opendota';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [heroStats, setHeroStats] = useState([]);

  useEffect(() => {
    const getHeroes = async () => {
      const data = await fetchHeroes();
      console.log('Heroes:', data); // Check if data is returned
      setHeroes(data);
    };

    const getHeroStats = async () => {
      const data = await fetchHeroStats();
      console.log('Hero Stats:', data); // Check if data is returned
      setHeroStats(data);
    };

    getHeroes();
    getHeroStats();
  }, []);

  return (
    <ApiContext.Provider value={{ heroes, heroStats }}>
      {children}
    </ApiContext.Provider>
  );
};
