import { vuelos } from "../config/axiosConfig";

const URL_VUELOS = "/get/listFlightsAll";

export const getAllvuelos = async ()=>{
    return await vuelos.get(URL_VUELOS)
  }

  