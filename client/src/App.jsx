import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, Dashboard, Home, Menu, Product } from "./pages";
import Footer from "./components/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
          <Route path="admin" element={<Dashboard />} />
          <Route path="video">
            <Route path=":id" element={<Product />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
