import { createContext } from "react";
// import { useState } from "react";

// creamos y exportamos el contexto. esto se usa en el siguiente componente
export const LoginContext = createContext()

//Para poder usar el contexto se crea un componente funcional que devuelve los datos del contexto
function LoginContextProvider( props ) {

    // const [ accessTokenState, setTokenaccessTokenState ] = useState();

    const { children } = props;

    const data = {
        accessToken: "ssssss",
        user: null,
        login: null,
        logout: null,
        updateusaera: null,
    }

    return <LoginContext.Provider value={ data }>{children}</LoginContext.Provider>
}

export default LoginContextProvider;