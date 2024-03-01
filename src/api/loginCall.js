import { ENV } from "@/utils";

async function login(formValues) {

    const opciones = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    };
  
    try {
      const response = await fetch(
        `${ENV.API_URL}/auth/local`,
        opciones
      );
      const datos = await response.json();
      console.log("LOGIN CORRECTO", datos);
  
      return datos; // Retornar datos en caso de necesitarlos en el componente
    } catch (error) {
      console.log("ERROR", error);
      throw error; // Lanzar error para manejarlo en el componente
    }
  }

export default login;