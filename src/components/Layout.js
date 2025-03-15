// components/Layout.js
import Header from './Header'; 
import Cart from "./Cart";
import styles from "../styles/layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      {/* <Cart /> */}
    </div>
  );
}
