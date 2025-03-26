import { useState } from "react";
import axios from "axios";
// import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import styles from "../styles/productListing.module.scss";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewProductCard from "../components/NewProductCard";

export async function getServerSideProps() {
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;
  return {
    props: {
      products,
    },
  };
}

export default function ProductListing({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  const handleFilter = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  const handleSort = (option) => {
    setSortOption(option);
    let sortedProducts = [...filteredProducts];
    if (option === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <Layout>
      <Header setShowFilters={setShowFilters} showFilters={showFilters} />
      <div className={styles.container}>
        {showFilters && (
          <div className={styles.filters}>
            <Filter products={products} onFilter={handleFilter} />
            <Sort onSort={handleSort} />
          </div>
        )}
        {/* <div>
          <NewProductCard />
        </div> */}
        <div className={styles.products}>
          {filteredProducts.map((product) => (
            <NewProductCard key={product.id} product={product} />
            // <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
