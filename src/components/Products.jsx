import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";

export const Products = ({category}) =>  {

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const API_URL = category
    ? `${baseUrl}/products/category/${category}`
    : `${baseUrl}/products`;

  const {data, loading, error} = useFetch(API_URL);

  const productList = data?.products || [];

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
              <ProductCard
              key={product.id}
              product={product}
              onAdd={(p) =>
                addProduct({
                  id: p.id,
                  title: p.title,
                  price: p.price,
                })
              }
            />
          ))}
        </div>
      </div>
    );

};