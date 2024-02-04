import { createContext, useState } from "react";

// as the actual value you want to access
export const CartContext = createContext({
  //initial value for our context
  isCartOpen: false,
  setIsCartOpen: () => {},
});

//act as component cover the heigh level component which is App compnent
export const CartProvider = ({ children }) => {
  //store the user object inside current user state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = {
    isCartOpen,
    setIsCartOpen,
  };

  console.log(
    "final value object that witll inserted to the Cart provider",
    value
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
