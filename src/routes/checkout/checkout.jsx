import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item";

import { CheckoutContainer, CheckoutTitles, Total } from "./checkout.styles.js";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutTitles>
        <div className="title-block">
          <span>Product </span>
        </div>
        <div className="title-block">
          <span>Name </span>
        </div>
        <div className="title-block">
          <span>Quantity </span>
        </div>
        <div className="title-block">
          <span>Price </span>
        </div>
        <div className="title-block">
          <span> Remove </span>
        </div>
      </CheckoutTitles>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <Total>Totale: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
