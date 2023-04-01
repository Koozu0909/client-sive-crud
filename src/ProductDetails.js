import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const result = await axios.get(`http://localhost:3005/products/${id}`);
      setProduct(result.data);
    };
    getProduct();
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Link to={`/products/${product.id}/edit`}>Edit</Link>
          <Link to={`/products/${product.id}/delete`}>Delete</Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductDetails;
