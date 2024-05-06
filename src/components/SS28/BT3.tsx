import { Component } from 'react';

interface User {
  id: number;
  name: string;
  address: string;
}

interface Bt3State {
  users: User[];
}

class Bt3 extends Component<{}, Bt3State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'Dũng', address: '123 ha noi' },
        { id: 2, name: '123', address: '456 ha noi' },
        { id: 3, name: '123123', address: '789 ha noi' }
      ],
    };
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>bt3</h1>
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              ID: {user.id}, Name: {user.name}, Address: {user.address}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Bt3;