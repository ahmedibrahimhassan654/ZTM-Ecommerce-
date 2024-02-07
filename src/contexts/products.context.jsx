import { createContext, useEffect, useState } from "react";

// import SHOP_DATA from "../shop-data";
import {
  // addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firbase/firebaseutils";
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
    // asyn  -await بعملها جواها   promise =>(getCategoriesAndDocuments) داخل اليوز ايفك لو انا هعمل جواها
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      JSON.stringify(categoryMap);
    };
    getCategoriesMap();
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
