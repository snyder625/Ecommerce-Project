import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderTracking = () => {

  const navigate = useNavigate()
  const [orderId, setOrderId] = useState('')

  return (
    <div style={{ textAlign: 'center', margin: '20px', height: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <h1 style={{marginBottom: '2rem'}}>Track Your Order</h1>
      <div>
      <input
        type="text"
        value={orderId}
        onChange={(e)=>setOrderId(e.target.value)}
        placeholder='Enter Order ID'
        style={{ padding: '10px', marginRight: '10px' }}
      />
      <button
        onClick={()=> navigate(`/orders/${orderId}`)}
        style={{ padding: '10px 20px', backgroundColor: 'teal', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Track
      </button>
      </div>
    </div>
  );
};

export default OrderTracking;
