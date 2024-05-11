import { user } from "../config/axiosConfig";

export const signUp = async (userData) => {
  try {
    const response = await user.post('/post/pasajeros', userData); // Asegúrate de que el endpoint es correcto
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to register user');
  }
};

export const login = async (userData) => {
  try {
    const response = await user.get('/getAll/pasajeros', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to login');
  }
}







