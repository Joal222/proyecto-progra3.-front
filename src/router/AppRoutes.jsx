import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home  from "../pages/common/Home";
import BuscarVuelos from "../pages/Vuelos/BuscarVuelos"


export const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar-vuelos" element={<BuscarVuelos />} />
        <Route path="*" element={<div>404 Pagina No Encontrada</div>} />
      </Routes>
    </HashRouter>
  );
};

