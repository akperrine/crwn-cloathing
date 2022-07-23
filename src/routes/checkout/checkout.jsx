import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-titles">
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
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <span className="total">Totale: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
