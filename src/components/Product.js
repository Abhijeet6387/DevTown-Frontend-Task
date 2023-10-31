// src/components/Product.js
import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ProductCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px; /* Added border radius */
  padding: 20px;
  text-align: center;
  margin: 0 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 220px;
  overflow: hidden; /* Limit text overflow */
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 100px;
  border-radius: 10px; /* Added border radius */
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #555;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
`;

const ProductRating = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: orange;
`;

const ProductCategory = styled.span`
  background-color: #0467df;
  color: #fff;
  padding: 4px 8px;
  border-radius: 20px;
  margin-right: 8px;
`;

const AddToCartButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 0;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ButtonText = styled.span`
  margin-left: 8px;
`;

const Product = ({ product }) => {
  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart here
    alert(`Added ${product.title} to the cart`);
  };
  return (
    <ProductCard>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>
        {product.title.length > 20
          ? `${product.title.slice(0, 20)}`
          : product.title}
      </ProductTitle>
      <ProductCategory>{product.category}</ProductCategory>
      <ProductRating>
        {product.rating.rate} <FaStar />
      </ProductRating>
      <ProductDescription>
        {product.description.length > 50
          ? `${product.description.slice(0, 50)} ...`
          : product.description}
      </ProductDescription>
      <ProductPrice>${product.price.toFixed(2)}</ProductPrice>

      <AddToCartButton onClick={handleAddToCart}>
        <FaShoppingCart /> <ButtonText>Add to Cart</ButtonText>
      </AddToCartButton>
    </ProductCard>
  );
};

export default Product;
