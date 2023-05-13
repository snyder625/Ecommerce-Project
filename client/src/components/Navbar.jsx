import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <img src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>090 078 601</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link to="/" passHref className={styles.link}>
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link to="/products" className={styles.link}>
            <li className={styles.listItem}>Menu</li>
          </Link>
          <li className={styles.listItem}>Deals</li>
          <Link to="/" passHref className={styles.link}>
            <img src="/img/logoo.png" alt="" width="175" height="89" />
          </Link>
          <Link to="/blog" passHref className={styles.link}>
            <li className={styles.listItem}>Blog</li>
          </Link>
          <Link to="/contact" passHref className={styles.link}>
            <li className={styles.listItem}>Contact</li>
          </Link>
          <Link to="/login" passHref className={styles.link}>
            <li className={styles.listItem}>Log in / sign up</li>
          </Link>
        </ul>
      </div>
      <Link to="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <img src="/img/cart.png" alt="" width="30" height="30" />
            <div className={styles.counter}>0</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Navbar