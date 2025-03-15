// components/FilterDrawer.js
import styles from '../styles/filterDrawer.module.scss';
import Filter from './Filter';
import Sort from './Sort';
import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

export default function FilterDrawer({ isOpen, onClose, onFilter, onSort }) {
  const products = useSelector((state) => state.cart.items);
  const [sortOption, setSortOption] = useState('default');

  const handleSort = (option) => {
    setSortOption(option);
    onSort(option);
  };

  if (!isOpen) return null;

  return (
    <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.drawerContent}>
        <div className={styles.drawerHeader}>
          <h3>Filters</h3>
          <button onClick={onClose} className={styles.closeButton}>
            &times;
          </button>
        </div>
        <Filter products={products} onFilter={onFilter} />
        <Sort onSort={handleSort} />
      </div>
    </div>
  );
}