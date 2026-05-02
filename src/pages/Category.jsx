import React from "react";
import { useParams } from "react-router-dom";
import { Products } from "../components/Products";
import styles from "./Category.module.css";

export const Category = () => {
  const { category } = useParams();
  return (
    <div >
|     <Products category={category} />
    </div>
  );
};
