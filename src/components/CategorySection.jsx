import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Products } from "../components/Products";
import styles from "./CategorySection.module.css";

export const CategorySection = ({ category, title, onAdd }) => {

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const { data, loading } = useFetch(`${baseUrl}/products/category/${category}`);

  const products = data?.products ?? [];

  if (loading) return <p>Cargando {title}...</p>;

  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.categoryTitle}>{title}</h2>
      <Products 
        products={products}
        onAdd={onAdd}
      />
    </div>
  );
  
};