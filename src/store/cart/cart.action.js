import { CART_ACTION_TYPES } from "./cart.type";

import { createAction } from "../../utils/reducer/reducer.utils";

// Cart Reducer Helper Functions
export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const itemToRemove = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (itemToRemove.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const removeWholeItem = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

// End Cart Reducer

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

export const setCartItems = (newCartItems, newCartCount, newCartTotal) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems: newCartItems,
    cartCount: newCartCount,
    cartTotal: newCartTotal,
  });

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeWholeItemFromCart = (cartItems, productToClear) => {
  const newCartItems = removeWholeItem(cartItems, productToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
