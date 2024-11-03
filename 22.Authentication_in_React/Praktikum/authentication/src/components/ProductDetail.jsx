// src/ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams(); // Mendapatkan ID dari URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://6718b1b57fc4c5ff8f4a9ad3.mockapi.io/products/${id}`);
        setProduct(response.data); // Set data produk yang didapat dari API
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false); // Selesai loading setelah request selesai
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="mt-8 ml-4">
      <h2 className="text-[23px] font-[Roboto] font-medium mb-4">Product Detail</h2>
      <div>
        <p><strong>Name:</strong> {product.productName}</p>
        <p><strong>Category:</strong> {product.productCategory}</p>
        <p><strong>Freshness:</strong> {product.productFreshness}</p>
        <p><strong>Price:</strong> ${product.productPrice}</p>
        <p><strong>ID:</strong> {product.id}</p>
        {product.productImage && (
          <div className="mt-4">
            <p><strong>Image:</strong></p>
            <img src={product.productImage} alt="Product" className="w-[20%]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
