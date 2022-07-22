import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.contexts";
import ProductCard from "../../components/product-card/product-card";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  //   products.map((product) => console.log(product));
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      Hi
    </div>
  );
};

export default Shop;
