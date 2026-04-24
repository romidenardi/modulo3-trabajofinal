import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </div>
  );
};
