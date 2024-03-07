import { createContext } from "react";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import {
  setTokenLocalStorage,
  removeTokenFromLocalStorage,
  addUserLocalStorage,
  removeUserFromStorage,
} from "@/utils/setTokenLocalStorage";


// creamos y exportamos el contexto. esto se usa en el siguiente componente
export const LoginContext = createContext();

//Para poder usar el contexto se crea un componente funcional que devuelve los datos del contexto
function LoginContextProvider(props) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [loading, setLoading] = useState();
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(user)
}, []);

  async function loginFromContext(token, userME) {
    try {
      setToken(token);
      setTokenLocalStorage(token);
      setUser(userME);
      addUserLocalStorage(userME);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const logout = () => {
    removeTokenFromLocalStorage();
    removeUserFromStorage();
    setToken(null);
    setUser(null);
    router.push("/")
  };

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
