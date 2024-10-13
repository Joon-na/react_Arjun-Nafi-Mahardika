import React from "react";

export default function ProductTable({ products, handleEdit, handleDelete }) {
  return (
    <div className="mt-8">
      <h2 className="text-[23px] font-[Roboto] font-medium mb-4">List Product</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">No</th>
            <th className="border border-gray-300 px-4 py-2">Product Name</th>
            <th className="border border-gray-300 px-4 py-2">Product Category</th>
            <th className="border border-gray-300 px-4 py-2">Product Freshness</th>
            <th className="border border-gray-300 px-4 py-2">Product Price</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{product.id}</td>
              <td className="border border-gray-300 px-4 py-2">{product.productName}</td>
              <td className="border border-gray-300 px-4 py-2">{product.productCategory}</td>
              <td className="border border-gray-300 px-4 py-2">{product.productFreshness}</td>
              <td className="border border-gray-300 px-4 py-2">${product.productPrice}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-green-600 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleEdit(product.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
