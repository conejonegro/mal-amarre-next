import Link from "next/link";
import styles from "@/components/navigation/nav.module.scss"
import { Icon, Image } from "semantic-ui-react";
import CartAccount from "../cart-account/CartAccount";

function Nav() {
  return (
    <nav className={styles.navMain}>
      <Link href="/">
        <Image src="/images/mal-amarre-logo-black.jpeg" className={styles.logo} />
      </Link>
      <ul>
        {navigationItems.map((item) => {
          return <li key={item.text}><Link href={item.link}>{item.text}</Link></li>;
        })}
      </ul>
      <CartAccount/>
    </nav>
  );
}

const navigationItems = [
    {
      text: "Registro",
      link: "/registro",
    },
    {
      text: "Iniciar Sesion",
      link: "/iniciar-sesion",
    },
    {
      text: "Mi cuenta",
      link: "/cuenta/mi-cuenta",
    },
    {
      text: "Contacto",
      link: "/",
    },
  ];

export default Nav;
