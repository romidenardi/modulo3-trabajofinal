import React from "react";
import { Products } from "../components/Products";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <h2>Belleza</h2>
      <Products category="beauty"/>
      <h2>Perfumes</h2>
      <Products category="fragrances"/>
      <h2>Skincare</h2>
      <Products category="skin-care"/>
      <h2>Gafas de sol</h2>
      <Products category="sunglasses"/>
      <h2>Carteras</h2>
      <Products category="womens-bags"/>
      <h2>Joyas</h2>
      <Products category="womens-jewellery"/>
    </div>
  );
};
