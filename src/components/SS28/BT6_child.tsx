import React from 'react';

interface User {
  id: number;
  name: string;
  address: string;
  email: string;
}

interface Props {
  users: User[]; 
}

const ChildComponent: React.FC<Props> = ({ users }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Address: {user.address}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;