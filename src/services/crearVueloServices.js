import { vuelos } from '../config/axiosConfig';

export const createVuelo = async (vueloData) => {
  try {
    const response = await vuelos.post('/post/fly', vueloData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
