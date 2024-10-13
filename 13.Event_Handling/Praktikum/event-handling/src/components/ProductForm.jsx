import React from "react";
import { useState } from "react";
import article from "../data/article";

export default function ProductForm() {
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`${randomNumber}`);
  };

  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [error, setError] = useState({
    productName: "",
    productCategory: "",
    productPrice: "",
  });

  const [language, setLanguage] = useState("en");

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "id" : "en")); // Ganti bahasa
  };

  const handleProductNameChange = (event) => {
    const value = event.target.value;

    // Validasi untuk tidak melebihi 25 karakter
    if (value.length > 25) {
      alert("Product Name must not exceed 25 characters.");
      setProductName(value.slice(0, 25)); // Batasi input ke 25 karakter
      return;
    }

    // Validasi untuk tidak melebihi 10 karakter
    if (value.length > 10) {
      setError((prev) => ({
        ...prev,
        productName: "Product Name must not exceed 10 characters.",
      }));
    } else {
      setError((prev) => ({ ...prev, productName: "" }));
    }

    setProductName(value); // Update state
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setProductCategory(value);
    setError((prev) => ({
      ...prev,
      productCategory: value ? "" : "Please select a category.",
    }));
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setProductPrice(value);
    setError((prev) => ({
      ...prev,
      productPrice: value ? "" : "Please enter a valid price.",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let hasError = false;

    // Validasi saat submit
    if (!productName) {
      alert("Please enter a valid product name.");
      setError((prev) => ({
        ...prev,
        productName: "Product Name cannot be empty.",
      }));
      hasError = true;
    }

    if (!productCategory) {
      alert("Please select a product category.");
      setError((prev) => ({
        ...prev,
        productCategory: "Please select a category.",
      }));
      hasError = true;
    }

    if (!productPrice) {
      alert("Please enter a valid price.");
      setError((prev) => ({ ...prev, productPrice: "Price cannot be empty." }));
      hasError = true;
    }

    if (hasError) return;

    // Jika validasi lulus, tampilkan alert sukses
    alert("Product added successfully!");

    // Reset Form
    setProductName("");
    setProductCategory("");
    setProductPrice("");
    setError({ productName: "", productCategory: "", productPrice: "" });
  };

  return (
    <>
      <div>
        {/* Tombol Generate Random Number */}
        <div className="container mx-auto px-6 py-8 md:max-w-[936px]">
          <div className="flex justify-center mt-[20px]">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleClick}
            >
              Generate Random Number
            </button>
            {/* Tombol Ganti Bahasa */}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleLanguageToggle}
            >
              {language === "en" ? "Switch to Indonesian" : "Switch to English"}
            </button>
          </div>
        </div>

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
                minLength={6}
                maxLength={50}
                onChange={handleProductNameChange}
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
                onChange={handleCategoryChange}
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
                className={`rounded-[4px] border-[1px] border-[solid] border-[#CED4DA] bg-[#FFF]`}
                required=""
              />
            </div>

            {/* Product Freshness */}
            <div className="mt-[35px] mb-[5.5px]">
              <label>Product Freshness :</label>
              <br />
              <input
                type="radio"
                id="brand-new"
                name="product-freshness"
                defaultValue="Brand New"
                required=""
              />
              <label htmlFor="brand-new">Brand New</label>
              <br />
              <input
                type="radio"
                id="second-hand"
                name="product-freshness"
                defaultValue="Second Hand"
              />
              <label htmlFor="second-hand">Second Hand</label>
              <br />
              <input
                type="radio"
                id="refurbished"
                name="product-freshness"
                defaultValue="Refurbished"
              />
              <label htmlFor="refurbished">Refurbished</label>
              <br />
            </div>

            {/* Additional Description */}
            <div className="mb-[10.69px]">
              <label htmlFor="additional-description">
                Additional Description
              </label>
            </div>
            <textarea
              className={`rounded-[4px] border-[1px] border-[solid] border-[#CED4DA] bg-[#FFF] w-[603px] h-[116px] pl-[12px] pr-[12px] py-[5px] items-start`}
              id="additional-description"
              name="additional-description"
              rows={4}
              cols={30}
              required=""
              defaultValue={""}
            />
            <br />
            <br />

            {/* Product Price */}
            <div>
              <label htmlFor="product-price">Product price :</label>
              <br />
              <label>$</label>
              <input
                type="number"
                id="product-price"
                name="product-price"
                className={`rounded-[4px] border-[1px] border-[solid] border-[#CED4DA] bg-[#FFF] ${
                  error.productPrice ? "border-red-500" : "border-[#CED4DA]"
                }`}
                min={0}
                onChange={handlePriceChange}
                required=""
              />
              {error.productPrice && (
                <span className="text-red-500">{error.productPrice}</span>
              )}
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="rounded-[4px] border-[1px] text-[#FFF] border-[#0D6EFD] bg-[#0D6EFD] pl-[209.592px] pr-[209.408px] py-[9px]"
              >
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
