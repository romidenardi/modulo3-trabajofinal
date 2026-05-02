import React from "react";
import { Link } from "react-router-dom";
import styles from "./ThankYou.module.css";

export const ThankYou = () => {
  return (
    <div>
      <h2 className={styles.title}>¡Gracias por tu compra!</h2>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          ← Home
        </Link>
      </div>
    </div>
  )
}
