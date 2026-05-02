import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Products } from "./components/Products";
import { Cart } from "./pages/Cart";
import { Category } from "./pages/Category";
import { Checkout } from "./pages/Checkout";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Product } from "./pages/Product";
import { ThankYou } from "./pages/ThankYou";

import "./styles/variables.css";
import "./styles/general.css";

function App() {  
  return (
    <BrowserRouter>
      <Header/>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categoria/:category" element={<Category/>}/>
          <Route path="/carrito" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/gracias" element={<ThankYou/>}/>
          <Route path="/producto" element={<Product/>}/>
          <Route path="/contacto" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App
