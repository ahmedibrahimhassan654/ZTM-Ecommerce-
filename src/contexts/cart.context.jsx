import { createContext, useEffect, useState } from "react";

// as the actual value you want to access
export const CartContext = createContext({
  //initial value for our context
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
});

//act as component cover the heigh level component which is App compnent
export const CartProvider = ({ children }) => {
  //store the user object inside current user state

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
    //if found ,increment quantity
    if (existingCartItem) {
      console.log("cart items ", cartItems);
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    //return new array with modified cartItems/new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const deleteCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToRemove.id
      );
    }

    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };

  const removeItemFromCart = (productId) => {
    setCartItems(deleteCartItem(cartItems, productId));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
  };

  console.log(
    "final value object that witll inserted to the Cart provider",
    value
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
