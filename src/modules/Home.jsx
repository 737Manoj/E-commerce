import Hero from "../components/Hero";
import Products from "../components/Products";

import { useEffect, useState } from "react";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <h2 className="text-3xl font-bold text-center mt-20">Products</h2>
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div>Loading....</div>
      )}
      <Products />
    </>
  );
};

export default Home;
