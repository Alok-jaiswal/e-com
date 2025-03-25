import styles from "../styles/NewProductCard.module.scss";
import { useState } from "react";
import ProductDetailsModal from "./ProductDetailsModal";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import dynamic from "next/dynamic";
const ReactStars = dynamic(() => import("react-rating-stars-component"), {
  ssr: false,
});

const NewProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addItem(product));
  };

  return (
    <div className={styles.card} onClick={handleOpenModal}>
      <div className={styles.cardBox}>
        <button className={styles.fab} onClick={handleAddToCart}>
          🛒
        </button>
        <img
          src={product?.image}
          alt={product.title}
          width={300}
          height={300}
          className={styles.productImage}
        />
      </div>
      <div className={styles.cardContent}>
        <a className={styles.productLink}>{product.title}</a>
        <div className={styles.cardFooter}>
          <div className={styles.price}>
            <span className={styles.priceCurrent}>
              ${product.price.toFixed(2)}
            </span>
          </div>
          <p className={styles.category}>{product.category}</p>
        </div>
        <div>
          <ReactStars
            count={5}
            value={product.rating && product.rating.rate}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
        </div>
      </div>
      <ProductDetailsModal
        product={product}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default NewProductCard;
