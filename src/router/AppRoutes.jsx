// src/router/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; // Elimina HashRouter
import Home from "../pages/common/Home";
import BuscarVuelos from "../pages/Vuelos/BuscarVuelos";
import DashboardEmpleado from "../pages/common/dashboardEmpleado";
import ConsultarAviones from "../pages/consultas/consultarAviones";
import ConsultarAerolineas from "../pages/consultas/consularAerolinea";
import ConsultarDestinos from "../pages/consultas/consultarDestino";
import ConsultarEquipaje from "../pages/consultas/equipajePorVuelo";
import PasajerosPorVuelo from "../pages/consultas/pasajerosPorVuelo";
import ConsultarVuelo from "../pages/consultas/consultarVuelos";
import Abordaje from "../pages/Vuelos/abordaje";
import CrearVuelo from "../pages/aerolinea/crear-vuelo";
import CrearTripulacion from "../pages/aerolinea/crear-tripulacion";
import ComprarBoleto from "../pages/cliente/comprarBoleto";
import NotAuthorized from "../pages/common/NotAuthorized";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/not-authorized" element={<NotAuthorized />} />
      <Route path="/buscar-vuelos" element={<BuscarVuelos />} />     
      <Route path="/consultar-aerolineas" element={<ConsultarAerolineas />} />
      <Route path="/consultar-vuelos" element={<ConsultarVuelo />} />
      <Route path="/consultar-destinos" element={<ConsultarDestinos />} />
      <Route path="/consultar-equipaje" element={<ConsultarEquipaje />} />
      <Route path="/consultar-pasajero" element={<PasajerosPorVuelo />} />
      <Route path="/crear-vuelo" element={<CrearVuelo />} />
      <Route path="/crear-tripulacion" element={<CrearTripulacion />} />
      <Route path="/vuelo-abordaje" element={<Abordaje />} />
      <Route path="/comprar-boleto" element={<ComprarBoleto />} />
      <Route path="*" element={<div>404 Pagina No Encontrada</div>} />

      {/* Rutas protegidas */}
      <Route element={<ProtectedRoute role="ADMIN" />}>
        <Route path="/dashBoard" element={<DashboardEmpleado />} />
        <Route path="/consultar-aviones" element={<ConsultarAviones />} />
      </Route>
      {/* Puedes agregar más rutas protegidas según sea necesario */}
    </Routes>
  );
};

export default AppRoutes;
