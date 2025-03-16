import styles from "../styles/sort.module.scss";

export default function Sort({ onSort }) {
  return (
    <div className={styles.sort}>
      <h3>Sort by Price</h3>
      <button onClick={() => onSort("asc")}>Ascending</button>
      <button onClick={() => onSort("desc")}>Descending</button>
    </div>
  );
}
