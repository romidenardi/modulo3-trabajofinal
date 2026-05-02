import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/carrito">Carrito</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/categoria/beauty">Belleza</Link>
        <Link to="/categoria/fragrances">Perfumes</Link>
        <Link to="/categoria/skin-care">Skincare</Link>
        <Link to="/categoria/sunglasses">Gafas de sol</Link>
        <Link to="/categoria/womens-bags">Carteras</Link>
        <Link to="/categoria/womens-jewellery">Joyas</Link>
      </nav>
    </div>
  );
};
