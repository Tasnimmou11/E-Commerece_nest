import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>}/>
      <Route path="/shop" element={<Shop/>} />
      <Route path="/productdetails/:slug" element={<ProductDetails/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/contact" element={<Contact/>} />
      </Route>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
