import { useContext } from "react";
import { LoginContext } from "@/context/LoginContextProvider";

function useLoginHook (){
   const { data } = useContext(LoginContext);
   return data;
}

export default useLoginHook;
