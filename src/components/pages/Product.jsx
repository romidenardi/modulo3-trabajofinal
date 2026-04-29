import React from "react";
import { useParams} from "react-router-dom";

export const Product = () => {
  const {id} = useParams()
  return (
    <div>
      <h2>Detalle del producto {id}</h2>
    </div>
  );
};
