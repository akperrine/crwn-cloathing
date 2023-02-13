import { createSelector } from "reselect";

export const cartDropDown = (state) => state.cart.isCartOpen;

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartTotal = createSelector(
  [selectCartReducer],
  (cartItems) =>
    cartItems.cartItems.reduce(
      (accum, current) => accum + current.price * current.quantity,
      0
    )
);

export const selectCartCount = createSelector(
  [selectCartReducer],
  (cartItems) =>
    cartItems.cartItems.reduce((accum, current) => accum + current.quantity, 0)
);
