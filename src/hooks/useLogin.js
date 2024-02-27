import { useContext } from "react";
import { LoginContext } from "@/context/LoginContextProvider";

function useLoginHook (){
   return useContext(LoginContext);
}

export default useLoginHook;