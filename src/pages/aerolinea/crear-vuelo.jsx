import React from 'react';
import { Input, Button, Select, DatePicker, SelectItem, TimeInput } from '@nextui-org/react';
import NavBarSystem from '../../components/NavBarSystem/navBarSistem';
import '../../styles/common/StarBackground.css'; 
import { useCrearVuelo } from '../../hooks/crearVuelos';

const CrearVuelo = () => {
  const {
    aeropuertos,
    aerolineas,
    planes,
    selectedAirline,
    setSelectedAirline,
    loadingAeropuertos,
    loadingAerolineas,
    loadingPlanes,
    handleChange,
    handleDateChange,
    handleSubmit
  } = useCrearVuelo();

  if (loadingAeropuertos || loadingAerolineas) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen w-screen">
      <div className="stars flex flex-col border-cyan-400">
        <div className="w-full h-16 stars rounded-lg">
          <NavBarSystem />
        </div>
        <div className="flex flex-1 h-full w-full justify-around items-center bg-gray-400 p-6">
          <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Crear Vuelo</h1>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="mb-2">Aeropuerto de Salida</label>
                <Select
                  placeholder="Selecciona un aeropuerto"
                  name="aeropuertoSalidaId"
                  onChange={handleChange}
                >
                  {aeropuertos.map((aeropuerto) => (
                    <SelectItem key={aeropuerto.id} value={aeropuerto.id}>{aeropuerto.nombre}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Fecha de Salida</label>
                <DatePicker
                  placeholder="Selecciona una fecha"
                  name="fechaSalida"
                  onChange={(date) => handleDateChange('fechaSalida', date)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Hora de Salida</label>
                <TimeInput
                  label="Hora de Salida"
                  name="horaSalida"
                  onChange={(time) => handleDateChange('horaSalida', time)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Aeropuerto de Llegada</label>
                <Select
                  placeholder="Selecciona un aeropuerto"
                  name="aeropuertoLlegadaId"
                  onChange={handleChange}
                >
                  {aeropuertos.map((aeropuerto) => (
                    <SelectItem key={aeropuerto.id} value={aeropuerto.id}>{aeropuerto.nombre}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Fecha de Llegada</label>
                <DatePicker
                  placeholder="Selecciona una fecha"
                  name="fechaLlegada"
                  onChange={(date) => handleDateChange('fechaLlegada', date)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Hora de Llegada</label>
                <TimeInput
                  label="Hora de Llegada"
                  name="horaLlegada"
                  onChange={(time) => handleDateChange('horaLlegada', time)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Aerolíneas Disponibles</label>
                <Select
                  placeholder="Selecciona una aerolínea"
                  name="aerolineaId"
                  onChange={(e) => {
                    handleChange(e);
                    setSelectedAirline(e.target.value);
                  }}
                >
                  {aerolineas.map((aerolinea) => (
                    <SelectItem key={aerolinea.id} value={aerolinea.id}>
                      {aerolinea.nombre}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Aviones Disponibles</label>
                <Select
                  placeholder="Selecciona un avión"
                  name="avionId"
                  disabled={!selectedAirline || loadingPlanes}
                  onChange={handleChange}
                >
                  {planes.map((avion) => (
                    <SelectItem key={avion.id} value={avion.id}>{avion.descripcion}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Asientos Disponibles</label>
                <Input
                  type="number"
                  name="asientosDisponibles"
                  placeholder="Asientos Disponibles"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Precio Clase Económica</label>
                <Input
                  type="number"
                  name="precioClaseEconomica"
                  placeholder="Precio Clase Económica"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Precio Clase Ejecutiva</label>
                <Input
                  type="number"
                  name="precioClaseEjecutiva"
                  placeholder="Precio Clase Ejecutiva"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Tripulación Disponible</label>
                <Select placeholder="Selecciona una tripulación" disabled={!selectedAirline}>
                  <SelectItem value="tripulacion1">Tripulación 1</SelectItem>
                  <SelectItem value="tripulacion2">Tripulación 2</SelectItem>
                  <SelectItem value="tripulacion3">Tripulación 3</SelectItem>
                </Select>
              </div>
              <div className="flex justify-center mt-6 md:col-span-2">
                <Button type="submit">Crear Vuelo</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearVuelo;
