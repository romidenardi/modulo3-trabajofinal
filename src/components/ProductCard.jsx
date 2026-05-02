import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../helpers/formatPrice";
import styles from "./ProductCard.module.css";

export const ProductCard = ({product, onAdd}) => {
  return (
    <div className={styles.card}>
      <img
        src={product.images?.[0]}
        alt={product.title}
        className={styles.image}
      />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>{formatPrice(product.price)}</p>
      <p className={styles.description}>{product.description}</p>
      <Link to={`/producto?id=${product.id}`} className={styles.link}>
        Ver detalle
      </Link>
      <button
        className={styles.button}
        onClick={() => onAdd(product)}
      >
        Agregar
      </button>
    </div>
  );
};
