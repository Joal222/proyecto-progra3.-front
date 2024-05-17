import React, { useState } from 'react';
import { Input, Button, Modal, Select, DatePicker } from '@nextui-org/react';
import NavBar from "../common/NavBar";
import { useForm } from 'react-hook-form';

function CreacionVuelo() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isVisible, setVisible] = useState(false);

  const handleModalClose = () => setVisible(false);
  const onModalSubmit = data => {
    console.log(data);
    handleModalClose();
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
            <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold">Creación de Vuelo</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Select clearable label="Aeropuerto de Salida" {...register("aeropuertoSalida", { required: true })}>
          {/* Opciones de aeropuertos */}
        </Select>
        <DatePicker label="Fecha y Hora de Salida" {...register("fechaHoraSalida", { required: true })} />
        <Select clearable label="Aeropuerto de Llegada" {...register("aeropuertoLlegada", { required: true })}>
          {/* Opciones de aeropuertos */}
        </Select>
        <DatePicker label="Fecha y Hora de Llegada" {...register("fechaHoraLlegada", { required: true })} />
        
        <Button auto onClick={() => setVisible(true)}>Seleccionar Avión y Tripulación</Button>
        <Modal closeButton aria-labelledby="modal-title" open={isVisible} onClose={handleModalClose}>
          <Modal.Header>
            <span className="text-lg">Seleccione Avión y Tripulación</span>
          </Modal.Header>
          <Modal.Body>
            {/* Formulario para seleccionar avión y tripulación */}
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={handleModalClose}>
              Cerrar
            </Button>
            <Button auto onClick={handleSubmit(onModalSubmit)}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>

        <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Crear Vuelo
        </Button>
      </form>
    </div>
           
          </div>
      </div>
    </>
  );
}

export default CreacionVuelo;
