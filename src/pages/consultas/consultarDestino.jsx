// src/pages/consultarDestinos.jsx
import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBarSystem from '../../components/NavBarSystem/navBarSistem';
import '../../styles/common/StarBackground.css';
import { Select, SelectItem, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import { useAerolineas } from '../../hooks/reporteConsultaAviones';
import useDestinations from '../../hooks/reporteConsultaDestinos';
import alertToastify from '../../hooks/AlertToastify'; // Asegúrate de que la ruta es correcta

function ConsultarDestinos() {
  const { dataVuelos: airlines, loading: loadingAirlines, error: errorAirlines } = useAerolineas();
  const [selectedAirline, setSelectedAirline] = useState(null);
  const { destinations, loading: loadingDestinations, error: errorDestinations } = useDestinations(selectedAirline);

  useEffect(() => {
    if (errorDestinations) {
      alertToastify("error", "Error al cargar los destinos");
    }
  }, [errorDestinations]);

  const handleAirlineSelect = (event) => {
    setSelectedAirline(event.target.value);
  };

  if (loadingAirlines) {
    return <div>Loading...</div>;
  }

  if (errorAirlines) {
    alertToastify("error", `Error: ${errorAirlines.message}`);
    return <div>Error: {errorAirlines.message}</div>;
  }

  return (
    <div className="h-screen w-screen">
      <ToastContainer />
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
              {airlines.map((airline) => (
                <SelectItem key={airline.id} value={airline.id}>
                  {airline.nombre}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className='w-3/6 h-5/6 rounded-lg border-2 border-black'>
            <div className="text-4xl text-center text-black text-center m-8">Reporte Destinos</div>
            <div className="text-2xl text-black  text-center m-8">
              {loadingDestinations ? (
                <div>Loading destinations...</div>
              ) : errorDestinations ? (
                <div className="text-center text-black">No hay destinos disponibles para esta aerolínea</div>
              ) : destinations.length === 0 ? (
                <div className="text-center text-black">Seleccione una Aerolinea</div>
              ) : (
                <Table aria-label="Tabla de destinos">
                  <TableHeader className='text-black'>
                    <TableColumn className='text-black text-center'>Nombre Aeropuerto</TableColumn>
                    <TableColumn className='text-black text-center'>País Aeropuerto</TableColumn>
                    <TableColumn className='text-black text-center'>Ciudad Aeropuerto</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {destinations.map((destination) => (
                      <TableRow key={destination.id}>
                        <TableCell>{destination.nombre}</TableCell>
                        <TableCell>{destination.pais}</TableCell>
                        <TableCell>{destination.ciudad}</TableCell>
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

export default ConsultarDestinos;
