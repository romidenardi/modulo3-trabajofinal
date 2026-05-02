import React from "react";
import { useSearchParams} from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export const Product = () => {

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const API_URL = `${import.meta.env.VITE_API_BASE_URL}/products/${id}`;
  const { data: product, loading, error } = useFetch(API_URL);

  const addProduct = useCartStore ((state) => state.addProduct);

    if(!id) {
      return (
        <div>
          <p>Producto no encontrado</p>
          <Link to="/">Volver a la home</Link>
        </div>
      );
    }

    if(loading) {
      return (
        <div>
          <p>Cargando producto...</p>
        </div>
      );
    }

    if(error) {
      return (
        <div>
          <p>Error al cargar el producto</p>
        </div>
      );
    }

  return (
    <div>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <img src={product.images?.[0]} alt={product.title} width={200} />
      <p>{product.description}</p>
      <button onClick={() => addProduct({
        id:product.id,
        title:product.title,
        price:product.price,
      })}>Agregar</button>
    </div>
  );
  
};