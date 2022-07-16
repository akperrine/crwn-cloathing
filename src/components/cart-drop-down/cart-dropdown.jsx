import "./cart-dropdown.styles.scss";
import Button from "../Button/Button";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
