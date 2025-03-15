// pages/product/[id].js
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import styles from "../../styles/productDetails.module.scss";

export async function getServerSideProps({ params }) {
  const response = await axios.get(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const product = response.data;
  return {
    props: {
      product,
    },
  };
}

export default function ProductDetails({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.description}>{product.description}</p>
        <button className={styles.addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
