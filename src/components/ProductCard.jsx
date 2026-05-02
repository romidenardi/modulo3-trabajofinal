import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({product, onAdd}) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <img src={product.images?.[0]} alt={product.title} width={200} />
      <p>{product.description}</p>
      <Link to={`/producto?id=${product.id}`}>Ver detalle</Link>
      <button onClick={() => onAdd(product)}>Agregar</button>
    </div>
  );
};
