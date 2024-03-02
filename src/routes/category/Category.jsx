import React, {
  Fragment,
  //useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
// import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/ProductCard";
// import "./category.style.scss";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/Spinner.component";
import { CategoryContainer, Title } from "./category.style";
function Category() {
  const { categoryname } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);

  const isLoading = useSelector(selectIsLoading);

  const [products, setProducts] = useState(categoriesMap[categoryname]);

  useEffect(() => {
    setProducts(categoriesMap[categoryname]);
  }, [categoryname, categoriesMap]);

  return (
    <Fragment>
      <Title>{categoryname.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
}

export default Category;
