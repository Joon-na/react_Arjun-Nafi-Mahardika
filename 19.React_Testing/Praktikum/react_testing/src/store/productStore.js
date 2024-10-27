import { create } from "zustand";
import { persist } from "zustand/middleware";

const productStore = create(
  persist(
    (set, get) => ({
      products: [
        {
          id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
          productName: "John",
          productCategory: "Doe",
          productFreshness: "Doe",
          productPrice: "Doe",
          image: "Doe",
          additionalDescription: "Doe",
        },
      ],
      error: null,
      
      addProduct: (newProduct) => {
        const { products } = get();
        const productExists = products.find((p) => p.productName === newProduct.productName);

        if (productExists) {
          set({ error: "Product Name already exists" });
        } else {
          set((state) => ({
            products: [...state.products, newProduct],
            error: null,
          }));
        }
      },

      updateProduct: (updatedProduct) =>
        set((state) => ({
          products: state.products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          ),
        })),

      deleteProduct: (productId) =>
        set((state) => ({
          products: state.products.filter((product) => product.id !== productId),
        })),
    }),
    {
      name: "product-storage", // Nama penyimpanan persist di localStorage
    }
  )
);

export default productStore;
