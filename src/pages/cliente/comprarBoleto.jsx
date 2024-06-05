import React from 'react';
import AirplaneLayout  from '../../components/airplane/Airplane';


function comprarBoleto() {
  const numberOfSeats = 150; // Este valor debería venir de tu backend

  return (
    <div className="flex justify-center items-center"> 
        <AirplaneLayout totalSeats={50} seatsPerRow={2} vipSeats={10} />
    </div>
  );
}

export default comprarBoleto;
