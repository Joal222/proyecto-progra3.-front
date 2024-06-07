import React, { useState } from "react";
import NavBar from "../common/NavBar";
import { Input, Button } from '@nextui-org/react';
import TablaBuscarVuelo from '../../components/table/tablaBuscarVuelo';

function BuscarVuelos() {
  const [inputVueloId, setInputVueloId] = useState('');
  const [filterVueloId, setFilterVueloId] = useState(null);

  const handleInputChange = (e) => {
    setInputVueloId(e.target.value);
  };

  const handleSearchClick = () => {
    setFilterVueloId(inputVueloId);
  };

  const handleClearFilter = () => {
    setFilterVueloId(null);
    setInputVueloId('');
  };

  return (
    <>
      <div
        className="min-h-screen flex flex-col bg-background/50" 
        style={{
          backgroundImage: `url('https://www.tripsavvy.com/thmb/I8Jknos29suM3Nm0MQDlNb2aecw=/2121x1414/filters:fill(auto,1)/RivieraMaya-5ace16741f4e13003c7c850b.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(80%)' 
        }}> 
          <div className="min-h-screen flex flex-col">
            <NavBar />
            <div className="flex-grow flex justify-center items-center">
              <div className="w-full mx-auto px-6 ">
                <div className=" max-w-md mb-8 " style={{ margin: 'auto 0 250px 25px' }}>
                  <h1 className="text-center text-3xl font-bold mb-8">Consultar Vuelo</h1>
                  <Input
                    className="m-2"
                    isRequired
                    label="Ingrese Número de Vuelo"
                    placeholder="k-12564"
                    name="vueloId"
                    value={inputVueloId}
                    onChange={handleInputChange}
                  />
                  <div className="flex gap-2 mx-auto">
                    <Button className="bg-green-600 hover:bg-green-400 flex-1" onClick={handleSearchClick}>
                      Buscar Vuelo
                    </Button>
                    <Button className="bg-yellow-500 hover:bg-yellow-400 flex-1"  onClick={handleClearFilter}color="error">
                      Limpiar Filtro
                    </Button>
                  </div>
                </div>
                <TablaBuscarVuelo vueloId={filterVueloId} />
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default BuscarVuelos;
