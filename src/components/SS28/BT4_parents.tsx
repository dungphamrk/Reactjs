import { useState } from 'react';
import Children_Comp from './BT4_child';

let Bt4 = () => {
  let [Myname] = useState('dung'); 

  return (
    <div>
        <h1>bt4</h1>
      <h1> component cha</h1>
      <p>Ten la: {Myname}</p>
      <Children_Comp name={Myname} /> 
    </div>
  );
};

export default Bt4;