import axios from "axios";

export const user = new axios.create(
  {
    baseURL: "http://localhost:8080/api/pasajeros",
    headers: {
      'Content-Type': 'application/json',
    }
  });


  
//Ejemplo
  export const vuelos = new axios.create(
    {
      baseURL: "https://jsonplaceholder.typicode.com",
    }
  );