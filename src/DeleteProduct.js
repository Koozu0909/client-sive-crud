import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteProduct = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const result = await axios.get(`http://localhost:3005/products/${id}`);
      setProduct(result.data);
    };
    getProduct();
  }, [id]);

  const deleteProduct = async () => {
    await axios.delete(`http://localhost:3005/products/${id}`);
    navigate("/");
  };

  return (
    <div>
      <h1>Delete Product</h1>
      {product && (
        <div>
          <p>Are you sure you want to delete {product.name}?</p>
          <button onClick={deleteProduct}>Yes</button>
          <button onClick={() => navigate("/")}>No</button>
        </div>
      )}
    </div>
  );
};

export default DeleteProduct;
