import { Image } from "semantic-ui-react";
import styles from "./registroLayout.module.scss"
import useLoginHook from "@/hooks/useLogin";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";

function RegistroLayout( props ) {
    const [token, setToken] = useState()
    
    useEffect(() => {
        const token = localStorage.getItem("token")
        setToken(token)
    },[])

    const router = useRouter()
    { token &&
        router.push("/")
    }
        
    const { children } = props;

    return ( 
        <div className={styles.layoutContainer}>
            {/* <h2>Registro layout</h2> */}
            <div className={styles.childrenContainer}>
                {children}
            </div>
            <div className={styles.rightContainer}>
                <Image src="/images/mal-amarre-logo-black.jpeg" />
            </div>
            
        </div>
        
     );
}

export  { RegistroLayout };