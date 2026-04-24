import React from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {
  return (
    <div>
      <h1>Productos</h1>
      <Link to="/producto/1">Ver producto 1</Link>
    </div>
  );
};
