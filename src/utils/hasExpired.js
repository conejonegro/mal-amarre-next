import login from "@/api/loginCall"
import { jwtDecode } from "jwt-decode"
import { removeTokenFromLocalStorage } from "./setTokenLocalStorage";


function hasExpired(token){

    const tokenDecode = jwtDecode(token);
    // console.log(tokenDecode);
    const expireDate = tokenDecode.exp * 1000
    // console.log(expireDate);
    const currentDate = new Date()
    if(!token){
        removeTokenFromLocalStorage();
        window.location.replace("/")
        return true;
    }
    if( currentDate > expireDate ){
        // log out the user
        console.log("LOGOUT")

        removeTokenFromLocalStorage();

        return true
    }
    else{
        console.log("Token valid, sigue con sesion activa");
        return false;
    }

       

}

export { hasExpired };