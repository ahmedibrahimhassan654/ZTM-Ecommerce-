import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //if found ,increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //return new array with modified cartItems/new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// as the actual value you want to access
export const CartContext = createContext({
  //initial value for our context
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

//act as component cover the heigh level component which is App compnent
export const CartProvider = ({ children }) => {
  //store the user object inside current user state

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
  };

  console.log(
    "final value object that witll inserted to the Cart provider",
    value
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
