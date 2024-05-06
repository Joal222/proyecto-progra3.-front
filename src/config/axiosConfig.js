import axios from "axios";

export const vuelos = new axios.create(
  {
    baseURL: "https://jsonplaceholder.typicode.com",
  }
);