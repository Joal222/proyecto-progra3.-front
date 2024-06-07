// src/services/reportesVuelos.js
import { vuelos, reportes } from "../config/axiosConfig";

// Consultar aviones por aerolíneas
export const getAllAerolineas = async () => {
  try {
    return await vuelos.get("get/listAirlinesAll");
  } catch (error) {
    console.error('Error fetching airlines:', error);
    throw error;
  }
};

export const getPlanesByAirlineId = async (airlineId) => {
  try {
    return await reportes.get(`/get/listPlanesByAirlineId/${airlineId}`);
  } catch (error) {
    console.error('Error fetching planes:', error);
    throw error;
  }
};

// Consultar aerolíneas por aeropuertos
export const getAllAirports = async () => {
  try {
    return await vuelos.get("get/listAirportsAll");
  } catch (error) {
    console.error('Error fetching airports:', error);
    throw error;
  }
};

export const getAirlinesByAirport = async (airport) => {
  try {
    return await reportes.get(`/get/airlinesByAirport/${airport}`);
  } catch (error) {
    console.error('Error fetching airlines:', error);
    throw error;
  }
};


// Consultar destinos por aerolíneas
export const getDestinationsByAirlineId = async (airlineId) => {
  try {
    return await reportes.get(`/get/listDestinationsByAirlineId/${airlineId}`);
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw error;
  }
};
