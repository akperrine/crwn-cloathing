import { useDispatch, useSelector } from "react-redux";

import { CheckoutItemContainer } from "./checkout-item.styles.js";

import {
  addItemToCart,
  removeItemFromCart,
  removeWholeItemFromCart,
} from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, cartItem));

  const removeProductFromCart = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  const removeWholeProductFromCart = () =>
    dispatch(removeWholeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name} </span>

      <span className="quantity">
        <div className="arrow" onClick={removeProductFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addProductToCart}>
          &#10095;
        </div>
      </span>

      <span className="price">{price} </span>
      <div className="remove-button" onClick={removeWholeProductFromCart}>
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
