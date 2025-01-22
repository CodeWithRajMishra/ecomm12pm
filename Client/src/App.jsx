import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Product"
import Contact from "./pages/Contact"
import ViewProduct from "./pages/ViewProduct"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
              <Route index element={<Home />}/>
              <Route path="about" element={<About />}/>
              <Route path="products" element={<Products />}/>
              <Route path="contact" element={<Contact />}/>
              <Route path="viewProduct/:id" element={<ViewProduct />}/>
              <Route path="cart" element={<Cart/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}
export default App