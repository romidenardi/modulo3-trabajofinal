import React from "react";
import { useCartStore } from "../store/cartStore";


export const Cart = () => {

  const items = useCartStore ((state) => state.items);
  const deleteProduct = useCartStore ((state) => state.deleteProduct);
  const changeQuantity = useCartStore ((state) => state.changeQuantity);
  const emptyCart = useCartStore ((state) => state.emptyCart);
  const getItemsTotal = useCartStore ((state) => state.getItemsTotal);
  const getPriceTotal = useCartStore ((state) => state.getPriceTotal);

if (items.length === 0) {
    return (
      <div>
        <h3>Tu carrito</h3>
        <p>Aún no agregaste productos</p>
      </div>
    );
  }

  return (
      <div>
        <h3>Tu carrito ({getItemsTotal()} productos)</h3>
        {items.map((item) => (
          <div key={item.id}>
            <h5>{item.title}</h5>
            <button onClick={() => changeQuantity (item.id, item.quantity - 1)}>-1</button>
            <p>{item.quantity}</p>
            <button onClick={() => changeQuantity (item.id, item.quantity + 1)}>+1</button> 
            <p>$ {item.quantity * item.price}</p>
            <button onClick={() => deleteProduct(item.id)}>Eliminar</button>
          </div>
        ))}
        <div>
          <strong>Total: ${getPriceTotal()}</strong>
        </div>
        <div>
          <button onClick={emptyCart}>Vaciar carrito</button>
        </div>
      </div>
  );

};
