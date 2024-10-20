import React, { useEffect, useState } from "react";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Ambil data produk dari localStorage
    const savedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    if (savedProduct) {
      setProduct(savedProduct);
    }
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-[23px] font-[Roboto] font-medium mb-4">Product Detail</h2>
      <div>
        <p><strong>Name:</strong> {product.productName}</p>
        <p><strong>Category:</strong> {product.productCategory}</p>
        <p><strong>Freshness:</strong> {product.productFreshness}</p>
        <p><strong>Price:</strong> ${product.productPrice}</p>
        <p><strong>ID:</strong> {product.id}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
