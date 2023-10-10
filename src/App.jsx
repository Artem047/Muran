import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import ProductCard from "./components/ProductCard";
import ScrollToTop from "./components/ScrollToTop";
import { ShopContextProvider } from "./context/shop-context";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import About from "./pages/About";

const App = () => {
  return (
    <ShopContextProvider>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="basket" element={<Cart />} />
            <Route path="about" element={<About />} />
            <Route path="catalog" element={<Shop />} />
            <Route path="catalog/:productId" element={<ProductCard />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </ShopContextProvider>
  );
};

export default App;
