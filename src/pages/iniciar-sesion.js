import Link from "next/link";
import styles from "../scss/iniciar-sesion.module.scss";
import { RegistroLayout } from "./layouts/RegistroLayout";
import {IniciarSesionForm} from "@/components/iniciar-sesion/";

function IniciarSesion(  ) {

    return ( 
        <RegistroLayout>
            <div className={styles.iniciarSesionContainer}>
                <h1 className={styles.textColor}>
                    Iniciar sesion
                </h1>
                <IniciarSesionForm />
                <Link href="/registro" className={styles.crearCuenta}>No tienes cuenta? Crea una!</Link>

            </div>
        </RegistroLayout>
     );
}

export default IniciarSesion;