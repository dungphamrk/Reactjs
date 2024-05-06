import { Component } from 'react';

interface Bt2State {
    id:number;
    name: string;
    dateOfBirth:string;
    address:string;
}

class Bt2 extends Component<{}, Bt2State> {
  constructor(props: {}) {
    super(props);
    this.state = {
        id:1,
        name: 'Dũng đẹp traii', 
        dateOfBirth:'122/231/1123',
        address:'ha noi'
    };
  }

  render() {
    let person = this.state; 
    return (
      <div>
        <h1>bt2</h1>
        <p>id: {person.id}</p> 
        <p>họ tên: {person.name}</p>
        <p>ngày sinh: {person.dateOfBirth}</p>
        <p>địa chỉ:{person.address}</p>
      </div>
    );
  }
}

export default Bt2;