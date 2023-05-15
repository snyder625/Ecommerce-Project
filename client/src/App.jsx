import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, Dashboard, Home, Login, Menu, Product, Register } from "./pages";
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
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/blog" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
