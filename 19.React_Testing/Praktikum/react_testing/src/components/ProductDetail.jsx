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
