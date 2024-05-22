import React from 'react';
import NavBarSystem from '../../components/NavBarSystem/navBarSistem';
import '../../styles/common/StarBackground.css'; // Asegúrate de tener este archivo CSS en la ruta correcta
import { Select, SelectItem, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';

function consultarDestinos() {
  return (
    <div className="h-screen w-screen">
      <div className="stars flex flex-col justify-center items-center border-cyan-400">
        <div className='w-5/6 h-1/6 border-cyan-400 stars m-2 rounded-lg'>
        <NavBarSystem />
        </div>
        <div className='flex flex-1 h-5/6 w-5/6 justify-around justify-center items-center'>
          <div className='w-2/6 flex items-center'>
            <Select
              label="Seleccione Un Aerolinea"
              placeholder="Aerolinea"
              className="max-w-xs"
            >
              <SelectItem value="JFK">Aerolinea 1</SelectItem>
              <SelectItem value="LHR">Aerolinea 2</SelectItem>
              <SelectItem value="HND">Aerolinea 3</SelectItem>
            </Select>
          </div>
          <div className='w-3/6 h-5/6 rounded-lg border-2 border-cyan-500'>
						<div className="text-4xl text-center text-white m-8"> Reporte Destinos</div>
							<div className="text-2xl  text-cyan-500 m-8">
                <Table aria-label="Tabla de vuelos">
                  <TableHeader className='text-black'>
                    <TableColumn className='text-black'>Nombre Aeropuert</TableColumn>
                    <TableColumn className='text-black'>País Aeropuerto</TableColumn>
                    <TableColumn className='text-black'>Ciudad Aeropuerto</TableColumn>
                  </TableHeader>
                  <TableBody>
                    
                      <TableRow >
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

export default consultarDestinos;