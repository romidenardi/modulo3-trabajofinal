import React from "react";
import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";
import { formatPrice } from "../helpers/formatPrice";
import styles from "./Cart.module.css";

export const Cart = () => {

  const items = useCartStore ((state) => state.items);
  const deleteProduct = useCartStore ((state) => state.deleteProduct);
  const changeQuantity = useCartStore ((state) => state.changeQuantity);
  const emptyCart = useCartStore ((state) => state.emptyCart);
  const getItemsTotal = useCartStore ((state) => state.getItemsTotal);
  const getPriceTotal = useCartStore ((state) => state.getPriceTotal);

if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <h2 className={styles.title}>Tu carrito</h2>
        <p>Aún no agregaste productos</p>
        <Link to="/">Volver a la home</Link>
      </div>
    );
  }

  return (

    <div className={styles.container}>

      <h2 className={styles.title}> </h2>
      <p>Tu carrito tiene ({getItemsTotal()} productos)</p>        

      <div className={styles.list}>

        {items.map((item) => (
          <div key={item.id} className={styles.item}>

            <h4 className={styles.itemTitle}>{item.title}</h4>

            <div className={styles.controls}>
              <button onClick={() => changeQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => changeQuantity(item.id, item.quantity + 1)}>+</button>
            </div>

            <p className={styles.price}>
              {formatPrice(item.quantity * item.price)}
            </p>

            <button
              className={styles.delete}
              onClick={() => deleteProduct(item.id)}
            >
              ✕
            </button>

          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <strong>Total: {formatPrice(getPriceTotal())}</strong>

        <button
          className={styles.clear}
          onClick={emptyCart}
        >
          Vaciar carrito
        </button>
      </div>

    </div>
  );

};