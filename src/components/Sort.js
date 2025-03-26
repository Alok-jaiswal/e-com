// import styles from "../styles/sort.module.scss";

// export default function Sort({ onSort }) {
//   return (
//     <div className={styles.sort}>
//       <h3>Sort by Price</h3>
//       <button onClick={() => onSort("asc")}>Ascending</button>
//       <button onClick={() => onSort("desc")}>Descending</button>
//     </div>
//   );
// }

import styles from "../styles/sort.module.scss";

export default function Sort({ onSort, selectedSort }) {
  return (
    <div className={styles.sort}>
      <h3>Sort by Price</h3>
      <select
        value={selectedSort}
        onChange={(e) => onSort(e.target.value)}
      >
        <option value="asc">Low to High Price</option>
        <option value="desc">High to Low Price</option>
      </select>
    </div>
  );
}