import React from 'react';
import AirplaneLayout  from '../../components/airplane/Airplane';


function comprarBoleto() {
  const numberOfSeats = 150; // Este valor debería venir de tu backend

  return (
    <div className="flex justify-center items-center"> 
        <AirplaneLayout totalSeats={18} seatsPerRow={3} vipSeats={4} />
    </div>
  );
}

export default comprarBoleto;
