import React from "react";
import { useCartStore } from "../../store/cartStore";

const productList = [
  {
    id: 1,
    name: "Notebook Lenovo IdeaPad 3",
    description: "Notebook con procesador Intel i5, 8GB de RAM y SSD de 256GB. Ideal para estudio y trabajo.",
    price: 850000
  },
  {
    id: 2,
    name: "Smartphone Samsung Galaxy A54",
    description: "Celular con pantalla AMOLED de 6.4”, 128GB de almacenamiento y cámara de 50MP.",
    price: 650000
  },
  {
    id: 3,
    name: "Auriculares Bluetooth Sony WH-CH520",
    description: "Auriculares inalámbricos con hasta 50 horas de batería y sonido de alta calidad.",
    price: 120000
  },
  {
    id: 4,
    name: "Mouse Logitech MX Master 3S",
    description: "Mouse ergonómico inalámbrico con alta precisión y múltiples dispositivos.",
    price: 95000
  },
  {
    id: 5,
    name: "Teclado Mecánico Redragon Kumara K552",
    description: "Teclado mecánico compacto con switches Outemu Blue y retroiluminación LED.",
    price: 70000
  }
];

export const Products = () =>  {

  const addProduct = useCartStore ((state) => state.addProduct);

  return (
    <div>
      <h3>Productos disponibles</h3>
      <div>
        {productList.map((product) => (
          <div key={product.id}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <button onClick={() => addProduct()}>Agregar</button>
          </div>
        ))}
      </div>
    </div>
  );
};