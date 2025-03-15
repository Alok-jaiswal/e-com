// components/CartDrawer.js
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, removeEntireItem } from '../redux/cartSlice';
import styles from '../styles/cartDrawer.module.scss';
import Link from 'next/link';
import Filter from './Filter';
import Sort from './Sort';

export default function CartDrawer({ isOpen, onClose }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.drawerContent}>
        <div className={styles.drawerHeader}>
          <h3>Cart</h3>
          <button onClick={onClose} className={styles.closeButton}>
            &times;
          </button>
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.image} alt={item.title} className={styles.itemImage} />
            <div className={styles.itemDetails}>
              <span>{item.title}</span>
              <span>${item.price.toFixed(2)}</span>
              <div className={styles.quantity}>
                <button onClick={() => dispatch(removeItem(item))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(addItem(item))}>+</button>
              </div>
              <button onClick={() => dispatch(removeEntireItem(item))}>Remove</button>
            </div>
          </div>
        ))}
        <div className={styles.cartFooter}>
          <div className={styles.totalPrice}>
            Total: ${totalPrice.toFixed(2)}
          </div>
          <Link href="/" className={styles.shopButton} onClick={onClose}>
            Shop More
          </Link>
        </div>
      </div>
    </div>
  );
}