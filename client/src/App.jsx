import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Cart, Dashboard, Home, Login, Menu, Product, Register } from "./pages";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";
import Contact from "./components/contactUs/Contact";
import BlogMain from "./components/Blog/BlogMain";
import BlogViewDetails from "./components/Blog/BlogViewDetails";
import ScrollTop from "./scroll/ScrollTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <ToastContainer position="top-center" autoClose={3000} />
      <Navbar />
      <ScrollTop>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
          {/* <Route path="admin" element={user.currentUser.user.isAdmin && <Dashboard />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="products">
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="login" element={!user.currentUser && <Login />} />
          <Route path="/register" element={!user.currentUser && <Register />} />
          <Route path="/payment" element={<Payment />} />

          <Route exact path="/blog" element={<BlogMain />} />
          <Route
            exact
            path="/blog/blogdata/:id"
            element={<BlogViewDetails />}
          />
        </Routes>
      </ScrollTop>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
