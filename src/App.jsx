import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Products } from "./components/Products";
const Cart = lazy(() => import("./pages/Cart"));
import { Category } from "./pages/Category";
const Checkout = lazy(() => import("./pages/Checkout"));
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
      <main>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categoria/:category" element={<Category/>}/>
          <Route
            path="/carrito"
            element={
              <Suspense fallback={<p>Cargando carrito...</p>}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="/checkout"
            element={
              <Suspense fallback={<p>Redirigiendo al checkout...</p>}>
                <Checkout />
              </Suspense>
            }
          />
          <Route path="/gracias" element={<ThankYou/>}/>
          <Route path="/producto" element={<Product/>}/>
          <Route path="/contacto" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
};

export default App
