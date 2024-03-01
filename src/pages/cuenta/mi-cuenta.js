import useLoginHook from "@/hooks/useLogin";
import { useState, useEffect } from "react";

function Micuenta() {

    const datosDeUsuario = useLoginHook();
    

    const [TOKEN, setTOKEN] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Verificar si localStorage está disponible
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        const userOBJ = JSON.parse(user);
        setTOKEN(token);
        setUser(userOBJ);
    }, []);

    console.log(user)
    

    return (
        TOKEN &&
        <div> 
            <h1>{`hola ${user.Firstname} ${user.Lastname}`}</h1>
            <button onClick={datosDeUsuario.logout}>Cerrar SEsion</button>
        </div>
    );
          
        
    
}

export default Micuenta;