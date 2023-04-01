import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const result = await axios.get(`http://localhost:3005/products/${id}`);
      setName(result.data.name);
      setDescription(result.data.description);
      setPrice(result.data.price);
    };
    getProduct();
  }, [id]);

  const updateProduct = (e) => {
    e.preventDefault();
    const updatedProduct = { name, description, price };
    axios
      .put(`http://localhost:3005/products/${id}`, updatedProduct)
      .then((res) => {
        console.log(res.data);
      });
    navigate("/products");
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={updateProduct}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Price:</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
