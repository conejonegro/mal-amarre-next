import { Label, Icon, Image, Button } from "semantic-ui-react";
import styles from "@/components/cart-account/cartAccount.module.scss";
import { useRouter } from "next/router";
import useLoginHook from "@/hooks/useLogin";

function CartAccount() {

    const datosDeUsuario = useLoginHook();
    const { user } = datosDeUsuario
    console.log(user);

    const router = useRouter();

    const goToCart = () => {
        router.push("/cart")
    }
    const goToAccount = () => {
        router.push("/cuenta/mi-cuenta")
    }

  return (
    <div>
      <Button className={styles.cart} onClick={goToCart}>
        <Icon name="cart" />
      </Button>
      <Label className={styles.counter}>7</Label>
      {user && (
         <Button className={styles.userButton} onClick={goToAccount}>
         <Icon name="user" />
       </Button>
      )}
     
    </div>
  );
}

export default CartAccount;
