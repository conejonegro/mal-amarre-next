import { ENV } from "@/utils";

async function CategoriasCall() {
    
    try {
        
        const response = await fetch(`${ENV.ENDPOINTS.CATEGORIES}?populate=tecnica_logo`)
        const categorias = await response.json();
        // console.log("My nigga", categorias.data)
        return categorias

    } catch (error) {
        console.log(error);
        throw error
    }

}

export default CategoriasCall;