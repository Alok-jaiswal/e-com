// components/ProductDetailsModal.js
import styles from "../styles/productDetailsModal.module.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

export default function ProductDetailsModal({ product, onClose, isOpen }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  if (!isOpen || !product) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
          <p className={styles.description}>{product.description}</p>
          <button className={styles.addToCart} onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
