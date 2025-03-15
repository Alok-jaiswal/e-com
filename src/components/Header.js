// components/Header.js
import Link from "next/link";
import styles from "../styles/header.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          My E-commerce
        </Link>
        <div className={styles.nav}>
          <button onClick={toggleCart} className={styles.cartButton}>
            Cart ({totalItems})
          </button>
        </div>
      </div>
      <CartDrawer isOpen={isCartOpen} onClose={toggleCart} />
    </header>
  );
}
