import { listPaises }  from '../services/authService'


export async function mostrarPaises() {
    try {
      const paises = await listPaises();
      console.log(paises); // Hacer algo con los datos de los países
    } catch (error) {
      console.error(error.message); // Manejar el error adecuadamente
    }
  }
  