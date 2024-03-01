import { createContext, useEffect } from "react";
import { useState } from "react";
import setTokenLocalStorage from "@/utils/setTokenLocalStorage";
import { getTokenLocalStorage } from "@/utils/setTokenLocalStorage";
import { hasExpired } from "@/utils/hasExpired";
import { useRouter } from "next/router";

// creamos y exportamos el contexto. esto se usa en el siguiente componente
export const LoginContext = createContext();

//Para poder usar el contexto se crea un componente funcional que devuelve los datos del contexto
function LoginContextProvider(props) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [loading, setLoading] = useState();
  const router = useRouter();
  

  useEffect(() => {
    const storedToken = getTokenLocalStorage();

    // if (!storedToken) {
    //   logout();
    //   setLoading(false);
    //   return;
    // }
    // if (hasExpired(storedToken)) {
    //   logout();
    //   setLoading(false);
    //   return;
    // }
    
    setLoading(false);
  

  }, [])

  async function loginFromContext(token, userME) {
    try {
      
     
      setToken(token);
      setTokenLocalStorage(token);
      setUser(userME);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const logout = () => {

    setToken(null);
    setTokenLocalStorage(null);
    setUser(null);
 }

  const { children } = props;

  const data = {
    accessToken: token,
    user,
    loginFromContext,
    logout,
    updateusaera: null,
  };

  return (
    <LoginContext.Provider value={{ data }}>{children}</LoginContext.Provider>
  );
}

export default LoginContextProvider;
