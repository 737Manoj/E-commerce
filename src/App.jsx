import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./modules/Home";
import Footer from "./components/Footer";
import ProductCard from "./modules/ProductCard";
import AllProducts from "./modules/AllProducts";
import CategoryProducts from "./modules/CategoryProducts";
import Cart from "./modules/Cart";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductCard />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
