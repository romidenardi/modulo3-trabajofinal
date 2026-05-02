import React from "react";
import { Products } from "../components/Products";
import { categories } from "../helpers/categories";

export const Home = () => {
  return (
    <div>
      {categories.map((cat) => (
        <div key={cat.value}>
          <Products category={cat.value}/>
        </div>
      ))}
    </div>
  );
};
