import styles from '../styles/ProductCard.module.css'; // Import the CSS file for styling

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src="https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=2000" alt="Product" className={styles.Image} />
      </div>
      <div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px 0', alignItems: 'center'}}>
            <h3 className={styles.productName}>Hot Popper Passion</h3>
            <h3 className={styles.productPrice}><sub>Rs. 4900</sub></h3>
        </div>
        <p className={styles.productDescription}>
          Product description goes here and there as well
        </p>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: 10}}>
            <button className={styles.cartButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;