import { vuelos } from "../config/axiosConfig";

const URL_FAKE_USERS = "/users";

export const getAllUsers = async ()=>{
  return await vuelos.get(URL_FAKE_USERS)
}

export const getUserById = async (id) => {
  return await vuelos.get(`${URL_FAKE_USERS}/${id}`);
}