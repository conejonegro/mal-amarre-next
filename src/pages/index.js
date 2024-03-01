import { useState, useEffect } from "react";
import { ENV } from "@/utils/constants";
import  styles  from  "@/scss/home.module.scss";
import useLoginHook from "@/hooks/useLogin";

function Index() {

  const [ obrasDatos, setObrasDatos ] = useState();
  const datos = useLoginHook()
  console.log("DATOS DESDE INDEX", datos);
  

  const opciones = {
    method: "GET", // Método HTTP (GET, POST, PUT, DELETE, etc.)
    headers: {
      "Content-Type": "application/json", // Tipo de contenido de la solicitud
      // Puedes agregar más encabezados aquí si es necesario
    },
  };

  useEffect(() => {

    async function obrasApiCall(){
      try {
        const response = await fetch(`${ENV.API_URL}/obras`, opciones)
        const datos = await response.json()
        setObrasDatos(datos.data)
      } catch (error) {
           console.log("ERROR", error)
      }
    }
  
    obrasApiCall();
  }, [])

  console.log(obrasDatos)

  // fetch("http://localhost:1337/api/obras", opciones)
  //   .then((res) => {
  //       //  console.log(res)
  //     if (!res.ok) {
  //       throw new Error('La solicitud falló');
  //     }
  //   // Convertir la respuesta a JSON
  //      return res.json();
  //   })
  //    .then(datos => {
  //       console.log(datos)
  //   })
  //   .catch(error => {
  //     // Capturar y manejar errores
  //     console.error('Error:', error);
  //   });



  return (
    <>
    <div className={styles.productsContainer}>
      { obrasDatos &&
        obrasDatos.map((obra) => (
          <p key={obra.attributes.titulo}>{obra.attributes.titulo}</p>
        )) 
      }
    </div>
    </>
  );
}

export default Index;
