import { useState } from 'react';
import '../styles/UserData.css';

const UserData = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <h2 style={{display: 'flex', justifyContent: 'center', marginBottom: 20}}>User Data</h2>
    <table className="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button className="dashboardBtn" onClick={() => deleteUser(user.id)}>Delete</button>
              {/* Add edit functionality */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default UserData;