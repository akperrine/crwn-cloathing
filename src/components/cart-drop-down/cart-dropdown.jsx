import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.styles.scss";
import Button from "../Button/Button";
import CartItem from "../cart-item/cart-item";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} CartItem={item} />
        ))}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
