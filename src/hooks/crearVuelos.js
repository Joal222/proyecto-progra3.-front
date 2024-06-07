import { useState, useEffect } from 'react';
import { createVuelo } from '../services/crearVueloServices';
import { useAirport } from './reporteConsultaAerolineas';
import { useAerolineas, usePlanes } from './reporteConsultaAviones';
import alertToastify from './AlertToastify';
import moment from 'moment';

export const useCrearVuelo = () => {
  const { dataVuelos: aeropuertos, loading: loadingAeropuertos, error: errorAeropuertos } = useAirport();
  const { dataVuelos: aerolineas, loading: loadingAerolineas, error: errorAerolineas } = useAerolineas();
  const [selectedAirline, setSelectedAirline] = useState(null);
  const { planes, loading: loadingPlanes, error: errorPlanes } = usePlanes(selectedAirline);
  const [formData, setFormData] = useState({
    aerolineaId: '',
    avionId: '',
    aeropuertoSalidaId: '',
    aeropuertoLlegadaId: '',
    asientosDisponibles: '',
    fechaHoraSalida: '',
    fechaHoraLlegada: '',
    precioClaseEconomica: '',
    precioClaseEjecutiva: ''
  });
  const [fechas, setFechas] = useState({
    fechaSalida: null,
    horaSalida: null,
    fechaLlegada: null,
    horaLlegada: null
  });

  useEffect(() => {
    if (errorAeropuertos) {
      alertToastify("error", `Error: ${errorAeropuertos.message}`);
    }
    if (errorAerolineas) {
      alertToastify("error", `Error: ${errorAerolineas.message}`);
    }
    if (errorPlanes) {
      alertToastify("error", `Error: ${errorPlanes.message}`);
    }
  }, [errorAeropuertos, errorAerolineas, errorPlanes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (name, value) => {
    setFechas({
      ...fechas,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validaciones
    if (!formData.aerolineaId || !formData.avionId || !formData.aeropuertoSalidaId || !formData.aeropuertoLlegadaId || 
        !formData.asientosDisponibles || !formData.precioClaseEconomica || !formData.precioClaseEjecutiva || 
        !fechas.fechaSalida || !fechas.horaSalida || !fechas.fechaLlegada || !fechas.horaLlegada) {
      alertToastify("error", "Todos los campos son obligatorios.");
      return;
    }

    if (formData.aeropuertoSalidaId === formData.aeropuertoLlegadaId) {
      alertToastify("error", "El aeropuerto de llegada no puede ser el mismo que el de salida.");
      return;
    }

    const fechaHoraSalida = moment(fechas.fechaSalida).set({
      hour: moment(fechas.horaSalida).hour(),
      minute: moment(fechas.horaSalida).minute()
    });

    const fechaHoraLlegada = moment(fechas.fechaLlegada).set({
      hour: moment(fechas.horaLlegada).hour(),
      minute: moment(fechas.horaLlegada).minute()
    });

    if (fechaHoraLlegada.isBefore(fechaHoraSalida)) {
      alertToastify("error", "La fecha y hora de llegada no puede ser menor que la de salida.");
      return;
    }

    formData.fechaHoraSalida = fechaHoraSalida.toISOString();
    formData.fechaHoraLlegada = fechaHoraLlegada.toISOString();

    console.log('Datos enviados a la API:', formData); // Mostrar los datos en la consola
    try {
      await createVuelo(formData);
      alertToastify("success", "Vuelo creado con éxito");
    } catch (error) {
      alertToastify("error", `Error: ${error.message}`);
    }
  };

  return {
    aeropuertos,
    aerolineas,
    planes,
    formData,
    selectedAirline,
    setSelectedAirline,
    loadingAeropuertos,
    loadingAerolineas,
    loadingPlanes,
    handleChange,
    handleDateChange,
    handleSubmit
  };
};
