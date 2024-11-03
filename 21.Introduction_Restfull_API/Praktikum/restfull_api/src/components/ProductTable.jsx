import React from "react";
import { Link } from "react-router-dom";
import { deleteProduct, updateProduct } from "../services/api";
import { useAuth } from "./AuthContext";

export default function ProductTable({ products, fetchProducts }) {
  const handleEdit = async (product) => {
    const updatedName = prompt("Enter new product name:", product.productName);
    if (updatedName) {
      try {
        await updateProduct(product.id, { ...product, productName: updatedName });
        alert("Product updated successfully!");
        fetchProducts(); // Refresh product list
      } catch (error) {
        alert("Failed to update product. Please try again.");
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
        alert("Product deleted successfully!");
        fetchProducts(); // Refresh product list
      } catch (error) {
        alert("Failed to delete product. Please try again.");
      }
    }
  };

  const { isLoggedIn } = useAuth();

  return (
    <div className="mt-8">
      <h2 className="text-[23px] font-[Roboto] font-medium mb-4">List Product</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">No</th>
            <th className="border border-gray-300 px-4 py-2">Product Image</th>
            <th className="border border-gray-300 px-4 py-2">Product Name</th>
            <th className="border border-gray-300 px-4 py-2">Product Category</th>
            <th className="border border-gray-300 px-4 py-2">Product Freshness</th>
            <th className="border border-gray-300 px-4 py-2">Product Price</th>
            <th className="border border-gray-300 px-20 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 px-4 py-2">{product.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                {product.productImage && (
                  <img src={product.productImage} alt={product.productName} className="w-16 h-16 object-cover" />
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">{product.productName}</td>
              <td className="border border-gray-300 px-4 py-2">{product.productCategory}</td>
              <td className="border border-gray-300 px-4 py-2">{product.productFreshness}</td>
              <td className="border border-gray-300 px-4 py-2">${product.productPrice}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link to={`/product/${product.id}`}>
                  <button className="bg-blue-600 text-white px-2 py-1 rounded mr-2">
                    View
                  </button>
                </Link>
                {isLoggedIn && (
                  <>
                    <button
                      className="bg-green-600 text-white px-2 py-1 rounded mr-2"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
                 </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}