import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

export const Header = () => {

  const items = useCartStore((state) => state.items);
  const getItemsTotal = useCartStore((state) => state.getItemsTotal);
  const total = getItemsTotal();

  return (
    <div>
      <h1>Bienvenidos</h1>
      <Link to={"/carrito"}>Carrito
        {total > 0 && <span>{total}</span> }
      </Link>
    </div>
  );
};
