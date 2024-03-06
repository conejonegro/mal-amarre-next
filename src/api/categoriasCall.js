import { ENV } from "@/utils";

async function CategoriasCall() {
    
    try {
        
        const response = await fetch(ENV.ENDPOINTS.CATEGORIES)
        const categorias = await response.json();
        console.log(categorias.data)

    } catch (error) {
        console.log(error);
        throw error
    }

}

export default CategoriasCall;