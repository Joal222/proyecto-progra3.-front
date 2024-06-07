// components/AirplaneLayout.jsx

import React, { useState } from 'react';

const generateSeats = (totalSeats, seatsPerRow, vipSeats) => {
  const rows = [];
  let row = [];
  const columns = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < totalSeats; i++) {
    const seatNumber = Math.floor(i / seatsPerRow) + 1;
    const seatColumn = columns[i % seatsPerRow];
    const seatId = `${seatNumber}${seatColumn}`;
    const isVIP = i < vipSeats;
    row.push({ id: seatId, isVIP });
    if ((i + 1) % seatsPerRow === 0) {
      rows.push(row);
      row = [];
    }
  }
  if (row.length > 0) {
    rows.push(row);
  }
  return rows;
};

const divideIntoGroups = (rows) => {
  const group1 = [];
  const group2 = [];
  rows.forEach((row, index) => {
    if (index % 2 === 0) {
      group1.push(row);
    } else {
      group2.push(row);
    }
  });

  // Alinear grupos agregando filas vacías al grupo más corto
  while (group1.length > group2.length) {
    group2.push([]);
  }
  while (group2.length > group1.length) {
    group1.push([]);
  }

  return [group1, group2];
};

const AirplaneLayout = ({ totalSeats, seatsPerRow, vipSeats }) => {
  const seats = generateSeats(totalSeats, seatsPerRow, vipSeats);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const vipRows = seats.filter(row => row.some(seat => seat.isVIP));
  const commonRows = seats.filter(row => row.every(seat => !seat.isVIP));
  const [vipGroup1, vipGroup2] = divideIntoGroups(vipRows);
  const [commonGroup1, commonGroup2] = divideIntoGroups(commonRows);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat.id)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat.id));
      console.log(`Deseleccionado: ${seat.id}`);
    } else {
      setSelectedSeats([...selectedSeats, seat.id]);
      console.log(`Seleccionado: ${seat.id}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl bg-gray-100 p-4 rounded-lg shadow-lg">
        <h3 className="text-center text-2xl font-bold mb-4">
          Airplane Seat Layout
        </h3>
        <div className="flex justify-center mb-4">
          <div className="relative w-full h-16 bg-gray-400 rounded-t-lg">
            {/* Alas del avión */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-4 bg-gray-500 rounded-r"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-4 bg-gray-500 rounded-l"></div>
          </div>
        </div>
        <div>
          <h4 className="text-center text-xl font-bold mb-4">Asientos VIP</h4>
          <div className="flex justify-around gap-x-6 mb-8">
            <div className="">
              {vipGroup1.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center space-x-2">
                  {row.map((seat, seatIndex) => (
                    <div
                      key={seatIndex}
                      className={`w-16 h-16 flex items-center justify-center border rounded-lg shadow-md cursor-pointer hover:bg-green-500 ${
                        selectedSeats.includes(seat.id) ? 'bg-red-500 text-white' : 'bg-yellow-300'
                      }`}
                      onClick={() => handleSeatClick(seat)}
                    >
                      {seat.id}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="">
              {vipGroup2.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center space-x-2">
                  {row.map((seat, seatIndex) => (
                    <div
                      key={seatIndex}
                      className={`w-16 h-16 flex items-center justify-center border rounded-lg shadow-md cursor-pointer hover:bg-green-500 ${
                        selectedSeats.includes(seat.id) ? 'bg-red-500 text-white' : 'bg-yellow-300'
                      }`}
                      onClick={() => handleSeatClick(seat)}
                    >
                      {seat.id}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-center text-xl font-bold mb-4">Asientos Comunes</h4>
          <div className="flex justify-around gap-x-6">
            <div className="">
              {commonGroup1.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center space-x-2">
                  {row.map((seat, seatIndex) => (
                    <div
                      key={seatIndex}
                      className={`w-16 h-16 flex items-center justify-center border rounded-lg shadow-md cursor-pointer hover:bg-green-500 ${
                        selectedSeats.includes(seat.id) ? 'bg-red-500 text-white' : 'bg-blue-500'
                      }`}
                      onClick={() => handleSeatClick(seat)}
                    >
                      {seat.id}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="">
              {commonGroup2.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center space-x-2">
                  {row.map((seat, seatIndex) => (
                    <div
                      key={seatIndex}
                      className={`w-16 h-16 flex items-center justify-center border rounded-lg shadow-md cursor-pointer hover:bg-green-500 ${
                        selectedSeats.includes(seat.id) ? 'bg-red-500 text-white' : 'bg-blue-500'
                      }`}
                      onClick={() => handleSeatClick(seat)}
                    >
                      {seat.id}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirplaneLayout;
