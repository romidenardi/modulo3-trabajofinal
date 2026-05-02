import React from "react";
import logo from "../assets/girlie-logo.png";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerDiv}>
      <img className={styles.headerImg} src={logo} alt="logo"/>
    </div>
  );
};
