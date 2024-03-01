import login from "@/api/loginCall"
import { jwtDecode } from "jwt-decode"
import { removeTokenFromLocalStorage } from "./setTokenLocalStorage";


function hasExpired(token){

    const tokenDecode = jwtDecode(token);
    
    const expireDate = tokenDecode.exp * 1000
   
    const currentDate = new Date()
    if(!token){
        removeTokenFromLocalStorage();
        window.location.replace("/")
        return true;
    }
    if( currentDate > expireDate ){
       
      

        removeTokenFromLocalStorage();

        return true
    }
    else{
        console.log("Token valid, sigue con sesion activa");
        return false;
    }

       

}

export { hasExpired };