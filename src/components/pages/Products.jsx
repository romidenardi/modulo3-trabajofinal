import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCartStore } from "../../store/cartStore";
import { Link } from "react-router-dom";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/products/?categoryId=2`;

export const Products = () =>  {

  const {data: productList, loading, error} = useFetch(API_URL);

  const addProduct = useCartStore ((state) => state.addProduct);

    if(loading) {
      return (
        <div>
          <h3>Productos</h3>
          <p>Cargando</p>
        </div>
      );
    }

    if(error) {
      return (
        <div>
          <h3>Productos</h3>
          <p>Error al cargar los productos</p>
        </div>
      );
    }

    return (
      <div>
        <h3>Productos</h3>
        <div>
          {productList.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>${product.price}</p>
              <img src={product.images?.[0]} alt={product.title} width={200} />
              <p>{product.description}</p>
              <button>
                <Link to={`/producto?id=${product.id}`}>Ver detalle</Link>
              </button>      
              <button onClick={() => addProduct({
                id:product.id,
                title:product.title,
                price:product.price,
              })}>Agregar</button>
            </div>
          ))}
        </div>
      </div>
    );

};