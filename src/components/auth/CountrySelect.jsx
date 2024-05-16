import React, { useState, useEffect } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { paises } from '../../config/axiosConfig'; // Asegúrate de importar correctamente

const CountrySelect = ({ onSelect }) => {
  const [countryList, setCountryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState(''); // Nuevo estado para almacenar el código de área del país seleccionado

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await paises.get('/all');
        setCountryList(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de países:', error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countryList.filter((country) =>
    typeof searchTerm === 'string' && country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (value) => {
    if (typeof value === 'string') {
      setSearchTerm(value);
      const country = countryList.find(
        (c) => c.name.common.toLowerCase() === value.toLowerCase()
      );
      if (country) {
        setSelectedCountry(country);
        setSelectedCountryCode(country.idd.root); // Actualiza el código de área del país seleccionado
        onSelect(country); // Llama a la función onSelect con el país seleccionado
        console.log(`Código de área del país seleccionado: ${country.idd.root}`);
      } else {
        setSelectedCountry(null);
        console.log("País no encontrado");
      }
    }
  };
  
  return (
    <Select
      className="group flex flex-col w-full m-2"
      label="Nacionalidad"
      placeholder="Seleccione una nacionalidad"
      value={searchTerm}
      onChange={(e) => handleInputChange(e)}
      name="nacionalidad"
    >
      {filteredCountries.map((country) => (
        <SelectItem key={country.cca3} value={country.name.common}>
          {country.name.common}
        </SelectItem>
      ))}
    </Select>
  );
};

export default CountrySelect;
