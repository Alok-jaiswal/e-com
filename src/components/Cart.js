// components/Cart.js
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";
import styles from "../styles/cart.module.scss";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className={styles.cart}>
      <h3>Cart</h3>
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
          </div>
        </div>
      ))}
    </div>
  );
}
