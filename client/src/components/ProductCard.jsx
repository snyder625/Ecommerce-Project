import styles from "../styles/ProductCard.module.css"; // Import the CSS file for styling

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={product.image} alt="Product" className={styles.Image} />
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "10px 0",
            alignItems: "center",
          }}
        >
          <h3 className={styles.productName}>{product.name}</h3>
          <h3 className={styles.productPrice}>
            <sub>Rs. 4900</sub>
          </h3>
        </div>
        <p className={styles.productDescription}>{product.description}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <button className={styles.cartButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
