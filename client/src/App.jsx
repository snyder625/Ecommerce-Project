import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Cart, Dashboard, Home, Login, Menu, Product, Register, Orders, OrderTracking } from "./pages";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/contactUs/Contact";
import Payment from "./components/Payment";
import BlogMain from "./components/Blog/BlogMain";
import BlogViewDetails from "./components/Blog/BlogViewDetails";
import ScrollTop from "./scroll/ScrollTop";

function App() {
  const user = useSelector(state=>state.user);
  
  return (
      <BrowserRouter>
        <Navbar />
        <ScrollTop>
          <Routes>
            <Route path="/payment" element={<Payment />} />
            <Route index element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="cart" element={<Cart />} />
            {/* <Route path="admin" element={user.currentUser.user.isAdmin && <Dashboard />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="products">
              <Route path=":id" element={<Product />} />
            </Route>
            <Route path="/track" element={<OrderTracking />} />
            <Route path="orders/:id" element={<Orders />} />
            <Route path="login" element={!user.currentUser && <Login />} />
            <Route path="/register" element={!user.currentUser && <Register />} />

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
