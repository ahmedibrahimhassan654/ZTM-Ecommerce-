import React from "react";
import PRODUCTS from "../../shop-data.json";
const Shop = (props) => {
  return PRODUCTS.map(({ name, id, imageUrl, price }) => (
    <div key={id}>
      <h1>{name}</h1>
    </div>
  ));
};

export default Shop;
