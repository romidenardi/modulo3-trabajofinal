import React from "react";
import { CategorySection } from "../components/CategorySection";
import { useCartStore } from "../store/cartStore";
import { categories } from "../helpers/categories";
import styles from "./Home.module.css";

export const Home = () => {

  const addProduct = useCartStore((state) => state.addProduct);

  return (
    <div>
      <h1 className={styles.mainTitle}>¡Bienvenida a Girlie!</h1>

      {categories.map((cat) => (
        <CategorySection
          key={cat.value}
          category={cat.value}
          title={cat.label}
          onAdd={addProduct} 
        />
      ))}
    </div>
  );
};