import React from 'react';
import NavBarSystem from '../../components/NavBarSystem/navBarSistem';
import '../../styles/common/StarBackground.css';
import { DateRangePicker, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { parseAbsoluteToLocal } from "@internationalized/date";




function ConsultarVuelo() {
  let [date, setDate] = React.useState({
    start: parseAbsoluteToLocal("2024-04-01T18:45:22Z"),
    end: parseAbsoluteToLocal("2024-04-08T19:15:22Z"),
  });

  return (
    <div className="h-screen w-screen">
      <div className="stars flex flex-col justify-center items-center border-cyan-400">
        <div className='w-full h-16 stars rounded-lg'>
          <NavBarSystem />
        </div>
        <div className='flex flex-1 h-full w-full justify-around justify-center items-center bg-gray-400'>
          <div className='w-2/6 flex items-center'>
            <div className="w-5/8 max-w-xl flex flex-col items-start gap-4">
              <DateRangePicker
                fullWidth
                granularity="second"
                label="Date and time range"
                value={date}
                onChange={setDate}
              />
              <Button
                fullWidth
                auto
                className='bg-transparent text-black rounded-lg border-2 border-black'
              > Filtrar Por Rango de fechas
              </Button>
            </div>
          </div>
          <div className='w-4/6 h-5/6 rounded-lg border-2 border-black'>
						<div className="text-4xl text-center text-black m-8"> Reporte Vuelos</div>
							<div className="text-2xl  text-black m-8">
                <Table aria-label="Tabla de vuelos">
                  <TableHeader className='text-black'>
                    <TableColumn className='text-black'>No Vuelo</TableColumn>
                    <TableColumn className='text-black'>Modelo Avión</TableColumn>
                    <TableColumn className='text-black'>Aerolínea</TableColumn>
                    <TableColumn className='text-black'>Origen</TableColumn>
                    <TableColumn className='text-black'>Destino</TableColumn>
                    <TableColumn className='text-black'>Fecha Salida</TableColumn>
                    <TableColumn className='text-black'>Hora Salida</TableColumn>
                    <TableColumn className='text-black'>Fecha Llegada</TableColumn>
                    <TableColumn className='text-black'>Hora Llegada</TableColumn>
                  </TableHeader>
                  <TableBody>
                    
                      <TableRow >
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    
                  </TableBody>
                </Table>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultarVuelo;
