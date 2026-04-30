import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import { Nav } from "./components/common/Nav";
import { Contact } from "./components/pages/Contact";
import { Home } from "./components/pages/Home";
import { Product } from "./components/pages/Product";
import { Products } from "./components/pages/Products";
import { Cart } from "./components/pages/Cart";

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/productos" element={<Products/>} />
          <Route path="/carrito" element={<Cart/>} />
          <Route path="/producto" element={<Product />} />
          <Route path="/contacto" element={<Contact/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App
