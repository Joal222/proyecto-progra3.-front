import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home  from "../pages/common/Home";
import BuscarVuelos from "../pages/Vuelos/BuscarVuelos"
import CreacionVuelo from "../pages/Vuelos/CrearVuelo"
import ConsultarAviones from "../pages/consultas/consultarAviones"
import ConsultarAerolineas from "../pages/consultas/consularAerolinea"
import ConsultarDestinos from "../pages/consultas/consultarDestino"
import ConsultarEquipaje from "../pages/consultas/equipajePorVuelo"
import PasajerosPorVuelo from "../pages/consultas/pasajerosPorVuelo"
import ConsultarVuelo from "../pages/consultas/consultarVuelos"
import Abordaje from "../pages/Vuelos/abordaje"
import CrearVuelo from "../pages/aerolinea/crear-vuelo"
import CrearTripulacion from "../pages/aerolinea/crear-tripulacion"

export const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar-vuelos" element={<BuscarVuelos />} />
        <Route path="/crear-vuelos" element={<CreacionVuelo />} />
        <Route path="/consultar-aviones" element={<ConsultarAviones />} /> 
        <Route path="/consultar-aerolineas" element={<ConsultarAerolineas />} /> 
        <Route path="/consultar-vuelos" element={<ConsultarVuelo />} /> 
        <Route path="/consultar-destinos" element={<ConsultarDestinos />} />  
        <Route path="/consultar-equipaje" element={<ConsultarEquipaje />} /> 
        <Route path="/consultar-pasajero" element={<PasajerosPorVuelo />} />  
        <Route path="/crear-vuelo" element={<CrearVuelo />} />  
        <Route path="/crear-tripulacion" element={<CrearTripulacion />} />  
        <Route path="/vuelo-abordaje" element={<Abordaje />} />  
        <Route path="*" element={<div>404 Pagina No Encontrada</div>} />
      </Routes>
    </HashRouter>
  );
};

