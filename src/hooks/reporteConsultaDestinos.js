// src/hooks/reporteConsultaDestinos.js
import { useState, useEffect } from 'react';
import { getDestinationsByAirlineId } from '../services/reportesVuelos';

const useDestinations = (selectedAirline) => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      if (selectedAirline) {
        setLoading(true);
        setError(null); // Reset error state when a new airline is selected
        try {
          const response = await getDestinationsByAirlineId(selectedAirline);
          setDestinations(response.data);
          setLoading(false);
        } catch (error) {
          setDestinations([]); // Clear destinations on error
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchDestinations();
  }, [selectedAirline]);

  return { destinations, loading, error };
};

export default useDestinations;
