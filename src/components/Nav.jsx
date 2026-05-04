import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { categories } from "../helpers/categories";
import bag from "../assets/shop-bag.png";
import styles from "./Nav.module.css";

export const Nav = () => {

  const items = useCartStore((state) => state.items);
  const getItemsTotal = useCartStore((state) => state.getItemsTotal);
  const total = getItemsTotal();
  const [open, setOpen] = useState(false);

  return (
    <div>      
      <nav className={styles.nav}>

        <button 
          className={styles.toggle}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className={`${styles.menu} ${open ? styles.active : ""}`}>
          <Link to="/">Home</Link>      
          {categories.map((cat) => (
            <Link className={styles.categoriesMenu} key={cat.value} to={`/categoria/${cat.value}`}>
              {cat.label}
            </Link>
          ))}
          <Link to="/contacto">Contacto</Link>
        </div>

        <Link to="/carrito" className={styles.cartLink}>
          <div className={styles.cartContainer}>
            <img src={bag} alt="Carrito" className={styles.cartBag}/>
            {total > 0 && (
              <span className={styles.cartBadge}>
                {total > 9 ? "9+" : total}
              </span>
            )}
          </div>
        </Link>

      </nav> 
    </div>
  );
  
};
