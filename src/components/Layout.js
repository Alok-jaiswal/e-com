import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.layout}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
