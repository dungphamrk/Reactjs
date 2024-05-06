import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Props {
  product: Product;
}

const ChildComponent: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};

export default ChildComponent;