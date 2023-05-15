import { useState } from 'react';
import '../styles/UserData.css';

const UserDetails = () => {
  const [products, setProducts] = useState([
    { id: 1, customer: 'Rizwan Ahmed', total: 'Rs 4000', payment: 'Cash', status: 'Completed' },
    { id: 2, customer: 'Mark Chapman', total: 'Rs 4000', payment: 'Paypal', status: 'Ongoing' },
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
    <h2 style={{display: 'flex', justifyContent: 'center', marginBottom: 20}}>Order Data</h2>
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Total</th>
          <th>Payment Method</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.customer}</td>
            <td>{product.total}</td>
            <td>{product.payment}</td>
            <td>{product.status}</td>
            <td>
              <button className="dashboardBtn" onClick={() => deleteProduct(product.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default UserDetails;