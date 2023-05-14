import UserData from './UserData';
import ProductData from './ProductData';
import styles from '../styles/Dashboard.module.css'
import OrderDetails from './OrderDetails';

const ContentArea = ({ selectedOption }) => {
  return (
    <div className={styles.contentArea}>
      {selectedOption === 'users' && <UserData />}
      {selectedOption === 'products' && <ProductData />}
      {selectedOption === 'orders' && <OrderDetails />}
    </div>
  );
};

export default ContentArea;