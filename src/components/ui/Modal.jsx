import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export const ModalApp = ({ isOpen, onOpenChange, flightDetails }) => {
  // Función para cerrar el modal
  const handleClose = () => {
    onOpenChange(false); // Asumiendo que `onOpenChange` es una función para actualizar el estado de `isOpen`.
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-transparent">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-white">
            Reporte Vuelo
          </ModalHeader>
          <ModalBody className="text-cyan-500">
            <div className="flex flex-col gap-2">
              {/* Información del vuelo */}
              <div>Número de vuelo: </div>
              <div>Modelo de avión: </div>
              <div>Aerolínea:</div>
              <div>Origen: </div>
              <div>Destino: </div>
              <div>Fecha de salida: </div>
              <div>Hora de salida: </div>
              <div>Fecha de llegada: </div>
              <div>Hora de llegada: </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={handleClose}>
              Cerrar
            </Button>
            <Button color="primary" onPress={handleClose}>
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
