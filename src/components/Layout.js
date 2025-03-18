import Header from "./Header";
import styles from "../styles/layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.layout}>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
}
