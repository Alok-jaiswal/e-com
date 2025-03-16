import dynamic from "next/dynamic";
import { useState } from "react";
import styles from "../styles/productCard.module.scss";
import ProductDetailsModal from "./ProductDetailsModal";

const ReactStars = dynamic(() => import("react-rating-stars-component"), {
  ssr: false,
});

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
        {product.rating && (
          <div className={styles.rating}>
            <ReactStars
              count={5}
              value={product.rating && product.rating.rate}
              size={24}
              activeColor="#ffd700"
              edit={false}
            />
            <span className={styles.reviewCount}>
              ({product.rating.count} reviews)
            </span>
          </div>
        )}
      </div>
      <ProductDetailsModal
        product={product}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
