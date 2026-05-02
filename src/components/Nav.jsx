import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { categories } from "../helpers/categories";

export const Nav = () => {

  const items = useCartStore((state) => state.items);
  const getItemsTotal = useCartStore((state) => state.getItemsTotal);
  const total = getItemsTotal();

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/categoria/beauty">Belleza</Link>
        <Link to="/categoria/fragrances">Perfumes</Link>
        <Link to="/categoria/skin-care">Skincare</Link>
        <Link to="/categoria/sunglasses">Gafas de sol</Link>
        <Link to="/categoria/womens-bags">Carteras</Link>
        <Link to="/categoria/womens-jewellery">Joyas</Link>
        {categories.map((cat) => (
          <Link key={cat.value} to={`/categoria/${cat.value}`}>
            {cat.label}
          </Link>
        ))}
      </nav>
    </div>
  );

};
