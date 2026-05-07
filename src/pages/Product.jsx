import React from "react";
import { useSearchParams} from "react-router-dom";
import { useState } from "react";
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
  const [quantity, setQuantity] = useState(1);

    if(!id) {
      return (
        <div>
          <p>Producto no encontrado</p>
          <Link to="/" className={styles.breadcrumb}>
            ← Home
          </Link>
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
              src={product.images?.[0] + "?w=200"}
              alt={product.title}
              className={styles.image}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>{product.title}</h2>
            <p className={styles.price}>{formatPrice(product.price)}</p>
            <p className={styles.description}>{product.description}</p>
            <div className={styles.controls}>
              <div>
                <button className={styles.button}
                  disabled={quantity <= 1}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </button>
                <span className={styles.quantity}>{quantity}</span>
                <button className={styles.button}
                  onClick={() => setQuantity(quantity + 1)}>
                  +
                </button>
              </div>
              <button
                className={styles.addButton}
                onClick={() => {
                  addProduct(product, quantity);
                  setQuantity(1);
                }}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  
};