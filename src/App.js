import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const App = () => {
  return (
    <AppContainer>
      <h1>Product Listing</h1>
      <ProductList />
    </AppContainer>
  );
};

export default App;
