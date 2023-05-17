import UserData from './UserData';
import ProductData from './ProductData';
import styles from '../styles/Dashboard.module.css'
import OrderData from './OrderData';

const ContentArea = ({ selectedOption }) => {
  return (
    <div className={styles.contentArea}>
      {selectedOption === 'users' && <UserData />}
      {selectedOption === 'products' && <ProductData />}
      {selectedOption === 'orders' && <OrderData />}
    </div>
  );
};

export default ContentArea;