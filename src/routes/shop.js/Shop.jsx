import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
const Shop = () => {
  const { products } = useContext(ProductsContext);

  return products.map(({ name, id, imageUrl, price }) => (
    <div key={id}>
      <h1>{name}</h1>
    </div>
  ));
};

export default Shop;
