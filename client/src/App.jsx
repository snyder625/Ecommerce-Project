import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, Dashboard, Home, Menu, Product } from "./pages";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/contactUs/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
          <Route path="admin" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="product">
            <Route path=":id" element={<Product />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
