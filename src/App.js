import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./Products";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import ProductDetails from "./ProductDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/products" element={<ProductList />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route exact path="/products/:id/edit" element={<EditProduct />} />
        <Route exact path="/products/:id/delete" element={<DeleteProduct />} />
        <Route exact path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
