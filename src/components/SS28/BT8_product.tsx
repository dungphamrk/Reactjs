import React from 'react';

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
}

let Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};

export default Product;