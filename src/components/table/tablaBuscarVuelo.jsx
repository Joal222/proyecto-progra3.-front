import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import useVuelos from '../../hooks/vueloService';


function formatDate(dateArray) {
  // Asume que dateArray es un arreglo en el formato [año, mes, día, hora, minuto]
  return `${dateArray[0]}-${dateArray[1].toString().padStart(2, '0')}-${dateArray[2].toString().padStart(2, '0')} ${dateArray[3].toString().padStart(2, '0')}:${dateArray[4].toString().padStart(2, '0')}`;
}


function TablaBuscarVuelo({ vueloId }) {
  const { dataVuelos, loading, error } = useVuelos(); // Asume que ya tienes un hook que trae todos los vuelos

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Fallo al cargar los datos: {error.message}</p>;

  // Define filteredData dentro del componente, no fuera de su ámbito
  let filteredData = [];
  let content;

  if (vueloId === null) {
    content = <p>Por favor, ingrese el número del vuelo para buscar.</p>;
  } else {
    filteredData = dataVuelos.filter(vuelo => vuelo.id.toString() === vueloId);
    content = filteredData.length > 0 ? (
      filteredData.map((vuelo) => (
        <TableRow key={vuelo.id}>
          <TableCell>{vuelo.id}</TableCell>
          {/* Otros datos del vuelo */}
        </TableRow>
      ))
    ) : <p>No se encontraron vuelos con ese ID.</p>;
  }

  return (
    <Table aria-label="Tabla de vuelos">
      <TableHeader>
        <TableColumn>ID del vuelo</TableColumn>
        <TableColumn>Aerolínea</TableColumn>
        <TableColumn>Origen</TableColumn>
        <TableColumn>Destino</TableColumn>
        <TableColumn>Fecha y Hora de Salida</TableColumn>
        <TableColumn>Fecha y Hora de Llegada</TableColumn>
      </TableHeader>
      <TableBody>
        {filteredData.map((vuelo) => (
          <TableRow key={vuelo.id}>
            <TableCell>{vuelo.avionId.marca + ' ' + vuelo.avionId.modelo}</TableCell>
            <TableCell>{vuelo.aerolineaId.nombre}</TableCell>
            <TableCell>{vuelo.aeropuertoSalidaId.nombre}</TableCell>
            <TableCell>{vuelo.aeropuertoLlegadaId.nombre}</TableCell>
            <TableCell>{formatDate(vuelo.fechaHoraSalida)}</TableCell>
            <TableCell>{formatDate(vuelo.fechaHoraLlegada)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TablaBuscarVuelo;
