import "./categories-preview.style.scss";
import React, { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/CategoryPreview.component";

function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="category-preview-container">
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
  );
}

export default CategoriesPreview;
