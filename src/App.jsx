import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>}/>
      <Route path="/shop" element={<Shop/>} />
      <Route path="/productdetails" element={<ProductDetails/>} />
      </Route>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
