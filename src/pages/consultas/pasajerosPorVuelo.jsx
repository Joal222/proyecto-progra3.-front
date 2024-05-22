import React from 'react';
import NavBarSystem from '../../components/NavBarSystem/navBarSistem';
import '../../styles/common/StarBackground.css'; // Asegúrate de tener este archivo CSS en la ruta correcta
import { Input, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';

function pasajerosPorVuelo() {
  return (
    <div className="h-screen w-screen">
      <div className="stars flex flex-col justify-center items-center border-cyan-400">
        <div className='w-5/6 h-1/6 border-cyan-400 stars m-2 rounded-lg'>
        <NavBarSystem />
        </div>
        <div className='flex flex-1 h-5/6 w-5/6 justify-around justify-center items-center'>
          <div className='w-2/6 flex items-center'>
            <div className="w-full max-w-xl flex flex-col items-start gap-4">
              <Input>
                fullWidth
                placeholder="Número de vuelo"
              </Input>
              <Button
                fullWidth
                auto
                className='bg-transparent text-cyan-400 rounded-lg border-2 border-cyan-500'
              > Filtrar Por Numero De Vuelo
              </Button>
            </div>
          </div>
          <div className='w-3/6 h-5/6 rounded-lg border-2 border-cyan-500'>
						<div className="text-4xl text-center text-white m-8"> Reporte Pasajeros</div>
							<div className="text-2xl  text-cyan-500 m-8">
                <Table aria-label="Tabla de vuelos">
                  <TableHeader className='text-black'>
                    <TableColumn className='text-black'>Nombre Pasajero</TableColumn>
                    <TableColumn className='text-black'>Numero Pasaporte</TableColumn>
                    <TableColumn className='text-black'>Nacionalidad</TableColumn>
                    <TableColumn className='text-black'>Edad</TableColumn>
                    <TableColumn className='text-black'>Telefono</TableColumn>
                    <TableColumn className='text-black'>Correo Electronico</TableColumn>
                  </TableHeader>
                  <TableBody>
                    
                      <TableRow >
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

export default pasajerosPorVuelo;