import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles.js";

const CartItem = ({ CartItem }) => {
  const { name, quantity, imageUrl, price } = CartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name} </Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
