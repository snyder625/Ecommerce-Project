// import React from 'react';
import styles from '../styles/Dashboard.module.css'

const Sidebar = ({ selectedOption, onOptionSelect }) => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li
          className={selectedOption === 'users' ? 'selected' : ''}
          onClick={() => onOptionSelect('users')}
        >
          Users
        </li>
        <li
          className={selectedOption === 'products' ? 'selected' : ''}
          onClick={() => onOptionSelect('products')}
        >
          Products
        </li>
        <li
          className={selectedOption === 'orders' ? 'selected' : ''}
          onClick={() => onOptionSelect('orders')}
        >
          Orders
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;