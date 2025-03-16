import Link from "next/link";
import styles from "../styles/header.module.scss";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import CartDrawer from "./CartDrawer";
import Image from "next/image";

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileRef]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/android-chrome-192x192.png"
            alt="E-com Logo"
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />
          E-com
        </Link>
        <div className={styles.nav}>
          <button onClick={toggleCart} className={styles.cartButton}>
            Cart ({totalItems})
          </button>
          <button onClick={toggleProfile} className={styles.profileButton}>
            <Image
              src="/profile-icon.png"
              alt="Profile"
              width={30}
              height={30}
            />
          </button>
          {isProfileOpen && (
            <div className={styles.profileDropdown} ref={profileRef}>
              <p>Name: Alok Jaiswal</p>
              <a
                href="https://github.com/Alok-jaiswal/e-com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub: Alok-jaiswal/e-com
              </a>
              <p>Email: alokasha7620@gmail.com</p>
            </div>
          )}
        </div>
      </div>
      <CartDrawer isOpen={isCartOpen} onClose={toggleCart} />
    </header>
  );
}
