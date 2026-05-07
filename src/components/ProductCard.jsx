import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { formatPrice } from "../helpers/formatPrice";
import styles from "./ProductCard.module.css";

export const ProductCard = ({product, onAdd}) => {

  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.card}>
      <img
        src={product.images?.[0]}
        alt={product.title}
        className={styles.image}
        loading="lazy"
      />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>{formatPrice(product.price)}</p>
      <p className={styles.description}>{product.description}</p>
      <Link to={`/producto?id=${product.id}`} className={styles.link}>
        Ver detalle
      </Link>
      <div className={styles.controls}>
        <div className={styles.controls}>
          <button
            className={styles.button}
            disabled={quantity <= 1}
            onClick={() => setQuantity(quantity - 1)}
            >
              -
            </button> 
          <span>{quantity}</span>
          <button
            className={styles.button}
            onClick={() => setQuantity(quantity + 1)}
            >
              +
          </button>
          <button
            className={styles.addButton}
            onClick={() => {onAdd(product, quantity);
              setQuantity(1);
            }}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );

};
