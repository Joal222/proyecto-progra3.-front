import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/common/Home";
import { Test } from "../pages/common/Test";

export const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<div>404 Pagina No Encontrada</div>} />
      </Routes>
    </HashRouter>
  );
};
