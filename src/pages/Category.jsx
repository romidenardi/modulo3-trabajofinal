import React from "react";
import { useParams } from "react-router-dom";
import { Products } from "../components/Products";

export const Category = () => {
  const { category } = useParams();
  return (
    <div >
|     <Products category={category} />
    </div>
  );
};
