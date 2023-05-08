import './App.css'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import { Cart, Dashboard, Home, Menu, Product } from './pages'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="cart" element={<Cart />} />
        <Route path="admin" element={<Dashboard />} />
        <Route path="video">
          <Route path=":id" element={<Product />} />                 
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
