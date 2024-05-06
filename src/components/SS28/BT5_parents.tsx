import ChildComponent from './BT5_child';

let Bt5 = () => {

  let product = {
    id: 1,
    name: '1',
    price: 1,
    quantity: 1,
  };

  return (
    <div>
      <h1>bt5</h1>
      <h2>Parent Component</h2>
      <ChildComponent product={product} />
    </div>
  );
};

export default Bt5;