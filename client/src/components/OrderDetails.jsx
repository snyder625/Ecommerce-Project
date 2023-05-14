import { useState } from 'react';
import '../styles/UserData.css';

const UserDetails = () => {
  const [products, setProducts] = useState([
    { id: 1, image: 'https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=2000', name: 'Fajita Pizza', description: 'Description 1' },
    { id: 2, image: 'https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=2000', name: 'California Pizza', description: 'Description 2' },
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th> Image </th>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td><img src={product.image} width="50" /></td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>
              <button>Edit</button>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserDetails;