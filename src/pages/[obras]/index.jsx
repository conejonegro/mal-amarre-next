import { ENV } from "@/utils";
import { useState, useEffect } from "react";


// const promesa = fetch(`${ENV.API_URL}/api/obras);
    
// const obraID = "1";

function ObrasTest() {

    const [obras, setObras] = useState();

    useEffect(() => {

        async function fetchData(){
            try {
                const result = await fetch(`${ENV.API_URL}/obras/1`)
                const data = await result.json();
                setObras(data)
                console.log(data);
            } catch (error) {
                console.log(error)
            }
            
        }
        fetchData()
    }, [])

    

    return ( 
        obras && 
            <h1>{obras.data.attributes.titulo}</h1>  
    )
}

export default ObrasTest;