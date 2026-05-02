import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/girlie-logo.png";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerDiv}>
      <Link to="/">
        <img className={styles.headerImg} src={logo} alt="logo"/>
      </Link>  
    </div>
  );
};
