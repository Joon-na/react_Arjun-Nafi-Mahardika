export function validateProductName(value) {
  if (!value) {
    return {
      isValid: false,
      error: "Product Name is required.",
    };
  }

  const regex = /^[a-zA-Z0-9\s]{3,25}$/;
  if (!regex.test(value)) {
    return {
      isValid: false,
      error: "Product Name must be 3-25 alphanumeric characters.",
    };
  }

  return {
    isValid: true,
    error: "",
  };
}

export function validateProductCategory(value) {
  const regex = /^(Cat1|Cat2)$/;
  if (!regex.test(value)) {
    return {
      isValid: false,
      error: "Please select a valid category.",
    };
  }
  return {
    isValid: true,
    error: "",
  };
}

export function validateProductFreshness(value) {
  const validOptions = ["Brand New", "Second Hand", "Refurbished"];
  if (!validOptions.includes(value)) {
    return {
      isValid: false,
      error: "Please select a valid product freshness.",
    };
  }
  return {
    isValid: true,
    error: "",
  };
}

export function validateProductPrice(value) {
  const regex = /^\d+(\.\d{1,2})?$/;
  if (!regex.test(value)) {
    return {
      isValid: false,
      error: "Please enter a valid price (e.g., 10.99).",
    };
  }
  return {
    isValid: true,
    error: "",
  };
}

export function validateProductImage(file) {
  if (!file) {
    return {
      isValid: false,
      error: "Please select an image file.",
    };
  }
  return {
    isValid: true,
    error: "",
  };
}

export async function convertCurrency(amount, fromCurrency, toCurrency) {
  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();

    const convertedAmount = amount * data.rates[toCurrency];
    return convertedAmount;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
