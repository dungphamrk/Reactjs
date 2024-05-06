import { Component } from 'react';

interface Bt1State {
  name: string;
}

class Bt1 extends Component<{}, Bt1State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: 'Dũng Phạm', 
    };
  }

  render() {
    let { name } = this.state; 
    return (
      <div>
        <h1>bt1</h1>
        <p>họ và tên: {name}</p> 
      </div>
    );
  }
}

export default Bt1;