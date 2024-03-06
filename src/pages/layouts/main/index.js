import { Image, Container } from "semantic-ui-react";
import styles from "@/pages/layouts/main/mainLayout.module.scss"
import classNames from "classnames";
import Footer from "@/components/footer/Footer";

function MainLayout( props ) {
        
    const { children, fluid = true } = props;

    return ( 
        <div className={styles.MainLayoutCont}>
            <Container className={classNames({ fluid })}>
                {children}
            </Container>

            
            <Footer/>
        </div>
        
     );
}

export  { MainLayout };