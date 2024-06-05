// src/hooks/reporteConsultaAviones.js
import { useState, useEffect } from 'react';
import { getAllAerolineas, getPlanesByAirlineId } from '../services/reportesVuelos';

const useAerolineas = () => {
  const [dataVuelos, setDataVuelos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllAerolineas();
        setDataVuelos(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { dataVuelos, loading, error };
};

const usePlanes = (selectedAirline) => {
  const [planes, setPlanes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanes = async () => {
      if (selectedAirline) {
        setLoading(true);
        try {
          const response = await getPlanesByAirlineId(selectedAirline);
          setPlanes(response.data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchPlanes();
  }, [selectedAirline]);

  return { planes, loading, error };
};

export { useAerolineas, usePlanes };
