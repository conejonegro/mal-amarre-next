import Link from "next/link";
import styles from "@/components/navigation/nav.module.scss";
import { Icon, Image } from "semantic-ui-react";
import CartAccount from "../cart-account/CartAccount";
import CategoriasCall from "@/api/categoriasCall";
import { useState, useEffect } from "react";

function Nav() {
  const [categorias, setCategorias] = useState();

  useEffect(() => {
    async function getCategorias() {
      const response = await CategoriasCall();
      setCategorias(response.data);
     
    }
    getCategorias();
  }, []);

  console.log("From variable", categorias);

  return (
    <nav className={styles.navMain}>
      <Link href="/">
        <Image
          src="/images/mal-amarre-logo-black.jpeg"
          className={styles.logo}
        />
      </Link>
      {/* <ul>
        {navigationItems.map((item) => {
          return (
            <li key={item.text}>
              <Link href={item.link}>{item.text}</Link>
            </li>
          );
        })}
      </ul> */}
      <ul>
        {categorias &&
          categorias.map((item) => {
            return (
              <li key={item.attributes.titulo}>
                <Link href={item.attributes.slug}>
                  {item.attributes.titulo}
                  <Image src={item.attributes.tecnica_logo.data.attributes.url}/>
                </Link>
              </li>
            );
          })}
      </ul>
      <CartAccount />
    </nav>
  );
}

// const navigationItems = [
//   {
//     text: "Registro",
//     link: "/registro",
//   },
//   {
//     text: "Iniciar Sesion",
//     link: "/iniciar-sesion",
//   },
//   {
//     text: "Mi cuenta",
//     link: "/cuenta/mi-cuenta",
//   },
//   {
//     text: "Contacto",
//     link: "/",
//   },
// ];

export default Nav;
