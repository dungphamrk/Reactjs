import ChildComponent from './BT6_child';

let Bt6 = () => {

    let users = [
        { id: 1, name: '1', address: '1', email: '1' },
        { id: 2, name: '2', address: '2', email: '2' },
        { id: 3, name: '3', address: '3', email: '3' }
      ];
    

  return (
    <div>
      <h1>bt6</h1>
      <h2>Parent Component</h2>
      <ChildComponent users={users} />
    </div>
  );
};

export default Bt6;