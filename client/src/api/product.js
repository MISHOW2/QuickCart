import axios from "axios";

const url = "http://localhost:5000/api/products";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(url);
    const products = response.data.map((product) => ({
      ...product,
      picture: product.picture.startsWith("http")
        ? product.picture
        : `http://localhost:5000/${product.picture}`,
    }));
    console.log("Fetched Products:", products);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

export const addToCart = async (productId) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/cart",
      { id: productId },
      { headers: { "Content-Type": "application/json" } } // Ensure JSON format
    );
    return response.data;
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return null;
  }
};


