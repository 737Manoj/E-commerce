import { useParams } from "react-router-dom";
import Products from "../components/Products";
import { useEffect, useState } from "react";

const CategoryProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await response.json();

      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Products products={products} />
    </>
  );
};

export default CategoryProducts;
