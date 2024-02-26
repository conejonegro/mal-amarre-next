import { Image } from "semantic-ui-react";
import styles from "./registroLayout.module.scss"

function RegistroLayout( props ) {

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