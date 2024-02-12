import React from "react";
import "./categoryItem.scss";
import { Link } from "react-router-dom";
export default function CategoryItem({ category }) {
  const { title, id, imageUrl } = category;
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <Link to={`shop/${title}`}>{title}</Link>
        <Link to={`shop/${title}`}>Shop Now</Link>
      </div>
    </div>
  );
}
