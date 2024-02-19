import React, { useEffect } from "react";
import "./shop.style.scss";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/Categories-Preview";
import Category from "../category/Category";
import { getCategoriesAndDocuments } from "../../utils/firbase/firebaseutils";
import {
  setCategories,
  // setcategoriesMap,
} from "../../store/categories/category.action";
import { useDispatch } from "react-redux";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // asyn  -await بعملها جواها   promise =>(getCategoriesAndDocuments) داخل اليوز ايفك لو انا هعمل جواها
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments("categories");
      console.log("categories ", categories);
      dispatch(setCategories(categories));
    };
    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} /> {/*shop */}
      <Route path=":categoryname" element={<Category />} />
      {/*shop/categoryname */}
    </Routes>
  );
};

export default Shop;
//
