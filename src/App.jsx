import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Basket from "./pages/Basket";
import Layout from "./components/Layout";
import Catalog from "./pages/Catalog";
import ProductCard from "./components/ProductCard";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="basket" element={<Basket />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:productId" element={<ProductCard />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
};

export default App;
