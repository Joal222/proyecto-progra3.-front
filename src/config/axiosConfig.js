import axios from "axios";

// Configuración base de Axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/auth",  // Asegúrate de que la baseURL es correcta según tus rutas del backend
  headers: {
    'Content-Type': 'application/json',
  }
});

// Interceptor para adjuntar el token JWT a cada solicitud saliente
axiosInstance.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function(error) {
    return Promise.reject(error);
});

// Interceptor para manejar respuestas de error 401
axiosInstance.interceptors.response.use(response => response, error => {
    if (error.response && error.response.status === 401) {
        localStorage.removeItem('token');  // Remueve el token caducado
        window.location = '/login';  // Redirige al usuario a la página de inicio de sesión
    }
    return Promise.reject(error);
});

export default axiosInstance;


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
  
  
