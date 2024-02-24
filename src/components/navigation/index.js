import Link from "next/link";
import styles from "@/components/navigation/nav.module.scss"

function Nav() {
  return (
    <nav className={styles.navMain}>
      <ul>
        {navigationItems.map((item) => {
          return <li key={item.text}><Link href={item.link}>{item.text}</Link></li>;
        })}
      </ul>
    </nav>
  );
}

const navigationItems = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Iniciar Sesion",
      link: "/iniciar-sesion",
    },
    {
      text: "Contacto",
      link: "/",
    },
  ];

export default Nav;
