import { createContext, useEffect, useState } from "react";

import SHOP_DATA from "../shop-data";
import { addCollectionAndDocuments } from "../utils/firbase/firebaseutils";
// as the actual value you want to access
export const ProductsContext = createContext({
  //initial value for our context
  products: [],
  setproducts: () => {},
});

//act as component cover the heigh level component which is App compnent
export const ProductsProvider = ({ children }) => {
  //store the user object inside current user state
  const [products] = useState([]);

  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);

  const value = {
    products,
  };

  console.log(
    "final value object that witll inserted to the product provider",
    value
  );
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
