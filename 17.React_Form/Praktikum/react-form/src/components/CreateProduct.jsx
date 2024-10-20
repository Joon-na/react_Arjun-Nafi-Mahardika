import React, { useState } from "react";
import article from "../data/article";
import ProductTable from "./ProductTable";

export default function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [error, setError] = useState({
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: "",
    productImage: "",
  });

  const [language, setLanguage] = useState("en");
  const [products, setProducts] = useState([]);

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "id" : "en"));
  };

  const validateProductName = (value) => {
    const regex = /^[a-zA-Z0-9\s]{3,25}$/;
    if (!regex.test(value)) {
      setError((prev) => ({
        ...prev,
        productName: "Product Name must be 3-25 alphanumeric characters.",
      }));
    } else {
      setError((prev) => ({ ...prev, productName: "" }));
    }
    setProductName(value);
  };

  const validateProductCategory = (value) => {
    const regex = /^(Cat1|Cat2)$/;
    if (!regex.test(value)) {
      setError((prev) => ({
        ...prev,
        productCategory: "Please select a valid category.",
      }));
    } else {
      setError((prev) => ({ ...prev, productCategory: "" }));
    }
    setProductCategory(value);
  };

  const validateProductFreshness = (value) => {
    const validOptions = ["Brand New", "Second Hand", "Refurbished"];
    if (!validOptions.includes(value)) {
      setError((prev) => ({
        ...prev,
        productFreshness: "Please select a valid product freshness.",
      }));
    } else {
      setError((prev) => ({ ...prev, productFreshness: "" }));
    }
    setProductFreshness(value);
  };

  const validateProductPrice = (value) => {
    const regex = /^\d+(\.\d{1,2})?$/;
    if (!regex.test(value)) {
      setError((prev) => ({
        ...prev,
        productPrice: "Please enter a valid price (e.g., 10.99).",
      }));
    } else {
      setError((prev) => ({ ...prev, productPrice: "" }));
    }
    setProductPrice(value);
  };

  const validateProductImage = (file) => {
    if (!file) {
      setError((prev) => ({
        ...prev,
        productImage: "Please select an image file.",
      }));
      return false;
    }

    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(file.type)) {
      setError((prev) => ({
        ...prev,
        productImage: "Please select a valid image file (JPEG, PNG, or GIF).",
      }));
      return false;
    }

    if (file.size > 5 * 1024 * 1024) {
      // 5MB limit
      setError((prev) => ({
        ...prev,
        productImage: "Image size should not exceed 5MB.",
      }));
      return false;
    }

    setError((prev) => ({ ...prev, productImage: "" }));
    return true;
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && validateProductImage(file)) {
      setProductImage(file);
    } else {
      setProductImage(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let hasError = false;

    if (!productName || error.productName) {
      alert("Please enter a valid product name.");
      hasError = true;
    }

    if (!productCategory || error.productCategory) {
      alert("Please select a valid product category.");
      hasError = true;
    }

    if (!productFreshness || error.productFreshness) {
      alert("Please select a valid product freshness.");
      hasError = true;
    }

    if (!productPrice || error.productPrice) {
      alert("Please enter a valid price.");
      hasError = true;
    }

    if (!productImage || error.productImage) {
      alert("Please select a valid image for the product.");
      hasError = true;
    }

    if (hasError) return;

    const newProduct = {
      id: products.length + 1,
      productName,
      productCategory,
      productFreshness,
      productPrice,
      productImage: URL.createObjectURL(productImage),
    };

    setProducts([...products, newProduct]);

    setProductName("");
    setProductCategory("");
    setProductFreshness("");
    setProductPrice("");
    setProductImage(null);
    setError({
      productName: "",
      productCategory: "",
      productFreshness: "",
      productPrice: "",
      productImage: "",
    });

    alert("Product added successfully!");
  };

  const handleEdit = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    if (productToEdit) {
      setProductName(productToEdit.productName);
      setProductCategory(productToEdit.productCategory);
      setProductFreshness(productToEdit.productFreshness);
      setProductPrice(productToEdit.productPrice);
      // Note: We can't set the image back to the file input
    }
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  return (
    <>
      <div>
        <main className="container mx-auto px-6 py-8 md:max-w-[936px]">
          <div>
            <div className="icon flex justify-center mt-[48px]">
              <img
                src="../src/assets/bootstrap-logo.svg"
                alt="bootstrap-logo"
              />
            </div>
            <h1 className="mt-[23px] text-[#212529] text-center font-Roboto text-[31px] not-italic font-medium leading-[38.4px]">
              {language === "en" ? article.title.en : article.title.id}
            </h1>
            <p className="mt-[8.39px] mb-4 text-[#212529] text-center font-Roboto text-[20px] not-italic font-light leading-[30px]">
              {language === "en"
                ? article.description.en
                : article.description.id}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            id="productForm"
            className="px-[140px] mt-12"
          >
            <h1 className="items-start font-[Roboto] text-[23px] not-italic font-medium leading-[28.8px] mb-4">
              Detail Product
            </h1>

            {/* Product Name */}
            <div>
              <div className="mb-[9.5px]">
                <label className="mb-4" htmlFor="product-name">
                  Product name :
                </label>
                <br />
              </div>
              <input
                type="text"
                id="product-name"
                name="product-name"
                className={`rounded-[4px] border-[1px] border-[solid] ${
                  error.productName ? "border-red-500" : "border-[#CED4DA]"
                } bg-[#FFF]`}
                value={productName}
                onChange={(e) => validateProductName(e.target.value)}
                required=""
              />
              <br />
              {error.productName && (
                <span className="text-red-500">{error.productName}</span>
              )}
              <br />
            </div>

            {/* Product Category */}
            <div className="mb-[9.5px]">
              <label htmlFor="product-category">Product Category :</label>
              <br />
              <select
                className={`rounded-[4px] border-[1px] border-[solid] ${
                  error.productCategory ? "border-red-500" : "border-[#CED4DA]"
                } bg-[#FFF]`}
                id="product-category"
                name="product-category"
                value={productCategory}
                onChange={(e) => validateProductCategory(e.target.value)}
                required=""
              >
                <option value="">Select a category</option>
                <option value="Cat1">First Category</option>
                <option value="Cat2">Second Category</option>
              </select>
              <br />
              {error.productCategory && (
                <span className="text-red-500">{error.productCategory}</span>
              )}
              <br />
            </div>

              {/* Image of Product */}
             <div className="mb-[11.69px]">
              <label htmlFor="product-image">Image of Product</label>
              <br />
              <input
                type="file"
                id="product-image"
                name="product-image"
                className={`rounded-[4px] border-[1px] border-[solid] ${
                  error.productImage ? "border-red-500" : "border-[#CED4DA]"
                } bg-[#FFF]`}
                onChange={handleImageChange}
                accept="image/*"
                required=""
              />
              {error.productImage && (
                <span className="text-red-500">{error.productImage}</span>
              )}
            </div>

               {/* Product Freshness */}
               <div className="mt-[35px] mb-[5.5px]">
              <label>Product Freshness :</label>
              <br />
              <input
                type="radio"
                id="brand-new"
                name="product-freshness"
                value="Brand New"
                checked={productFreshness === "Brand New"}
                onChange={(e) => validateProductFreshness(e.target.value)}
                required=""
              />
              <label htmlFor="brand-new">Brand New</label>
              <br />
              <input
                type="radio"
                id="second-hand"
                name="product-freshness"
                value="Second Hand"
                checked={productFreshness === "Second Hand"}
                onChange={(e) => validateProductFreshness(e.target.value)}
              />
              <label htmlFor="second-hand">Second Hand</label>
              <br />
              <input
                type="radio"
                id="refurbished"
                name="product-freshness"
                value="Refurbished"
                checked={productFreshness === "Refurbished"}
                onChange={(e) => validateProductFreshness(e.target.value)}
              />
              <label htmlFor="refurbished">Refurbished</label>
              <br />
              {error.productFreshness && (
                <span className="text-red-500">{error.productFreshness}</span>
              )}
            </div>

            {/* Product Price */}
            <div className="mt-[35px] mb-[11.69px]">
              <label htmlFor="product-price">Product Price :</label>
              <br />
              <input
                type="text"
                id="product-price"
                name="product-price"
                className={`rounded-[4px] border-[1px] border-[solid] ${
                  error.productPrice ? "border-red-500" : "border-[#CED4DA]"
                } bg-[#FFF]`}
                value={productPrice}
                onChange={(e) => validateProductPrice(e.target.value)}
                required=""
              />
              <br />
              {error.productPrice && (
                <span className="text-red-500">{error.productPrice}</span>
              )}
            </div>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>

          {/* Tabel Produk */}
          <ProductTable
            products={products}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </main>
      </div>
    </>
  );
}
