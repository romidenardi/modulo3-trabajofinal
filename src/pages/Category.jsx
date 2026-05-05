import React from "react";
import { Link } from "react-router-dom";
import { useParams, Navigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useFilter } from "../hooks/useFilter";
import { useCartStore } from "../store/cartStore";
import { categories, getCategoryLabel } from "../helpers/categories";
import { Products } from "../components/Products";
import styles from "./Category.module.css";

export const Category = () => {

  const { category } = useParams();

  const exists = categories.some(cat => cat.value === category);
  if (!exists) return <Navigate to="*" />;

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const API_URL = category
    ? `${baseUrl}/products/category/${category}`
    : `${baseUrl}/products`;

  const { data, loading, error } = useFetch(API_URL);

  const productList = data?.products || [];

  const { search, setSearch, filtered } = useFilter(productList);

  const addProduct = useCartStore((state) => state.addProduct);

  if(loading) {
    return (
      <div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if(error) {
    return (
      <div>
        <p>Error al cargar los productos</p>
        <Link to="/" className={styles.breadcrumb}>
          ← Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className={styles.categoryTitle}>{getCategoryLabel(category)}</h2>
      <input className={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar producto"
      />
      {filtered.length === 0 ? (
        <p className={styles.empty}>
          No encontramos resultados para "<strong>{search}</strong>"
        </p>
      ) : (
        <Products
          products={filtered}
          onAdd={addProduct}
        />
      )}
    </div>
  );

};