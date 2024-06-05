// src/pages/consultarAviones.jsx
import React, { useState } from 'react';
import NavBarSystem from '../../components/NavBarSystem/navBarSistem';
import '../../styles/common/StarBackground.css';
import { Select, SelectItem, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import { useAerolineas, usePlanes } from '../../hooks/reporteConsultaAviones'; // Asegúrate de que la ruta es correcta

function ConsultarAviones() {
  const { dataVuelos, loading: loadingAerolineas, error: errorAerolineas } = useAerolineas();
  const [selectedAirline, setSelectedAirline] = useState(null);
  const { planes, loading: loadingPlanes, error: errorPlanes } = usePlanes(selectedAirline);

  const handleAirlineSelect = (event) => {
    setSelectedAirline(event.target.value);
  };

  if (loadingAerolineas) {
    return <div>Loading...</div>;
  }

  if (errorAerolineas) {
    return <div>Error: {errorAerolineas.message}</div>;
  }

  return (
    <div className="h-screen w-screen">
      <div className="stars flex flex-col justify-center items-center border-cyan-400">
        <div className='w-full h-16 stars rounded-lg'>
          <NavBarSystem />
        </div>
        <div className='flex flex-1 h-full w-full justify-around justify-center items-center bg-gray-400'>
          <div className='w-2/6 flex items-center'>
            <Select
              label="Seleccione Una Aerolínea"
              placeholder="Aerolínea"
              className="max-w-xs"
              onChange={handleAirlineSelect}
            >
              {dataVuelos.map((aerolinea) => (
                <SelectItem key={aerolinea.id} value={aerolinea.id}>
                  {aerolinea.nombre}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className='w-3/6 h-5/6 rounded-lg border-2 border-black'>
            <div className="text-4xl text-center text-black m-8">Reporte Aviones</div>
            <div className="text-2xl text-black-500 m-8 text-center">
              {loadingPlanes ? (
                <div>Loading planes...</div>
              ) : errorPlanes ? (
                <div>Error: {errorPlanes.message}</div>
              ) : (
                <Table aria-label="Tabla de vuelos">
                  <TableHeader className='text-black text-center'>
                    <TableColumn className='text-black text-center'>Modelo Avion</TableColumn>
                    <TableColumn className='text-black text-center'>Marca</TableColumn>
                    <TableColumn className='text-black text-center'>Año</TableColumn>
                    <TableColumn className='text-black text-center'>Cantidad de Pasajeros</TableColumn>
                    <TableColumn className='text-black text-center'>Descripción</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {planes.map((plane) => (
                      <TableRow key={plane.id}>
                        <TableCell>{plane.modelo}</TableCell>
                        <TableCell>{plane.marca}</TableCell>
                        <TableCell>{plane.anio}</TableCell>
                        <TableCell>{plane.maxAsientos}</TableCell>
                        <TableCell>{plane.descripcion}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultarAviones;
