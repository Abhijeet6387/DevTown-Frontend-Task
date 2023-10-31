import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PaginationContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #0056b3;
  }
`;

const FilterContainer = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 24px;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const productsPerPage = 5;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // Set loading to false when data is fetched
      });
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  let sortedProducts = [...products];

  if (sortBy === "category") {
    sortedProducts = sortedProducts.sort((a, b) =>
      a.category.localeCompare(b.category)
    );
  } else if (sortBy === "price-low-to-high") {
    sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high-to-low") {
    sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
  }

  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(sortedProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <FilterContainer>
        <label>Sort By : </label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="all">All</option>
          <option value="category">Category</option>
          <option value="price-low-to-high">Price : Low to High</option>
          <option value="price-high-to-low">Price : High to Low</option>
        </select>
      </FilterContainer>
      {loading ? ( // Display loader while loading
        <Loader>Please wait...</Loader>
      ) : (
        <>
          <ProductListContainer>
            {currentProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ProductListContainer>
          <PaginationContainer>
            <PageButton onClick={prevPage}>
              <FaArrowLeft /> Previous
            </PageButton>
            <PageButton onClick={nextPage}>
              Next <FaArrowRight />
            </PageButton>
          </PaginationContainer>
        </>
      )}
    </div>
  );
};

export default ProductList;
