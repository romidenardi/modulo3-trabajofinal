import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { formatPrice } from "../helpers/formatPrice";
import styles from "./Checkout.module.css";

export const Checkout = () => {

  const items = useCartStore ((state) => state.items);
  const getItemsTotal = useCartStore ((state) => state.getItemsTotal);
  const getPriceTotal = useCartStore ((state) => state.getPriceTotal);
  const emptyCart = useCartStore((state) => state.emptyCart);

  const paymentMethods = [
    { value: "cash", label: "Efectivo" },
    { value: "card", label: "Tarjeta de crédito" },
    { value: "transfer", label: "Transferencia bancaria" },
  ];

  const { register, handleSubmit, reset, formState:{errors} } = useForm(); 

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    emptyCart();
    reset();
    navigate("/gracias");
  }

  return (    
    <div className={styles.container}>
      <div className={styles.container}>
        <h2 className={styles.title}>¡Finalizá tu compra!</h2>
        <p className={styles.data}>Cantidad de productos: {getItemsTotal()}</p>
        <p className={styles.data}>Total: {formatPrice(getPriceTotal())}</p>
      </div>   
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.field}>
          <label>Nombre y apellido</label>
          <input 
            {...register("name", { required:"El campo es obligatorio" })}
            type="text"
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>
        <div className={styles.field}>
          <label>Email</label>
          <input 
            {...register("email", {
              required:"El campo es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:"Formato inválido"
              }
            })}
            type="email"
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>
        <div className={styles.field}>
          <label>Forma de pago</label>
          <select className={styles.select}
            {...register("paymentMethod", {
              required: "Seleccioná una forma de pago",
            })}
          >
            <option value="">Seleccionar...</option>
            {paymentMethods.map((method) => (
              <option key={method.value} value={method.value}>
                {method.label}
              </option>
            ))}
          </select>
            {errors.paymentMethod && (
              <p className={styles.error}>
                {errors.paymentMethod.message}
              </p>
            )}
        </div>
        <div className={styles.field}>
          <label>Comentarios</label>
          <textarea 
            {...register("message")}
          />
        </div>
        <button type="submit" className={styles.button}>
          Finalizar compra
        </button>
      </form>
    </div>
  );

};