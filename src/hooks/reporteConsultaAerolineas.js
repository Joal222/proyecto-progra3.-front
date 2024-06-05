// src/hooks/reporteConsultaAviones.js
import { useState, useEffect } from 'react';
import { getAllAirports, getAirlinesByAirport } from '../services/reportesVuelos';

const useAirport = () => {
  const [dataVuelos, setDataVuelos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllAirports();
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

const useAirlines = (selectedAirport) => {
  const [airlines, setAirlines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAirlines = async () => {
      if (selectedAirport) {
        setLoading(true);
        setError(null); // Reset error state when a new airport is selected
        try {
          const response = await getAirlinesByAirport(selectedAirport);
          setAirlines(response.data);
          setLoading(false);
        } catch (error) {
          setAirlines([]); // Clear airlines on error
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchAirlines();
  }, [selectedAirport]);

  return { airlines, loading, error };
};

export { useAirport, useAirlines };
