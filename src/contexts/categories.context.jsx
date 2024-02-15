import { createContext, useEffect, useState } from "react";

// import SHOP_DATA from "../shop-data";
import {
  // addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firbase/firebaseutils";
// as the actual value you want to access
export const CategoriesContext = createContext({
  //initial value for our context
  categoriesMap: {},
  setcategoriesMap: () => {},
});

//act as component cover the heigh level component which is App compnent
export const CategoriesProvider = ({ children }) => {
  //store the user object inside current user state
  const [categoriesMap, setcategoriesMap] = useState({});

  useEffect(() => {
    // asyn  -await بعملها جواها   promise =>(getCategoriesAndDocuments) داخل اليوز ايفك لو انا هعمل جواها
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setcategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = {
    categoriesMap,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
