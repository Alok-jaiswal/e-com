import styles from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.title}>E-commerce Product Listing Page</p>
        <a
          href="https://github.com/Alok-jaiswal/e-com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          GitHub Repository
        </a>
      </div>
    </footer>
  );
}
