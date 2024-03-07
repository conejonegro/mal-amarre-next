import useLoginHook from "@/hooks/useLogin";
import { useState, useEffect } from "react";
import { Tab, TabPane } from "semantic-ui-react";
import styles from "@/pages/cuenta/account.module.scss";
import { useRouter } from "next/router";

function Micuenta() {

    const datosDeUsuario = useLoginHook();
    const [TOKEN, setTOKEN] = useState(null);
    const [user, setUser] = useState(null);
    const router = useRouter()

  const panes = [
    {
      menuItem: "Direcciones",
      render: () => <TabPane attached={false}>Direcciones</TabPane>,
    },
    {
      menuItem: "Pedidos",
      render: () => <TabPane attached={false}>Pedidos</TabPane>,
    },
    {
      menuItem: "Lista de deseos",
      render: () => <TabPane attached={false}>Lista de deseos</TabPane>,
    },
    {
      menuItem: "Ajustes",
      render: () => (
        <TabPane attached={false}>
          <button onClick={datosDeUsuario.logout}>Cerrar Sesion</button>
        </TabPane>
      ),
    },
  ];

  useEffect(() => {

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const userOBJ = JSON.parse(user);
    setTOKEN(token);
    setUser(userOBJ);

    !user &&
        router.push("/");
      
  }, []);

  return (
    TOKEN && (
      <div>
        <h1>{`hola ${user.Firstname} ${user.Lastname}`}</h1>
        {/* <button onClick={datosDeUsuario.logout}>Cerrar SEsion</button> */}
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className={styles.tabs}
        />
      </div>
    )
  );
}

export default Micuenta;
