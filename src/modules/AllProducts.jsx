import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";

const AllProducts = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();

      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <>
      <div>
        <CategoryCard cards={categories} />
      </div>
    </>
  );
};

export default AllProducts;
