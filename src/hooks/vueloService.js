import { useState, useEffect } from 'react';
import { getAllvuelos } from '../services/vuelosService'; // Asegúrate de que la ruta es correcta

const useVuelos = () => {
  const [dataVuelos, setDataVuelos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllvuelos();
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

export default useVuelos;
