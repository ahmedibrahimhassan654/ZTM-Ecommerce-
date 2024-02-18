import React, {
  Fragment,
  //useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
// import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/ProductCard";
import "./category.style.scss";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
function Category() {
  const { categoryname } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[categoryname]);

  useEffect(() => {
    setProducts(categoriesMap[categoryname]);
  }, [categoryname, categoriesMap]);

  return (
    <Fragment>
      <h2 className="single-category-title">{categoryname.toUpperCase()}</h2>
      <div className="single-category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
}

export default Category;
