import { vuelos } from "../config/axiosConfig";

const URL_VUELOS = "/get/flyAll";

export const getAllvuelos = async ()=>{
    return await vuelos.get(URL_VUELOS)
  }

  