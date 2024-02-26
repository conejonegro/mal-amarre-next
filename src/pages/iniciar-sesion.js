import styles from "../scss/iniciar-sesion.module.scss";
import { RegistroLayout } from "./layouts/RegistroLayout";

function IniciarSesion(  ) {

    return ( 
        <RegistroLayout>
            <div className={styles.iniciarSesionContainer}>
                <h1 className={styles.textColor}>
                    Iniciar sesion
                </h1>
            </div>
        </RegistroLayout>
     );
}

export default IniciarSesion;