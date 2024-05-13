import React, { useState, useEffect } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { paises } from '../../config/axiosConfig'; // Asegúrate de importar correctamente




const BuscarVuelos = () => {
  const [countryList, setCountryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Llama a la función para obtener la lista de países
    const fetchCountries = async () => {
      try {
        const response = await paises.get('/all'); // Asegúrate de que la ruta sea correcta
        setCountryList(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de países:', error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countryList.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Select
      label="Selecciona un país"
      placeholder="Escribe para filtrar..."
      selectionMode="single" // Cambia a "single" si solo quieres seleccionar un país
      className="max-w-xs"
      onSearch={(value) => setSearchTerm(value)}
    >
      {filteredCountries.map((country) => (
        <SelectItem key={country.cca3} value={country.idd.root} icon={<img src={country.flag.svg} alt={`${country.name.common} flag`} />}>
          {country.name.common}
        </SelectItem>
      ))}
    </Select>
  );
};

export default BuscarVuelos;