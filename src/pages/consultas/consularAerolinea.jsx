// src/pages/consultarAerolineas.jsx
import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBarSystem from '../../components/NavBarSystem/navBarSistem';
import '../../styles/common/StarBackground.css';
import { Select, SelectItem, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import { useAirport, useAirlines } from '../../hooks/reporteConsultaAerolineas';
import alertToastify from '../../hooks/AlertToastify'; // Asegúrate de que la ruta es correcta

function ConsultarAerolineas() {
  const { dataVuelos: airports, loading: loadingAirports, error: errorAirports } = useAirport();
  const [selectedAirport, setSelectedAirport] = useState(null);
  const { airlines, loading: loadingAirlines, error: errorAirlines } = useAirlines(selectedAirport);

  useEffect(() => {
    if (errorAirlines) {
      alertToastify("error", "Error al cargar las aerolíneas");
    }
  }, [errorAirlines]);

  const handleAirportSelect = (event) => {
    setSelectedAirport(event.target.value);
  };

  if (loadingAirports) {
    return <div>Loading...</div>;
  }

  if (errorAirports) {
    alertToastify("error", `Error: ${errorAirports.message}`);
    return <div>Error: {errorAirports.message}</div>;
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
              label="Seleccione Un Aeropuerto"
              placeholder="Aeropuerto"
              className="max-w-xs"
              onChange={handleAirportSelect}
            >
              {airports.map((airport) => (
                <SelectItem key={airport.id} value={airport.id}>
                  {airport.nombre}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className='w-3/6 h-5/6 rounded-lg border-2 border-black'>
            <div className="text-4xl text-center text-black m-8">Reporte Aerolíneas</div>
            <div className="text-2xl text-black text-center m-8">
              {loadingAirlines ? (
                <div>Loading airlines...</div>
              ) : errorAirlines ? (
                <div className="text-center text-black">No hay aerolíneas disponibles para este Aeropuerto</div>
              ) : airlines.length === 0 ? (
                <div className="text-center text-black">Seleccione un Aeropuerto</div>
              ) : (
                <Table aria-label="Tabla de aerolíneas">
                  <TableHeader className='text-black'>
                    <TableColumn className='text-black text-center'>Nombre Aerolínea</TableColumn>
                    <TableColumn className='text-black text-center'>Cantidad de Aviones</TableColumn>
                    <TableColumn className='text-black text-center'>Destinos Autorizados</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {airlines.map((airline) => (
                      <TableRow key={airline.id}>
                        <TableCell>{airline.nombreAerolinea}</TableCell>
                        <TableCell>{airline.cantidadAviones}</TableCell>
                        <TableCell>{airline.cantidadDestinos}</TableCell>
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

export default ConsultarAerolineas;
