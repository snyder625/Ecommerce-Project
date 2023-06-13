import { useState, useEffect } from 'react';
import '../../styles/UserData.css';
import axios from 'axios';

const RewardData = () => {
  const [orders, setOrders] = useState([]);

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/orders/rewardedOrders");
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [])

  return (
    <>
    <h2 style={{display: 'flex', justifyContent: 'center', marginBottom: 20}}>Rewards</h2>
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer Name</th>
          <th>Total</th>
          <th>Address</th>
          <th>Tokenized?</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>{order._id}</td>
            <td>{order.customer}</td>
            <td>Rs. {order.total}</td>
            <td>{order.address}</td>
            <td>{order.isTokenized}</td>
            <td>{status[order.status]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default RewardData;