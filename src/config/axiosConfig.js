import axios from "axios";

//Parte AUTH
export const user = new axios.create(
  {
    baseURL: "http://localhost:8080/api/pasajeros",
    headers: {
      'Content-Type': 'application/json',
    }
  });

  export const paises = new axios.create(
    {
      baseURL: "https://restcountries.com/v3.1",
    }
  );
  
  //PARTEVUELO
  export const vuelos = new axios.create(
    {
      baseURL: "http://localhost:8080/api/vuelos",
    }
  );
  
  
//EJEMPLO
  /*export const ejemplo = new axios.create(
    {
      baseURL: "https://jsonplaceholder.typicode.com",
    }
  );*/