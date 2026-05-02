import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div>
      <h4 className={styles.notFound}>Página no encontrada</h4>
      <Link to="/" className={styles.breadcrumb}>
        ← Home
      </Link>
    </div>
  );
};