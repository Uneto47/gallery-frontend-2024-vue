import axios from 'axios';

const API_KEY = '5axsJghhDQ1SEMwz0yHlAXPiMrRSoGMr';
const BASE_URL = 'https://api.giphy.com/v1/gifs/';

export const searchImages = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        q: query,  
        api_key: API_KEY, 
        limit: 20,  
      }
    });

    console.log(response)
    return response.data.data; 
  } catch (error) {
    console.error('Erro ao buscar imagens:', error);
    throw error;
  }
};

export const loadTrendingImages = async () => {
  try {
    const response = await axios.get(`${BASE_URL}trending`, {
      params: {
        api_key: API_KEY,
        limit: 20, 
      }
    });

    console.log(response)
    return response.data.data;
  } catch (error) {
    console.error('Erro ao carregar imagens aleatórias:', error);
    throw error;
  }
};
