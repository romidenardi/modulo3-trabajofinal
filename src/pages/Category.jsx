import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { categories } from "../helpers/categories";
import { Products } from "../components/Products";

export const Category = () => {
  const { category } = useParams();
  const exists = categories.some(cat => cat.value === category);
  if (!exists) {
    return <Navigate to="*" />;
  }
  return <Products category={category} />;
};
