import React from "react";
import { ProductCard } from "./ProductCard";
import styles from "./Products.module.css";

export const Products = ({ products = [], onAdd }) => {
  return (
    <div>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  );
};