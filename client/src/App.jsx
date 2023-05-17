import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from '../src/redux/store'
import { Provider } from 'react-redux'

import { Cart, Dashboard, Home, Login, Menu, Product, Register } from "./pages";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/contactUs/Contact";
import BlogMain from "./components/Blog/BlogMain";
import BlogViewDetails from "./components/Blog/BlogViewDetails";
import ScrollTop from "./scroll/ScrollTop";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <ScrollTop>
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
    </Provider>
  );
}

export default App;
