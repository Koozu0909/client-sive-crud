import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const result = await axios.get("http://localhost:3005/products");
      setProducts(result.data.listOfProduct);
      console.log(result.data.listOfProduct);
    };
    getProducts();
  }, []);

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:3005/products/${id}`);
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) &&
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <Link to={`/products/${product.id}/edit`}>Edit</Link>
                  <button onClick={() => deleteProduct(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Link to="/products/add">Add Product</Link>
    </div>
  );
};

export default Products;
