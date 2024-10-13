import React from "react";

export default function ProductForm() {
  return (
    <>
      <main className="container mx-auto px-6 py-8 md:max-w-[936px]">
        <div>
          <div className="icon flex justify-center mt-[48px]">
            <img src="../src/assets/bootstrap-logo.svg" alt="bootstrap-logo" />
          </div>
          <h1 className="mt-[23px] text-[#212529] text-center font-Roboto text-[31px] not-italic font-medium leading-[38.4px]">
            Create Product
          </h1>
          <p className="mt-[8.39px] mb-4 text-[#212529] text-center font-Roboto text-[20px] not-italic font-light leading-[30px]">
            Below is an example form built entirely with Bootstrap's form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing{" "}
          </p>
        </div>
        <form id="productForm" className="px-[140px] mt-12">
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
              className="rounded-[4px] border-[1px] border-[solid] border-[#CED4DA] bg-[#FFF]"
              minLength={6}
              maxLength={50}
              required=""
            />
            <br />
            <br />
          </div>
          {/* Product Category */}
          <div className="mb-[9.5px]">
            <label htmlFor="product-category">Product Category :</label>
            <br />
          </div>
          <select
            className="rounded-[4px] border-[1px] border-[solid] border-[#CED4DA] bg-[#FFF]"
            id="product-category"
            name="product-category"
            required=""
          >
            <option value="" />
            <option value="Cat1">First Category</option>
            <option value="Cat2">Second Category</option>
          </select>
          <br />
          <br />
          {/* Image of Product */}
          <div className="mb-[11.69px]">
            <label htmlFor="product-image">Image of Product</label>
            <br />
            <input
              type="file"
              id="product-image"
              name="product-image"
              className="rounded-[4px] border-[1px] border-[#CED4DA] bg-[#FFF]"
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
            className="rounded-[4px] border-[1px] border-[solid] border-[#CED4DA] bg-[#FFF] w-[603px] h-[116px] pl-[12px] pr-[12px] py-[5px] items-start"
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
              className="rounded-[4px] border-[1px] border-[#CED4DA] bg-[#FFF]"
              min={0}
              required=""
            />
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
    </>
  );
}
