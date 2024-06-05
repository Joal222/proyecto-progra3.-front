import React from 'react';
import NavBarSystem from '../../components/NavBarSystem/navBarSistem';
import '../../styles/common/StarBackground.css'; // Asegúrate de tener este archivo CSS en la ruta correcta


function crearTripulacion() {
  return (
    <div className="h-screen w-screen">
      <div className="stars flex flex-col justify-center items-center border-cyan-400">
        <div className='w-full h-16 stars rounded-lg'>
        <NavBarSystem />
        </div>
        <div className='flex flex-1 h-full w-full justify-around justify-center items-center bg-gray-400'>
            <h1 className='text-white'>Crear-Tripulacion</h1>
        </div>
      </div>
    </div>
  );
}

export default crearTripulacion;