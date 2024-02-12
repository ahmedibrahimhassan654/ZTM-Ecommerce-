import React from "react";
import "./shop.style.scss";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/Categories-Preview";
import Category from "../category/Category";
const Shop = () => {
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
