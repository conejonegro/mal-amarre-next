import useLoginHook from "@/hooks/useLogin";
import { useState, useEffect } from "react";

function Micuenta() {

    const datosDeUsuario = useLoginHook();
   

    const [TOKEN, setTOKEN] = useState(null);

    useEffect(() => {
        // Verificar si localStorage está disponible
        const token = localStorage.getItem("token");
        setTOKEN(token);
    }, []);
    

    return (
        TOKEN &&
        <h1>{"hola"}</h1>
    );
          
        
    
}

export default Micuenta;