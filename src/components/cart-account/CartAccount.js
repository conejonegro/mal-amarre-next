import { Label, Icon, Image, Button, Input } from "semantic-ui-react";
import styles from "@/components/cart-account/cartAccount.module.scss";
import { useRouter } from "next/router";
import useLoginHook from "@/hooks/useLogin";
import { useState } from "react";

function CartAccount() {
  const [toggleSearchState, setToggleSearch] = useState(false);

  const datosDeUsuario = useLoginHook();
  const { user } = datosDeUsuario;
  console.log(user);

  const router = useRouter();

  const goToCart = () => {
    router.push("/cart");
  };
  const goToAccount = () => {
    router.push("/cuenta/mi-cuenta");
  };
  const goToLogin = () => {
    router.push("/iniciar-sesion");
  };
  const toggleSearch = () => {
    setToggleSearch(!toggleSearchState);
    console.log(toggleSearchState);
  };

  return (
    <>
      <Button className={styles.userButton}>
        <Icon name="search" onClick={toggleSearch} />
        <Icon name="close" className={styles.closeSearch} />
        <Input
          name="search"
          placeholder="Search"
          className={toggleSearchState ? styles.searchInput : styles.active}
        />
      </Button>
      <div>
        <Button className={styles.cart} onClick={goToCart}>
          <Icon name="cart" />
        </Button>
        <Label className={styles.counter}>7</Label>

        <Button
          className={styles.userButton}
          onClick={user ? goToAccount : goToLogin}
        >
          <Icon name="user" />
        </Button>
      </div>
    </>
  );
}

export default CartAccount;
