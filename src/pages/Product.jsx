import React from "react";
import { useSearchParams} from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { categories } from "../helpers/categories";
import { formatPrice } from "../helpers/formatPrice";
import styles from "./Product.module.css";

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
      <div className={styles.container}>        
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img
              src={product.images?.[0]}
              alt={product.title}
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>{product.title}</h2>
            <p className={styles.price}>{formatPrice(product.price)}</p>
            <p className={styles.description}>{product.description}</p>
            <button
              className={styles.button}
              onClick={() =>
                addProduct({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                })
              }
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    );
  
};