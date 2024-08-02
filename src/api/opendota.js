import axios from 'axios';

const BASE_URL = 'https://api.opendota.com/api';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchHeroes = async () => {
  try {
    const response = await api.get('/heroes');
    return response.data;
  } catch (error) {
    console.error('Error fetching heroes:', error);
    throw error;
  }
};

export const fetchHeroStats = async () => {
  try {
    const response = await api.get('/heroStats');
    return response.data;
  } catch (error) {
    console.error('Error fetching hero stats:', error);
    throw error;
  }
};
