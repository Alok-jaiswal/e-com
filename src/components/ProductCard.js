// components/ProductCard.js
import styles from "../styles/productCard.module.scss";
import { useState } from "react";
import ProductDetailsModal from "./ProductDetailsModal";

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.card} onClick={handleOpenModal}>
      <div className={styles.link}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <p className={styles.category}>{product.category}</p>
      </div>
      <ProductDetailsModal
        product={product}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
