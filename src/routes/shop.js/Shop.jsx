import React from "react";
import "./shop.style.scss";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/Categories-Preview";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};

export default Shop;
