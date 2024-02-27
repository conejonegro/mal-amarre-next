import { createContext } from "react";

// creamos y exportamos el contexto. esto se usa en el siguiente componente
export const LoginContext = createContext()

//Para poder usar el contexto se crea un componente funcional que devuelve los datos del contexto
function LoginContextProvider( props ) {

    const { children } = props;
    const data = {}

    return <LoginContext.Provider value={ data }>{children}</LoginContext.Provider>
}

export default LoginContextProvider;