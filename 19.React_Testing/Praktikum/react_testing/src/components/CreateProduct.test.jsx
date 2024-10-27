import {
  validateProductName,
  validateProductCategory,
  validateProductFreshness,
  validateProductPrice,
  validateProductImage,
  convertCurrency,
} from "../utils/utils.js";

// Test untuk memastikan validasi semua form field tidak boleh kosong
test("All form fields should not be empty", () => {
  const productNameResult = validateProductName("");
  const productCategoryResult = validateProductCategory("");
  const productFreshnessResult = validateProductFreshness("");
  const productPriceResult = validateProductPrice("");
  const productImageResult = validateProductImage(null);

  expect(productNameResult.isValid).toBe(false);
  expect(productCategoryResult.isValid).toBe(false);
  expect(productFreshnessResult.isValid).toBe(false);
  expect(productPriceResult.isValid).toBe(false);
  expect(productImageResult.isValid).toBe(false);
});

// Test untuk memastikan bahwa form input Product Name dapat menerima input teks dan menampilkannya di halaman
test("Product Name input should accept valid text and display it", () => {
  const productName = "Valid Product";
  // Simulasikan input ke dalam form
  const result = validateProductName(productName);
  expect(result.isValid).toBe(true);
  expect(result.error).toBe("");
});

// Test untuk memastikan validasi form input yang benar
test("validateProductName should fail for empty input", () => {
  const result = validateProductName("");
  expect(result.isValid).toBe(false);
  expect(result.error).toBe("Product Name is required.");
});

test("validateProductName should fail for invalid characters", () => {
  const result = validateProductName("@rjun#123");
  expect(result.isValid).toBe(false);
  expect(result.error).toBe(
    "Product Name must be 3-25 alphanumeric characters."
  );
});

test("convertCurrency should convert amounts correctly", async () => {
  const convertedAmount = await convertCurrency(100, "USD", "IDR");
  expect(convertedAmount).toBeDefined();
  expect(typeof convertedAmount).toBe("number");
});
